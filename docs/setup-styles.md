# Customizing the Indigo Theme Style

The Indigo theme allows you to easily customize its appearance to match your brand by modifying colors and fonts. Follow the steps below to adjust the theme's primary and secondary colors, as well as the font family.

---

## Style Configuration

To customize the style of your site, add the following configuration to your `config.toml` file or create a `params.toml` file in the `config/_default/` directory.

### Example Configuration

```toml
[style]
primary_color = '#21519f'
secondary_color = '#f9bc56'
font_family = 'Inter'
```

---

## Configuration Options

- **`primary_color`**: The main color used for links, buttons, and other prominent elements. Replace `#21519f` with your preferred hex color code.
- **`secondary_color`**: A secondary color used for highlights and accents. Replace `#f9bc56` with your preferred hex color code.
- **`font_family`**: The font family used throughout the site. Replace `Inter` with the name of any Google Font supported by the theme.

---

## Applying Changes

After updating the configuration, restart your Hugo server to apply the new styles:

```bash
hugo server
```

Your site will now reflect the customized colors and fonts.

---

## Folder Structure Example

```plaintext
your-site/
├── config/
│   ├── _default/
│       ├── params.toml
├── config.toml
```

