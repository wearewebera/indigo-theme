# Shortcode: `logo-carousel`

The `logo-carousel` shortcode creates a responsive and interactive carousel to display logos. It utilizes the **Swiper**
plugin for smooth transitions and autoplay functionality, making it ideal for showcasing partners, clients, or sponsor
logos.

---

## Parameters

- **`context`** (required): Specifies the key in the front matter that contains the carousel items.
    - **`Items`**: A list of images with the following fields:
        - **`image`**: The path to the logo image.
        - **`alt`**: Alternative text for the image (for accessibility and SEO).
        - **`url`** (optional): The URL to make the logo clickable. If present, the logo will be wrapped in a link.
        - **`class`** (optional): Additional CSS classes to customize the image styling.
- **`id`** (required): A unique identifier for the carousel instance.

---

## Front Matter Example

Define the logo carousel data in the page's front matter under the specified `context`.

```yaml
logos:
  Items:
    - image: "img/logos/company1.png"
      alt: "Company 1"
      url: "https://company1.com"
    - image: "img/logos/company2.png"
      alt: "Company 2"
      url: "https://company2.com"
    - image: "img/logos/company3.png"
      alt: "Company 3"
    - image: "img/logos/company4.png"
      alt: "Company 4"
      url: "https://company4.com"
    - image: "img/logos/company5.png"
      alt: "Company 5"
```

---

## Usage Example

### Rendering the Logo Carousel with Context

```markdown
{{< logo-carousel context="logos" id="partners-carousel" >}}
```

This will render a logo carousel using the data defined in the `logos` field of the front matter.

---

## Folder Structure

Ensure your images and partials are organized as follows:

```plaintext
your-site/
├── assets/
│   ├── img/
│       └── logos/
│           ├── company1.png
│           ├── company2.png
│           ├── company3.png
│           ├── company4.png
│           └── company5.png
├── layouts/
│   └── partials/
│       └── components/
│           └── logo-carousel.html
├── config/
│   ├── _default/
│       └── params.toml
```

---

## Features

- **Autoplay**: The carousel automatically cycles through logos with a delay of 2 seconds.
- **Infinite Loop**: The carousel loops continuously for seamless viewing.
- **Responsive Design**:
    - **2 logos** per view on small screens.
    - **3 logos** per view on screens wider than **640px**.
    - **4 logos** per view on screens wider than **767px**.
    - **5 logos** per view on screens wider than **991px**.
- **Clickable Logos**: If a `url` is provided, the logo becomes a clickable link.
- **Customization**: Use the `class` field in each item to add custom CSS classes to images.

---

## Notes

- **Swiper Requirement**: Ensure Swiper is enabled in your `params.toml` or `config.toml` file:

  ```toml
  [swiper]
  enable = true
  ```

- **Unique ID**: Each carousel instance must have a unique `id` to avoid conflicts when multiple carousels are used on
  the same page.
