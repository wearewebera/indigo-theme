# Configuring the Cookie Banner in the Indigo Theme

The Indigo theme includes a built-in cookie consent banner to help you comply with privacy regulations such as GDPR. This banner notifies users about the use of cookies on your site.

---

## Configuration

Add the following settings to your `config.toml` file or create a `params.toml` file in the `config/_default/` directory.

### Example Configuration

```toml
[cookies]
enable = true
expire_days = 30
content = "This site uses cookies. By continuing to use this website, you agree to their use."
button = "I Accept"
```

---

## Configuration Options

- **`enable`**: Set to `true` to activate the cookie banner.
- **`expire_days`**: The number of days before the cookie consent expires and the banner is shown again.
- **`content`**: The message displayed in the banner. Customize this text to align with your site's privacy policy.
- **`button`**: The label on the button users click to accept the cookies.

---

## Applying Changes

1. Add the configuration to your project as described above.
2. Restart your Hugo server to apply the changes:

   ```bash
   hugo server
   ```

When enabled, the cookie banner will appear at the bottom of your site for first-time visitors or after the consent expires.

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

- Ensure the **content** message aligns with your site's privacy and cookie usage policies.
- You can customize the button text to better match the site's language or branding.

