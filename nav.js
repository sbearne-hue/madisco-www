// Madisco Ventures — shared nav + footer injector

(function () {
  // Detect if we're in a subdirectory (advisory/)
  const inSub = window.location.pathname.includes('/advisory/');
  const root = inSub ? '../' : '';

  function navLink(href, label) {
    return `<a href="${root}${href}" class="nav-link">${label}</a>`;
  }
  function ddItem(href, label, desc) {
    return `<a href="${root}${href}" class="nav-dropdown-item"><div class="dd-label">${label}</div><div class="dd-desc">${desc}</div></a>`;
  }

  const navHTML = `
<nav class="site-nav" id="site-nav">
  <div class="nav-inner">
    <a href="${root}index.html" class="nav-logo">Madisco<span>.</span></a>

    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-dropdown-btn">
          Portfolio
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="nav-dropdown-menu">
          <div class="nav-dropdown-inner">
            ${ddItem('portfolio.html', 'All Holdings', 'Pre-Series A bets across sectors')}
            ${ddItem('portfolio.html#tech', 'Tech &amp; Data', 'Infra, AI, dev tools')}
            ${ddItem('portfolio.html#foodbev', 'Food &amp; Beverage', 'Brands and supply')}
          </div>
        </div>
      </div>

      <div class="nav-dropdown">
        <button class="nav-dropdown-btn">
          Advisory
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="nav-dropdown-menu">
          <div class="nav-dropdown-inner">
            ${ddItem('advisory/technology.html', 'Technology', 'Cyber, architecture, AI deployment')}
            ${ddItem('advisory/media.html', 'Media', 'Media Planning, Programmatic, Agentic')}
            ${ddItem('advisory/revenue.html', 'Revenue', 'GTM, sales eng, rev ops')}
          </div>
        </div>
      </div>

      ${navLink('about.html', 'About')}
    </div>

    <div style="display:flex;align-items:center;gap:0.75rem;">
      <button class="nav-mobile-toggle" id="mobile-toggle" aria-label="Toggle menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
      <a href="${root}contact.html" class="nav-cta">Contact</a>
    </div>
  </div>

  <div class="mobile-nav" id="mobile-nav">
    <a href="${root}portfolio.html">Portfolio</a>
    <a href="${root}portfolio.html#tech" class="mobile-sub">Tech &amp; Data</a>
    <a href="${root}portfolio.html#foodbev" class="mobile-sub">Food &amp; Beverage</a>
    <a href="${root}advisory/technology.html">Advisory — Technology</a>
    <a href="${root}advisory/media.html">Advisory — Media</a>
    <a href="${root}advisory/revenue.html">Advisory — Revenue</a>
    <a href="${root}about.html">About</a>
    <a href="${root}contact.html" style="color:var(--pop);font-weight:600;">Contact</a>
  </div>
</nav>`;

  const footerHTML = `
<footer class="site-footer">
  <div class="footer-inner">
    <div>
      <div class="footer-logo">Madisco<span>.</span></div>
    </div>
    <div>
      <div class="footer-explore-label">Explore</div>
      <ul class="footer-links">
        <li><a href="${root}portfolio.html">Portfolio</a></li>
        <li><a href="${root}advisory/technology.html">Advisory</a></li>
        <li><a href="${root}about.html">About</a></li>
        <li><a href="${root}contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-bottom-inner">
      <span>&copy; ${new Date().getFullYear()} Madisco Ventures</span>
      <span>Made in SF</span>
    </div>
  </div>
</footer>`;

  const navEl = document.getElementById('site-nav-placeholder');
  if (navEl) navEl.outerHTML = navHTML;

  const footerEl = document.getElementById('site-footer-placeholder');
  if (footerEl) footerEl.outerHTML = footerHTML;

  // Mobile toggle (attach after DOM update)
  document.addEventListener('click', function(e) {
    if (e.target.closest('#mobile-toggle')) {
      document.getElementById('mobile-nav').classList.toggle('open');
    }
  });
})();
