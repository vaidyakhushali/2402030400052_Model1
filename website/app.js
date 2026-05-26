/* ═══════════════════════════════════════
   BAKEBLISS – SHARED JS (backend + cart + utils)
═══════════════════════════════════════ */

// ── PRODUCTS DATA ──
const PRODUCTS = {
  bakeware: [
    {id:1, name:'Non-Stick Loaf Pan',       sub:'pans',      icon:'🍞', price:599, old:799,  desc:'Premium non-stick coating, uniform heat distribution. Perfect for artisan loaves.', tag:'Best Seller'},
    {id:2, name:'Muffin Tray 12-Cup',        sub:'trays',     icon:'🧁', price:449, old:549,  desc:'Heavy-gauge carbon steel with superior heat distribution. Dishwasher safe.', tag:'Best Seller'},
    {id:3, name:'Round Springform Set',      sub:'moulds',    icon:'🎂', price:699, old:899,  desc:'Set of 3 (6", 8", 10") with removable base. Leakproof clasp system.', tag:'Sale'},
    {id:4, name:'Baguette Tray',             sub:'trays',     icon:'🥖', price:379, old:null, desc:'Perforated aluminium for crispy crust. 3-loaf capacity, PFOA-free.', tag:null},
    {id:5, name:'Bundt Cake Mould',          sub:'moulds',    icon:'🍩', price:549, old:649,  desc:'Intricate Nordic design, easy-release silicone coating. 10-cup capacity.', tag:'Sale'},
    {id:6, name:'Rectangular Baking Pan',    sub:'pans',      icon:'🫓', price:329, old:null, desc:'Heavy-duty aluminised steel. Ideal for brownies, bars, and sheet cakes.', tag:null},
    {id:7, name:'Silicone Muffin Mould',     sub:'moulds',    icon:'🫐', price:249, old:null, desc:'Flexible silicone, 12 cups. Easy-release and microwave safe.', tag:'New'},
    {id:8, name:'Pizza & Cookie Sheet',      sub:'trays',     icon:'🍪', price:299, old:349,  desc:'Extra-large commercial grade sheet. Warp-resistant rolled edges.', tag:null},
    {id:9, name:'Tart & Quiche Pan',         sub:'moulds',    icon:'🥧', price:419, old:499,  desc:'Removable bottom, fluted edges. Non-stick coating. 11" diameter.', tag:'New'},
    {id:10,name:'Carbon Steel Loaf Pan',     sub:'pans',      icon:'🍫', price:349, old:null, desc:'Pre-seasoned carbon steel. Develops natural non-stick over time.', tag:null},
    {id:11,name:'Perforated Pizza Tray',     sub:'trays',     icon:'🍕', price:279, old:329,  desc:'Crisp-base perforated tray. 12" round. Dishwasher safe aluminium.', tag:'Sale'},
    {id:12,name:'Doughnut Mould 6-Hole',     sub:'moulds',    icon:'🍩', price:199, old:null, desc:'Non-stick coated steel. Makes 6 standard doughnuts at once.', tag:null},
  ],
  boxes: [
    {id:20,name:'Kraft Gift Box Set',        sub:'gift',      icon:'📦', price:349, old:null, desc:'Set of 12 premium kraft paper gift boxes with satin ribbons. Eco-friendly.', tag:'New'},
    {id:21,name:'Window Cake Box',           sub:'cake',      icon:'🎁', price:199, old:null, desc:'PVC window display boxes. Show off your creations beautifully.', tag:null},
    {id:22,name:'Cupcake Carrier 6',         sub:'cupcake',   icon:'🧁', price:249, old:299,  desc:'Holds 6 standard cupcakes securely. Transparent lid with locking clips.', tag:'Sale'},
    {id:23,name:'Macaroon Box Set',          sub:'gift',      icon:'🌸', price:179, old:null, desc:'Elegant ribbon-tied boxes for macarons. Set of 10, multiple sizes.', tag:'New'},
    {id:24,name:'Tall Cake Box 10"',         sub:'cake',      icon:'🎂', price:299, old:349,  desc:'Extra-tall 10" box for tiered cakes. Food-grade cardboard, gold foil accent.', tag:null},
    {id:25,name:'Cookie Gift Boxes',         sub:'gift',      icon:'🍪', price:149, old:null, desc:'Set of 20 mini gift boxes perfect for cookies and bonbons.', tag:null},
    {id:26,name:'Mini Cupcake Box 24',       sub:'cupcake',   icon:'🌈', price:189, old:229,  desc:'Holds 24 mini cupcakes. Clear lid for maximum display effect.', tag:'Sale'},
    {id:27,name:'Eco Kraft Cake Box',        sub:'cake',      icon:'♻️', price:219, old:null, desc:'100% recycled kraft board. Foldable, flat-pack design. Set of 6.', tag:'Eco'},
    {id:28,name:'Gold Foil Dessert Box',     sub:'gift',      icon:'✨', price:259, old:299,  desc:'Luxury gold foil finish. Magnetic closure. Perfect for premium gifts.', tag:'Premium'},
    {id:29,name:'Single Cupcake Box',        sub:'cupcake',   icon:'💝', price:99,  old:null, desc:'Individual cupcake box with insert. Kraft brown. Pack of 24.', tag:null},
  ],
  ingredients: [
    {id:40,name:'Almond Flour 1kg',          sub:'flour',     icon:'🌾', price:499, old:599,  desc:'Finely milled blanched almond flour. Perfect for gluten-free baking.', tag:'Sale'},
    {id:41,name:'Cocoa Powder 500g',         sub:'chocolate', icon:'☕', price:279, old:null, desc:'Dutch-processed dark cocoa with intense chocolate flavour. Zero additives.', tag:'Best Seller'},
    {id:42,name:'Vanilla Bean Paste',        sub:'extracts',  icon:'🌿', price:399, old:499,  desc:'Rich authentic paste with real vanilla seeds. Premium Madagascar origin.', tag:'Sale'},
    {id:43,name:'Icing Sugar Fine 1kg',      sub:'sugar',     icon:'🍬', price:189, old:null, desc:'Ultra-fine confectioners sugar. Lump-free, perfect for frostings.', tag:null},
    {id:44,name:'Dark Couverture 500g',      sub:'chocolate', icon:'🍫', price:649, old:749,  desc:'72% single-origin couverture chocolate. Professional tempering grade.', tag:'Premium'},
    {id:45,name:'Bread Flour Strong',        sub:'flour',     icon:'🌻', price:249, old:null, desc:'High-protein strong flour for artisan breads. Milled from premium wheat.', tag:null},
    {id:46,name:'Rose Water Extract',        sub:'extracts',  icon:'🌹', price:149, old:null, desc:'Food-grade pure rose water extract. Perfect for Middle-Eastern pastries.', tag:'New'},
    {id:47,name:'Muscovado Sugar',           sub:'sugar',     icon:'🍯', price:229, old:279,  desc:'Unrefined dark brown sugar with deep molasses flavour. Rich & complex.', tag:'Sale'},
    {id:48,name:'White Choc Chips',          sub:'chocolate', icon:'⚪', price:349, old:null, desc:'Premium Belgian white chocolate chips. Heat-stable for baking.', tag:null},
    {id:49,name:'Coconut Flour 750g',        sub:'flour',     icon:'🥥', price:319, old:379,  desc:'Fine coconut flour. High fibre, low carb, dairy & gluten free.', tag:'Sale'},
    {id:50,name:'Saffron Extract',           sub:'extracts',  icon:'🌼', price:599, old:null, desc:'Pure saffron extract, 5ml. Adds colour and floral aroma to bakes.', tag:'Premium'},
    {id:51,name:'Caster Sugar 1kg',          sub:'sugar',     icon:'🧂', price:139, old:159,  desc:'Fine-grain caster sugar dissolves quickly. Ideal for meringues & cakes.', tag:null},
  ]
};

