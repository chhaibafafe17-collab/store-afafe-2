// ===== PRODUCTS DATABASE =====
const PRODUCTS = [
  { id: '1', name: 'Soutien-gorge Dentelle Éclat', nameEn: 'Lace Éclat Bra', category: 'Soutiens-gorge', price: 349, img: 'photo-1571513722275-4b41940f54b8', url: 'product?id=1', tags: ['soutien', 'dentelle', 'bra', 'eclat', 'lingerie'] },
  { id: '2', name: 'Culotte Soie Noire', nameEn: 'Black Silk Panty', category: 'Culottes', price: 199, img: 'photo-1554568218-0f1715e72254', url: 'product?id=2', tags: ['culotte', 'soie', 'noire', 'slip', 'lingerie'] },
  { id: '3', name: 'Body Dentelle Ivoire', nameEn: 'Ivory Lace Bodysuit', category: 'Bodies', price: 520, img: 'photo-1485230895905-ec40ba36b9bc', url: 'product?id=3', tags: ['body', 'dentelle', 'ivoire', 'bodysuit', 'lingerie'] },
  { id: '4', name: 'Set Bridal Rose Poudré', nameEn: 'Dusty Rose Bridal Set', category: 'Mariée', price: 680, img: 'photo-1585487000160-6ebcfceb0d03', url: 'product?id=4', tags: ['set', 'bridal', 'mariée', 'rose', 'poudré', 'mariage'] },
  { id: '5', name: 'Soutien-gorge Push-Up Noir', nameEn: 'Black Push-Up Bra', category: 'Soutiens-gorge', price: 420, img: 'photo-1525507119028-ed4c629a60a3', url: 'product?id=5', tags: ['soutien', 'push-up', 'noir', 'bra', 'lingerie'] },
  { id: '6', name: 'Kimono Satin Doré', nameEn: 'Golden Satin Kimono', category: 'Nuit', price: 780, img: 'photo-1512353087810-25dfcd100962', url: 'product?id=6', tags: ['kimono', 'satin', 'doré', 'nuit', 'loungewear'] },
  { id: '7', name: 'Shorty Dentelle Nude', nameEn: 'Nude Lace Shorty', category: 'Culottes', price: 240, img: 'photo-1490481651871-ab68de25d43d', url: 'product?id=7', tags: ['shorty', 'dentelle', 'nude', 'culotte', 'lingerie'] },
  { id: '8', name: 'Bikini Dos Nu Bohème', nameEn: 'Bohème Open-Back Bikini', category: 'Maillots de Bain', price: 580, img: 'photo-1570152264771-4cd73e33c52b', url: 'product?id=8', tags: ['bikini', 'dos', 'nu', 'bohème', 'maillot', 'bain'] },
  { id: '9', name: 'Soutien-gorge Balconnet Bordeaux', nameEn: 'Burgundy Balconette Bra', category: 'Soutiens-gorge', price: 390, img: 'photo-1571513722275-4b41940f54b8', url: 'product?id=9', tags: ['soutien', 'balconnet', 'bordeaux', 'bra', 'lingerie'] },
  { id: '10', name: 'Set Dentelle Nuit Étoilée', nameEn: 'Starry Night Lace Set', category: 'Sets & Parures', price: 620, img: 'photo-1603217039863-aa0c865404f7', url: 'product?id=10', tags: ['set', 'parure', 'dentelle', 'nuit', 'étoile', 'lingerie'] },
  { id: '11', name: 'Nuisette Satin Champagne', nameEn: 'Champagne Satin Slip', category: 'Nuit', price: 450, img: 'photo-1487222477894-8943e31ef7b2', url: 'product?id=11', tags: ['nuisette', 'satin', 'champagne', 'nuit', 'loungewear'] },
  { id: '12', name: 'Boxer Dentelle Noire', nameEn: 'Black Lace Boxer', category: 'Culottes', price: 220, img: 'photo-1554568218-0f1715e72254', url: 'product?id=12', tags: ['boxer', 'dentelle', 'noire', 'culottes', 'lingerie'] },
  { id: '13', name: 'Bustier Corset Bordeaux', nameEn: 'Burgundy Corset Bustier', category: 'Bodies', price: 750, img: 'photo-1485230895905-ec40ba36b9bc', url: 'product?id=13', tags: ['bustier', 'corset', 'bordeaux', 'body', 'lingerie'] },
  { id: '14', name: 'Set Mariée Ivoire Bridal', nameEn: 'Ivory Bridal Set', category: 'Mariée', price: 950, img: 'photo-1469334031218-e382a71b716b', url: 'product?id=14', tags: ['set', 'mariée', 'ivoire', 'bridal', 'mariage', 'nuptial'] },
  { id: '15', name: 'Maillot Une Pièce Élégant', nameEn: 'Elegant One-Piece Swimsuit', category: 'Maillots de Bain', price: 480, img: 'photo-1570152264771-4cd73e33c52b', url: 'product?id=15', tags: ['maillot', 'une pièce', 'élégant', 'bain', 'été'] },
  { id: '16', name: 'Parure Dentelle Émeraude', nameEn: 'Emerald Lace Set', category: 'Sets & Parures', price: 580, img: 'photo-1603217039863-aa0c865404f7', url: 'product?id=16', tags: ['parure', 'dentelle', 'émeraude', 'set', 'lingerie'] },
  { id: '17', name: 'Robe Lingerie Soie Rosée', nameEn: 'Rosy Silk Lingerie Robe', category: 'Robes', price: 690, img: 'photo-1515886657613-9f3515b0c78f', url: 'product?id=17', tags: ['robe', 'lingerie', 'soie', 'rosée', 'nuit'] },
  { id: '18', name: 'Soutien-gorge Sport Nude', nameEn: 'Nude Sports Bra', category: 'Soutiens-gorge', price: 310, img: 'photo-1571513722275-4b41940f54b8', url: 'product?id=18', tags: ['soutien', 'sport', 'nude', 'bra', 'confort'] },
  { id: '19', name: 'Culotte Taille Haute Beige', nameEn: 'Beige High-Waist Panty', category: 'Culottes', price: 270, img: 'photo-1490481651871-ab68de25d43d', url: 'product?id=19', tags: ['culotte', 'taille haute', 'beige', 'gainante', 'lingerie'] },
  { id: '20', name: 'Kimono Plumes Crème', nameEn: 'Cream Feather Kimono', category: 'Nuit', price: 920, img: 'photo-1512353087810-25dfcd100962', url: 'product?id=20', tags: ['kimono', 'plumes', 'crème', 'nuit', 'loungewear', 'luxe'] },
  { id: '21', name: 'Bikini Bandeau Imprimé', nameEn: 'Printed Bandeau Bikini', category: 'Maillots de Bain', price: 420, img: 'photo-1570152264771-4cd73e33c52b', url: 'product?id=21', tags: ['bikini', 'bandeau', 'imprimé', 'maillot', 'bain', 'été'] },
  { id: '22', name: 'Body Résille Noir', nameEn: 'Black Mesh Bodysuit', category: 'Bodies', price: 380, img: 'photo-1485230895905-ec40ba36b9bc', url: 'product?id=22', tags: ['body', 'résille', 'noir', 'bodysuit', 'lingerie'] },
  // Lingerie Menstruelle
  { id: '23', name: 'Culotte Menstruelle Noire', nameEn: 'Black Period Panty', category: 'Lingerie Menstruelle', price: 180, img: 'photo-1554568218-0f1715e72254', url: 'product?id=23', tags: ['culotte', 'menstruelle', 'période', 'règles', 'éco', 'confort'] },
  { id: '24', name: 'Shorty Menstruel Beige', nameEn: 'Beige Period Shorty', category: 'Lingerie Menstruelle', price: 190, img: 'photo-1490481651871-ab68de25d43d', url: 'product?id=24', tags: ['shorty', 'menstruel', 'beige', 'période', 'éco'] },
  { id: '25', name: 'Culotte Menstruelle Flux Intense', nameEn: 'Heavy Flow Period Panty', category: 'Lingerie Menstruelle', price: 220, img: 'photo-1554568218-0f1715e72254', url: 'product?id=25', tags: ['culotte', 'menstruelle', 'flux', 'intense', 'nuit', 'période'] },
  { id: '26', name: 'Boxer Menstruel Confort', nameEn: 'Comfort Period Boxer', category: 'Lingerie Menstruelle', price: 200, img: 'photo-1603217039863-aa0c865404f7', url: 'product?id=26', tags: ['boxer', 'menstruel', 'confort', 'période', 'éco'] },
  // Mamans
  { id: '27', name: 'Soutien-gorge Allaitement Blanc', nameEn: 'White Nursing Bra', category: 'Mamans', price: 290, img: 'photo-1571513722275-4b41940f54b8', url: 'product?id=27', tags: ['soutien', 'allaitement', 'blanc', 'maman', 'nursing', 'bra'] },
  { id: '28', name: 'Soutien-gorge Allaitement Nude', nameEn: 'Nude Nursing Bra', category: 'Mamans', price: 310, img: 'photo-1525507119028-ed4c629a60a3', url: 'product?id=28', tags: ['soutien', 'allaitement', 'nude', 'maman', 'nursing', 'bra'] },
  { id: '29', name: 'Culotte Maternité Confort', nameEn: 'Comfort Maternity Panty', category: 'Mamans', price: 175, img: 'photo-1490481651871-ab68de25d43d', url: 'product?id=29', tags: ['culotte', 'maternité', 'grossesse', 'maman', 'confort'] },
  { id: '30', name: 'Soutien-gorge Grossesse Dentelle', nameEn: 'Lace Maternity Bra', category: 'Mamans', price: 350, img: 'photo-1585487000160-6ebcfceb0d03', url: 'product?id=30', tags: ['soutien', 'grossesse', 'maman', 'dentelle', 'allaitement', 'bra'] },
];

/* Les produits viennent UNIQUEMENT de l'API via siteconfig.js.
   Aucune lecture de localStorage ici — l'API est la source de vérité. */

/* ─── Helpers numéro dynamique ────────────────────────────
   Lire le vrai numéro WA depuis le config (mis à jour par siteconfig.js)
   Jamais hardcodé — toujours depuis localStorage/API               */
function _waNum() {
  return localStorage.getItem('ha_wa') || '212600000000';
}
function _wa(msg) {
  return 'https://wa.me/' + _waNum() + (msg ? '?text=' + encodeURIComponent(msg) : '');
}
function _telDisplay() {
  /* Formate le numéro stocké (ex: 212612345678 → +212 6 12 34 56 78) */
  const n = _waNum();
  if (n.length === 12 && n.startsWith('212')) {
    return '+212 ' + n[3] + ' ' + n.slice(4,6) + ' ' + n.slice(6,8) + ' ' + n.slice(8,10) + ' ' + n.slice(10,12);
  }
  return '+' + n;
}
function _email() {
  return localStorage.getItem('ha_email') || 'contact@ha-lingerie.ma';
}
/* Mettre à jour les liens WA et le téléphone dans un conteneur (ex: après openModal) */
function _patchWa(container) {
  const wa  = _waNum();
  const tel = _telDisplay();
  const em  = _email();
  if (!container) return;
  /* Mettre à jour tous les liens wa.me */
  container.querySelectorAll('a[href*="wa.me/"]').forEach(a => {
    a.href = a.href.replace(/wa\.me\/\d+/, 'wa.me/' + wa);
  });
  /* Mettre à jour les liens tel: */
  container.querySelectorAll('a[href^="tel:"]').forEach(a => {
    a.href = 'tel:+' + wa;
    if (a.textContent.match(/^\+?21260/)) a.textContent = tel;
  });
  /* Mettre à jour le texte du téléphone affiché */
  container.querySelectorAll('[data-phone]').forEach(el => {
    el.textContent = tel;
  });
  container.querySelectorAll('[data-email]').forEach(el => {
    el.textContent = em;
    if (el.tagName === 'A') el.href = 'mailto:' + em;
  });
}

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('ha_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('ha_wishlist') || '[]');

// ===== LANGUAGE / I18N =====
let currentLang = localStorage.getItem('ha_lang') || 'fr';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('ha_lang', lang);
  document.documentElement.lang = lang;
  // Update all elements with data-fr / data-en
  document.querySelectorAll('[data-fr]').forEach(el => {
    const txt = lang === 'fr' ? el.dataset.fr : (el.dataset.en || el.dataset.fr);
    /* Les éléments .hero-title et data-html utilisent innerHTML pour préserver les <br> */
    if (el.classList.contains('hero-title') || el.dataset.html !== undefined) {
      el.innerHTML = txt.replace(/\n/g, '<br>');
    } else {
      el.textContent = txt;
    }
  });
  // Update input placeholders
  document.querySelectorAll('[data-fr-ph]').forEach(el => {
    el.placeholder = lang === 'fr' ? el.dataset.frPh : (el.dataset.enPh || el.dataset.frPh);
  });
  // Update toggle buttons
  document.getElementById('langFr')?.classList.toggle('lang-active', lang === 'fr');
  document.getElementById('langEn')?.classList.toggle('lang-active', lang === 'en');
  // Re-render open modal in new language
  const openModalEl = document.getElementById('mainModal');
  if (openModalEl?.dataset.modalType) openModal(openModalEl.dataset.modalType);
  // Re-render open drawers in new language
  if (document.getElementById('cartDrawer')?.classList.contains('open')) renderCart();
  if (document.getElementById('favDrawer')?.classList.contains('open')) renderFavDrawer();
  // Notify page-specific scripts
  document.dispatchEvent(new CustomEvent('ha:langChanged', { detail: { lang } }));
}

