# Shortcode: `hero-2`

The `hero-2` shortcode creates a hero section with a bold background image, a title, subtitle, and an optional button. It is ideal for pages where the visual impact of a background image is central to the content.

---

## Parameters

- **`context`** (required): Specifies the key in the front matter that contains the hero section data.
    - **`Title`**: The main heading of the hero section.
    - **`Subtitle`**: A descriptive subheading for the hero section.
    - **`Image`**: Path to the hero background image.
    - **`Button`**: Contains the button's `Link` and `Label`.

- **`id`** (optional): Unique identifier for the section.
- **`class`** (optional): Additional CSS classes for styling.
- **`btn-color`** (optional): Button color, following the Bootstrap color scheme.

---

## Front Matter Example

Define the hero section data in the page's front matter under the specified `context`.

```yaml
hero:
  Title: "Transform Your Business"
  Subtitle: "Harness the power of our platform to drive your business forward."
  Image: "img/hero/transform.png"
  Button:
    Label: "Learn More"
    Link: "/learn-more"
```

---

## Usage Example

### Rendering a Hero Section with Context

```markdown
{{< hero-2 context="hero" id="business-hero" class="custom-hero" btn-color="primary" >}}
```

This will render a hero section using the data defined in the `hero` field of the front matter.

---

## Notes

- **Button Customization**: Use the `btn-color` parameter to adjust the button's color, following Bootstrap's color scheme.
- **Responsive Design**: The layout adjusts gracefully across different screen sizes, ensuring an engaging experience on all devices.

---