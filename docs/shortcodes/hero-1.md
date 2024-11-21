# Shortcode: `hero-1`

The `hero-1` shortcode creates a hero section with a title, subtitle, button, and optional image. It is designed to be the focal point of a page, capturing user attention with its bold layout and call-to-action.

---

## Parameters

- **`context`** (required): Specifies the key in the front matter that contains the hero section data.
    - **`Title`**: The main heading of the hero section.
    - **`Subtitle`**: A descriptive subheading for the hero section.
    - **`Image`**: Path to the hero section image.
    - **`Button`**: Contains the button's `Link` and `Label`.

- **`id`** (optional): Unique identifier for the section.
- **`class`** (optional): Additional CSS classes for styling.
- **`bg-color`** (optional): Background color for the section, using Bootstrap's color scheme.
- **`btn-color`** (optional): Button color, also following Bootstrap's color scheme.
- **`dark`** (optional): Set to `"true"` to apply a dark mode style.

---

## Front Matter Example

Define the hero section data in the page's front matter under the specified `context`.

```yaml
hero:
  Title: "Welcome to Our Platform"
  Subtitle: "Discover the tools and resources to boost your productivity."
  Image: "img/hero/welcome.png"
  Button:
    Label: "Get Started"
    Link: "/get-started"
```

---

## Usage Example

### Rendering a Hero Section with Context

```markdown
{{< hero-1 context="hero" id="welcome-hero" bg-color="primary" btn-color="secondary" dark="true" >}}
```

This will render a hero section using the data defined in the `hero` field of the front matter.

---

## Notes

- **Colors**: Both `bg-color` and `btn-color` follow the Bootstrap color scheme.
- **Dark Mode**: Use the `dark` parameter to switch to a light-on-dark style for improved contrast.
- **Responsive Layout**: The image is hidden on smaller screens and displayed on larger screens for an enhanced user experience.
