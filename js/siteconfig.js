/* =========================================================
   H&A Lingerie — Site Config Loader  v3.0
   SOURCE DE VÉRITÉ : api/index.php (PHP sur Hostinger)
   Le localStorage n'est qu'un cache hors-ligne de secours.
   L'API a TOUJOURS la priorité absolue quand elle répond.
   ========================================================= */
;(function () {
  'use strict';

  const API = 'api/index.php';

  async function loadAndApply() {
    const lang = localStorage.getItem('ha_lang') || 'fr';
    let data = null;

    /* ─────────────────────────────────────────────────────
       1. ESSAI API — source principale
    ───────────────────────────────────────────────────── */
    try {
      const res = await fetch(API + '?t=' + Date.now(), { cache: 'no-store' });
      if (res.ok) {
        data = await res.json();
        /* Mettre en cache pour le mode hors-ligne UNIQUEMENT */
        try { localStorage.setItem('ha_site_cache', JSON.stringify(data)); } catch(_) {}
        /* Synchroniser le cache produits (utilisé comme fallback uniquement) */
        if (Array.isArray(data.products) && data.products.length) {
          try { localStorage.setItem('ha_products_db', JSON.stringify(data.products)); } catch(_) {}
        }
      }
    } catch (_) { /* API indisponible — dev local sans PHP */ }

    /* ─────────────────────────────────────────────────────
       2. FALLBACK hors-ligne uniquement si l'API n'a pas répondu
    ───────────────────────────────────────────────────── */
    if (!data) {
      try {
        const cached = localStorage.getItem('ha_site_cache');
        if (cached) data = JSON.parse(cached);
      } catch (_) {}
    }

    /* ─────────────────────────────────────────────────────
       3. Dernier recours : ha_products_db seul
       (cas : API down + pas de cache mais produits sauvegardés)
    ───────────────────────────────────────────────────── */
    if (!data) {
      try {
        const dbp = localStorage.getItem('ha_products_db');
        if (dbp) {
          const p = JSON.parse(dbp);
          if (Array.isArray(p) && p.length) data = { config: {}, announce: [], products: p };
        }
      } catch (_) {}
    }

    if (!data) return; /* Pas de données disponibles */

    const cfg      = data.config  || {};
    const announce = data.announce || [];

    /* ── 1. Bandeau d'annonce ── */
    if (announce.length) {
      const spans = document.querySelectorAll('.announce-slider span');
      const half  = Math.floor(spans.length / 2);
      announce.forEach((msg, i) => {
        [i, i + half].forEach(idx => {
          if (!spans[idx]) return;
          spans[idx].setAttribute('data-fr', msg.fr || '');
          spans[idx].setAttribute('data-en', msg.en || msg.fr || '');
          spans[idx].textContent = lang === 'en' ? (msg.en || msg.fr) : msg.fr;
        });
      });
    }

    /* ── 2. Titre hero ── */
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && cfg.hero_title_fr) {
      heroTitle.setAttribute('data-fr', cfg.hero_title_fr);
      heroTitle.setAttribute('data-en', cfg.hero_title_en || cfg.hero_title_fr);
      heroTitle.innerHTML = (lang === 'en'
        ? (cfg.hero_title_en || cfg.hero_title_fr)
        : cfg.hero_title_fr).replace(/\n/g, '<br>');
    }

    /* ── 3. Bouton hero ── */
    const heroBtn = document.querySelector('.hero-content .btn');
    if (heroBtn && cfg.hero_btn_fr) {
      heroBtn.setAttribute('data-fr', cfg.hero_btn_fr);
      heroBtn.setAttribute('data-en', cfg.hero_btn_en || cfg.hero_btn_fr);
      heroBtn.textContent = lang === 'en'
        ? (cfg.hero_btn_en || cfg.hero_btn_fr)
        : cfg.hero_btn_fr;
    }

    /* ── 4. Média hero (vidéo OU photo) ── */
    const heroVideo = document.getElementById('heroVideo') || document.querySelector('.hero-video');
    const heroImg   = document.getElementById('heroImg');
    if (cfg.hero_media_type === 'photo' && cfg.hero_photo) {
      if (heroVideo) heroVideo.style.display = 'none';
      if (heroImg)  { heroImg.src = cfg.hero_photo; heroImg.style.display = 'block'; }
    } else if (cfg.hero_video) {
      if (heroImg) heroImg.style.display = 'none';
      if (heroVideo) heroVideo.style.display = 'block';
      const src = heroVideo?.querySelector('source') || heroVideo;
      if (src && src.getAttribute('src') !== cfg.hero_video) {
        src.src = cfg.hero_video;
        heroVideo?.load?.();
      }
    }

    /* ── 5. Images ── */
    [['img_editorial','haImgEditorial'],['img_swimwear','haImgSwimwear'],['img_brand','haImgBrand']]
      .forEach(([key, id]) => {
        if (!cfg[key]) return;
        const el = document.getElementById(id);
        if (el && el.getAttribute('src') !== cfg[key]) el.src = cfg[key];
      });

    /* ── 6. Liens WhatsApp + téléphones + email ── */
    if (cfg.wa) {
      const wa = cfg.wa;
      /* Mettre à jour tous les liens wa.me dans la page */
      document.querySelectorAll('a[href*="wa.me/"]').forEach(link => {
        link.href = link.href.replace(/wa\.me\/\d+/, 'wa.me/' + wa);
      });
      /* Mettre à jour les liens tel: */
      document.querySelectorAll('a[href^="tel:"]').forEach(a => {
        a.href = 'tel:+' + wa;
      });
      /* Mettre à jour le texte du numéro affiché (éléments marqués data-phone) */
      const fmt = n => n.length === 12 && n.startsWith('212')
        ? '+212 ' + n[3] + ' ' + n.slice(4,6) + ' ' + n.slice(6,8) + ' ' + n.slice(8,10) + ' ' + n.slice(10,12)
        : '+' + n;
      document.querySelectorAll('[data-phone]').forEach(el => { el.textContent = fmt(wa); });
      /* Mise à jour du cache local pour chatbot.js, product.js, main.js */
      try { localStorage.setItem('ha_wa', wa); } catch(_) {}
    }
    if (cfg.email) {
      document.querySelectorAll('[data-email]').forEach(el => {
        el.textContent = cfg.email;
        if (el.tagName === 'A') el.href = 'mailto:' + cfg.email;
      });
      try { localStorage.setItem('ha_email', cfg.email); } catch(_) {}
    }

    /* ── 7. Produits — toujours depuis l'API ── */
    if (Array.isArray(data.products) && data.products.length && window.PRODUCTS) {
      PRODUCTS.length = 0;
      data.products.forEach(p => PRODUCTS.push(p));
      document.dispatchEvent(new CustomEvent('ha:productsReloaded'));
    }

    /* ── 8. Config chatbot & promo (mise à jour du cache local pour les scripts) ── */
    try {
      localStorage.setItem('ha_chatbot_on',  (cfg.chatbot_on === false || cfg.chatbot_on === '0') ? '0' : '1');
      if (cfg.chatbot_msg) localStorage.setItem('ha_chatbot_msg', cfg.chatbot_msg);
      if (cfg.promo_code)  localStorage.setItem('ha_promo_code',  cfg.promo_code);
      if (cfg.wa)          localStorage.setItem('ha_wa',          cfg.wa);
      /* RIB bancaire */
      if (cfg.rib || cfg.iban || cfg.bank) {
        localStorage.setItem('ha_rib', JSON.stringify({
          bank: cfg.bank || '', name: cfg.bank_name || '',
          rib:  cfg.rib  || '', iban: cfg.iban || '',
          note: cfg.payment_note || '',
          cash:     cfg.pay_cash     !== false,
          virement: cfg.pay_virement !== false,
        }));
      }
    } catch(_) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAndApply);
  } else {
    loadAndApply();
  }

  document.addEventListener('ha:langChanged', loadAndApply);

})();