// ── MOCK BACKEND ──
const DB = {
  users:    () => JSON.parse(localStorage.getItem('bb_users')   || '[]'),
  saveUsers: u => localStorage.setItem('bb_users', JSON.stringify(u)),
  session:  () => JSON.parse(localStorage.getItem('bb_sess')    || 'null'),
  saveSession: s => localStorage.setItem('bb_sess', JSON.stringify(s)),
  clearSession: () => localStorage.removeItem('bb_sess'),
  orders:   () => JSON.parse(localStorage.getItem('bb_orders')  || '[]'),
  saveOrders: o => localStorage.setItem('bb_orders', JSON.stringify(o)),
  cart:     () => JSON.parse(localStorage.getItem('bb_cart')    || '[]'),
  saveCart:  c => localStorage.setItem('bb_cart', JSON.stringify(c)),
};

const API = {
  register(first, last, email, phone, pass) {
    const users = DB.users();
    if (users.find(u => u.email === email)) return { ok: false, msg: 'Email already registered.' };
    const u = { id: Date.now(), name: first + ' ' + last, first, last, email, phone, pass };
    users.push(u); DB.saveUsers(users); DB.saveSession(u);
    return { ok: true, user: u };
  },
  login(email, pass) {
    const u = DB.users().find(u => u.email === email && u.pass === pass);
    if (!u) return { ok: false, msg: 'Invalid email or password.' };
    DB.saveSession(u); return { ok: true, user: u };
  },
  logout() { DB.clearSession(); },
  placeOrder(items, total) {
    const sess = DB.session();
    if (!sess) return { ok: false, msg: 'Please login first.' };
    const statuses = ['delivered', 'processing', 'shipped'];
    const orders = DB.orders();
    orders.unshift({
      id: 'BB' + Date.now(),
      date: new Date().toLocaleDateString('en-IN'),
      items, total, userId: sess.id,
      status: statuses[Math.floor(Math.random() * statuses.length)]
    });
    DB.saveOrders(orders); return { ok: true };
  },
  getOrders() {
    const sess = DB.session();
    if (!sess) return DB.orders().slice(0, 5); // show demo orders if not logged in
    return DB.orders().filter(o => o.userId === sess.id);
  }
};

