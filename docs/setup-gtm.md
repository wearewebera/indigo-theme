# Configuring Google Tag Manager in the Indigo Theme

The Indigo theme supports easy integration with Google Tag Manager (GTM) to help you manage and deploy marketing tags on your site without requiring extensive code modifications.

---

## Configuration

To enable Google Tag Manager, add the following settings to your `config.toml` file or create a `params.toml` file in the `config/_default/` directory.

### Example Configuration

```toml
[google_tag_manager]
enable = true
id = "GTM-5ZSTTTZM"
```

---

## Configuration Options

- **`enable`**: Set to `true` to activate Google Tag Manager.
- **`id`**: Your GTM container ID. Replace `GTM-5ZSTTTZM` with your unique ID provided by Google.

---

## Applying GTM

1. Add the configuration to your Hugo project as described above.
2. Restart your Hugo server to apply the changes:

   ```bash
   hugo server
   ```

3. Once applied, the GTM script will automatically be included in your site's `<head>` and `<body>` sections.

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

- Ensure you have a valid Google Tag Manager account and container ID before enabling this feature.
- Use GTM to integrate additional marketing, analytics, and tracking tools seamlessly.

