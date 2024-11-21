# Configuring Fonts in the Indigo Theme

The Indigo theme allows you to import and customize fonts directly from Google Fonts, giving your site a professional and unique look. Follow the instructions below to enable and configure font support.

---

## Font Configuration

To use Google Fonts, add the following configuration to your `config.toml` file or create a `params.toml` file in the `config/_default/` directory.

### Example Configuration

```toml
[google_fonts]
enable = true
fonts = ["Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900"]
```

---

## Configuration Options

- **`enable`**: Set to `true` to enable Google Fonts.
- **`fonts`**: A list of Google Fonts to include. Use the format specified by [Google Fonts API](https://fonts.google.com/), which allows you to define styles like italics, weight ranges, and optical sizing.

### Example Font Configuration

The example above imports the "Inter" font with multiple weights and styles:

- `ital`: Italics (0 for no italics, 1 for italics).
- `opsz`: Optical sizing for responsive typography.
- `wght`: Weight range (e.g., 100 to 900 for thin to bold).

---

## Applying Fonts

Once the configuration is updated, restart the Hugo server to apply the changes:

```bash
hugo server
```

The site will automatically load the specified fonts from Google Fonts.

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

- Ensure your chosen fonts are compatible with the design of your site.
- For additional customization, combine this configuration with the **style settings** in the Indigo theme.

