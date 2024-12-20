# Indigo Theme for Hugo

Indigo is a modern, responsive theme designed for websites in the Webera ecosystem. Built with a focus on usability and customization, Indigo combines the power of the Hugo framework with Bootstrap for a sleek and professional design. Whether you're creating a blog, a company site, or a personal portfolio, Indigo provides the tools and flexibility to bring your vision to life.

---

## Features

- **Responsive Design**: Built on Bootstrap to ensure a seamless experience across devices.
- **Customizable**: Modify colors, fonts, and layout to suit your brand.
- **Blog Support**: A dedicated blog section to organize and showcase posts.
- **Author Profiles**: Highlight contributors with customizable author pages.
- **Integrations**:
  - Google Tag Manager for tracking and analytics.
  - Crisp Chat for real-time communication.
  - Crisp Form for easy contact form setup.
- **Font and Icon Libraries**:
  - Google Fonts for professional typography.
  - FontAwesome for a wide variety of icons.

---

## Installation

### Step 1: Initialize Hugo Module

Ensure that your project has the Hugo Module initialized. If not, run the following command in your project's root directory:

```bash
hugo mod init <your-module-name>
```

### Step 2: Add the Indigo Theme

Add the following configuration to your `config.toml` file to import the Indigo theme:

```toml
# Import the Indigo theme as a module
[module]
[[module.imports]]
  path = "github.com/wearewebera/indigo-theme"

# Set the theme
theme = "github.com/wearewebera/indigo-theme"
```

### Step 3: Install Dependencies

Run the following command to download the theme and its dependencies:

```bash
hugo mod tidy
```

---

## Minimal Configuration Example

Here's a minimal example of what needs to be included in your `config.toml` (or equivalent `hugo.yaml`/`hugo.json`) for the Indigo theme to work correctly:

```toml
baseURL = 'https://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'
theme = "github.com/wearewebera/indigo-theme"

[module]
[[module.imports]]
path = "github.com/wearewebera/indigo-theme"

[params]
logo = "img/logo.png"
logo_width = "192px"
logo_webp = true
logo_text = "My New Hugo Site"
favicon = "img/favicon.png"

[params.style]
primary_color = '#492DA8'
secondary_color = '#B40A48'
font_family = 'Inter'
header_menu = 'end'

[params.metadata]
keywords = []
description = ""
author = "Webera"
image = "img/og-image.png"

[params.footer]
copyright = "My New Hugo Site, all rights reserved."

[[menus.main]]
name = "About"
url = "#"
weight = 1

[[menus.footer]]
name = "Quick Links"
hasChildren = true
weight = 1

[[menus.footer]]
parent = "Quick Links"
name = "Partner"
url = "#"
weight = 1

[params.notFound]
title = "404"
content = "The page you are looking for doesn't exist."
button = "Back to Home"

[params.google_fonts]
enable = true
fonts = ["Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900"]
```

---

## Requirements

- Hugo version **0.41** or higher.
- Hugo Modules enabled in your project configuration.

---

## Documentation

For more details on configuration, customization, and examples, check out the full [Indigo Theme Documentation](/docs).
