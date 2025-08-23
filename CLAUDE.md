# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the Indigo theme for Hugo - a modern, responsive theme for the Webera ecosystem built on Bootstrap 5 and Hugo Modules. The theme provides extensive customization options through a structured configuration system and includes 20+ custom shortcodes.

**Minimum Hugo Version**: 0.120 (updated from 0.41 to address deprecations)

## Essential Commands

```bash
# Development server
hugo server -D                    # Run dev server with drafts
hugo server --bind=0.0.0.0       # Allow external access

# Build for production
hugo                             # Build site
hugo --minify                    # Build with minification

# Module management
hugo mod tidy                    # Clean up module dependencies
hugo mod get -u                  # Update all modules
npm run update-modules           # Clean, update, and tidy all modules

# Code formatting
npm install                      # Install Prettier
npx prettier --write .           # Format all files
```

## Architecture

### Module System
The theme uses Hugo Modules for dependency management. Key dependencies:
- `github.com/gohugoio/hugo-mod-bootstrap-scss/v5` - Bootstrap 5 integration
- `github.com/gethugothemes/hugo-modules/seo-tools/basic-seo` - SEO optimization
- `github.com/gethugothemes/hugo-modules/images` - Image processing

### Template Hierarchy
- `layouts/_default/baseof.html` - Base template defining the HTML structure
- `layouts/partials/` - Reusable components organized by function (head, header, footer, script)
- `layouts/shortcodes/` - 20+ custom shortcodes for content building
- Theme checks for user overrides in site's `layouts/partials/` directory

### Asset Pipeline
- SCSS compilation: `assets/scss/main.scss` imports Bootstrap and custom styles
- JavaScript bundling: `assets/js/` contains modular JS (Swiper, Crisp integrations)
- Production optimizations: fingerprinting, minification, WebP conversion

### Configuration Structure
Supports both single-file (`config.toml`) and directory-based configuration (`config/_default/`):
- Language configs: `languages.*.toml`
- Parameter configs: `params.*.toml`
- Menu configs: `menus.*.toml`

## Key Integration Points

### Third-party Services
All integrations check `hugo.IsProduction` before loading:
- **Google Tag Manager**: Set `params.google_tag_manager.id`
- **Crisp Chat**: Configure `params.crisp_chat.id` and optional custom colors
- **Crisp Forms**: Enable with `params.crisp_form.enable = true`

### Custom Partial Hooks
Users can extend the theme by creating these partials in their site:
- `partials/head/custom.html` - Custom head content
- `partials/custom-body.html` - After body tag content
- `partials/script/custom-body.html` - Before closing body tag
- `partials/components/header/right.html` - Header right section

### Multilingual Support
Built-in i18n for English, Spanish, and Portuguese (Brazil). Language configuration:
- Content directories: `content.en/`, `content.pt-br/`
- Translation files: `i18n/*.yaml`
- Language-specific params and menus

## Theme-Specific Patterns

### Shortcode Usage
Shortcodes follow a consistent pattern with sections and containers:
```html
{{< section class="py-5" >}}
  {{< container >}}
    {{< section-header-1 title="Title" subtitle="Subtitle" >}}
    {{< card-1 title="Card Title" content="Card content" >}}
  {{< /container >}}
{{< /section >}}
```

### Menu System
Supports hierarchical menus with parent-child relationships:
- Main menu: `menus.main`
- Footer menu with columns: `menus.footer` (use `hasChildren` and `parent`)
- Footer links: `menus.footer_links`

### Blog Implementation
- Blog posts in `content/blog/` or language-specific directories
- Author profiles in `content/author/`
- Templates: `layouts/blog/` and `layouts/author/`
- Pagination configured via `pagination.pagerSize`

## Development Workflow

### Asset Validation
Theme validates required assets on build:
- Logo: `params.logo` (supports WebP conversion)
- Favicon: `params.favicon`
- OG Image: `params.metadata.image`

### Style Customization
Primary customization through `params.style`:
- `primary_color` and `secondary_color` - Theme colors
- `font_family` - Google Font name
- `header_menu` - Menu alignment (start/center/end)

### Performance Considerations
- DNS prefetch for external domains via `params.dnsPrefetch`
- Conditional loading of integrations in production only
- Asset fingerprinting for cache busting
- WebP image support for logos

## Testing & Validation

### Local Testing
```bash
# Test with example site
cd exampleSite
hugo server --themesDir=../..

# Test documentation site
cd docsSite
hugo server --themesDir=../..
```

### Configuration Validation
Theme checks for required parameters and provides fallbacks:
- Missing logo/favicon triggers validation warnings
- Default values provided for style parameters
- Menu items validated for proper structure

## Recent Updates & Migration Notes

### Deprecation Fixes (December 2024)
- **Hugo Version**: Updated minimum requirement from 0.41 to 0.120
- **Template Functions**: Replaced deprecated `isset` with `with` conditionals
- **Menu URLs**: Changed `.URL` to `.ConfiguredURL` in menu templates
- **Page Collections**: Updated `.Data.Pages` to `.RegularPages`
- **Security**: Added SRI (Subresource Integrity) for CDN assets
- **Goldmark**: Disabled unsafe HTML rendering by default (can be re-enabled if needed)