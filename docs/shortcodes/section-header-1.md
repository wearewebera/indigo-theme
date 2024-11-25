# Shortcode: `section-header-1`

The `section-header-1` shortcode is designed to create a visually appealing header for sections. It includes a title and an optional subtitle, with styling options for light or dark themes. This shortcode is typically used in conjunction with the `section` and `markdown` shortcodes.

---

## Parameters

- **`context`** (required): Specifies the key in the front matter containing the header data.
    - **`Title`**: The main heading of the section.
    - **`Subtitle`** (optional): A descriptive subheading for the section.
- **`dark`** (optional): Set to `"true"` to apply a dark mode style.

---

## Front Matter Example

Define the header data in the page's front matter under the specified `context`.

```yaml
header:
  Title: "Our Services"
  Subtitle: "Explore the wide range of services we offer to our customers."
```

---

## Usage Example

### Rendering a Section with a Header and Markdown Content

```markdown
{{< section id="services" bg-color="primary" >}}
{{< section-header-1 context="header" dark="true" >}}

{{< markdown >}}
We provide top-notch services to meet your needs, including:

- **Custom Software Development**
- **Agile Training**
- **Business Consulting**
{{< /markdown >}}

{{< /section >}}
```

---

## Notes

- **Dark Mode**: Use the `dark` parameter to switch to a light-on-dark style for improved readability.
- **Responsive Design**: The layout is fully responsive and centers the header content for an engaging appearance on all devices.
- **Markdown Integration**: Combine with the `markdown` shortcode to write clean, well-formatted content inside sections.
