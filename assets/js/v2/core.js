/**
 * Indigo Theme V2 Core JavaScript
 * Modern, modular approach with namespace
 */

window.IndigoTheme = {
  version: '2.0.0',
  modules: {},
  
  /**
   * Initialize the theme
   */
  init() {
    console.log('Indigo Theme V2 initialized');
    
    // Initialize core functionality
    this.initNavbar();
    this.initSmoothScroll();
    this.initLazyLoading();
    
    // Initialize optional modules
    if (this.modules.cookieConsent && window.siteConfig?.cookies?.enable) {
      this.modules.cookieConsent.init();
    }
    
    if (this.modules.swiper && window.siteConfig?.swiper?.enable) {
      this.modules.swiper.init();
    }
    
    // Dispatch ready event
    document.dispatchEvent(new CustomEvent('indigo:ready'));
  },
  
  /**
   * Initialize navbar active state
   */
  initNavbar() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (!linkHref) return;
      
      // Handle exact matches and parent paths
      if (linkHref === currentPath || 
          (linkHref !== '/' && currentPath.startsWith(linkHref))) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  },
  
  /**
   * Initialize smooth scrolling for anchor links
   */
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (!target) return;
        
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  },
  
  /**
   * Initialize lazy loading for images
   */
  initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[loading="lazy"]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    }
  },
  
  /**
   * Register a module
   */
  registerModule(name, module) {
    this.modules[name] = module;
    console.log(`Module registered: ${name}`);
  },
  
  /**
   * Utility: Debounce function
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  /**
   * Utility: Check if element is in viewport
   */
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => IndigoTheme.init());
} else {
  IndigoTheme.init();
}