# Adding a Custom Head in the Indigo Theme

The Indigo theme allows you to include custom HTML or scripts in the `<head>` section of your site by creating a custom partial file. This is useful for adding meta tags, custom styles, or third-party integrations.

---

## Configuration

To add custom content to the `<head>` section, create a `custom.html` file in the `layouts/partials/head/` directory.

### Example File

Create the following file:

#### `layouts/partials/head/custom.html`

```html
<!-- Example: Adding a custom meta tag -->
<meta name="custom-meta" content="This is a custom head example">

<!-- Example: Adding a custom inline script -->
<script>
  console.log("This script runs in the head section");
</script>
```

---

## Folder Structure

Ensure the file is located in the correct directory:

```plaintext
your-site/
├── layouts/
│   ├── partials/
│       ├── head/
│           ├── custom.html
├── config/
│   ├── _default/
│       ├── params.toml
├── config.toml
```

---

## Applying Changes

1. Create or edit the `custom.html` file in the `layouts/partials/head/` directory with your desired content.
2. Restart your Hugo server to apply the changes:

   ```bash
   hugo server
   ```

The custom content will now be rendered at the end of the `<head>` section of your site's HTML.

---

## Notes

- Use this feature for adding meta tags, external CSS/JS links, or inline scripts that must load in the `<head>` section.
- Ensure your custom content does not conflict with existing `<head>` elements provided by the theme.