document.getElementById('langFr')?.addEventListener('click', () => setLang('fr'));
document.getElementById('langEn')?.addEventListener('click', () => setLang('en'));

// Apply saved language on page load
if (currentLang === 'en') setLang('en');

// ===== HEADER SCROLL =====
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ===== SEARCH =====
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchToggle) {
  searchToggle.addEventListener('click', () => {
    searchBar.classList.add('open');
    searchInput?.focus();
  });
}
searchClose?.addEventListener('click', () => {
  searchBar.classList.remove('open');
  if (searchResults) { searchResults.innerHTML = ''; searchResults.classList.remove('open'); }
});

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (q.length < 2) {
      searchResults.innerHTML = '';
      searchResults.classList.remove('open');
      return;
    }
    const found = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q))
    ).slice(0, 6);

    const srEn = currentLang === 'en';
    const CAT_EN_SEARCH = {
      'Soutiens-gorge': 'Bras', 'Culottes': 'Underwear', 'Bodies': 'Bodysuits',
      'Mariée': 'Bridal', 'Sets & Parures': 'Sets & Bras', 'Robes': 'Robes',
      'Nuit': 'Nightwear', 'Maillots de Bain': 'Swimwear',
      'Lingerie Menstruelle': 'Period Care', 'Mamans': 'Nursing & Maternity', 'Lingerie': 'Lingerie',
    };
    if (found.length === 0) {
      searchResults.innerHTML = `
        <div class="no-results">
          <p>${srEn ? 'No results for' : 'Aucun résultat pour'} "<strong>${searchInput.value}</strong>"</p>
          <p>${srEn ? 'Try: bra, bodysuit, bridal, swimwear…' : 'Essayez : soutien-gorge, body, mariée, bikini…'}</p>
        </div>`;
    } else {
      searchResults.innerHTML = found.map(p => {
        const displayName = srEn ? (p.nameEn || p.name) : p.name;
        const displayCat = srEn ? (CAT_EN_SEARCH[p.category] || p.category) : p.category;
        return `
        <a href="${p.url}" class="search-result-item">
          <div class="sr-img" style="background-image:url(https://images.unsplash.com/${p.img}?w=100&q=70)"></div>
          <div class="sr-info">
            <span class="sr-cat">${displayCat}</span>
            <strong>${displayName}</strong>
            <span class="sr-price">${p.price} MAD</span>
          </div>
        </a>`;
      }).join('') + `<div class="sr-footer"><a href="category?cat=lingerie">${srEn ? 'View all products →' : 'Voir tous les produits →'}</a></div>`;
    }
    searchResults.classList.add('open');
  });
}

// Close search on outside click
document.addEventListener('click', (e) => {
  if (searchBar && !searchBar.contains(e.target) && !searchToggle?.contains(e.target)) {
    searchBar.classList.remove('open');
    if (searchResults) { searchResults.innerHTML = ''; searchResults.classList.remove('open'); }
  }
});

// ===== MOBILE MENU =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileOverlay = document.getElementById('mobileOverlay');
function openMobileMenu() { mobileMenu?.classList.add('open'); mobileOverlay?.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMobileMenu() { mobileMenu?.classList.remove('open'); mobileOverlay?.classList.remove('open'); document.body.style.overflow = ''; }
mobileMenuBtn?.addEventListener('click', openMobileMenu);
mobileMenuClose?.addEventListener('click', closeMobileMenu);
mobileOverlay?.addEventListener('click', closeMobileMenu);

// ===== HERO SLIDER =====
const heroSlides = document.querySelectorAll('.hero-slide');
let heroIdx = 0;
let heroTimer;
function goToHero(idx) {
  heroSlides[heroIdx]?.classList.remove('active');
  heroIdx = (idx + heroSlides.length) % heroSlides.length;
  heroSlides[heroIdx]?.classList.add('active');
}
function startHeroAuto() { heroTimer = setInterval(() => goToHero(heroIdx + 1), 5000); }
function resetHeroAuto() { clearInterval(heroTimer); startHeroAuto(); }
document.getElementById('heroNext')?.addEventListener('click', () => { goToHero(heroIdx + 1); resetHeroAuto(); });
document.getElementById('heroPrev')?.addEventListener('click', () => { goToHero(heroIdx - 1); resetHeroAuto(); });
if (heroSlides.length > 0) startHeroAuto();

// ===== CART =====
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartBtn = document.getElementById('cartBtn');
const cartClose = document.getElementById('cartClose');

cartBtn?.addEventListener('click', openCart);
cartClose?.addEventListener('click', closeCart);
cartOverlay?.addEventListener('click', () => { closeCart(); closeFavDrawer(); });

function openCart() { closeModal(); closeFavDrawer(); cartDrawer?.classList.add('open'); cartOverlay?.classList.add('open'); document.body.style.overflow = 'hidden'; renderCart(); }
function closeCart() { cartDrawer?.classList.remove('open'); cartOverlay?.classList.remove('open'); document.body.style.overflow = ''; }

function addToCart(item) {
  const existing = cart.find(c => c.id === item.id);
  if (existing) { existing.qty += 1; } else { cart.push({ ...item, qty: 1 }); }
  saveCart(); updateCartBadge();
  const prodData = PRODUCTS.find(p => p.id === item.id);
  const toastName = (currentLang === 'en' && prodData?.nameEn) ? prodData.nameEn : item.name;
  showToast(currentLang === 'en' ? `✓ ${toastName} added to cart` : `✓ ${toastName} ajouté au panier`);
}
function removeFromCart(id) { cart = cart.filter(c => c.id !== id); saveCart(); updateCartBadge(); renderCart(); }
function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart(); updateCartBadge(); renderCart();
}
function saveCart() { localStorage.setItem('ha_cart', JSON.stringify(cart)); }
function updateCartBadge() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  const el = document.getElementById('cartCount');
  if (el) el.textContent = count;
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  const cartItemCount = document.getElementById('cartItemCount');
  const cartTotal = document.getElementById('cartTotal');
  const whatsappCheckout = document.getElementById('whatsappCheckout');
  if (!cartItems) return;
  const isEn = currentLang === 'en';
  cartItemCount && (cartItemCount.textContent = cart.reduce((s, c) => s + c.qty, 0));
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p>${isEn ? 'Your cart is empty' : 'Votre panier est vide'}</p>
        <a href="category?cat=nouveaux-arrivages" class="btn btn-dark" style="margin-top:12px">${isEn ? 'Start shopping' : 'Commencer les achats'}</a>
      </div>`;
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  if (cartTotal) cartTotal.textContent = `${total} MAD`;
  if (cartFooter) cartFooter.style.display = 'flex';

  /* ── Barre de progression livraison gratuite ── */
  const FREE_THRESHOLD = 500;
  let progBar = document.getElementById('_cartProgress');
  if (!progBar) {
    progBar = document.createElement('div');
    progBar.id = '_cartProgress';
    progBar.style.cssText = 'padding:10px 18px 0;font-size:12px';
    cartFooter.insertBefore(progBar, cartFooter.firstChild);
  }
  if (total >= FREE_THRESHOLD) {
    progBar.innerHTML = `<div style="background:#edfaf2;border-radius:8px;padding:8px 12px;color:#15803d;font-weight:500;text-align:center">✅ ${isEn ? 'Free delivery unlocked!' : 'Livraison offerte débloquée !'}</div>`;
  } else {
    const remain = FREE_THRESHOLD - total;
    const pct = Math.min(100, Math.round(total / FREE_THRESHOLD * 100));
    progBar.innerHTML = `
      <p style="color:#7a7169;margin-bottom:6px">${isEn ? `<strong>${remain} MAD</strong> left for free delivery` : `Plus que <strong>${remain} MAD</strong> pour la livraison offerte`}</p>
      <div style="background:#e6e0d8;border-radius:4px;height:5px;overflow:hidden">
        <div style="background:linear-gradient(90deg,#b8935a,#d4aa78);height:5px;width:${pct}%;border-radius:4px;transition:width .4s"></div>
      </div>`;
  }
  cartItems.innerHTML = cart.map(item => {
    const prodData = PRODUCTS.find(p => p.id === item.id);
    const displayName = (isEn && prodData?.nameEn) ? prodData.nameEn : item.name;
    return `
    <div class="cart-item">
      <div class="cart-item-thumb"></div>
      <div class="cart-item-info">
        <h4>${displayName}</h4>
        <div class="cart-item-price">${item.price} MAD</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty('${item.id}', -1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">×</button>
    </div>`;
  }).join('');
  if (whatsappCheckout) {
    const lines = cart.map(c => `• ${c.name} ×${c.qty} — ${c.price * c.qty} MAD`).join('%0A');
    const msg = `🛍️ Bonjour H%26A ! Je souhaite commander :%0A%0A${lines}%0A%0A*Total : ${total} MAD*%0A%0AMerci !`;
    whatsappCheckout.href = `https://wa.me/212600000000?text=${msg}`;
  }
}
document.getElementById('clearCart')?.addEventListener('click', () => { cart = []; saveCart(); updateCartBadge(); renderCart(); });

// ===== CHECKOUT =====
const VILLES = ['Agadir','Casablanca','Rabat','Marrakech','Fès','Tanger','Meknès','Oujda','Kénitra','Tétouan','El Jadida','Safi','Béni Mellal','Nador','Mohammedia','Khouribga','Settat','Laâyoune','Dakhla','Guelmim','Tiznit','Taroudant','Ouarzazate','Errachidia','Autre'];

document.getElementById('checkoutBtn')?.addEventListener('click', openCheckout);

