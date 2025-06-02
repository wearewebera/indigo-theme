# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Indigo Theme - a Hugo theme built for the Webera ecosystem. It's a modern, responsive theme using Bootstrap 5.3.3, SCSS, and Hugo Modules.

## Development Commands

```bash
# Install dependencies
npm install

# Update Hugo modules
npm run update-modules

# Development servers
npm run dev         # Run example site locally
npm run dev:docs    # Run documentation site locally

# Build for production
npm run build       # Build example site
npm run build:docs  # Build documentation site

# Code quality
npm run lint:scss   # Lint and fix SCSS files
npm run lint:js     # Lint and fix JavaScript files
npm run format      # Format all files with Prettier
npm run test        # Run all linters and format check
```

## Architecture Overview

### Hugo Theme Structure
The theme follows standard Hugo conventions with these key directories:
- `/layouts/` - All Hugo templates (baseof, partials, shortcodes)
- `/assets/scss/` - SCSS files organized by component (compiled by Hugo Pipes)
- `/i18n/` - Translation files (supports en, es, pt-br)
- `/static/` - Static assets (if any)

### Component System
The theme uses a modular component approach:
- **Shortcodes** (`/layouts/shortcodes/`): Reusable content components like hero sections, cards, CTAs
- **Partials** (`/layouts/partials/components/`): Layout components like header, footer, forms
- **SCSS Modules** (`/assets/scss/partials/components/`): Corresponding styles for each component

### Configuration System
- Main theme config: `/config.toml` (defines Hugo modules)
- Example configurations: `/exampleSite/config/_default/`
  - `hugo.toml` - Core Hugo settings
  - `params.toml` - Theme-specific parameters
  - `languages.*.toml` - Multi-language configuration
  - `menus.*.toml` - Navigation menus

### Key Integrations
The theme includes built-in support for:
- Google Tag Manager (GTM)
- Crisp Chat and Forms
- Cookie consent banner
- Swiper.js carousels
- Stripe pricing tables
- Google Fonts
- FontAwesome icons

### Testing and Examples
- `/exampleSite/` - Full example implementation showing all features
- `/docsSite/` - Documentation site with shortcode examples and setup guides

### Theme Versioning (NEW)
The theme now supports two versions:
- **Legacy (default)**: Current structure, ensures backward compatibility
- **V2**: Modern architecture with improved performance and modularity

To enable V2 features, set in `params.toml`:
```toml
[theme]
version = "v2"
```

#### V2 Architecture:
- **SCSS**: `/assets/scss/v2/` - Modular SCSS with CSS custom properties
- **JavaScript**: `/assets/js/v2/` - ES6 modules with IndigoTheme namespace
- **Conditional Loading**: Assets load based on actual usage
- **Performance**: Smaller bundles, lazy loading, optimized dependencies

When making changes:
1. Test in the exampleSite to ensure compatibility
2. Update corresponding SCSS when modifying HTML structure
3. Maintain Bootstrap 5 compatibility
4. Follow existing naming conventions for components
5. For V2 development:
   - Use CSS custom properties for theming
   - Follow BEM naming for new components
   - Use IndigoTheme namespace for JavaScript
   - Ensure progressive enhancement