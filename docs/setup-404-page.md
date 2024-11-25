# Configuring the 404 Page in the Indigo Theme

The Indigo theme allows you to customize the content of the 404 error page to provide a better user experience. You can modify the title, message, and button text to match your site's tone and branding.

---

## Configuration

Add the following settings to your `config.toml` file or create a `params.toml` file in the `config/_default/` directory.

### Example Configuration

```toml
[notFound]
title = "404"
content = "The page you are looking for doesn't exist."
button = "Back to Home"
```

---

## Configuration Options

- **`title`**: The title displayed on the 404 page (e.g., "404").
- **`content`**: The message shown to the user when a page is not found.
- **`button`**: The text displayed on the button that redirects users back to the home page or a specific link.

---

## Applying Changes

1. Add the configuration as described above.
2. Restart your Hugo server to apply the changes:

   ```bash
   hugo server
   ```

Your 404 page will now display the customized text and button.

---

## Folder Structure Example

```plaintext
your-site/
├── config/
│   ├── _default/
│       ├── params.toml
├── config.toml
```

---

## Notes

- Ensure the **button** redirects users to a relevant location, typically the home page.
- The **content** message can be tailored to fit the personality of your site, such as adding humor or branding elements.

