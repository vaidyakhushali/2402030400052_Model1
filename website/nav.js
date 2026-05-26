/* nav.js – injects shared navbar & footer */
document.addEventListener('DOMContentLoaded', () => {
  const cur = location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
  <nav id="navbar">
    <a class="logo-nav" href="index.html">Bake<span>Bliss</span></a>
    <ul class="nav-links">
      <li><a href="index.html"       ${cur==='index.html'?'class="active"':''}>Home</a></li>
      <li><a href="bakeware.html"    ${cur==='bakeware.html'?'class="active"':''}>Bakeware</a></li>
      <li><a href="boxes.html"       ${cur==='boxes.html'?'class="active"':''}>Boxes</a></li>
      <li><a href="ingredients.html" ${cur==='ingredients.html'?'class="active"':''}>Ingredients</a></li>
      <li><a href="register.html"    ${cur==='register.html'?'class="active"':''}>Register</a></li>
      <li><a href="orders.html"      ${cur==='orders.html'?'class="active"':''}>Order History</a></li>
    </ul>
    <div class="nav-right">
      <a class="cart-nav-btn" href="cart.html">🛒 Cart <span class="cart-badge">0</span></a>
    </div>
  </nav>`;

  const footerHTML = `
  <footer>
    <div class="footer-top">
      <div>
        <div class="footer-brand">Bake<span>Bliss</span></div>
        <p class="footer-about">Premium baking supplies, packaging & ingredients delivered across India. Trusted since 2010.</p>
      </div>
      <div>
        <h5>Shop</h5>
        <ul>
          <li><a href="bakeware.html">Bakeware</a></li>
          <li><a href="boxes.html">Boxes</a></li>
          <li><a href="ingredients.html">Ingredients</a></li>
        </ul>
      </div>
      <div>
        <h5>Help</h5>
        <ul>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Shipping Info</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Track Order</a></li>
        </ul>
      </div>
      <div>
        <h5>Company</h5>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="register.html">Register</a></li>
          <li><a href="orders.html">Orders</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 BakeBliss. All rights reserved.</p>
      <div class="footer-soc">
        <a class="soc-btn" href="#">f</a>
        <a class="soc-btn" href="#">ig</a>
        <a class="soc-btn" href="#">tw</a>
      </div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});
