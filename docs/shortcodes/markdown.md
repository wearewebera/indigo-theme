# Shortcode: `markdown`

The `markdown` shortcode renders its inner content as Markdown within a styled container. It allows for flexibility when incorporating Markdown syntax into areas where it might not otherwise be processed.

---

## Parameters

- This shortcode does not accept any parameters.

---

## Usage Example

### Rendering Markdown Content

```markdown
{{< markdown >}}
## This is a Heading

- This is a list item
- Another list item

[This is a link](https://example.com)
{{< /markdown >}}
```

---

## Notes

- **Styling**: The output is wrapped in a `<div>` with the `markdown` class, which can be customized using CSS.
- **Flexibility**: This shortcode is particularly useful for embedding Markdown in areas where it might otherwise be interpreted as plain text.
