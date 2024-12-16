# Adding a Custom Logo in the Footer of the Indigo Theme

The Indigo theme allows you to replace the default footer logo with a custom logo by creating a dedicated template file.
This provides flexibility for branding and design customization.

---

## Steps to Add a Custom Footer Logo

### 1. Create the Custom Logo Template

Create a new file named `logo.html` in the following directory:

```plaintext
layouts/partials/components/footer/logo.html
```

### 2. Add Your Custom Logo Code

Add the HTML code for your custom logo inside the `logo.html` file. Here’s an example:

```html
<a href="{{ .Site.BaseURL }}">
  <img src="/img/custom-footer-logo.png" alt="Custom Footer Logo" class="img-fluid" width="200">
</a>
```

### 3. Organize Your Logo Image

Place your custom logo image in the `assets/img` or `static/img` directory of your project:

```plaintext
your-site/
├── assets/
│   └── img/
│       └── custom-footer-logo.png
```

### 4. Ensure the Default Logo is Defined in `params.toml`

Make sure the default logo is set in `params.toml` for cases where the custom template is not present:

```toml
logo = "img/logo.png"
logo_width = "512px"
logo_webp = true
```

---

## How It Works

- If the file `layouts/partials/components/footer/logo.html` exists, the theme will render the custom logo defined in
  this template.
- If the file does not exist, the theme will fall back to the default logo specified in `params.toml`.

---

## Example Folder Structure

```plaintext
your-site/
├── assets/
│   └── img/
│       └── custom-footer-logo.png
├── layouts/
│   └── partials/
│       └── components/
│           └── footer/
│               └── logo.html
├── config/
│   └── _default/
│       └── params.toml
```

---

## Notes

- **Custom Styling**: Add any CSS classes or custom styles to the `<img>` tag to adjust the appearance of the logo.
- **Fallback**: If the custom template is not found, the theme will automatically use the default logo from
  `params.toml`.
