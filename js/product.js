// ===== CATEGORY EN MAPPING =====
const CAT_EN = {
  'Soutiens-gorge': 'Bras', 'Culottes': 'Underwear', 'Bodies': 'Bodysuits',
  'Mariée': 'Bridal', 'Sets & Parures': 'Sets & Bras', 'Robes': 'Robes',
  'Nuit': 'Nightwear', 'Maillots de Bain': 'Swimwear',
  'Lingerie Menstruelle': 'Period Care', 'Mamans': 'Nursing & Maternity', 'Lingerie': 'Lingerie',
};

// ===== DYNAMIC PRODUCT FROM URL =====
const urlId = new URLSearchParams(window.location.search).get('id') || '1';
const prod = (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []).find(p => p.id === urlId) || {
  id: '1', name: 'Soutien-gorge Dentelle Éclat', category: 'Soutiens-gorge',
  price: 349, img: 'photo-1571513722275-4b41940f54b8'
};

// ===== HELPER: pick current lang (safe global access) =====
function getProdLang() { return (typeof currentLang !== 'undefined' ? currentLang : 'fr'); }

// ===== APPLY LANGUAGE TO DYNAMIC PRODUCT ELEMENTS =====
function applyLangToProduct(lang) {
  const isEn = lang === 'en';
  const catEn = CAT_EN[prod.category] || prod.category;

  // Category + new badge
  const catEl = document.querySelector('.product-detail-cat');
  if (catEl) {
    catEl.innerHTML = `<span class="fr-only">${prod.category} · Nouveauté</span><span class="en-only">${catEn} · New In</span>`;
  }

  // Add to cart button
  const addBtn = document.getElementById('addToCartBtn');
  if (addBtn) {
    const svg = addBtn.querySelector('svg');
    addBtn.innerHTML = (svg ? svg.outerHTML : '') +
      `<span id="addCartLabel" data-fr="Ajouter au panier — ${prod.price} MAD" data-en="Add to cart — ${prod.price} MAD">${isEn ? `Add to cart — ${prod.price} MAD` : `Ajouter au panier — ${prod.price} MAD`}</span>`;
  }

  // WhatsApp order link (numéro dynamique depuis siteconfig.js)
  const waBtn = document.querySelector('.add-actions .btn-whatsapp');
  if (waBtn) {
    const waNum = localStorage.getItem('ha_wa') || '212600000000';
    const msgFr = encodeURIComponent(`Bonjour H&A ! Je voudrais commander : ${prod.name} (${prod.price} MAD). Merci !`);
    const msgEn = encodeURIComponent(`Hello H&A! I'd like to order: ${prod.name} (${prod.price} MAD). Thank you!`);
    waBtn.href = `https://wa.me/${waNum}?text=${isEn ? msgEn : msgFr}`;
  }

  // Breadcrumb category link
  const catSlug = prod.category.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  const breadCatLink = document.getElementById('breadCat');
  if (breadCatLink) {
    breadCatLink.textContent = isEn ? catEn : prod.category;
    breadCatLink.href = `category?cat=${catSlug}`;
  }

  // Breadcrumb product name (traduction)
  const breadProdEl = document.querySelector('.breadcrumb span:last-child');
  if (breadProdEl) {
    breadProdEl.textContent = isEn ? (prod.nameEn || prod.name) : prod.name;
  }
}

// Update page title
document.title = prod.name + ' — H&A Lingerie';

// Update main image
const mainImgEl = document.getElementById('mainImg');
if (mainImgEl) {
  mainImgEl.src = `https://images.unsplash.com/${prod.img}?w=900&q=85`;
  mainImgEl.alt = prod.name;
}
// Update first gallery thumb to match product
const firstThumb = document.querySelector('.gallery-thumb');
if (firstThumb) {
  firstThumb.dataset.src = `https://images.unsplash.com/${prod.img}?w=900&q=85`;
  const ti = firstThumb.querySelector('img');
  if (ti) { ti.src = `https://images.unsplash.com/${prod.img}?w=150&q=80`; ti.alt = prod.name; }
}

// Update product name
const titleEl = document.querySelector('.product-detail-title');
if (titleEl) titleEl.textContent = prod.name;

// Update price (ancien prix barré AVANT le nouveau prix)
const priceEl = document.querySelector('.product-detail-price');
if (priceEl) {
  if (prod.oldPrice) {
    const pct = Math.round((1 - prod.price / prod.oldPrice) * 100);
    priceEl.innerHTML = `<span class="original">${prod.oldPrice} MAD</span>${prod.price} MAD`;
    const dtag = document.getElementById('discountTag');
    if (dtag) { dtag.textContent = `-${pct}%`; dtag.style.display = ''; }
  } else {
    priceEl.innerHTML = prod.price + ' MAD';
    const dtag = document.getElementById('discountTag');
    if (dtag) dtag.style.display = 'none';
  }
}

// Update fav button data
const favBtn = document.getElementById('wishlistBtnProduct');
if (favBtn) {
  favBtn.dataset.id = prod.id;
  favBtn.dataset.name = prod.name;
  favBtn.dataset.price = prod.price;
}

// Breadcrumb product name (traduit selon la langue)
const _breadProdEl = document.querySelector('.breadcrumb span:last-child');
if (_breadProdEl) {
  _breadProdEl.setAttribute('data-fr', prod.name);
  _breadProdEl.setAttribute('data-en', prod.nameEn || prod.name);
  _breadProdEl.textContent = prod.name;
}

// Apply language-dependent dynamic content
applyLangToProduct(getProdLang());

// Re-apply on language change
document.addEventListener('ha:langChanged', ({ detail }) => {
  applyLangToProduct(detail.lang);
});

