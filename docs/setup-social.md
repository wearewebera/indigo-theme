# Configuring Social Media Links in the Indigo Theme

The Indigo theme allows you to add social media links to your site using FontAwesome icons. These links can be displayed in the footer or other designated areas of your site.

---

## Configuration

Add the following configuration to your `config.toml` file or create a `params.toml` file in the `config/_default/` directory.

### Example Configuration

```toml
[[social]]
title = "linkedin"
icon = "fa-brands fa-linkedin-in"
link = "https://www.linkedin.com/company/avantistudio"

[[social]]
title = "instagram"
icon = "fa-brands fa-instagram"
link = "https://www.instagram.com/avantistudiohq/"

[[social]]
title = "twitter"
icon = "fa-brands fa-x-twitter"
link = "https://twitter.com/avantistudiohq/"

[[social]]
title = "facebook"
icon = "fa-brands fa-facebook-f"
link = "https://www.facebook.com/avantistudiohq/"
```

---

## Configuration Details

- **`title`**: The name of the social media platform. This is used for accessibility and internal references.
- **`icon`**: The FontAwesome class for the platform's icon. For a complete list, visit the [FontAwesome Icons Library](https://fontawesome.com/icons).
- **`link`**: The URL to your profile or page on the respective social media platform.

---

## Applying Changes

1. Add the configuration as described above.
2. Restart your Hugo server to see the changes:

   ```bash
   hugo server
   ```

Your social media icons with links will now be visible in the designated area of your site.

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

- You can add as many social media links as needed by repeating the `[[social]]` block.
- Ensure the `icon` field matches a valid FontAwesome icon class.
- Test all links to verify they redirect to the correct social media profiles.

