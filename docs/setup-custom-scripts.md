# Adding Custom JavaScript in the Indigo Theme

The Indigo theme supports adding custom JavaScript to your site for enhanced functionality or specific customizations. You can include scripts directly through configuration or by creating partial files.

---

## Option 1: Including JavaScript via Configuration

To add custom JavaScript files, use the `customjs` setting in your `config.toml` or `params.toml`.

### Example Configuration

```toml
customjs = ["js/custom.js"]
```

### Folder Structure for JavaScript

Ensure that your custom JavaScript file is located in the `assets/js` directory of your project. The structure should look like this:

```plaintext
your-site/
├── assets/
│   ├── js/
│       ├── custom.js
├── config/
│   ├── _default/
│       ├── params.toml
├── config.toml
```

### Applying Changes

1. Create or update the `custom.js` file in the `assets/js` folder with your custom JavaScript code.
2. Add the configuration to your project.
3. Restart your Hugo server:

   ```bash
   hugo server
   ```

Your custom scripts will now be loaded on your site.

---

## Option 2: Creating Custom Script Partials

For more control over script placement, you can create partial HTML files in the `layouts/partials/script/` directory.

### Partial Files

1. **`custom.html`**: Scripts added here will render in the `<head>` section of the HTML.
2. **`custom-body.html`**: Scripts added here will render at the end of the `<body>` section.

### Example File Content

Create the files as follows:

#### `layouts/partials/script/custom.html`

```html
<script>
  console.log("This is a custom script in the head");
</script>
```

#### `layouts/partials/script/custom-body.html`

```html
<script>
  console.log("This is a custom script at the end of the body");
</script>
```

### Folder Structure

```plaintext
your-site/
├── layouts/
│   ├── partials/
│       ├── script/
│           ├── custom.html
│           ├── custom-body.html
├── config/
│   ├── _default/
│       ├── params.toml
├── config.toml
```

---

## Applying Changes

1. Create or update the partial files as described above.
2. Restart your Hugo server to reflect the changes:

   ```bash
   hugo server
   ```

---

## Notes

- Use `custom.html` for scripts that need to load early, such as tracking or analytics.
- Use `custom-body.html` for scripts that can load later, like performance-heavy customizations.
- You can combine both options (`customjs` and partials) for even greater flexibility.