function openCheckout() {
  if (cart.length === 0) return;
  let overlay = document.getElementById('checkoutOverlay');
  if (overlay) overlay.remove();

  const coEn = currentLang === 'en';
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const itemsHTML = cart.map(c =>
    `<div class="checkout-summary-item"><span>${c.name} ×${c.qty}</span><span>${c.price * c.qty} MAD</span></div>`
  ).join('');
  const villesOptions = VILLES.map(v => `<option value="${v}">${v}</option>`).join('');

  /* ── Pré-calcul RIB (évite les IIFEs risquées dans le template) ── */
  let _ribHtml = '';
  let _virHtml = '';
  try {
    const rib = JSON.parse(localStorage.getItem('ha_rib') || '{}');
    if (rib.virement !== false) {
      _virHtml = `<label style="display:flex;align-items:center;gap:10px;padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;cursor:pointer;transition:border-color .18s" id="_payLabelVir">
        <input type="radio" name="payMethod" value="virement" onchange="selectPayMethod()" style="accent-color:var(--gold)" />
        <div>
          <div style="font-size:13.5px;font-weight:500">🏦 ${coEn ? 'Bank transfer' : 'Virement bancaire'}</div>
          <div style="font-size:11.5px;color:var(--muted);margin-top:2px">${coEn ? 'Transfer then send proof' : 'Effectuez le virement puis envoyez la preuve'}</div>
        </div>
      </label>`;
    }
    if (rib.rib || rib.iban) {
      _ribHtml = `<p style="font-weight:600;margin-bottom:8px;color:#1e40af">🏦 Coordonnées bancaires H&amp;A Lingerie</p>
        ${rib.bank ? `<p><strong>Banque :</strong> ${rib.bank}</p>` : ''}
        ${rib.name ? `<p><strong>Bénéficiaire :</strong> ${rib.name}</p>` : ''}
        ${rib.rib  ? `<p><strong>RIB :</strong> <code style="background:#e0f2fe;padding:2px 6px;border-radius:4px">${rib.rib}</code></p>` : ''}
        ${rib.iban ? `<p><strong>IBAN :</strong> <code style="background:#e0f2fe;padding:2px 6px;border-radius:4px;font-size:11px">${rib.iban}</code></p>` : ''}
        ${rib.note ? `<p style="margin-top:8px;color:#1e40af;border-top:1px solid #bfdbfe;padding-top:8px">${rib.note}</p>` : ''}`;
    } else {
      _ribHtml = `<p style="color:var(--muted);font-size:12px">Informations bancaires à configurer dans le dashboard.</p>`;
    }
  } catch(_) {}

  overlay = document.createElement('div');
  overlay.id = 'checkoutOverlay';
  overlay.className = 'checkout-overlay';
  overlay.innerHTML = `
    <div class="checkout-modal">
      <div class="checkout-header">
        <h3>${coEn ? 'Complete your order' : 'Finaliser la commande'}</h3>
        <button class="icon-btn" onclick="closeCheckout()">✕</button>
      </div>
      <div class="checkout-body">
        <div class="checkout-summary">
          <h4>${coEn ? 'Summary' : 'Récapitulatif'} · ${cart.reduce((s,c)=>s+c.qty,0)} ${coEn ? 'item(s)' : 'article(s)'}</h4>
          ${itemsHTML}
          <div class="checkout-total-row">
            <span>${coEn ? 'Total' : 'Total'}</span>
            <span>${total} MAD</span>
          </div>
        </div>

        <div>
          <p style="font-size:13px;font-weight:500;margin-bottom:16px">${coEn ? 'Your delivery details' : 'Vos coordonnées de livraison'}</p>
          <div class="form-row">
            <div class="form-group">
              <label>${coEn ? 'First name *' : 'Prénom *'}</label>
              <input type="text" id="co_prenom" placeholder="${coEn ? 'Your first name' : 'Votre prénom'}" />
            </div>
            <div class="form-group">
              <label>${coEn ? 'Last name *' : 'Nom *'}</label>
              <input type="text" id="co_nom" placeholder="${coEn ? 'Your last name' : 'Votre nom'}" />
            </div>
            <div class="form-group">
              <label>${coEn ? 'WhatsApp / Phone *' : 'WhatsApp / Téléphone *'}</label>
              <input type="tel" id="co_tel" placeholder="06 00 00 00 00" />
            </div>
            <div class="form-group">
              <label>${coEn ? 'Email (optional)' : 'Email (optionnel)'}</label>
              <input type="email" id="co_email" placeholder="${coEn ? 'your@email.com' : 'votre@email.com'}" />
            </div>
            <div class="form-group">
              <label>${coEn ? 'City *' : 'Ville *'}</label>
              <select id="co_ville"><option value="">${coEn ? 'Choose a city…' : 'Choisir une ville…'}</option>${villesOptions}</select>
            </div>
            <div class="form-group full">
              <label>${coEn ? 'Full address *' : 'Adresse complète *'}</label>
              <input type="text" id="co_adresse" placeholder="${coEn ? 'Street, district, number…' : 'Rue, quartier, numéro…'}" />
            </div>
            <div class="form-group full">
              <label>${coEn ? 'Optional note' : 'Note optionnelle'}</label>
              <textarea id="co_note" placeholder="${coEn ? 'Size, colour, delivery instructions…' : 'Taille, couleur, instructions de livraison…'}"></textarea>
            </div>
            <div class="form-group full">
              <label>${coEn ? 'Promo code' : 'Code promo'}</label>
              <div style="display:flex;gap:8px">
                <input type="text" id="co_promo" placeholder="${coEn ? 'Enter your code…' : 'Entrez votre code…'}" style="text-transform:uppercase;flex:1" />
                <button type="button" onclick="applyPromoCode()" style="padding:0 16px;background:var(--black);color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:13px;white-space:nowrap">${coEn ? 'Apply' : 'Appliquer'}</button>
              </div>
              <p id="co_promo_msg" style="font-size:12px;margin-top:6px;min-height:18px"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="checkout-footer">
        <!-- Méthode de paiement -->
        <div style="margin-bottom:16px">
          <p style="font-size:13px;font-weight:500;margin-bottom:10px">${coEn ? 'Payment method' : 'Mode de paiement'}</p>
          <div style="display:flex;flex-direction:column;gap:8px" id="paymentMethods">
            <label style="display:flex;align-items:center;gap:10px;padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;cursor:pointer;transition:border-color .18s" id="_payLabelCash">
              <input type="radio" name="payMethod" value="cash" checked onchange="selectPayMethod()" style="accent-color:var(--gold)" />
              <div>
                <div style="font-size:13.5px;font-weight:500">💵 ${coEn ? 'Cash on delivery' : 'Cash à la livraison'}</div>
                <div style="font-size:11.5px;color:var(--muted);margin-top:2px">${coEn ? 'Pay when your order arrives' : 'Payez à la réception de votre commande'}</div>
              </div>
            </label>
            ${_virHtml}
          </div>
          <div id="_ribInfo" style="display:none;margin-top:10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:14px 16px;font-size:12.5px">
            ${_ribHtml}
          </div>
        </div>
        <button class="btn btn-dark" onclick="submitCheckout()" style="width:100%;justify-content:center;padding:15px;font-size:15px">
          ✅ ${coEn ? 'Confirm my order' : 'Confirmer ma commande'}
        </button>
        <p class="checkout-note">${coEn ? '📦 Confirmation within 2h · Free delivery from 500 MAD' : '📦 Confirmation sous 2h · Livraison offerte dès 500 MAD'}</p>
      </div>
    </div>`;

  document.body.appendChild(overlay);
  _patchWa(overlay); /* mettre à jour les liens WA avec le vrai numéro */
  requestAnimationFrame(() => overlay.classList.add('open'));
  overlay.addEventListener('click', e => { if (e.target === overlay) closeCheckout(); });
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  const overlay = document.getElementById('checkoutOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  setTimeout(() => { overlay.remove(); document.body.style.overflow = ''; }, 300);
}

/* ── Mode de paiement ──────────────────────────────────── */
function selectPayMethod() {
  const val   = document.querySelector('input[name="payMethod"]:checked')?.value || 'cash';
  const ribEl = document.getElementById('_ribInfo');
  const lCash = document.getElementById('_payLabelCash');
  const lVir  = document.getElementById('_payLabelVir');
  if (ribEl) ribEl.style.display = val === 'virement' ? 'block' : 'none';
  if (lCash) lCash.style.borderColor = val === 'cash'      ? 'var(--gold)' : 'var(--border)';
  if (lVir)  lVir.style.borderColor  = val === 'virement'  ? 'var(--gold)' : 'var(--border)';
}

/* ── Code promo ────────────────────────────────────────── */
let _promoDiscount = 0; /* % de remise appliquée */

function applyPromoCode() {
  const input = document.getElementById('co_promo');
  const msg   = document.getElementById('co_promo_msg');
  if (!input || !msg) return;
  const code    = input.value.trim().toUpperCase();
  const valid   = (localStorage.getItem('ha_promo_code') || 'BIENVENUE').toUpperCase();
  const isEn    = currentLang === 'en';
  if (!code) return;
  if (code === valid) {
    _promoDiscount = 10;
    msg.style.color = '#15803d';
    msg.textContent = isEn ? `✅ Code applied — 10% discount!` : `✅ Code appliqué — remise de 10% !`;
    /* Mettre à jour l'affichage du total dans le résumé */
    const total    = cart.reduce((s,c) => s + c.price * c.qty, 0);
    const discount = Math.round(total * 0.1);
    const newTotal = total - discount;
    const rowEl = document.querySelector('#checkoutOverlay .checkout-total-row');
    if (rowEl) rowEl.innerHTML = `
      <span>${isEn ? 'Subtotal' : 'Sous-total'}</span><span style="text-decoration:line-through;color:#999;font-size:.9em">${total} MAD</span>
      <span style="color:#b8935a;font-weight:700">🎁 −10% = ${newTotal} MAD</span>`;
  } else {
    _promoDiscount = 0;
    msg.style.color = '#dc2626';
    msg.textContent = isEn ? '❌ Invalid code' : '❌ Code invalide';
  }
}

/* ── Sauvegarde d'une commande dans l'API PHP ───────────── */
async function saveOrderToApi(order) {
  /* ── Priorité 1 : sauvegarder sur le SERVEUR (API) ──
     C'est la source de vérité — visible sur tous les appareils.          */
  let savedToServer = false;
  try {
    const res = await fetch('api/index.php?t=' + Date.now(), { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (!Array.isArray(data.orders)) data.orders = [];
      data.orders.unshift(order);
      const pw = localStorage.getItem('ha_p') || 'ha2026';
      data._auth = pw;
      const save = await fetch('api/index.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Auth-Key': pw },
        body: JSON.stringify(data)
      });
      if (save.ok) savedToServer = true;
    }
  } catch (_) {}

  /* ── Priorité 2 : localStorage comme filet de sécurité si API indispo ── */
  if (!savedToServer) {
    try {
      const local = JSON.parse(localStorage.getItem('ha_orders') || '[]');
      local.unshift(order);
      localStorage.setItem('ha_orders', JSON.stringify(local));
    } catch (_) {}
  }
}

function submitCheckout() {
  const prenom  = document.getElementById('co_prenom')?.value.trim();
  const nom     = document.getElementById('co_nom')?.value.trim();
  const tel     = document.getElementById('co_tel')?.value.trim();
  const email   = document.getElementById('co_email')?.value.trim();
  const ville   = document.getElementById('co_ville')?.value;
  const adresse = document.getElementById('co_adresse')?.value.trim();
  const note       = document.getElementById('co_note')?.value.trim();
  const payMethod  = document.querySelector('input[name="payMethod"]:checked')?.value || 'cash';

  /* Validation */
  let valid = true;
  [
    { id:'co_prenom',  val:prenom  },
    { id:'co_nom',     val:nom     },
    { id:'co_tel',     val:tel     },
    { id:'co_ville',   val:ville   },
    { id:'co_adresse', val:adresse },
  ].forEach(({ id, val }) => {
    const el = document.getElementById(id);
    if (!val) { el?.classList.add('field-error'); valid = false; }
    else       el?.classList.remove('field-error');
  });
  if (!valid) {
    showToast(currentLang === 'en' ? 'Please fill in all required fields' : 'Veuillez remplir tous les champs obligatoires');
    return;
  }

  const subtotal  = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const promoCode = document.getElementById('co_promo')?.value.trim().toUpperCase() || '';
  const discount  = _promoDiscount > 0 ? Math.round(subtotal * _promoDiscount / 100) : 0;
  const total     = subtotal - discount;
  _promoDiscount  = 0; /* reset pour prochaine commande */
  const orderId = 'HA-' + Date.now().toString(36).toUpperCase();
  const now     = new Date();
  const dateStr = now.toLocaleDateString('fr-MA', { day:'2-digit', month:'2-digit', year:'numeric' });
  const timeStr = now.toLocaleTimeString('fr-MA', { hour:'2-digit', minute:'2-digit' });
  const coEn    = currentLang === 'en';

  /* ── Objet commande (dashboard + localStorage) ── */
  const order = {
    id:     orderId,
    date:   dateStr,
    time:   timeStr,
    status: 'Nouveau',
    client: { prenom, nom, tel, email: email || '', ville, adresse, note: note || '' },
    items:  cart.map(c => ({ id: c.id, name: c.name, qty: c.qty, price: c.price })),
    total,
    promoCode:   promoCode   || '',
    discount:    discount    || 0,
    payMethod:   payMethod,           /* 'cash' ou 'virement' */
  };

  /* Sauvegarde en arrière-plan (non bloquant) */
  saveOrderToApi(order);

  /* ── Message WhatsApp → boutique ── */
  const waStore = localStorage.getItem('ha_wa') || '212600000000';
  const storeLines = cart.map(c => `• ${c.name} ×${c.qty} — ${c.price * c.qty} MAD`).join('%0A');
  const storeMsg = [
    `🛍️ *Nouvelle commande ${orderId}*`,
    ``,
    `👤 *${coEn?'Client':'Client'} :* ${prenom} ${nom}`,
    `📞 *Tél :* ${tel}`,
    `📍 *Ville :* ${ville}`,
    `🏠 *Adresse :* ${adresse}`,
    note ? `📝 *Note :* ${note}` : '',
    ``,
    `*Articles :*`,
    storeLines,
    ``,
    discount > 0 ? `🎁 *Code promo ${promoCode} : −${discount} MAD*` : '',
    `💰 *Total : ${total} MAD*`,
    `📦 *Paiement cash à la livraison*`,
    `📅 *${dateStr} ${timeStr}*`,
  ].filter(Boolean).join('%0A');
  const storeWaUrl = `https://wa.me/${waStore}?text=${storeMsg}`;

  /* ── Message WhatsApp → client (récapitulatif) ── */
  const clientLines = cart.map(c => `• ${c.name} ×${c.qty} — ${c.price * c.qty} MAD`).join('%0A');
  const clientMsg = [
    `✅ *Récapitulatif commande H&A*`,
    `📋 *Réf :* ${orderId}`,
    ``,
    `*Vos articles :*`,
    clientLines,
    ``,
    `💰 *Total : ${total} MAD*`,
    `📍 *Livraison :* ${adresse}, ${ville}`,
    note ? `📝 *Note :* ${note}` : '',
    ``,
    `📦 Paiement cash à la livraison`,
    `⏱️ Livraison 2-4 jours · Notre équipe vous contacte sous 2h`,
    ``,
    `Merci de votre confiance ! 🙏 H&A Lingerie`,
  ].filter(Boolean).join('%0A');
  const clientTel = tel.replace(/\D/g, '');
  const clientWaUrl = `https://wa.me/${clientTel.startsWith('0') ? '212' + clientTel.slice(1) : clientTel}?text=${clientMsg}`;

  /* ── La commande est déjà enregistrée sur le site (API + localStorage) ──
     WhatsApp n'est plus ouvert automatiquement. Le client utilise les boutons
     de la page de confirmation s'il veut envoyer une copie. ── */

  /* ── Remplace le formulaire par la confirmation ── */
  const modal = document.querySelector('#checkoutOverlay .checkout-modal');
  if (modal) {
    const itemsHTML = cart.map(c =>
      `<div class="checkout-summary-item"><span>${c.name} ×${c.qty}</span><span>${c.price * c.qty} MAD</span></div>`
    ).join('');

    modal.innerHTML = `
      <div class="checkout-header" style="background:linear-gradient(135deg,#0d0d0d,#1c1c1c)">
        <div style="flex:1">
          <div style="font-size:24px;margin-bottom:4px">✅</div>
          <h3 style="color:#fff">${coEn ? 'Order registered!' : 'Commande enregistrée !'}</h3>
          <p style="font-size:12px;color:rgba(255,255,255,.5);margin-top:4px">${coEn?'Ref':'Réf'} : <strong style="color:#b8935a">${orderId}</strong></p>
        </div>
        <button class="icon-btn" onclick="closeCheckout();closeCart()" style="color:rgba(255,255,255,.6)">✕</button>
      </div>
      <div class="checkout-body">
        <div class="checkout-summary">
          <h4>${coEn ? 'Your order' : 'Votre commande'}</h4>
          ${itemsHTML}
          <div class="checkout-total-row"><span>Total</span><span>${total} MAD</span></div>
        </div>
        <div style="background:#f8f6f3;border-radius:12px;padding:14px;font-size:13px;line-height:1.8;margin-top:4px">
          <div>👤 <strong>${prenom} ${nom}</strong></div>
          <div>📞 ${tel}</div>
          <div>📍 ${adresse}, ${ville}</div>
          ${note ? `<div>📝 ${note}</div>` : ''}
        </div>
        <p style="font-size:12px;color:#15803d;margin-top:12px;line-height:1.65;background:#f0fdf4;border-radius:8px;padding:10px 14px;border:1px solid #86efac">
          ✅ ${coEn
            ? 'Your order has been placed on our site! Our team will confirm via WhatsApp within 2h.'
            : 'Votre commande a bien été passée sur le site ! Notre équipe vous confirme par WhatsApp sous 2h.'}
        </p>
      </div>
      <div class="checkout-footer" style="display:flex;flex-direction:column;gap:10px">
        <a href="${clientWaUrl}" target="_blank" class="btn btn-whatsapp" style="width:100%;justify-content:center;padding:14px;text-decoration:none">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          📋 ${coEn ? 'Open my WhatsApp recap' : 'Ouvrir mon récapitulatif WhatsApp'}
        </a>
        <a href="${storeWaUrl}" target="_blank" class="btn btn-outline" style="width:100%;justify-content:center;padding:12px;text-decoration:none;font-size:13px">
          💬 ${coEn ? 'Contact store on WhatsApp' : 'Contacter la boutique sur WhatsApp'}
        </a>
      </div>`;
  }

  /* Vider le panier et rafraîchir l'interface */
  cart.length = 0;
  saveCart();
  updateCartBadge();
  renderCart();
}

