# Customizing the Indigo Theme Style

The Indigo theme allows you to easily customize its appearance to match your brand by modifying colors, fonts, and
header menu positioning. Follow the steps below to adjust the theme's primary and secondary colors, font family, and
header menu alignment.

---

## Style Configuration

To customize the style of your site, add the following configuration to your `config.toml` file or create a
`params.toml` file in the `config/_default/` directory.

### Example Configuration

```toml
[style]
primary_color = '#21519f'
secondary_color = '#f9bc56'
font_family = 'Inter'
header_menu = 'center'
```

---

## Configuration Options

- **`primary_color`**:  
  The main color used for links, buttons, and other prominent elements.  
  Example: `#21519f`

- **`secondary_color`**:  
  A secondary color used for highlights and accents.  
  Example: `#f9bc56`

- **`font_family`**:  
  The font family used throughout the site. This should be a Google Font supported by the theme.  
  Example: `Inter`

- **`header_menu`** (optional):  
  Positions the menu in the header. Possible values are:
    - **`start`**: Aligns the menu to the left.
    - **`center`**: Centers the menu (default).
    - **`end`**: Aligns the menu to the right.

  Example: `header_menu = 'start'`

---

## Applying Changes

After updating the configuration, restart your Hugo server to apply the new styles:

```bash
hugo server
```

Your site will now reflect the customized colors, fonts, and header menu alignment.

---

## Folder Structure Example

```plaintext
your-site/
├── config/
│   └── _default/
│       └── params.toml
└── config.toml
```

---

## Notes

- **Default Behavior**: If `header_menu` is not specified, the menu will default to `center`.
- **Color Guidelines**: Use hex color codes (e.g., `#21519f`) for precise color customization.
- **Google Fonts**: Ensure the font specified in `font_family` is available via Google Fonts.
