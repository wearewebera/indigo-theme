# Shortcode: `article`

The `article` shortcode creates a responsive content container, typically used within sections to structure and center content.

---

## Parameters

- **`class`** (optional): Adds custom CSS classes to the `<article>` element.

---

## Usage Example

### Basic Example

```markdown
{{< article >}}
## This is a Heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
{{< /article >}}
```

### With Custom Class

```markdown
{{< article class="my-custom-class" >}}
## Custom Styled Article

This article uses additional styles from the `my-custom-class` CSS class.
{{< /article >}}
```