// ===== QUICK ADD (delegated) =====
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.quick-add');
  if (btn) {
    e.preventDefault();
    addToCart({ id: btn.dataset.id, name: btn.dataset.name, price: parseInt(btn.dataset.price) });
  }
});

// ===== FAVORITES DRAWER =====
const favDrawer = document.getElementById('favDrawer');
const favClose = document.getElementById('favClose');
const favToggle = document.getElementById('favToggle');

favToggle?.addEventListener('click', () => {
  if (favDrawer?.classList.contains('open')) { closeFavDrawer(); }
  else { openFavDrawer(); }
});
favClose?.addEventListener('click', closeFavDrawer);

function openFavDrawer() {
  closeModal(); closeCart();
  favDrawer?.classList.add('open');
  cartOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderFavDrawer();
}
function closeFavDrawer() {
  favDrawer?.classList.remove('open');
  if (!cartDrawer?.classList.contains('open')) {
    cartOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function renderFavDrawer() {
  const favItems = document.getElementById('favItems');
  const favItemCount = document.getElementById('favItemCount');
  if (!favItems) return;
  const isEnFav = currentLang === 'en';
  if (favItemCount) favItemCount.textContent = wishlist.length;
  if (wishlist.length === 0) {
    favItems.innerHTML = `
      <div class="fav-empty">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <p>${isEnFav ? 'No favourites yet' : 'Aucun favori pour le moment'}</p>
        <a href="category?cat=nouveaux-arrivages" class="btn btn-dark" style="margin-top:12px">${isEnFav ? 'Discover our pieces' : 'Découvrir nos pièces'}</a>
      </div>`;
    return;
  }
  favItems.innerHTML = wishlist.map(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    const imgId = item.img || (prod?.img) || 'photo-1571513722275-4b41940f54b8';
    const favDisplayName = (isEnFav && prod?.nameEn) ? prod.nameEn : item.name;
    return `
      <div class="fav-item" data-id="${item.id}">
        <div class="fav-item-thumb">
          <img src="https://images.unsplash.com/${imgId}?w=150&q=70" alt="${favDisplayName}" />
        </div>
        <div class="fav-item-info">
          <h4>${favDisplayName}</h4>
          <p class="fav-item-price">${item.price} MAD</p>
          <div class="fav-item-actions">
            <button class="fav-add-cart" onclick="favToCart('${item.id}')">${isEnFav ? 'Add to cart' : 'Ajouter au panier'}</button>
            <button class="fav-remove" onclick="removeFromFav('${item.id}')">×</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function favToCart(id) {
  const item = wishlist.find(w => w.id === id);
  if (item) { addToCart(item); }
}
function removeFromFav(id) {
  wishlist = wishlist.filter(w => w.id !== id);
  saveWishlist(); updateWishlistBadge();
  document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(b => b.classList.remove('active'));
  renderFavDrawer();
}

// ===== WISHLIST (delegated) =====
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.fav-btn');
  if (!btn) return;
  e.preventDefault(); e.stopPropagation();
  const id = btn.dataset.id;
  const name = btn.dataset.name;
  const price = parseInt(btn.dataset.price) || 0;
  const img = btn.dataset.img || '';

  if (wishlist.find(w => w.id === id)) {
    wishlist = wishlist.filter(w => w.id !== id);
    document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(b => b.classList.remove('active'));
    showToast(currentLang === 'en' ? 'Removed from favourites' : 'Retiré des favoris');
  } else {
    wishlist.push({ id, name, price, img });
    document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(b => b.classList.add('active'));
    showToast(currentLang === 'en' ? '♥ Added to favourites' : '♥ Ajouté aux favoris');
  }
  saveWishlist();
  updateWishlistBadge();
});

function saveWishlist() { localStorage.setItem('ha_wishlist', JSON.stringify(wishlist)); }
function updateWishlistBadge() {
  const el = document.getElementById('wishlistCount');
  if (!el) return;
  el.textContent = wishlist.length;
  el.style.display = wishlist.length > 0 ? 'flex' : 'none';
}
function syncWishlistButtons() {
  document.querySelectorAll('.fav-btn').forEach(btn => {
    if (wishlist.find(w => w.id === btn.dataset.id)) btn.classList.add('active');
  });
}

// ===== MODAL SYSTEM =====
let activeModal = null;

const MODALS = {
  livraison: {
    title: 'Livraison & Retour',
    titleEn: 'Delivery & Return',
    body: `
      <div class="modal-tag">📦 Livraison partout au Maroc</div>

      <h4>Délais de livraison</h4>
      <ul>
        <li><strong>Livraison standard</strong> — 2 à 4 jours ouvrables · partout au Maroc</li>
        <li><strong>Agadir & environs</strong> — livraison le jour même possible, nous contacter sur WhatsApp</li>
      </ul>

      <h4>Zones de livraison</h4>
      <p>Nous livrons dans toutes les villes du Maroc : Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir, Meknès, Oujda, Kénitra, Tétouan, El Jadida, Safi, Béni Mellal, Nador, Laâyoune, Dakhla et partout ailleurs.</p>

      <h4>Frais de livraison</h4>
      <p style="font-size:12px;color:var(--muted);margin-bottom:10px">Les frais varient selon la ville de livraison. Livraison <strong>offerte dès 500 MAD</strong> d'achat.</p>
      <table class="modal-table">
        <thead><tr><th>Zone / Ville</th><th>Délai</th><th>Frais</th></tr></thead>
        <tbody>
          <tr><td><strong>Agadir & environs</strong></td><td>Jour même possible</td><td style="color:var(--gold);font-weight:600">Nous contacter</td></tr>
          <tr><td>Casablanca, Rabat, Marrakech</td><td>1–2 jours</td><td>Nous contacter</td></tr>
          <tr><td>Fès, Tanger, Meknès, Oujda</td><td>2–3 jours</td><td>Nous contacter</td></tr>
          <tr><td>Autres villes du Maroc</td><td>2–4 jours</td><td>Nous contacter</td></tr>
          <tr><td colspan="2"><strong>Dès 500 MAD d'achat</strong></td><td style="color:#16a34a;font-weight:600">🎁 Offerte</td></tr>
        </tbody>
      </table>
      <p style="margin-top:10px;font-size:12px;color:var(--muted)">Pour connaître les frais exacts pour votre ville, contactez-nous sur WhatsApp avant de commander.</p>
      <ul style="margin-top:8px">
        <li>Paiement <strong>cash à la livraison</strong> ou virement bancaire</li>
      </ul>

      <h4>Retour d'un article</h4>
      <ul>
        <li>Retours acceptés sous <strong>7 jours</strong> après réception de la commande</li>
        <li>Article non porté, non lavé, dans son <strong>emballage d'origine</strong></li>
        <li>Étiquettes encore attachées</li>
        <li>Contactez-nous sur WhatsApp pour initier le retour</li>
        <li>Remboursement traité sous <strong>5–7 jours ouvrables</strong></li>
      </ul>

      <a href="https://wa.me/212600000000?text=Bonjour+H%26A+!+Je+voudrais+faire+un+retour." target="_blank" class="btn btn-whatsapp" style="display:inline-flex;margin-top:16px">Initier un retour sur WhatsApp</a>
    `,
    bodyEn: `
      <div class="modal-tag">📦 Delivery across Morocco</div>

      <h4>Delivery Times</h4>
      <ul>
        <li><strong>Standard delivery</strong> — 2 to 4 business days · nationwide</li>
        <li><strong>Agadir & surroundings</strong> — same-day delivery possible, contact us on WhatsApp</li>
      </ul>

      <h4>Delivery Zones</h4>
      <p>We deliver to all cities in Morocco: Casablanca, Rabat, Marrakech, Fes, Tangier, Agadir, Meknes, Oujda, Kenitra, Tetouan, El Jadida, Safi, Beni Mellal, Nador, Laayoune, Dakhla and everywhere else.</p>

      <h4>Delivery fees</h4>
      <p style="font-size:12px;color:var(--muted);margin-bottom:10px">Fees vary by city. <strong>Free delivery from 500 MAD</strong> purchase.</p>
      <table class="modal-table">
        <thead><tr><th>Zone / City</th><th>Delay</th><th>Fees</th></tr></thead>
        <tbody>
          <tr><td><strong>Agadir & surroundings</strong></td><td>Same day possible</td><td style="color:var(--gold);font-weight:600">Contact us</td></tr>
          <tr><td>Casablanca, Rabat, Marrakech</td><td>1–2 days</td><td>Contact us</td></tr>
          <tr><td>Fès, Tanger, Meknès, Oujda</td><td>2–3 days</td><td>Contact us</td></tr>
          <tr><td>Other cities in Morocco</td><td>2–4 days</td><td>Contact us</td></tr>
          <tr><td colspan="2"><strong>From 500 MAD purchase</strong></td><td style="color:#16a34a;font-weight:600">🎁 Free</td></tr>
        </tbody>
      </table>
      <p style="margin-top:10px;font-size:12px;color:var(--muted)">For exact fees for your city, contact us on WhatsApp before ordering.</p>
      <ul style="margin-top:8px">
        <li>Payment: <strong>cash on delivery</strong> or bank transfer</li>
      </ul>

      <h4>Returning an item</h4>
      <ul>
        <li>Returns accepted within <strong>7 days</strong> of receiving the order</li>
        <li>Item unworn, unwashed, in its <strong>original packaging</strong></li>
        <li>Tags still attached</li>
        <li>Contact us on WhatsApp to initiate the return</li>
        <li>Refund processed within <strong>5–7 business days</strong></li>
      </ul>

      <a href="https://wa.me/212600000000?text=Hello+H%26A+!+I+would+like+to+make+a+return." target="_blank" class="btn btn-whatsapp" style="display:inline-flex;margin-top:16px">Initiate a return on WhatsApp</a>
    `
  },
  'guide-tailles': {
    title: 'Guide des Tailles',
    titleEn: 'Size Guide',
    body: `
      <p style="font-size:13px;color:var(--muted);margin-bottom:20px;line-height:1.8">Mesurez votre tour de poitrine (juste sous la poitrine) et votre tour de buste (à la pointe de la poitrine) pour trouver votre taille parfaite.</p>
      <h4>Soutiens-gorge</h4>
      <table class="modal-table">
        <thead><tr><th>Tour poitrine</th><th>Tour buste</th><th>Taille</th><th>Bonnet</th></tr></thead>
        <tbody>
          <tr><td>75–76 cm</td><td>83–85 cm</td><td>75A</td><td>A</td></tr>
          <tr><td>75–76 cm</td><td>85–87 cm</td><td>75B</td><td>B</td></tr>
          <tr><td>80–81 cm</td><td>88–90 cm</td><td>80A</td><td>A</td></tr>
          <tr><td>80–81 cm</td><td>90–92 cm</td><td>80B</td><td>B</td></tr>
          <tr><td>85–86 cm</td><td>93–95 cm</td><td>85A</td><td>A</td></tr>
          <tr><td>85–86 cm</td><td>95–97 cm</td><td>85B</td><td>B</td></tr>
          <tr><td>85–86 cm</td><td>97–99 cm</td><td>85C</td><td>C</td></tr>
          <tr><td>90–91 cm</td><td>100–102 cm</td><td>90B</td><td>B</td></tr>
          <tr><td>90–91 cm</td><td>102–104 cm</td><td>90C</td><td>C</td></tr>
          <tr><td>95–96 cm</td><td>105–107 cm</td><td>95B</td><td>B</td></tr>
          <tr><td>95–96 cm</td><td>107–109 cm</td><td>95C</td><td>C</td></tr>
          <tr><td>100–101 cm</td><td>112–115 cm</td><td>100C</td><td>C</td></tr>
        </tbody>
      </table>
      <h4>Culottes & Shorties</h4>
      <table class="modal-table">
        <thead><tr><th>Tour de hanches</th><th>Taille</th></tr></thead>
        <tbody>
          <tr><td>84–88 cm</td><td>S</td></tr>
          <tr><td>88–94 cm</td><td>M</td></tr>
          <tr><td>94–100 cm</td><td>L</td></tr>
          <tr><td>100–108 cm</td><td>XL</td></tr>
          <tr><td>108–116 cm</td><td>XXL</td></tr>
        </tbody>
      </table>
      <p style="font-size:12px;color:var(--muted);margin-top:16px">💬 Besoin d'aide ? Contactez-nous sur WhatsApp pour un conseil personnalisé.</p>
      <a href="https://wa.me/212600000000?text=Bonjour+H%26A+!+J%27ai+besoin+d%27aide+pour+ma+taille." target="_blank" class="btn btn-whatsapp" style="display:inline-flex;margin-top:12px">Conseil sur WhatsApp</a>
    `,
    bodyEn: `
      <p style="font-size:13px;color:var(--muted);margin-bottom:20px;line-height:1.8">Measure your underbust (just below your breasts) and your bust (at the fullest point) to find your perfect size.</p>
      <h4>Bras</h4>
      <table class="modal-table">
        <thead><tr><th>Underbust</th><th>Bust</th><th>Band / EU</th><th>Cup</th></tr></thead>
        <tbody>
          <tr><td>75–76 cm</td><td>83–85 cm</td><td>75 / 34</td><td>A</td></tr>
          <tr><td>75–76 cm</td><td>85–87 cm</td><td>75 / 34</td><td>B</td></tr>
          <tr><td>80–81 cm</td><td>88–90 cm</td><td>80 / 36</td><td>A</td></tr>
          <tr><td>80–81 cm</td><td>90–92 cm</td><td>80 / 36</td><td>B</td></tr>
          <tr><td>85–86 cm</td><td>93–95 cm</td><td>85 / 38</td><td>A</td></tr>
          <tr><td>85–86 cm</td><td>95–97 cm</td><td>85 / 38</td><td>B</td></tr>
          <tr><td>85–86 cm</td><td>97–99 cm</td><td>85 / 38</td><td>C</td></tr>
          <tr><td>90–91 cm</td><td>100–102 cm</td><td>90 / 40</td><td>B</td></tr>
          <tr><td>90–91 cm</td><td>102–104 cm</td><td>90 / 40</td><td>C</td></tr>
          <tr><td>95–96 cm</td><td>105–107 cm</td><td>95 / 42</td><td>B</td></tr>
          <tr><td>95–96 cm</td><td>107–109 cm</td><td>95 / 42</td><td>C</td></tr>
          <tr><td>100–101 cm</td><td>112–115 cm</td><td>100 / 44</td><td>C</td></tr>
        </tbody>
      </table>
      <h4>Panties & Shorties</h4>
      <table class="modal-table">
        <thead><tr><th>Hip circumference</th><th>Size</th></tr></thead>
        <tbody>
          <tr><td>84–88 cm</td><td>S</td></tr>
          <tr><td>88–94 cm</td><td>M</td></tr>
          <tr><td>94–100 cm</td><td>L</td></tr>
          <tr><td>100–108 cm</td><td>XL</td></tr>
          <tr><td>108–116 cm</td><td>XXL</td></tr>
        </tbody>
      </table>
      <p style="font-size:12px;color:var(--muted);margin-top:16px">💬 Need help? Contact us on WhatsApp for personalized sizing advice.</p>
      <a href="https://wa.me/212600000000?text=Hello+H%26A+!+I+need+help+with+my+size." target="_blank" class="btn btn-whatsapp" style="display:inline-flex;margin-top:12px">Size advice on WhatsApp</a>
    `
  },
  faq: {
    title: 'Questions Fréquentes',
    titleEn: 'Frequently Asked Questions',
    body: `
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Comment commander ? <span>+</span></div>
        <div class="faq-a">Parcourez notre boutique, ajoutez vos articles au panier et finalisez votre commande via WhatsApp. Nous confirmons votre commande sous 2 heures et vous guidons pour le paiement.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Livrez-vous partout au Maroc ? <span>+</span></div>
        <div class="faq-a">Oui ! Nous livrons dans toutes les villes du Maroc — Casablanca, Rabat, Marrakech, Agadir, Fès, Tanger, Oujda et partout ailleurs. La livraison standard prend 2–4 jours ouvrables.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Quels sont les modes de paiement ? <span>+</span></div>
        <div class="faq-a">Nous acceptons : le paiement à la livraison (cash), virement bancaire, et Visa / Mastercard. Tous les paiements sont sécurisés.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Comment trouver ma taille ? <span>+</span></div>
        <div class="faq-a">Consultez notre guide des tailles (disponible dans le menu "Informations"). En cas de doute, contactez-nous sur WhatsApp — nous vous guidons avec des conseils personnalisés selon vos mensurations.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Puis-je retourner un article ? <span>+</span></div>
        <div class="faq-a">Oui, nous acceptons les retours sous 7 jours après réception, pour tout article non porté dans son emballage d'origine. Contactez-nous sur WhatsApp pour initier un retour.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Comment entretenir mes pièces ? <span>+</span></div>
        <div class="faq-a">Nous recommandons un lavage à la main à l'eau froide avec un détergent doux, ou en machine à 30°C en filet de lavage. Ne pas tumble dry. Chaque article est fourni avec ses instructions d'entretien.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Proposez-vous des cadeaux et emballages luxe ? <span>+</span></div>
        <div class="faq-a">Oui ! Nous offrons des coffrets cadeaux avec emballage luxe et carte personnalisée. Idéal pour un anniversaire, un mariage ou une occasion spéciale. Mentionnez-le lors de votre commande WhatsApp.</div>
      </div>
    `,
    bodyEn: `
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">How do I order? <span>+</span></div>
        <div class="faq-a">Browse our store, add items to your cart and finalize your order via WhatsApp. We confirm your order within 2 hours and guide you through payment.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Do you deliver across Morocco? <span>+</span></div>
        <div class="faq-a">Yes! We deliver to all cities in Morocco — Casablanca, Rabat, Marrakech, Agadir, Fes, Tangier, Oujda and everywhere else. Standard delivery takes 2–4 business days.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">What payment methods do you accept? <span>+</span></div>
        <div class="faq-a">We accept cash on delivery, bank transfer, and Visa / Mastercard. All payments are secure.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">How do I find my size? <span>+</span></div>
        <div class="faq-a">Check our size guide in the "Information" menu. If in doubt, contact us on WhatsApp — we'll guide you with personalized advice based on your measurements.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Can I return an item? <span>+</span></div>
        <div class="faq-a">Yes, we accept returns within 7 days of receipt, for any unworn item in its original packaging. Contact us on WhatsApp to initiate a return.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">How do I care for my pieces? <span>+</span></div>
        <div class="faq-a">We recommend hand washing in cold water with a gentle detergent, or machine washing at 30°C in a mesh bag. Do not tumble dry. Each item comes with care instructions.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Do you offer gift sets and luxury packaging? <span>+</span></div>
        <div class="faq-a">Yes! We offer gift sets with luxury packaging and a personalized card. Perfect for a birthday, wedding or special occasion. Mention it when placing your WhatsApp order.</div>
      </div>
    `
  },
  tendances: {
    title: 'Tendances de la Saison',
    titleEn: 'Season Trends',
    body: `
      <div class="modal-tag">✦ Le Journal H&A</div>
      <h4>Dentelle florale & broderies</h4>
      <p>La saison mise sur la dentelle florale en relief, les broderies délicates sur fond nude et les détails en guipure. Les ensembles coordonnés en dentelle sont la pièce incontournable du moment.</p>
      <h4>Les couleurs de la saison</h4>
      <ul>
        <li><strong>Terracotta & rouille</strong> — chaud, solaire, ultra féminin</li>
        <li><strong>Vert sauge</strong> — doux, naturel, intemporel</li>
        <li><strong>Nude caramel</strong> — élégant, polyvalent, seconde peau</li>
        <li><strong>Noir profond</strong> — classique indémodable de saison</li>
      </ul>
      <h4>Les silhouettes phares</h4>
      <ul>
        <li>Le <strong>balconnet romantique</strong> avec bretelles fines brodées</li>
        <li>La <strong>culotte taille haute</strong> en satin & dentelle</li>
        <li>Le <strong>body ouvert dans le dos</strong> — pièce signature de la saison</li>
        <li>Le <strong>soutien-gorge triangle bralette</strong> pour les looks casual-chic</li>
      </ul>
      <a href="category?cat=nouveaux-arrivages" class="btn btn-dark" style="display:inline-flex;margin-top:16px">Voir les nouveautés →</a>
    `,
    bodyEn: `
      <div class="modal-tag">✦ H&A Journal</div>
      <h4>Floral lace & embroidery</h4>
      <p>This season embraces raised floral lace, delicate embroidery on nude backgrounds and guipure details. Coordinated lace sets are the must-have piece right now.</p>
      <h4>Season's colours</h4>
      <ul>
        <li><strong>Terracotta & rust</strong> — warm, sun-kissed, ultra feminine</li>
        <li><strong>Sage green</strong> — soft, natural, timeless</li>
        <li><strong>Nude caramel</strong> — elegant, versatile, second skin</li>
        <li><strong>Deep black</strong> — timeless classic of the season</li>
      </ul>
      <h4>Key silhouettes</h4>
      <ul>
        <li>The <strong>romantic balconette</strong> with fine embroidered straps</li>
        <li><strong>High-waisted knickers</strong> in satin & lace</li>
        <li>The <strong>open-back bodysuit</strong> — the season's signature piece</li>
        <li>The <strong>triangle bralette</strong> for casual-chic looks</li>
      </ul>
      <a href="category?cat=nouveaux-arrivages" class="btn btn-dark" style="display:inline-flex;margin-top:16px">See new arrivals →</a>
    `
  },
  mariee: {
    title: 'Lingerie de Mariée — Guide Ultime',
    titleEn: 'Bridal Lingerie — Ultimate Guide',
    body: `
      <div class="modal-tag">👰 Collection Bridal</div>
      <h4>Choisir sa lingerie de mariée</h4>
      <p>La lingerie du grand jour mérite une attention particulière. Elle doit être à la fois belle, confortable et adaptée à la robe de mariée choisie.</p>
      <h4>Selon la robe</h4>
      <ul>
        <li><strong>Robe bustier</strong> → soutien-gorge sans bretelles ou corset</li>
        <li><strong>Robe dos nu</strong> → soutien-gorge dos nu ou bralette transparente</li>
        <li><strong>Robe princesse</strong> → soutien-gorge plongeant en ivoire ou nude</li>
        <li><strong>Robe sirène</strong> → string ou culotte ultra-plate sans marque</li>
      </ul>
      <h4>Les matières de la mariée</h4>
      <ul>
        <li><strong>Dentelle Chantilly</strong> — romanesque et intemporelle</li>
        <li><strong>Satin ivoire</strong> — lisse, élégant, discret sous la robe</li>
        <li><strong>Soie naturelle</strong> — le summum du luxe et du confort</li>
      </ul>
      <h4>Notre conseil</h4>
      <p>Commandez votre lingerie de mariée 3 à 4 semaines avant le jour J pour avoir le temps d'ajustements. Essayez-la avec votre robe pour valider le maintien et l'absence de marques visibles.</p>
      <a href="category?cat=bridal" class="btn btn-dark" style="display:inline-flex;margin-top:16px">Voir la collection Mariée →</a>
    `,
    bodyEn: `
      <div class="modal-tag">👰 Bridal Collection</div>
      <h4>Choosing your bridal lingerie</h4>
      <p>The lingerie for your big day deserves special attention. It should be beautiful, comfortable and suited to your chosen wedding dress.</p>
      <h4>By dress type</h4>
      <ul>
        <li><strong>Strapless dress</strong> → strapless bra or corset</li>
        <li><strong>Open-back dress</strong> → backless bra or sheer bralette</li>
        <li><strong>Princess dress</strong> → plunge bra in ivory or nude</li>
        <li><strong>Mermaid dress</strong> → thong or ultra-flat underwear with no visible lines</li>
      </ul>
      <h4>Bridal fabrics</h4>
      <ul>
        <li><strong>Chantilly lace</strong> — romantic and timeless</li>
        <li><strong>Ivory satin</strong> — smooth, elegant, discreet under the dress</li>
        <li><strong>Natural silk</strong> — the ultimate in luxury and comfort</li>
      </ul>
      <h4>Our advice</h4>
      <p>Order your bridal lingerie 3 to 4 weeks before your big day to allow time for adjustments. Try it on with your dress to ensure the right support and no visible lines.</p>
      <a href="category?cat=bridal" class="btn btn-dark" style="display:inline-flex;margin-top:16px">View Bridal collection →</a>
    `
  },
  histoire: {
    title: 'Notre Histoire',
    titleEn: 'Our Story',
    body: `
      <div class="modal-tag">✦ H&A Lingerie — Agadir</div>
      <h4>Une marque née à Agadir</h4>
      <p>H&A est née d'une passion pour la lingerie de qualité et d'un désir de proposer aux femmes marocaines des pièces élégantes, confortables et abordables. Fondée à Agadir, la marque s'est rapidement imposée comme une référence dans l'univers de la lingerie premium au Maroc.</p>
      <h4>Notre vision</h4>
      <p>Chez H&A, nous croyons que chaque femme mérite de se sentir belle et confiante, peu importe l'occasion. De la lingerie quotidienne aux ensembles bridal pour le grand jour, chaque pièce est sélectionnée avec soin pour allier esthétique et confort.</p>
      <h4>Notre engagement</h4>
      <ul>
        <li>Pièces de qualité soigneusement sélectionnées</li>
        <li>Service client personnalisé et à l'écoute</li>
        <li>Livraison rapide partout au Maroc</li>
        <li>Nouvelles collections régulièrement renouvelées</li>
        <li>Conseils personnalisés sur WhatsApp</li>
      </ul>
      <h4>Nous rejoindre</h4>
      <p>Découvrez nos collections en ligne ou contactez-nous directement sur WhatsApp pour un accompagnement personnalisé. Notre équipe est disponible du lundi au samedi, de 9h à 19h.</p>
      <a href="https://wa.me/212600000000?text=Bonjour+H%26A+!" target="_blank" class="btn btn-whatsapp" style="display:inline-flex;margin-top:16px">Nous écrire sur WhatsApp</a>
    `,
    bodyEn: `
      <div class="modal-tag">✦ H&A Lingerie — Agadir</div>
      <h4>A brand born in Agadir</h4>
      <p>H&A was born from a passion for quality lingerie and a desire to offer Moroccan women elegant, comfortable and affordable pieces. Founded in Agadir, the brand quickly established itself as a reference in premium lingerie across Morocco.</p>
      <h4>Our vision</h4>
      <p>At H&A, we believe every woman deserves to feel beautiful and confident, whatever the occasion. From everyday lingerie to bridal sets for the big day, every piece is carefully selected to combine aesthetics and comfort.</p>
      <h4>Our commitment</h4>
      <ul>
        <li>Carefully selected quality pieces</li>
        <li>Personalized and attentive customer service</li>
        <li>Fast delivery across Morocco</li>
        <li>Regularly renewed new collections</li>
        <li>Personalized advice on WhatsApp</li>
      </ul>
      <h4>Get in touch</h4>
      <p>Discover our collections online or contact us directly on WhatsApp for personalized assistance. Our team is available Monday to Saturday, 9am to 7pm.</p>
      <a href="https://wa.me/212600000000?text=Hello+H%26A+!" target="_blank" class="btn btn-whatsapp" style="display:inline-flex;margin-top:16px">Message us on WhatsApp</a>
    `
  },
  entretien: {
    title: 'Entretien de vos Pièces',
    titleEn: 'Care Instructions',
    body: `
      <div class="modal-tag">🌸 Prenez soin de votre lingerie</div>
      <h4>Lavage à la main (recommandé)</h4>
      <ul>
        <li>Eau froide ou tiède — maximum <strong>30°C</strong></li>
        <li>Détergent doux spécial lingerie ou savon de Marseille</li>
        <li>Pas de frottement — frotter détériore la dentelle et le satin</li>
        <li>Rincer à l'eau froide sans essorer</li>
      </ul>
      <h4>Lavage en machine (si nécessaire)</h4>
      <ul>
        <li>Toujours utiliser un <strong>filet de lavage</strong></li>
        <li>Programme délicat — 30°C maximum</li>
        <li>Essorage minimal ou absent</li>
        <li>Ne jamais mélanger avec des vêtements à fermetures zips ou velcro</li>
      </ul>
      <h4>Séchage</h4>
      <ul>
        <li>Ne jamais mettre au sèche-linge 🚫</li>
        <li>Sécher à plat ou suspendu à l'ombre</li>
        <li>Éviter le soleil direct qui dégrade les fibres et décolore</li>
        <li>Ne pas suspendre par les bretelles — cela déforme la forme</li>
      </ul>
      <h4>Rangement</h4>
      <ul>
        <li>Ranger les soutiens-gorge à plat, bonnets non retournés</li>
        <li>Ne pas plier les armatures</li>
        <li>Éviter les sacs plastiques — laisser respirer les tissus</li>
      </ul>
      <h4>Par matière</h4>
      <ul>
        <li><strong>Dentelle</strong> — lavage main uniquement, très délicat</li>
        <li><strong>Satin / Soie</strong> — eau froide, pas de centrifugation</li>
        <li><strong>Microfibre</strong> — machine à 30°C en filet</li>
        <li><strong>Coton</strong> — machine à 30°C, programme doux</li>
      </ul>
    `,
    bodyEn: `
      <div class="modal-tag">🌸 Care for your lingerie</div>
      <h4>Hand washing (recommended)</h4>
      <ul>
        <li>Cold or lukewarm water — maximum <strong>30°C</strong></li>
        <li>Gentle lingerie detergent or mild soap</li>
        <li>No rubbing — rubbing damages lace and satin</li>
        <li>Rinse with cold water without wringing</li>
      </ul>
      <h4>Machine washing (if necessary)</h4>
      <ul>
        <li>Always use a <strong>mesh laundry bag</strong></li>
        <li>Delicate programme — 30°C maximum</li>
        <li>Minimal or no spin</li>
        <li>Never mix with items that have zips or velcro</li>
      </ul>
      <h4>Drying</h4>
      <ul>
        <li>Never tumble dry 🚫</li>
        <li>Dry flat or hung in the shade</li>
        <li>Avoid direct sunlight which degrades fibres and causes fading</li>
        <li>Do not hang by the straps — this distorts the shape</li>
      </ul>
      <h4>Storage</h4>
      <ul>
        <li>Store bras flat, cups not inverted</li>
        <li>Do not fold the underwires</li>
        <li>Avoid plastic bags — allow fabrics to breathe</li>
      </ul>
      <h4>By fabric</h4>
      <ul>
        <li><strong>Lace</strong> — hand wash only, very delicate</li>
        <li><strong>Satin / Silk</strong> — cold water, no spin</li>
        <li><strong>Microfibre</strong> — machine at 30°C in mesh bag</li>
        <li><strong>Cotton</strong> — machine at 30°C, gentle cycle</li>
      </ul>
    `
  },
  contact: {
    title: 'Nous Contacter',
    titleEn: 'Contact Us',
    body: `
      <div class="modal-contact-grid">
        <div class="modal-contact-item">
          <strong>📞 Téléphone / WhatsApp</strong>
          <span>+212 6 00 00 00 00</span>
        </div>
        <div class="modal-contact-item">
          <strong>✉️ Email</strong>
          <span>contact@ha-lingerie.ma</span>
        </div>
        <div class="modal-contact-item">
          <strong>📍 Adresse</strong>
          <span>Agadir, Maroc</span>
        </div>
        <div class="modal-contact-item">
          <strong>🕐 Horaires</strong>
          <span>Lun–Sam : 9h–19h</span>
        </div>
      </div>
      <h4>Commander ou poser une question</h4>
      <p>Pour une réponse rapide et un service personnalisé, contactez-nous directement sur WhatsApp. Nous livrons partout au Maroc et répondons en moins de 2 heures.</p>
      <a href="https://wa.me/212600000000?text=Bonjour+H%26A+!+J%27ai+une+question." target="_blank" class="btn btn-whatsapp" style="display:inline-flex">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
        Écrire sur WhatsApp
      </a>
      <div style="margin-top:20px">
        <p style="font-size:13px;color:var(--muted)">Suivez-nous sur les réseaux :</p>
        <div style="display:flex;gap:10px;margin-top:8px">
          <a href="https://tiktok.com" target="_blank" class="btn btn-outline" style="padding:8px 14px;font-size:11px">TikTok</a>
          <a href="https://facebook.com" target="_blank" class="btn btn-outline" style="padding:8px 14px;font-size:11px">Facebook</a>
          <a href="https://instagram.com" target="_blank" class="btn btn-outline" style="padding:8px 14px;font-size:11px">Instagram</a>
        </div>
      </div>
    `,
    bodyEn: `
      <div class="modal-contact-grid">
        <div class="modal-contact-item">
          <strong>📞 Phone / WhatsApp</strong>
          <span>+212 6 00 00 00 00</span>
        </div>
        <div class="modal-contact-item">
          <strong>✉️ Email</strong>
          <span>contact@ha-lingerie.ma</span>
        </div>
        <div class="modal-contact-item">
          <strong>📍 Address</strong>
          <span>Agadir, Morocco</span>
        </div>
        <div class="modal-contact-item">
          <strong>🕐 Hours</strong>
          <span>Mon–Sat: 9am–7pm</span>
        </div>
      </div>
      <h4>Order or ask a question</h4>
      <p>For a quick response and personalized service, contact us directly on WhatsApp. We deliver across Morocco and respond within 2 hours.</p>
      <a href="https://wa.me/212600000000?text=Hello+H%26A+!+I+have+a+question." target="_blank" class="btn btn-whatsapp" style="display:inline-flex">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
        Write on WhatsApp
      </a>
      <div style="margin-top:20px">
        <p style="font-size:13px;color:var(--muted)">Follow us:</p>
        <div style="display:flex;gap:10px;margin-top:8px">
          <a href="https://tiktok.com" target="_blank" class="btn btn-outline" style="padding:8px 14px;font-size:11px">TikTok</a>
          <a href="https://facebook.com" target="_blank" class="btn btn-outline" style="padding:8px 14px;font-size:11px">Facebook</a>
          <a href="https://instagram.com" target="_blank" class="btn btn-outline" style="padding:8px 14px;font-size:11px">Instagram</a>
        </div>
      </div>
    `
  },
  fidelite: {
    title: 'Programme Fidélité',
    titleEn: 'Loyalty Program',
    body: `
      <div class="modal-tag">⭐ H&A Fidélité</div>
      <h4>Comment ça marche ?</h4>
      <p>À chaque commande, vous cumulez des points de fidélité. Plus vous commandez, plus vous êtes récompensée !</p>
      <table class="modal-table">
        <thead><tr><th>Achat</th><th>Points gagnés</th></tr></thead>
        <tbody>
          <tr><td>200 MAD</td><td>20 points</td></tr>
          <tr><td>500 MAD</td><td>60 points</td></tr>
          <tr><td>1 000 MAD</td><td>150 points</td></tr>
        </tbody>
      </table>
      <h4>Vos niveaux</h4>
      <ul>
        <li>🥈 <strong>Silver</strong> — dès 200 pts · -5% sur votre prochaine commande</li>
        <li>🥇 <strong>Gold</strong> — dès 600 pts · -10% · livraison prioritaire · accès avant-premières</li>
        <li>💎 <strong>Platinum</strong> — dès 1 500 pts · -20% · ventes privées · coffret anniversaire offert</li>
      </ul>
      <h4>Comment rejoindre ?</h4>
      <p>Mentionnez "programme fidélité" lors de votre première commande WhatsApp. Nous créons votre compte et vous informons de votre solde après chaque achat.</p>
      <a href="https://wa.me/212600000000?text=Bonjour+H%26A+!+Je+voudrais+rejoindre+le+programme+fid%C3%A9lit%C3%A9." target="_blank" class="btn btn-whatsapp" style="display:inline-flex;margin-top:16px">Rejoindre maintenant</a>
    `,
    bodyEn: `
      <div class="modal-tag">⭐ H&A Loyalty</div>
      <h4>How does it work?</h4>
      <p>With every order, you earn loyalty points. The more you shop, the more rewards you get!</p>
      <table class="modal-table">
        <thead><tr><th>Purchase</th><th>Points earned</th></tr></thead>
        <tbody>
          <tr><td>200 MAD</td><td>20 points</td></tr>
          <tr><td>500 MAD</td><td>60 points</td></tr>
          <tr><td>1,000 MAD</td><td>150 points</td></tr>
        </tbody>
      </table>
      <h4>Your levels</h4>
      <ul>
        <li>🥈 <strong>Silver</strong> — from 200 pts · -5% on your next order</li>
        <li>🥇 <strong>Gold</strong> — from 600 pts · -10% · priority delivery · early access</li>
        <li>💎 <strong>Platinum</strong> — from 1,500 pts · -20% · private sales · free birthday gift set</li>
      </ul>
      <h4>How to join?</h4>
      <p>Mention "loyalty program" with your first WhatsApp order. We'll create your account and update your points balance after each purchase.</p>
      <a href="https://wa.me/212600000000?text=Hello+H%26A+!+I+would+like+to+join+the+loyalty+program." target="_blank" class="btn btn-whatsapp" style="display:inline-flex;margin-top:16px">Join now</a>
    `
  },
  cadeau: {
    title: 'Coffrets & Bons Cadeaux',
    titleEn: 'Gift Cards & Sets',
    body: `
      <div class="modal-tag">🎁 L'idée cadeau parfaite</div>
      <h4>Coffrets Lingerie Luxe</h4>
      <p>Nos coffrets cadeaux sont préparés avec soin : papier de soie, ruban satiné, carte personnalisée manuscrite. Un emballage aussi beau que son contenu.</p>
      <ul>
        <li><strong>Coffret Découverte</strong> — 1 pièce au choix · emballage luxe · 200–350 MAD</li>
        <li><strong>Coffret Duo</strong> — 2 pièces coordonnées · 400–600 MAD</li>
        <li><strong>Coffret Premium</strong> — sélection haut de gamme · 700–1 200 MAD</li>
        <li><strong>Coffret Mariée</strong> — set bridal complet · carte personnalisée · 800–1 500 MAD</li>
      </ul>
      <h4>🎲 Coffret Mystère H&A</h4>
      <p style="background:linear-gradient(135deg,#fdfaf5,#faf5ec);border:1.5px solid #e6d9c8;border-radius:12px;padding:14px 16px;line-height:1.75;margin-bottom:10px">
        <strong>Laissez-nous choisir pour vous !</strong><br>
        Notre équipe sélectionne avec soin une ou plusieurs pièces lingerie selon votre budget et votre morphologie. Une surprise luxueuse, emballée avec amour, envoyée directement chez vous.
      </p>
      <ul>
        <li>✦ Vous indiquez votre <strong>budget</strong> et votre <strong>taille</strong></li>
        <li>✦ Nous choisissons des pièces en accord avec vos goûts (couleur, style si précisé)</li>
        <li>✦ Emballage luxe — papier de soie, ruban satiné, carte personnalisée</li>
        <li>✦ Livraison partout au Maroc · 2–4 jours</li>
        <li>✦ <strong>Coffret Mystère Solo</strong> — à partir de 250 MAD</li>
        <li>✦ <strong>Coffret Mystère Duo</strong> — à partir de 450 MAD</li>
        <li>✦ <strong>Coffret Mystère Premium</strong> — à partir de 800 MAD</li>
      </ul>

      <h4>Bon Cadeau</h4>
      <p>Vous ne savez pas quelle pièce choisir ? Le bon cadeau H&A est la solution parfaite. Disponible de 200 MAD à 2 000 MAD, valable <strong>1 an</strong>.</p>
      <ul>
        <li>✓ Valable sur toute la collection</li>
        <li>✓ Envoyé par WhatsApp instantanément</li>
        <li>✓ Personnalisé avec un message de votre choix</li>
      </ul>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">
        <a href="https://wa.me/212600000000?text=Bonjour+H%26A+!+Je+voudrais+commander+un+Coffret+Myst%C3%A8re+%F0%9F%8E%B2" target="_blank" class="btn btn-whatsapp" style="display:inline-flex;justify-content:center">🎲 Commander un Coffret Mystère</a>
        <a href="https://wa.me/212600000000?text=Bonjour+H%26A+!+Je+voudrais+commander+un+coffret+cadeau." target="_blank" class="btn btn-outline" style="display:inline-flex;justify-content:center">🎁 Autres coffrets & bons cadeaux</a>
      </div>
    `,
    bodyEn: `
      <div class="modal-tag">🎁 The perfect gift idea</div>
      <h4>Luxury Lingerie Gift Sets</h4>
      <p>Our gift sets are carefully prepared: tissue paper, satin ribbon, personalized handwritten card. Packaging as beautiful as what's inside.</p>
      <ul>
        <li><strong>Discovery Set</strong> — 1 piece of your choice · luxury packaging · 200–350 MAD</li>
        <li><strong>Duo Set</strong> — 2 coordinated pieces · 400–600 MAD</li>
        <li><strong>Premium Set</strong> — top-of-the-range selection · 700–1,200 MAD</li>
        <li><strong>Bridal Set</strong> — complete bridal set · personalized card · 800–1,500 MAD</li>
      </ul>
      <h4>🎲 H&A Mystery Box</h4>
      <p style="background:linear-gradient(135deg,#fdfaf5,#faf5ec);border:1.5px solid #e6d9c8;border-radius:12px;padding:14px 16px;line-height:1.75;margin-bottom:10px">
        <strong>Let us choose for you!</strong><br>
        Our team carefully selects one or more lingerie pieces based on your budget and measurements. A luxurious surprise, wrapped with love, sent directly to you.
      </p>
      <ul>
        <li>✦ You tell us your <strong>budget</strong> and your <strong>size</strong></li>
        <li>✦ We select pieces that match your taste (colour, style if specified)</li>
        <li>✦ Luxury packaging — tissue paper, satin ribbon, personalized card</li>
        <li>✦ Delivery across Morocco · 2–4 days</li>
        <li>✦ <strong>Mystery Box Solo</strong> — from 250 MAD</li>
        <li>✦ <strong>Mystery Box Duo</strong> — from 450 MAD</li>
        <li>✦ <strong>Mystery Box Premium</strong> — from 800 MAD</li>
      </ul>

      <h4>Gift Card</h4>
      <p>Not sure which piece to choose? The H&A gift card is the perfect solution. Available from 200 MAD to 2,000 MAD, valid for <strong>1 year</strong>.</p>
      <ul>
        <li>✓ Valid on the entire collection</li>
        <li>✓ Sent instantly via WhatsApp</li>
        <li>✓ Personalized with a message of your choice</li>
      </ul>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">
        <a href="https://wa.me/212600000000?text=Hello+H%26A+!+I+would+like+to+order+a+Mystery+Box+%F0%9F%8E%B2" target="_blank" class="btn btn-whatsapp" style="display:inline-flex;justify-content:center">🎲 Order a Mystery Box</a>
        <a href="https://wa.me/212600000000?text=Hello+H%26A+!+I+would+like+to+order+a+gift+set." target="_blank" class="btn btn-outline" style="display:inline-flex;justify-content:center">🎁 Other gift sets & vouchers</a>
      </div>
    `
  },
  'journal-ha': {
    title: 'Le Journal H&A',
    titleEn: 'H&A Journal',
    body: `
      <div class="modal-tag">✦ Conseils · Tendances · Guides</div>
      <h4>Nos derniers articles</h4>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">📐 Comment choisir la bonne taille de soutien-gorge ? <span>+</span></div>
        <div class="faq-a">Mesurez votre tour de poitrine et votre tour de buste, puis consultez notre guide des tailles. En cas de doute, notre équipe vous guide sur WhatsApp avec des conseils personnalisés selon vos mensurations exactes.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">✨ Les tendances lingerie de la saison <span>+</span></div>
        <div class="faq-a">La saison mise sur la dentelle florale en relief, les couleurs terracotta et nude caramel, et les silhouettes balconnet. Les ensembles coordonnés restent la pièce incontournable du moment.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">👰 Guide lingerie de mariée — tout ce qu'il faut savoir <span>+</span></div>
        <div class="faq-a">Choisissez votre lingerie en fonction de votre robe : bustier → sans bretelles, dos nu → bralette dos nu, princesse → plongeant ivoire. Commandez 3–4 semaines avant le jour J.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">🌸 Bien entretenir sa lingerie : les règles d'or <span>+</span></div>
        <div class="faq-a">Privilégiez le lavage à la main à 30°C avec un détergent doux. En machine, utilisez toujours un filet de lavage. Ne jamais mettre au sèche-linge. Rangez les soutiens-gorge à plat, bonnets non retournés.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">🩸 Lingerie menstruelle : pourquoi adopter ? <span>+</span></div>
        <div class="faq-a">La lingerie menstruelle H&A remplace les protections jetables grâce à sa technologie d'absorption multicouche. Confortable, écologique et économique — une révolution douce pour votre bien-être quotidien.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">🤱 Lingerie maternité & allaitement : nos conseils <span>+</span></div>
        <div class="faq-a">Pour l'allaitement, privilégiez des soutiens-gorge sans armatures, avec clips d'ouverture facile, en matière douce et respirante. Pour la grossesse, optez pour des modèles extensibles qui évoluent avec votre silhouette.</div>
      </div>
    `,
    bodyEn: `
      <div class="modal-tag">✦ Advice · Trends · Guides</div>
      <h4>Our latest articles</h4>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">📐 How to choose the right bra size? <span>+</span></div>
        <div class="faq-a">Measure your underbust and bust circumference, then check our size guide. If in doubt, our team will advise you on WhatsApp with personalized guidance based on your exact measurements.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">✨ This season's lingerie trends <span>+</span></div>
        <div class="faq-a">This season focuses on raised floral lace, terracotta and nude caramel colors, and balconette silhouettes. Coordinated sets remain the must-have piece right now.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">👰 Bridal lingerie guide — everything you need to know <span>+</span></div>
        <div class="faq-a">Choose your lingerie based on your dress: strapless → strapless bra, open-back → backless bralette, princess → ivory plunge bra. Order 3–4 weeks before your big day.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">🌸 How to care for your lingerie: the golden rules <span>+</span></div>
        <div class="faq-a">Hand washing at 30°C with a gentle detergent is best. For machine washing, always use a mesh laundry bag. Never tumble dry. Store bras flat with cups not inverted.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">🩸 Period underwear: why make the switch? <span>+</span></div>
        <div class="faq-a">H&A period underwear replaces disposable protection with multi-layer absorption technology. Comfortable, eco-friendly and economical — a gentle revolution for your daily wellbeing.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">🤱 Maternity & nursing lingerie: our advice <span>+</span></div>
        <div class="faq-a">For nursing, choose bras with no underwires, easy-open clips, in soft breathable fabric. For pregnancy, opt for stretchy styles that adapt to your changing silhouette.</div>
      </div>
    `
  },
  'tous-les-avis': {
    title: 'Avis clients (63)',
    titleEn: 'Customer Reviews (63)',
    body: `
      <div class="modal-tag">★ 4.9 · 63 avis vérifiés</div>
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:18px">
        <div style="font-size:48px;font-weight:300;font-family:var(--serif);line-height:1">4.9</div>
        <div>
          <div style="color:#b8935a;font-size:20px;letter-spacing:2px">★★★★★</div>
          <div style="font-size:12px;color:#7a7169;margin-top:4px">Basé sur 63 achats vérifiés</div>
          <div style="display:flex;flex-direction:column;gap:3px;margin-top:8px;font-size:11px">
            <div style="display:flex;align-items:center;gap:6px">★★★★★<div style="background:#e6e0d8;border-radius:4px;height:6px;width:100px"><div style="background:#b8935a;border-radius:4px;height:6px;width:88px"></div></div><span style="color:#7a7169">81%</span></div>
            <div style="display:flex;align-items:center;gap:6px">★★★★☆<div style="background:#e6e0d8;border-radius:4px;height:6px;width:100px"><div style="background:#b8935a;border-radius:4px;height:6px;width:13px"></div></div><span style="color:#7a7169">13%</span></div>
            <div style="display:flex;align-items:center;gap:6px">★★★☆☆<div style="background:#e6e0d8;border-radius:4px;height:6px;width:100px"><div style="background:#b8935a;border-radius:4px;height:6px;width:6px"></div></div><span style="color:#7a7169">6%</span></div>
          </div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px">
        ${[
          { av:'NB', name:'Nadia B.', loc:'Casablanca · 90B', stars:'★★★★★', date:'Mai 2026',    txt:'"La qualité est exceptionnelle. La dentelle est délicate et le maintien est parfait. Je commande depuis Casablanca et la livraison arrive en 2 jours — impeccable !"' },
          { av:'SR', name:'Salma R.', loc:'Marrakech · 85B',  stars:'★★★★★', date:'Avril 2026',  txt:'"J\'ai acheté le set bridal pour mon mariage et tout le monde était sous le charme. L\'emballage cadeau est magnifique, on se sent vraiment chouchoutée."' },
          { av:'FZ', name:'Fatima Z.',loc:'Rabat · 90C',      stars:'★★★★★', date:'Avril 2026',  txt:'"Enfin une marque marocaine qui comprend vraiment la femme moderne. Des coupes flatteuses, des matières nobles. H&A c\'est ma nouvelle addiction !"' },
          { av:'IM', name:'Ines M.',  loc:'Agadir · 95C',     stars:'★★★★★', date:'Mars 2026',   txt:'"Le kimono en satin est divin. Je l\'ai porté lors de ma lune de miel et je me suis sentie une vraie déesse. La matière est douce comme un nuage, merci H&A !"' },
          { av:'HA', name:'Houria A.',loc:'Fès · 95A',        stars:'★★★★★', date:'Mars 2026',   txt:'"Commande reçue en 2 jours seulement ! Emballage luxueux avec du papier de soie et une carte parfumée. Le produit est à la hauteur. Je recommande à 100% !"' },
          { av:'LO', name:'Loubna O.',loc:'Tanger · 90B',     stars:'★★★★☆', date:'Mars 2026',   txt:'"Très beau produit. La dentelle est délicate et jolie. Je retire une étoile car le rouge n\'était pas disponible dans ma taille, mais j\'ai pris le bordeaux et c\'est magnifique aussi !"' },
          { av:'RB', name:'Rim B.',   loc:'Agadir · 85B',     stars:'★★★★★', date:'Fév. 2026',   txt:'"Je cherchais depuis longtemps un soutien-gorge confortable et élégant à la fois. H&A l\'a fait ! Les bretelles sont solides et la dentelle résiste au lavage. Parfait !"' },
          { av:'HK', name:'Hanae K.', loc:'Kénitra · 80B',    stars:'★★★★★', date:'Fév. 2026',   txt:'"Première commande en ligne et je suis bluffée. Le produit correspond exactement aux photos, la qualité est top et le parfum du papier de soie dans l\'emballage est un vrai luxe."' },
          { av:'ZM', name:'Zineb M.', loc:'Meknès · 90B',     stars:'★★★★★', date:'Jan. 2026',   txt:'"Body dentelle reçu en parfait état. J\'avais peur de la taille mais il correspond bien au guide. Très confortable et joliment coupé. Je recommande vivement !"' },
          { av:'MA', name:'Meriem A.',loc:'El Jadida · 85C',  stars:'★★★★☆', date:'Jan. 2026',   txt:'"Très satisfaite de mon achat. La qualité est au rendez-vous et le service client super réactif sur WhatsApp. J\'enlève une étoile pour le délai légèrement plus long que prévu."' },
        ].map(r => `
          <div style="background:#fff;border:1px solid #e6e0d8;border-radius:12px;padding:14px 16px">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
              <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#b8935a,#d4aa78);display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:12px;color:#fff;flex-shrink:0">${r.av}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:12.5px;font-weight:500;color:#0d0d0d">${r.name}</div>
                <div style="font-size:11px;color:#7a7169">${r.loc}</div>
              </div>
              <div style="text-align:right;flex-shrink:0">
                <div style="color:#b8935a;font-size:13px">${r.stars}</div>
                <div style="font-size:10px;color:#7a7169;margin-top:2px">Achat vérifié · ${r.date}</div>
              </div>
            </div>
            <p style="font-size:12.5px;color:#1c1c1c;line-height:1.65">${r.txt}</p>
          </div>
        `).join('')}
      </div>
    `,
    bodyEn: `
      <div class="modal-tag">★ 4.9 · 63 verified reviews</div>
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:18px">
        <div style="font-size:48px;font-weight:300;font-family:var(--serif);line-height:1">4.9</div>
        <div>
          <div style="color:#b8935a;font-size:20px;letter-spacing:2px">★★★★★</div>
          <div style="font-size:12px;color:#7a7169;margin-top:4px">Based on 63 verified purchases</div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px">
        ${[
          { av:'NB', name:'Nadia B.', loc:'Casablanca · 90B', stars:'★★★★★', date:'May 2026',   txt:'"Exceptional quality. The lace is delicate and the support is perfect. I order from Casablanca and delivery arrives in 2 days — flawless!"' },
          { av:'SR', name:'Salma R.', loc:'Marrakech · 85B',  stars:'★★★★★', date:'Apr. 2026',  txt:'"I bought the bridal set for my wedding and everyone was captivated. The gift packaging is beautiful, you really feel spoilt."' },
          { av:'FZ', name:'Fatima Z.',loc:'Rabat · 90C',      stars:'★★★★★', date:'Apr. 2026',  txt:'"Finally a Moroccan brand that truly understands the modern woman. Flattering cuts, noble materials. H&A is my new addiction!"' },
          { av:'RB', name:'Rim B.',   loc:'Agadir · 85B',     stars:'★★★★★', date:'Feb. 2026',  txt:'"I\'d been looking for a comfortable yet elegant bra for a long time. H&A did it! The straps are solid and the lace holds up in the wash. Perfect!"' },
          { av:'HK', name:'Hanae K.', loc:'Kénitra · 80B',    stars:'★★★★★', date:'Feb. 2026',  txt:'"First online order and I\'m blown away. The product matches the photos exactly, quality is great and the scented tissue paper in the packaging feels truly luxurious."' },
        ].map(r => `
          <div style="background:#fff;border:1px solid #e6e0d8;border-radius:12px;padding:14px 16px">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
              <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#b8935a,#d4aa78);display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:12px;color:#fff;flex-shrink:0">${r.av}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:12.5px;font-weight:500;color:#0d0d0d">${r.name}</div>
                <div style="font-size:11px;color:#7a7169">${r.loc}</div>
              </div>
              <div style="text-align:right;flex-shrink:0">
                <div style="color:#b8935a;font-size:13px">${r.stars}</div>
                <div style="font-size:10px;color:#7a7169;margin-top:2px">Verified purchase · ${r.date}</div>
              </div>
            </div>
            <p style="font-size:12.5px;color:#1c1c1c;line-height:1.65">${r.txt}</p>
          </div>
        `).join('')}
      </div>
    `,
  },
  'politique-retour': {
    title: 'Politique d\'échange',
    titleEn: 'Exchange Policy',
    body: `
      <div class="modal-tag">🔄 H&A Lingerie — Politique d'échange</div>

      <h4>Quand peut-on faire un échange ?</h4>
      <ul>
        <li>Taille incorrecte — l'article ne vous convient pas</li>
        <li>Défaut de fabrication constaté à la réception</li>
        <li>Article reçu différent de celui commandé</li>
      </ul>

      <h4>Conditions pour bénéficier d'un échange</h4>
      <ul>
        <li>Demande faite dans les <strong>7 jours</strong> suivant la réception</li>
        <li>Article non porté, non lavé, dans son <strong>emballage d'origine</strong></li>
        <li>Étiquettes encore attachées</li>
        <li>Culottes et slips : échangeables uniquement en cas de défaut de fabrication</li>
      </ul>

      <h4>Comment faire une demande d'échange ?</h4>
      <ul>
        <li>Contactez-nous sur <strong>WhatsApp</strong> avec votre numéro de commande</li>
        <li>Précisez la référence de l'article et la taille/couleur souhaitée</li>
        <li>Notre équipe confirme la disponibilité sous <strong>24h</strong></li>
        <li>Renvoyez l'article — nous vous envoyons le nouvel article dès réception</li>
      </ul>

      <h4>Articles non échangeables</h4>
      <ul>
        <li>Articles soldés ou en promotion (sauf défaut de fabrication)</li>
        <li>Articles personnalisés ou sur commande spéciale</li>
        <li>Articles portant des traces d'utilisation</li>
      </ul>

      <h4>Frais d'échange</h4>
      <ul>
        <li><strong>Défaut de fabrication :</strong> échange et livraison pris en charge par H&A</li>
        <li><strong>Mauvaise taille ou changement :</strong> frais de renvoi à la charge de la cliente</li>
        <li>La livraison du nouvel article est <strong>offerte</strong> pour le premier échange</li>
      </ul>

      <p style="margin-top:16px;padding:12px 14px;background:#f8f6f3;border-radius:10px;font-size:12.5px;line-height:1.7">
        📞 Pour initier un échange, contactez-nous :<br>
        <strong>WhatsApp :</strong> disponible 7j/7 · réponse sous 2h<br>
        <strong>Email :</strong> contact@ha-lingerie.ma
      </p>
    `,
    bodyEn: `
      <div class="modal-tag">🔄 H&A Lingerie — Exchange Policy</div>

      <h4>When can you request an exchange?</h4>
      <ul>
        <li>Wrong size — the item doesn't fit</li>
        <li>Manufacturing defect noticed upon receipt</li>
        <li>Item received different from what was ordered</li>
      </ul>

      <h4>Conditions for an exchange</h4>
      <ul>
        <li>Request made within <strong>7 days</strong> of receiving the order</li>
        <li>Item unworn, unwashed, in its <strong>original packaging</strong></li>
        <li>Tags still attached</li>
        <li>Panties and briefs: exchangeable only in case of manufacturing defect</li>
      </ul>

      <h4>How to request an exchange?</h4>
      <ul>
        <li>Contact us on <strong>WhatsApp</strong> with your order number</li>
        <li>Specify the item reference and the desired size/colour</li>
        <li>Our team confirms availability within <strong>24h</strong></li>
        <li>Send the item back — we ship the new item upon receipt</li>
      </ul>

      <h4>Non-exchangeable items</h4>
      <ul>
        <li>Sale or promotional items (except manufacturing defect)</li>
        <li>Customized or special-order items</li>
        <li>Items showing signs of use</li>
      </ul>

      <h4>Exchange fees</h4>
      <ul>
        <li><strong>Manufacturing defect:</strong> exchange and delivery covered by H&A</li>
        <li><strong>Wrong size or preference change:</strong> return shipping at customer's expense</li>
        <li>Delivery of the new item is <strong>free</strong> for the first exchange</li>
      </ul>

      <p style="margin-top:16px;padding:12px 14px;background:#f8f6f3;border-radius:10px;font-size:12.5px;line-height:1.7">
        📞 To initiate an exchange, contact us:<br>
        <strong>WhatsApp:</strong> available 7 days/week · reply within 2h<br>
        <strong>Email:</strong> contact@ha-lingerie.ma
      </p>
    `,
  },
  suivi: {
    title: 'Suivi de Commande',
    titleEn: 'Order Tracking',
    body: `
      <div class="modal-tag">📦 Où est ma commande ?</div>

      <h4>Comment fonctionne le suivi chez H&A ?</h4>
      <p>Le suivi de votre commande se fait directement via <strong>WhatsApp</strong>. Notre équipe vous contacte à chaque étape importante :</p>
      <ul>
        <li>✅ <strong>Confirmation</strong> — message WhatsApp dans les 2h après votre commande</li>
        <li>📦 <strong>Préparation</strong> — votre colis est préparé avec soin sous 24 à 48h</li>
        <li>🚚 <strong>Expédition</strong> — vous êtes avertie dès que votre colis est remis au livreur</li>
        <li>🏠 <strong>Livraison</strong> — le livreur vous contacte avant de passer</li>
      </ul>

      <h4>Délais de livraison</h4>
      <ul>
        <li>🚚 <strong>Maroc entier</strong> — 2 à 4 jours ouvrables</li>
        <li>📍 <strong>Agadir & environs</strong> — livraison le jour même possible (nous contacter)</li>
      </ul>

      <h4>Vous n'avez pas eu de nouvelles ?</h4>
      <p>Contactez-nous sur WhatsApp avec votre <strong>nom</strong> et la <strong>date de votre commande</strong>. Notre équipe vérifie le statut immédiatement et vous répond sous 2h.</p>

      <h4>Modifier ou annuler</h4>
      <p>Toute modification ou annulation doit être demandée dans les <strong>2 heures</strong> suivant la commande, avant l'expédition.</p>

      <a href="https://wa.me/212600000000?text=Bonjour+H%26A+!+Je+voudrais+suivre+ma+commande." target="_blank" class="btn btn-whatsapp" style="display:inline-flex;margin-top:16px">
        Contacter notre équipe sur WhatsApp
      </a>
    `,
    bodyEn: `
      <div class="modal-tag">📦 Where is my order?</div>

      <h4>How does tracking work at H&A?</h4>
      <p>Your order is tracked directly via <strong>WhatsApp</strong>. Our team contacts you at every important stage:</p>
      <ul>
        <li>✅ <strong>Confirmation</strong> — WhatsApp message within 2h of your order</li>
        <li>📦 <strong>Preparation</strong> — your parcel is carefully prepared within 24 to 48h</li>
        <li>🚚 <strong>Dispatch</strong> — you are notified as soon as your parcel is handed to the courier</li>
        <li>🏠 <strong>Delivery</strong> — the courier contacts you before dropping off</li>
      </ul>

      <h4>Delivery times</h4>
      <ul>
        <li>🚚 <strong>All Morocco</strong> — 2 to 4 business days</li>
        <li>📍 <strong>Agadir & surroundings</strong> — same-day delivery possible (contact us)</li>
      </ul>

      <h4>No news yet?</h4>
      <p>Contact us on WhatsApp with your <strong>name</strong> and <strong>order date</strong>. Our team checks the status immediately and replies within 2h.</p>

      <h4>Modify or cancel</h4>
      <p>Any modification or cancellation must be requested within <strong>2 hours</strong> of placing the order, before dispatch.</p>

      <a href="https://wa.me/212600000000?text=Hello+H%26A+!+I+would+like+to+track+my+order." target="_blank" class="btn btn-whatsapp" style="display:inline-flex;margin-top:16px">
        Contact our team on WhatsApp
      </a>
    `
  }
};

function openModal(type) {
  closeCart(); closeFavDrawer();
  const data = MODALS[type];
  if (!data) return;
  const title = (currentLang === 'en' && data.titleEn) ? data.titleEn : data.title;
  const body  = (currentLang === 'en' && data.bodyEn)  ? data.bodyEn  : data.body;
  let overlay = document.getElementById('mainModal');
  const isNew = !overlay;
  if (isNew) {
    overlay = document.createElement('div');
    overlay.id = 'mainModal';
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
  }
  overlay.dataset.modalType = type;
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3>${title}</h3>
        <button class="icon-btn" onclick="closeModal()">✕</button>
      </div>
      <div class="modal-body">${body}</div>
    </div>`;
  /* Mettre à jour tous les liens WA avec le vrai numéro depuis la config */
  _patchWa(overlay);
  if (isNew) {
    requestAnimationFrame(() => overlay.classList.add('open'));
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    activeModal = overlay;
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  if (!activeModal) return;
  activeModal.classList.remove('open');
  setTimeout(() => { activeModal?.remove(); activeModal = null; }, 300);
  document.body.style.overflow = '';
}

function toggleFaq(el) {
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-q').forEach(q => {
    q.classList.remove('open');
    q.nextElementSibling?.classList.remove('open');
  });
  if (!isOpen) {
    el.classList.add('open');
    el.nextElementSibling?.classList.add('open');
  }
}

// Handle data-modal clicks (footer buttons, journal articles)
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-modal]');
  if (el) {
    e.preventDefault();
    openModal(el.dataset.modal);
  }
});

// ===== NEWSLETTER =====
document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  showToast(currentLang === 'en'
    ? `✓ Thank you! Subscribed with ${input.value}`
    : `✓ Merci ! Vous êtes inscrite avec ${input.value}`);
  input.value = '';
});

// ===== TOAST =====
const toast = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== SCROLL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .journal-card, .testimonial-card, .editorial-item, .stat-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(22px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});

// ===== INIT =====
updateCartBadge();
updateWishlistBadge();
syncWishlistButtons();
renderCart();
