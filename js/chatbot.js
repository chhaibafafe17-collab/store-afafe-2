/* =========================================================
   H&A Lingerie — Chatbot  v5.0
   Réponses internes · WhatsApp en option · Panneau latéral
   ========================================================= */
;(function () {
  'use strict';

  const WA = localStorage.getItem('ha_wa')         || '212600000000';
  const ON = localStorage.getItem('ha_chatbot_on') !== '0';
  if (!ON) return;

  const lang  = () => localStorage.getItem('ha_lang') || 'fr';
  /* Code promo lu dynamiquement à chaque fois → synchronisé avec le dashboard */
  const getPC = () => localStorage.getItem('ha_promo_code') || 'BIENVENUE';
  const waUrl = msg => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

  /* ─── Réponses du bot ───────────────────────────────── */
  const BOT = {
    fr: {
      welcome: `Bonjour 👋 Je suis l'assistante H&A Lingerie.\nComment puis-je vous aider aujourd'hui ?`,
      actions: [
        { icon:'🛍️', label:'Commander un article',  key:'order'  },
        { icon:'📏', label:'Guide des tailles',       key:'sizes'  },
        { icon:'✨', label:'Nos nouveautés',          key:'new'    },
        { icon:'🎁', label:'Code promo',              key:'promo'  }, /* label mis à jour dynamiquement */
        { icon:'🚚', label:'Suivre ma commande',      key:'track'  },
      ],
      responses: {
        order: {
          /* Fix: "Confirmer ma commande" au lieu de "Commander via WhatsApp" */
          text: `Pour passer commande c'est simple 🛍️\n\n1. Ajoutez vos articles au panier\n2. Cliquez sur **Confirmer ma commande**\n3. Remplissez vos coordonnées de livraison\n4. C'est tout ! Nous vous confirmons sous 2h.`,
          link: { text:'Voir nos collections →', url:'category?cat=lingerie' },
        },
        sizes: {
          text: `📏 **Guide des tailles H&A**\n\n**Soutiens-gorge :**\nMesurez sous la poitrine (= taille dos) et autour des seins.\nDifférence → A:10cm · B:12cm · C:14cm · D:16cm\n\n**Culottes & Shorties :**\nS = 36-38 · M = 38-40 · L = 40-42 · XL = 42-44 · XXL = 44-46\n\n**Bodies & Combinaisons :**\nRéférez-vous à votre taille habituelle. En cas de doute prenez la taille au-dessus.`,
        },
        new: {
          text: `✨ **Nos nouveautés du moment**\n\nDentelles raffinées, satins doux, kimonos luxueux — chaque semaine de nouvelles pièces arrivent.\n\n🏷️ Livraison 2-4 jours · partout au Maroc\n💳 Cash à la livraison ou virement bancaire`,
          link: { text:'Voir toutes les nouveautés →', url:'category?cat=nouveaux-arrivages' },
        },
        promo: null, /* généré dynamiquement avec getPC() */
        track: {
          text: `📦 **Suivi de commande**\n\nPour suivre votre colis, envoyez-nous :\n• Votre **nom complet**\n• La **date de votre commande**\n\nNotre équipe vous répond en moins de 2h avec le statut exact de votre livraison.`,
        },
        default: {
          text: `Merci pour votre message ! 😊\n\nNotre équipe vous répondra très bientôt. En attendant, n'hésitez pas à explorer nos collections.`,
        },
      },
      ph: 'Écrivez votre message…',
    },
    en: {
      welcome: `Hello 👋 I'm the H&A Lingerie assistant.\nHow can I help you today?`,
      actions: [
        { icon:'🛍️', label:'Place an order',     key:'order'  },
        { icon:'📏', label:'Size guide',          key:'sizes'  },
        { icon:'✨', label:'New arrivals',        key:'new'    },
        { icon:'🎁', label:'Promo code',          key:'promo'  },
        { icon:'🚚', label:'Track my order',      key:'track'  },
      ],
      responses: {
        order: {
          text: `Ordering is simple 🛍️\n\n1. Add items to your cart\n2. Click **Confirm my order**\n3. Fill in your delivery details\n4. Done! We confirm within 2h.`,
          link: { text:'Browse collections →', url:'category?cat=lingerie' },
        },
        sizes: {
          text: `📏 **H&A Size Guide**\n\n**Bras:**\nMeasure underbust (= band size) and around bust.\nDifference → A:10cm · B:12cm · C:14cm · D:16cm\n\n**Underwear & Shorties:**\nS = 36-38 · M = 38-40 · L = 40-42 · XL = 42-44 · XXL = 44-46\n\nWhen in doubt, go one size up.`,
        },
        new: {
          text: `✨ **What's new at H&A**\n\nRefined lace, soft satin, luxurious kimonos — new pieces arrive every week.\n\n🏷️ Delivery 2-4 days · all Morocco\n💳 Cash on delivery or bank transfer`,
          link: { text:'View all new arrivals →', url:'category?cat=nouveaux-arrivages' },
        },
        promo: null,
        track: {
          text: `📦 **Order tracking**\n\nTo track your parcel, send us:\n• Your **full name**\n• Your **order date**\n\nOur team replies within 2h with your exact delivery status.`,
        },
        default: {
          text: `Thank you for your message! 😊\n\nOur team will get back to you very soon. Feel free to browse our collections in the meantime.`,
        },
      },
      ph: 'Write your message…',
    },
  };

  const M = () => BOT[lang()] || BOT.fr;

  /* ─── CSS ─────────────────────────────────────────────── */
  const CSS = `
#_hcb *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
#_hcb{font-family:'Jost',system-ui,sans-serif}

/* Bouton — FIXE en bas à droite, ne couvre pas le bouton Découvrir */
#_hcbBtn{
  position:fixed;bottom:22px;right:22px;z-index:10001;
  max-width:180px;
  display:flex;align-items:center;gap:8px;
  padding:0 14px 0 12px;height:40px;border-radius:20px;
  background:#fff;border:1.5px solid #e8e2da;cursor:pointer;
  box-shadow:0 6px 24px rgba(0,0,0,.11),0 2px 6px rgba(0,0,0,.07);
  transition:transform .2s,box-shadow .2s,border-color .2s;overflow:visible;
}
#_hcbBtn:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgba(0,0,0,.14);border-color:#b8935a}
._hb-logo{font-family:'Cormorant Garamond',Georgia,serif;font-size:14px;color:#0d0d0d;letter-spacing:.1em}
._hb-logo b{color:#b8935a;font-weight:400}
._hb-sep{width:1px;height:13px;background:#e0d9d1;flex-shrink:0}
._hb-lbl{font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#7a7169}
._hb-dot{width:6px;height:6px;border-radius:50%;background:#22c55e;flex-shrink:0;
  animation:_hcbPulse 2s ease-in-out infinite}
@keyframes _hcbPulse{0%{box-shadow:0 0 0 0 rgba(34,197,94,.4)}60%{box-shadow:0 0 0 6px rgba(34,197,94,0)}100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}}
#_hcbBadge{position:absolute;top:-8px;right:-8px;width:20px;height:20px;border-radius:50%;
  background:#ef4444;color:#fff;font-size:9px;font-weight:700;
  display:flex;align-items:center;justify-content:center;border:2.5px solid #fff}

/* Overlay léger — popup compact ne couvre pas l'écran */
#_hcbOv{display:none}

/* Panneau flottant compact — s'ouvre à GAUCHE au-dessus du bouton */
#_hcbPanel{
  position:fixed;
  bottom:74px;   /* au-dessus du bouton */
  right:22px;    /* aligné avec le bouton droite */
  z-index:10001;
  width:360px;
  max-width:calc(100vw - 56px);
  max-height:540px;
  background:#f5f2ef;
  display:flex;flex-direction:column;
  border-radius:20px;
  overflow:hidden;
  box-shadow:0 16px 48px rgba(0,0,0,.16),0 4px 16px rgba(0,0,0,.08);
  transform:scale(.88) translateY(16px);
  transform-origin:bottom right;  /* animation depuis le bas droite */
  opacity:0;
  pointer-events:none;
  transition:transform .28s cubic-bezier(.34,1.56,.64,1),opacity .22s ease;
}
#_hcbPanel.on{
  transform:scale(1) translateY(0);
  opacity:1;
  pointer-events:all;
}
@media(max-width:500px){
  #_hcbPanel{left:8px;right:8px;bottom:72px;width:auto;max-width:none;}
  #_hcbBtn{right:14px;bottom:16px;}
}

/* Accent doré */
._hp-acc{height:4px;background:linear-gradient(90deg,#d4aa78,#b8935a 50%,#c9a068);flex-shrink:0;margin-top:0}

/* Header */
._hp-hd{padding:32px 24px 26px;border-bottom:1px solid #ece7e0;display:flex;align-items:center;gap:14px;flex-shrink:0;background:#fff}
._hp-av{width:48px;height:48px;border-radius:14px;flex-shrink:0;
  background:linear-gradient(135deg,#c9a068,#b8935a);
  display:flex;align-items:center;justify-content:center;
  font-family:'Cormorant Garamond',Georgia,serif;font-size:14px;color:#fff;letter-spacing:.08em;
  box-shadow:0 4px 12px rgba(184,147,90,.3)}
._hp-info{flex:1;min-width:0}
._hp-name{font-size:14px;font-weight:600;color:#0d0d0d}
._hp-st{display:flex;align-items:center;gap:5px;margin-top:2px}
._hp-sdot{width:7px;height:7px;border-radius:50%;background:#22c55e;flex-shrink:0}
._hp-stxt{font-size:11px;color:#7a7169}
._hp-cls{width:32px;height:32px;border-radius:9px;background:#f5f2ef;border:none;cursor:pointer;
  color:#7a7169;font-size:13px;display:flex;align-items:center;justify-content:center;
  transition:all .15s;flex-shrink:0}
._hp-cls:hover{background:#ece7e0;color:#0d0d0d}

/* Zone messages */
._hp-msgs{flex:1;overflow-y:auto;padding:22px 18px;display:flex;flex-direction:column;gap:14px;
  scrollbar-width:thin;scrollbar-color:#ece7e0 transparent}
._hp-msgs::-webkit-scrollbar{width:3px}
._hp-msgs::-webkit-scrollbar-thumb{background:#ece7e0;border-radius:2px}

/* Bulles */
._msg{max-width:84%;padding:10px 14px;border-radius:16px;font-size:13px;line-height:1.65;word-break:break-word}
._msg-bot{background:#fff;color:#1c1c1c;align-self:flex-start;border-bottom-left-radius:4px;
  box-shadow:0 1px 3px rgba(0,0,0,.07);white-space:pre-line}
._msg-bot strong{font-weight:600;color:#0d0d0d}
._msg-usr{background:#b8935a;color:#fff;align-self:flex-end;border-bottom-right-radius:4px}

/* Typing */
._typing{display:flex;gap:5px;align-items:center;padding:12px 16px}
._typing span{width:7px;height:7px;border-radius:50%;background:#b8935a;
  animation:_typBlink 1.2s ease-in-out infinite}
._typing span:nth-child(2){animation-delay:.2s}
._typing span:nth-child(3){animation-delay:.4s}
@keyframes _typBlink{0%,80%,100%{opacity:.2;transform:scale(.85)}40%{opacity:1;transform:scale(1)}}

/* Bouton WhatsApp dans le chat */
._wa-btn{display:flex;align-items:center;gap:8px;background:#25d366;color:#fff;
  border-radius:10px;padding:10px 14px;font-size:12.5px;font-weight:600;
  text-decoration:none;align-self:flex-start;max-width:84%;
  transition:background .18s;font-family:'Jost',sans-serif;cursor:pointer;border:none}
._wa-btn:hover{background:#1da851}
._wa-btn svg{width:16px;height:16px;flex-shrink:0}

/* Lien interne */
._int-link{display:inline-flex;align-items:center;gap:6px;background:#faf8f5;
  color:#b8935a;border:1.5px solid #e6e0d8;border-radius:10px;
  padding:8px 14px;font-size:12px;font-weight:500;text-decoration:none;
  align-self:flex-start;transition:border-color .18s,background .18s;font-family:'Jost',sans-serif}
._int-link:hover{border-color:#b8935a;background:#fffbf5}

/* Chips d'actions */
._hp-chips{padding:6px 18px 16px;display:flex;flex-direction:column;gap:9px;flex-shrink:0}
._chip{display:flex;align-items:center;gap:12px;padding:13px 16px;
  border-radius:13px;background:#fff;border:1.5px solid #ece7e0;
  cursor:pointer;font-family:'Jost',sans-serif;font-size:13px;
  transition:border-color .18s,background .18s;text-align:left;width:100%}
._chip:hover{border-color:#b8935a;background:#fffbf5}
._chip-ico{font-size:16px;flex-shrink:0;line-height:1}
._chip-lbl{flex:1;color:#1c1c1c;font-weight:400}

/* Divider label "ou posez votre question" */
._divider{font-size:10.5px;color:#b0a99f;text-align:center;padding:2px 0 6px;letter-spacing:.04em}

/* Pied saisie */
._hp-ft{flex-shrink:0;padding:14px 18px 22px;border-top:1px solid #ece7e0;background:#fff;display:flex;gap:10px}
._hp-in{flex:1;border:1.5px solid #e6e0d8;border-radius:11px;padding:10px 14px;
  font-size:13px;outline:none;background:#faf8f5;font-family:'Jost',sans-serif;color:#0d0d0d;
  transition:border-color .2s,box-shadow .2s}
._hp-in:focus{border-color:#b8935a;box-shadow:0 0 0 3px rgba(184,147,90,.1)}
._hp-snd{width:44px;height:44px;border-radius:11px;
  background:linear-gradient(135deg,#c9a068,#b8935a);border:none;color:#fff;cursor:pointer;
  display:flex;align-items:center;justify-content:center;flex-shrink:0;
  transition:opacity .2s;box-shadow:0 4px 12px rgba(184,147,90,.3)}
._hp-snd:hover{opacity:.85}
._hp-snd svg{width:15px;height:15px}

@media(max-width:500px){
  #_hcbPanel{width:100vw}
  #_hcbBtn{right:14px;bottom:16px;height:46px;padding:0 16px 0 13px;gap:8px}
  ._hb-logo{font-size:15px}
}
  `;

  /* ─── DOM ─────────────────────────────────────────────── */
  const host = document.createElement('div');
  host.id = '_hcb';
  host.innerHTML = `
<style>${CSS}</style>
<button id="_hcbBtn" aria-label="Chat H&A">
  <span class="_hb-logo">H<b>&amp;</b>A</span>
  <span class="_hb-sep"></span>
  <span class="_hb-lbl" id="_hbLbl">Aide</span>
  <span class="_hb-dot"></span>
  <span id="_hcbBadge">1</span>
</button>
<div id="_hcbOv"></div>
<div id="_hcbPanel" role="dialog" aria-modal="true">
  <div class="_hp-acc"></div>
  <div style="height:16px;background:#fff;flex-shrink:0"></div>
  <div class="_hp-hd" style="padding-top:4px">
    <div class="_hp-av">H&amp;A</div>
    <div class="_hp-info">
      <div class="_hp-name">H&amp;A Lingerie</div>
      <div class="_hp-st"><span class="_hp-sdot"></span><span class="_hp-stxt" id="_hpSt"></span></div>
    </div>
    <button class="_hp-cls" id="_hcbCls">✕</button>
  </div>
  <div class="_hp-msgs" id="_hpMsgs"></div>
  <div class="_hp-chips" id="_hpChips"></div>
  <div class="_hp-ft">
    <input class="_hp-in" id="_hpIn" type="text" autocomplete="off"/>
    <button class="_hp-snd" id="_hpSnd">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    </button>
  </div>
</div>`;
  document.body.appendChild(host);

  /* ─── Refs ─────────────────────────────────────────────── */
  const btn    = document.getElementById('_hcbBtn');
  const badge  = document.getElementById('_hcbBadge');
  const ov     = document.getElementById('_hcbOv');
  const panel  = document.getElementById('_hcbPanel');
  const cls    = document.getElementById('_hcbCls');
  const msgs   = document.getElementById('_hpMsgs');
  const chips  = document.getElementById('_hpChips');
  const inp    = document.getElementById('_hpIn');
  const snd    = document.getElementById('_hpSnd');

  /* ─── Helpers messages ──────────────────────────────────── */
  function fmt(txt) {
    return txt
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  function addBot(txt) {
    const d = document.createElement('div');
    d.className = '_msg _msg-bot';
    d.innerHTML = fmt(txt);
    msgs.appendChild(d);
    scroll();
    return d;
  }

  function addUser(txt) {
    const d = document.createElement('div');
    d.className = '_msg _msg-usr';
    d.textContent = txt;
    msgs.appendChild(d);
    scroll();
  }

  function addWaBtn(prefill) {
    const m = M();
    const a = document.createElement('a');
    a.className = '_wa-btn';
    a.href = waUrl(prefill);
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>${m.wa_btn}`;
    msgs.appendChild(a);
    scroll();
  }

  function addIntLink(text, url) {
    const a = document.createElement('a');
    a.className = '_int-link';
    a.href = url;
    a.textContent = text;
    msgs.appendChild(a);
    scroll();
  }

  function showTyping(cb) {
    /* masquer les chips pendant la réponse */
    chips.style.opacity = '0';
    chips.style.pointerEvents = 'none';
    const d = document.createElement('div');
    d.className = '_msg _msg-bot _typing';
    d.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(d);
    scroll();
    setTimeout(() => {
      msgs.removeChild(d);
      cb();
      chips.style.opacity = '1';
      chips.style.pointerEvents = '';
    }, 1200);
  }

  function scroll() {
    msgs.scrollTop = msgs.scrollHeight;
  }

  /* ─── Chips d'actions ───────────────────────────────────── */
  function renderChips() {
    const m  = M();
    const pc = getPC(); /* Code promo lu en temps réel */
    inp.placeholder = m.ph;

    chips.innerHTML = `<div class="_divider">${lang() === 'en' ? 'Choose a topic or write below' : 'Choisissez un sujet ou écrivez ci-dessous'}</div>` +
      m.actions.map(a => {
        /* Label dynamique pour le chip promo */
        const label = a.key === 'promo'
          ? (lang() === 'en' ? `Promo code · ${pc}` : `Code promo · ${pc}`)
          : a.label;
        return `<button class="_chip" data-key="${a.key}" type="button">
          <span class="_chip-ico">${a.icon}</span>
          <span class="_chip-lbl">${label}</span>
        </button>`;
      }).join('');

    chips.querySelectorAll('._chip').forEach(btn => {
      btn.addEventListener('click', function () {
        const key    = this.dataset.key;
        const m      = M();
        const action = m.actions.find(a => a.key === key);
        if (!action) return;

        addUser(lang() === 'en'
          ? (key === 'promo' ? `Promo code · ${getPC()}` : action.label)
          : (key === 'promo' ? `Code promo · ${getPC()}` : action.label));

        showTyping(() => {
          /* ── Réponse promo générée dynamiquement ── */
          if (key === 'promo') {
            const pc = getPC();
            const txt = lang() === 'en'
              ? `🎁 **Your active promo code:**\n\n┌───────────────────┐\n│   **${pc}**   │\n└───────────────────┘\n\n→ -10% on your 1st order\n→ Valid on all H&A collections\n\nEnter this code when placing your order on the site!`
              : `🎁 **Votre code promo actif :**\n\n┌───────────────────┐\n│   **${pc}**   │\n└───────────────────┘\n\n→ -10% sur votre 1ère commande\n→ Valable sur toute la collection H&A\n\nEntrez ce code lors de votre commande sur le site !`;
            addBot(txt);
            return;
          }

          /* ── Autres réponses ── */
          const resp = m.responses[key];
          if (!resp) return;
          addBot(resp.text);
          /* Pas de bouton WhatsApp — le client reste sur le site */
          if (resp.link) addIntLink(resp.link.text, resp.link.url);
        });
      });
    });
  }

  /* ─── Ouverture / Fermeture ─────────────────────────────── */
  let opened = false;

  function open() {
    if (opened) return;
    opened = true;
    panel.classList.add('on');
    badge.style.display = 'none';
    /* Status */
    document.getElementById('_hpSt').textContent = M().status || (lang() === 'en' ? 'Online · fast reply' : 'En ligne · répond vite');
    document.getElementById('_hbLbl').textContent = lang() === 'en' ? 'Help' : 'Aide';
    /* Message de bienvenue (une seule fois) */
    if (msgs.children.length === 0) {
      setTimeout(() => addBot(M().welcome), 300);
      setTimeout(() => renderChips(), 700);
    }
  }

  function close() {
    opened = false;
    panel.classList.remove('on');
  }

  btn.addEventListener('click', () => opened ? close() : open());
  cls.addEventListener('click', close);
  document.addEventListener('click', e => {
    if (!opened) return;
    if (!panel.contains(e.target) && !btn.contains(e.target)) close();
  }, true);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && opened) close(); });

  /* ─── Saisie libre ──────────────────────────────────────── */
  function send() {
    const txt = inp.value.trim();
    if (!txt) return;
    inp.value = '';
    addUser(txt);
    showTyping(() => {
      const m = M();
      addBot(m.responses.default.text);
      /* Pas de redirection WhatsApp — la conversation reste dans le chatbot */
    });
  }
  snd.addEventListener('click', send);
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });

  /* ─── Changement de langue ──────────────────────────────── */
  document.addEventListener('ha:langChanged', () => {
    document.getElementById('_hbLbl').textContent = lang() === 'en' ? 'Help' : 'Aide';
    if (opened) renderChips();
  });

  /* Label initial */
  document.getElementById('_hbLbl').textContent = lang() === 'en' ? 'Help' : 'Aide';

})();
