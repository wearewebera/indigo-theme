/**
 * Cookie Consent Module for Indigo Theme V2
 * Modern replacement for the legacy cookie.js library
 */

IndigoTheme.registerModule('cookieConsent', {
  config: {
    cookieName: 'indigo-cookie-consent',
    expiryDays: 30,
    domain: window.location.hostname
  },
  
  init() {
    // Check if consent was already given
    if (this.hasConsent()) {
      this.loadScripts();
      return;
    }
    
    // Show cookie banner if not consented
    this.showBanner();
  },
  
  /**
   * Check if user has given consent
   */
  hasConsent() {
    return this.getCookie(this.config.cookieName) === 'accepted';
  },
  
  /**
   * Show the cookie consent banner
   */
  showBanner() {
    const banner = document.getElementById('cookie-consent');
    if (!banner) return;
    
    // Remove d-none class to show banner
    banner.classList.remove('d-none');
    
    // Setup event listeners
    const acceptBtn = banner.querySelector('[data-cookie-accept]');
    const rejectBtn = banner.querySelector('[data-cookie-reject]');
    
    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => this.acceptCookies());
    }
    
    if (rejectBtn) {
      rejectBtn.addEventListener('click', () => this.rejectCookies());
    }
  },
  
  /**
   * Accept cookies and load scripts
   */
  acceptCookies() {
    this.setCookie(this.config.cookieName, 'accepted', this.config.expiryDays);
    this.hideBanner();
    this.loadScripts();
    
    // Dispatch event
    document.dispatchEvent(new CustomEvent('indigo:cookies:accepted'));
  },
  
  /**
   * Reject cookies
   */
  rejectCookies() {
    this.setCookie(this.config.cookieName, 'rejected', this.config.expiryDays);
    this.hideBanner();
    
    // Dispatch event
    document.dispatchEvent(new CustomEvent('indigo:cookies:rejected'));
  },
  
  /**
   * Hide the cookie banner
   */
  hideBanner() {
    const banner = document.getElementById('cookie-consent');
    if (!banner) return;
    
    banner.style.transition = 'opacity 0.3s ease';
    banner.style.opacity = '0';
    
    setTimeout(() => {
      banner.classList.add('d-none');
      banner.style.opacity = '';
    }, 300);
  },
  
  /**
   * Load tracking scripts after consent
   */
  loadScripts() {
    // Google Tag Manager
    if (window.siteConfig?.gtm?.id) {
      this.loadGTM(window.siteConfig.gtm.id);
    }
    
    // Crisp Chat
    if (window.siteConfig?.crisp?.id) {
      this.loadCrisp(window.siteConfig.crisp.id);
    }
  },
  
  /**
   * Load Google Tag Manager
   */
  loadGTM(gtmId) {
    if (window.dataLayer) return; // Already loaded
    
    window.dataLayer = window.dataLayer || [];
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);
  },
  
  /**
   * Load Crisp Chat
   */
  loadCrisp(crispId) {
    if (window.$crisp) return; // Already loaded
    
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = crispId;
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://client.crisp.chat/l.js';
    document.head.appendChild(script);
  },
  
  /**
   * Set a cookie
   */
  setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    const domain = `domain=${this.config.domain}`;
    const sameSite = 'SameSite=Lax';
    
    document.cookie = `${name}=${value};${expires};${domain};path=/;${sameSite}`;
  },
  
  /**
   * Get a cookie value
   */
  getCookie(name) {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length);
      }
    }
    
    return null;
  },
  
  /**
   * Delete a cookie
   */
  deleteCookie(name) {
    this.setCookie(name, '', -1);
  }
});