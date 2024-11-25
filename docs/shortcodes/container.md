# Shortcode: `container`

The `container` shortcode provides a flexible container for grouping content with optional custom styling. It leverages Bootstrap's `container` class for responsive layouts.

---

## Parameters

- **`class`** (optional): Adds custom CSS classes to the container for additional styling or layout adjustments.

---

## Usage Example

### Basic Example

```markdown
{{< container >}}
## This is a Container

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ligula nisl.
{{< /container >}}
```

### With Custom Class

```markdown
{{< container class="custom-class text-center" >}}
## Centered Content

This content is centered using additional Bootstrap utility classes.
{{< /container >}}
```

---

## Notes

- **Bootstrap Integration**: The `container` shortcode automatically applies Bootstrap's responsive layout system, making it ideal for structuring page content.
- **Customization**: Use the `class` parameter to add custom styling or utility classes for unique layouts.
