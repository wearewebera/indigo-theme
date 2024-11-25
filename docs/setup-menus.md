# Configuring Menus in the Indigo Theme

The Indigo theme supports three types of menus to organize and display navigation links across your site. These menus are fully customizable through your site's configuration files.

---

## Menu Types

1. **Main (Header)**: Displays primary navigation links in the site header.
2. **Footer**: Shows organized navigation links in the footer, typically divided into categories.
3. **Footer Links**: Provides additional links in the footer, such as legal or informational pages like "Terms of Service" and "Privacy Policy."

---

## Configuration

Add the following settings to your `config.toml` file or create a `menus.toml` file in the `config/_default/` directory.

### Example Configuration

#### Main Menu (Header)

```toml
[[main]]
name = "Services"
hasChildren = true
weight = 1

[[main]]
parent = "Services"
name = "Training"
url = "services/training"
weight = 1

[[main]]
parent = "Services"
name = "Workflow"
url = "services/workflow"
weight = 2

[[main]]
name = "Blog"
url = "blog"
weight = 2

[[main]]
name = "About"
url = "about-us"
weight = 3
```

#### Footer Menu

```toml
[[footer]]
name = "Quick Links"
hasChildren = true
weight = 1
[[footer.params]]
columns = 2

[[footer]]
parent = "Quick Links"
name = "Training"
url = "services/training"
weight = 1

[[footer]]
parent = "Quick Links"
name = "Workflow"
url = "services/workflow"
weight = 2

[[footer]]
parent = "Quick Links"
name = "Scrum"
url = "resources/scrum"
weight = 3
```

#### Footer Links (Special Links)

```toml
[[footer_links]]
name = "Terms of Service"
url = "terms-of-service"
weight = 1

[[footer_links]]
name = "Privacy Policy"
url = "privacy-policy"
weight = 2
```

---

## Configuration Details

- **`name`**: The text displayed for the menu item.
- **`url`**: The link for the menu item.
- **`weight`**: Determines the display order of items (lower weights appear first).
- **`hasChildren`**: Specifies if the menu has sub-items.
- **`parent`**: Assigns the menu item to a parent category.

---

## Applying Changes

1. Add the configuration to your Hugo project.
2. Restart the Hugo server to see the changes:

   ```bash
   hugo server
   ```

Your menus will now display according to the configuration.

---

## Folder Structure Example

```plaintext
your-site/
├── config/
│   ├── _default/
│       ├── menus.toml
├── config.toml
```
