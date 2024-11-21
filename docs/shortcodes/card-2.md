# Shortcode: `card-2`

The `card-2` shortcode renders a grid of cards with an icon, label, title, and content. The layout adjusts based on the number of cards, ensuring a responsive and visually appealing design.

---

## Parameters

- **`context`** (required): Specifies the key in the front matter that contains the data for the cards. The data should be structured as a list of items with fields such as `icon`, `label`, `title`, and `content`.

---

## Front Matter Example

Define the card data in the page's front matter under the specified `context`.

```yaml
highlights:
  Items:
    - icon: "fa-solid fa-star"
      label: "Highlight 1"
      title: "Key Feature"
      content: "This is a description of the key feature."
    - icon: "fa-solid fa-rocket"
      label: "Highlight 2"
      title: "Amazing Speed"
      content: "This card showcases the amazing speed of our product."
```

---

## Usage Example

### Rendering Cards with Context

```markdown
{{< card-2 context="highlights" >}}
```

This will render a grid of cards using the data defined in the `highlights` field of the front matter.

---

## Notes

- **Icons**: Use FontAwesome classes in the `icon` field for consistent visual design.
- **Dynamic Layout**:
    - If there is only one card, it spans the entire width.
    - If there are multiple cards, they are displayed in a two-column grid on medium screens and a single column on smaller screens.
