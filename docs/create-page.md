# Creating Pages in the Indigo Theme

The Indigo theme supports building pages directly within Markdown files using shortcodes. These shortcodes allow you to structure and style your content with the flexibility and modularity of web components.

---

## Page Configuration

Pages are created in the `content` directory and include front matter for metadata and shortcode usage.

### Example Page Front Matter

```yaml
---
title: "Templates"
description: "Unlock the power of Scrum with Avanti’s Notion templates."
keywords: "Notion Templates Scrum Agile Scrum Master"

hero:
  title: "Notion <span class=\"bg-secondary\">Templates</span> for Effective Scrum Implementation"
  subtitle: "Welcome to Avanti Studio’s Notion Store"
  image: "img/content/my-page/hero.png"
  button:
    label: "Start Trial Now"
    link: "/#pricing-list"

notion-store:
  title: "Avanti’s Notion Store"
  content: "Explore our Notion Store to discover a wide range of templates designed to enhance your productivity"
  image: "img/content/my-page/notion-store.png"
  button:
    label: "Visit Notion Store"
    link: "https://avantistudio.gumroad.com/"
---
```

- **`title`**: Page title displayed in the browser tab and page header.
- **`description`**: Meta description for SEO.
- **`keywords`**: Keywords for SEO purposes.
- **Custom Fields (e.g., `hero`, `notion-store`)**: Define contexts to pass to shortcodes for structured and dynamic content.

---

## Using Shortcodes

Shortcodes act as web components that can be inserted directly into Markdown files to build page layouts.

### Example Shortcodes

```markdown
{{< hero-2 context="hero" id="templates-hero" >}}

{{< section id="templates" >}}
{{< article >}}
{{< markdown >}}

## Unlock the Power of Scrum with Avanti’s Notion Templates:

In the pursuit of seamless Scrum implementation, our templates serve as powerful tools to facilitate and enhance your
organizational agility. Here’s how our Notion templates can transform your Scrum framework:

{{< /markdown >}}
{{< /article >}}
{{< /section >}}

{{< cta-1 context="notion-store" id="notion-store" bg-color="primary" btn-color="secondary" dark="true" >}}
```

### Breakdown of the Shortcode Example

1. **`{{< hero-2 context="hero" id="templates-hero" >}}`**
    - Renders a hero section using data from the `hero` context in the front matter.
    - `id="templates-hero"` adds a unique ID to the section.

2. **`{{< section id="templates" >}}`**
    - Begins a new section of the page.
    - `id="templates"` sets a unique identifier for the section.

3. **`{{< article >}}`**
    - Starts an article block inside the section.

4. **`{{< markdown >}}`**
    - Allows you to include Markdown content, making it easy to format text and lists.

5. **`{{< cta-1 context="notion-store" id="notion-store" bg-color="primary" btn-color="secondary" dark="true" >}}`**
    - Renders a call-to-action section using data from the `notion-store` context in the front matter.
    - Additional parameters (e.g., `bg-color`, `btn-color`) customize the appearance.

---

## Folder Structure

```plaintext
your-site/
├── content/
│   ├── templates.md
│   ├── about.md
│   ├── contact.md
├── assets/
│   ├── img/
│       ├── content/
│           ├── my-page/
│               ├── hero.png
│               ├── notion-store.png
```

---

## Notes

- **Contexts**: Use the `context` parameter to map data from the front matter to the shortcode.
- **Flexibility**: Combine multiple shortcodes to build complex layouts directly in Markdown.
- **SEO Optimization**: Populate `title`, `description`, and `keywords` in the front matter for better search engine visibility.

