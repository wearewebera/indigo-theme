# Shortcode: `card-3`

The `card-3` shortcode creates a visually dynamic layout with a main feature card alongside a grid of smaller supporting cards. It is ideal for highlighting a key feature or service and providing additional details in the supporting cards.

---

## Parameters

- **`context`** (required): Specifies the key in the front matter that contains the data for the cards.
  - **`Main`**: Contains the main card data, including fields like `Icon`, `Title`, and `Content`.
  - **`Items`**: A list of supporting cards with fields like `icon`, `title`, and `content`.

---

## Front Matter Example

Define the card data in the page's front matter under the specified `context`.

```yaml
feature-highlight:
  Main:
    Icon: "fa-solid fa-lightbulb"
    Title: "Main Feature"
    Content: "This is the main feature description, providing key details about the product or service."
  Items:
    - icon: "fa-solid fa-cogs"
      title: "Supporting Feature 1"
      content: "Details about the first supporting feature."
    - icon: "fa-solid fa-chart-line"
      title: "Supporting Feature 2"
      content: "Information about the second supporting feature."
    - icon: "fa-solid fa-shield-alt"
      title: "Supporting Feature 3"
      content: "Overview of the third supporting feature."
    - icon: "fa-solid fa-rocket"
      title: "Supporting Feature 4"
      content: "Description of the fourth supporting feature."
```

---

## Usage Example

### Rendering a Feature Highlight with Context

```markdown
{{< card-3 context="feature-highlight" >}}
```

This will render a feature highlight using the data defined in the `feature-highlight` field of the front matter.

---

## Notes

- **Icons**: Use FontAwesome classes in the `Icon` and `icon` fields for consistent styling.
- **Responsive Layout**:
  - The main card is displayed on one side, while supporting cards are laid out in a grid on the opposite side.
  - The order and layout adjust dynamically based on screen size.
