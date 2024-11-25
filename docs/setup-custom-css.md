# Adding Custom CSS in the Indigo Theme

The Indigo theme allows you to include custom CSS files to further personalize your site's styling. This feature is ideal for adding unique styles or overriding default theme styles.

---

## Configuration

Add the following setting to your `config.toml` file or create a `params.toml` file in the `config/_default/` directory.

### Example Configuration

```toml
customcss = ["css/custom.css"]
```

---

## Folder Structure for CSS

Ensure that your custom CSS file is located in the `assets/css` directory of your Hugo project. The structure should look like this:

```plaintext
your-site/
├── assets/
│   ├── css/
│       ├── custom.css
├── config/
│   ├── _default/
│       ├── params.toml
├── config.toml
```

---

## Applying Changes

1. Create or update the `custom.css` file with your styles in the `assets/css` folder.
2. Add the configuration as described above.
3. Restart your Hugo server to apply the changes:

   ```bash
   hugo server
   ```

Your custom styles will now be applied on top of the theme's default styles.

---

## Notes

- The `customcss` setting accepts an array, allowing you to include multiple CSS files.
- Since the file is stored in the `assets` folder, Hugo will automatically handle the processing and inclusion of the CSS file.

