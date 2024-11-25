# Shortcode: `section-header-2`

The `section-header-2` shortcode creates a two-column header layout with a title and an optional subtitle. It is designed for use at the top of a section, providing a clear and professional introduction. This shortcode is typically paired with the `section` and `markdown` shortcodes.

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
  Title: "Our Approach"
  Subtitle: "Discover how we create value through our strategic methods."
```

---

## Usage Example

### Rendering a Section with a Header and Markdown Content

```markdown
{{< section id="approach" bg-color="light" >}}
{{< section-header-2 context="header" dark="false" >}}

{{< markdown >}}
### Why Choose Us?

We prioritize excellence in every step of our process, including:

1. Comprehensive Planning  
2. Agile Development  
3. Continuous Support  
{{< /markdown >}}

{{< /section >}}
```

---

## Notes

- **Two-Column Layout**: The `section-header-2` shortcode splits the title and subtitle into two columns for a balanced and professional layout.
- **Dark Mode**: Use the `dark` parameter to switch to a light-on-dark style, ideal for sections with dark backgrounds.
- **Responsive Design**: The layout adapts seamlessly to all screen sizes, ensuring clarity on both desktop and mobile devices.
- **Markdown Integration**: Combine with the `markdown` shortcode for clean, formatted content within sections.
