# Shortcode: `card-1`

The `card-1` shortcode renders a grid of responsive cards. Each card includes an icon, a title, and content, making it ideal for displaying features, services, or other structured information.

---

## Parameters

- **`context`** (required): Specifies the key in the front matter that contains the data for the cards. The data should be structured as a list of items with fields such as `icon`, `title`, and `content`.

---

## Front Matter Example

Define the card data in the page's front matter under the specified `context`.

```yaml
cards:
  Items:
    - icon: "fa-solid fa-cogs"
      title: "Feature 1"
      content: "Description for feature 1."
    - icon: "fa-solid fa-chart-line"
      title: "Feature 2"
      content: "Description for feature 2."
    - icon: "fa-solid fa-shield-alt"
      title: "Feature 3"
      content: "Description for feature 3."
```

---

## Usage Example

### Rendering Cards with Context

```markdown
{{< card-1 context="cards" >}}
```

This will render a grid of cards using the data defined in the `cards` field of the front matter.
