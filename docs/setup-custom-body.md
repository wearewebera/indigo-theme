# Adding a Custom Body in the Indigo Theme

The Indigo theme allows you to include custom HTML, scripts, or tracking codes at the end of the `<body>` tag. This customization is useful for integrating third-party tools, custom scripts, or analytics that must load at the end of the document.

---

## Configuration

To add custom content to the end of the `<body>` tag, create a file named `custom-body.html` in the `layouts/partials/` directory.

### File Path

```plaintext
your-site/
├── layouts/
│   ├── partials/
│       ├── custom-body.html
```

### Example Content

Here is an example of what you might include in the `custom-body.html` file:

```html
<!-- Example: Adding a third-party widget -->
<div id="custom-widget">
    <p>Custom widget loaded at the end of the body.</p>
</div>
```

---

## Applying Changes

1. Create or edit the `custom-body.html` file in the `layouts/partials/` directory.
2. Restart your Hugo server to see the changes:

   ```bash
   hugo server
   ```

Your custom content will now render at the end of the `<body>` tag, just before the theme's custom body script.

---

## Notes

- **Order of Execution**: The `custom-body.html` file is rendered just before the theme's `custom-body script`.
