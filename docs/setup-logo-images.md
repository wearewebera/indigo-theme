# Configuring Logo Images in the Indigo Theme

The Indigo theme allows you to easily customize your site's logo and favicon. Follow the steps below to configure images correctly.

---

## Image Configuration

Add the following settings to your parameters file:

### Using `params.toml`

1. Create a `params.toml` file inside the `config/_default/` folder if it doesn't already exist.
2. Add the following configuration:

```toml
logo = "img/logo.png"
logo_width = "512px"
logo_webp = true
logo_text = "My Website"
favicon = "img/favicon.png"
```

### Using `config.toml`

Alternatively, you can add these settings directly to your main `config.toml` file:

```toml
[params]
  logo = "img/logo.png"
  logo_width = "512px"
  logo_webp = true
  logo_text = "My Website"
  favicon = "img/favicon.png"
```

---

## Folder Structure for Images

Ensure the images are stored in the `assets/img` folder of your project. The structure should look like this:

```plaintext
your-site/
├── assets/
│   ├── img/
│       ├── logo.png
│       ├── favicon.png
├── config/
│   ├── _default/
│       ├── params.toml
├── config.toml
```

---

## Configuration Details

- **`logo`**: Path to the logo image. Recommended: `img/logo.png`.
- **`logo_width`**: Width of the logo image, e.g., `512px`.
- **`logo_webp`**: Enables WebP format for the logo to improve performance.
- **`logo_text`**: Alternate text displayed if the logo image fails to load.
- **`favicon`**: Path to the favicon image. Recommended: `img/favicon.png`.

---