// ===== GALLERY =====
document.querySelectorAll('.gallery-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const src = thumb.dataset.src;
    document.getElementById('mainImg').src = src;
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

// ===== SIZE SELECTOR =====
let selectedSize = '';
document.querySelectorAll('.size-btn:not(.sold-out)').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = btn.dataset.size;
    const el = document.getElementById('selectedSize');
    if (el) el.textContent = selectedSize;
  });
});

// ===== COLOR SELECTOR =====
document.querySelectorAll('.color-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const el = document.getElementById('selectedColor');
    if (el) el.textContent = btn.dataset.color;
  });
});

// ===== STOCK STATUS =====
(function() {
  const stockVal = typeof prod.stock === 'number' ? prod.stock : null;
  const addBtn   = document.getElementById('addToCartBtn');
  const priceEl  = document.querySelector('.product-detail-price');
  /* Chercher ou créer un badge stock */
  let stockBadge = document.getElementById('_stockBadge');
  if (!stockBadge && priceEl) {
    stockBadge = document.createElement('div');
    stockBadge.id = '_stockBadge';
    stockBadge.style.cssText = 'margin-top:8px;font-size:13px;font-weight:600';
    priceEl.parentNode.insertBefore(stockBadge, priceEl.nextSibling);
  }
  if (stockBadge) {
    if (stockVal === 0) {
      stockBadge.innerHTML = '<span style="background:#fee2e2;color:#dc2626;padding:5px 14px;border-radius:8px;display:inline-block">❌ Rupture de stock</span>';
      if (addBtn) { addBtn.disabled = true; addBtn.style.opacity = '.4'; addBtn.style.cursor = 'not-allowed'; }
    } else if (stockVal !== null && stockVal <= 5) {
      stockBadge.innerHTML = `<span style="background:#fef3c7;color:#d97706;padding:5px 14px;border-radius:8px;display:inline-block">⚠️ Plus que ${stockVal} en stock — commandez vite !</span>`;
    } else if (stockVal !== null) {
      stockBadge.innerHTML = '<span style="background:#dcfce7;color:#16a34a;padding:5px 14px;border-radius:8px;display:inline-block">✅ En stock</span>';
    }
  }
})();

// ===== ADD TO CART =====
document.getElementById('addToCartBtn')?.addEventListener('click', () => {
  if (typeof prod.stock === 'number' && prod.stock === 0) return;
  addToCart({ id: prod.id, name: prod.name, price: prod.price });
  openCart();
});

// ===== ACCORDION =====
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const isOpen = header.classList.contains('open');
    document.querySelectorAll('.accordion-header').forEach(h => {
      h.classList.remove('open');
      document.getElementById(h.id + '-body')?.classList.remove('open');
    });
    if (!isOpen) {
      header.classList.add('open');
      document.getElementById(header.id + '-body')?.classList.add('open');
    }
  });
});
document.getElementById('acc1')?.classList.add('open');
document.getElementById('acc1-body')?.classList.add('open');

// ===== SIZE GUIDE MODAL =====
document.getElementById('sizeGuideBtn')?.addEventListener('click', (e) => {
  e.preventDefault();
  const sgEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3>${sgEn ? 'Size Guide' : 'Guide des tailles'}</h3>
        <button class="icon-btn modal-close-btn">✕</button>
      </div>
      <p style="font-size:13px;color:var(--muted);margin-bottom:20px;line-height:1.7">
        ${sgEn
          ? 'Measure your underbust (just below your breasts) and your bust (at the fullest point) to find your perfect size.'
          : 'Mesurez votre tour de poitrine (juste sous la poitrine) et votre tour de buste (à la pointe) pour trouver votre taille parfaite.'}
      </p>
      <table class="size-table">
        <thead><tr><th>${sgEn ? 'Underbust' : 'Tour poitrine'}</th><th>${sgEn ? 'Bust' : 'Tour buste'}</th><th>${sgEn ? 'Band/EU' : 'Taille'}</th><th>${sgEn ? 'Cup' : 'Bonnet'}</th></tr></thead>
        <tbody>
          <tr><td>75-76 cm</td><td>83-85 cm</td><td>75A</td><td>A</td></tr>
          <tr><td>75-76 cm</td><td>85-87 cm</td><td>75B</td><td>B</td></tr>
          <tr><td>80-81 cm</td><td>88-90 cm</td><td>80A</td><td>A</td></tr>
          <tr><td>80-81 cm</td><td>90-92 cm</td><td>80B</td><td>B</td></tr>
          <tr><td>85-86 cm</td><td>93-95 cm</td><td>85A</td><td>A</td></tr>
          <tr><td>85-86 cm</td><td>95-97 cm</td><td>85B</td><td>B</td></tr>
          <tr><td>85-86 cm</td><td>97-99 cm</td><td>85C</td><td>C</td></tr>
          <tr><td>90-91 cm</td><td>100-102 cm</td><td>90B</td><td>B</td></tr>
          <tr><td>90-91 cm</td><td>102-104 cm</td><td>90C</td><td>C</td></tr>
          <tr><td>95-96 cm</td><td>105-107 cm</td><td>95B</td><td>B</td></tr>
        </tbody>
      </table>
      <p style="font-size:12px;color:var(--muted);margin-top:16px">💬 ${sgEn ? 'Need help? Contact us on WhatsApp.' : 'Besoin d\'aide ? Contactez-nous sur WhatsApp.'}</p>
    </div>`;
  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('open'));
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.closest('.modal-close-btn')) {
      modal.classList.remove('open');
      setTimeout(() => modal.remove(), 300);
    }
  });
});