// Seed demo data
(function seedDemos() {
  if (DB.orders().length) return;
  const demoUser = { id: 'demo', name: 'Demo Baker', first: 'Demo', last: 'Baker', email: 'demo@bakebliss.com', pass: 'demo123', phone: '9999999999' };
  DB.saveUsers([demoUser]);
  DB.saveSession(demoUser);
  DB.saveOrders([
    { id:'BB10001', date:'15/04/2026', userId:'demo', status:'delivered', total:1647, items:[{icon:'🍞',name:'Non-Stick Loaf Pan',qty:2,price:599},{icon:'🧁',name:'Muffin Tray 12-Cup',qty:1,price:449}] },
    { id:'BB10002', date:'02/05/2026', userId:'demo', status:'shipped',   total:1236, items:[{icon:'☕',name:'Cocoa Powder 500g',qty:3,price:279},{icon:'🌿',name:'Vanilla Bean Paste',qty:1,price:399}] },
    { id:'BB10003', date:'18/05/2026', userId:'demo', status:'processing',total:698,  items:[{icon:'📦',name:'Kraft Gift Box Set',qty:2,price:349}] },
  ]);
})();

// ── CART (persisted) ──
let cart = DB.cart();

function addToCart(product) {
  const ex = cart.find(i => i.id === product.id);
  if (ex) ex.qty++; else cart.push({ ...product, qty: 1 });
  DB.saveCart(cart);
  updateCartBadge();
  showToast('🛒 ' + product.name + ' added to cart!');
}
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  DB.saveCart(cart); updateCartBadge();
}
function updateQty(id, d) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) removeFromCart(id);
  else { DB.saveCart(cart); updateCartBadge(); }
}
function updateCartBadge() {
  const n = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => el.textContent = n);
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── PRODUCT CARD BUILDER ──
function buildCard(p) {
  const tagHtml = p.tag ? `<div class="prod-tag">${p.tag}</div>` : '';
  const oldHtml = p.old ? `<s>₹${p.old}</s>` : '';
  const div = document.createElement('div');
  div.className = 'prod-card reveal';
  div.innerHTML = `
    <div class="prod-thumb">${tagHtml}<span>${p.icon}</span></div>
    <div class="prod-body">
      <div class="prod-cat-label">${(p.sub || 'featured').toUpperCase()}</div>
      <div class="prod-name">${p.name}</div>
      <div class="prod-desc">${p.desc}</div>
      <div class="prod-foot">
        <div class="prod-price">₹${p.price} ${oldHtml}</div>
        <button class="add-cart-btn">Add to Cart</button>
      </div>
    </div>`;
  div.querySelector('.add-cart-btn').addEventListener('click', e => { e.stopPropagation(); addToCart(p); });
  return div;
}

function renderGrid(containerId, products, filter = 'all') {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = '';
  const list = filter === 'all' ? products : products.filter(p => p.sub === filter);
  list.forEach(p => c.appendChild(buildCard(p)));
  doReveal();
}

// ── SCROLL REVEAL ──
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); } });
}, { threshold: 0.1 });
function doReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revObs.observe(el));
}

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  document.querySelector('nav')?.classList.toggle('scrolled', window.scrollY > 50);
  doReveal();
});

// ── ON LOAD ──
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  doReveal();
  // highlight active nav link
  const cur = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === cur) a.classList.add('active');
  });
});
