# Customizing the Header in the Indigo Theme

The Indigo theme allows you to add custom elements to the right side of the header, next to the language selector. This
provides additional flexibility for including buttons, icons, or other content that enhances your site's navigation
experience.

---

## Adding a Custom Element to the Header

To add a custom element to the right side of the header, follow these steps:

### 1. Create the Custom Header Template

Create a new file named `right.html` in the following directory:

```plaintext
layouts/partials/components/header/right.html
```

### 2. Add Your Custom Code

Add the HTML code for your custom element inside the `right.html` file. Here’s an example of adding a call-to-action
button:

```html
<a href="/contact" class="btn btn-primary">
  Contact Us
</a>
```

### 3. Custom Element Examples

You can add a variety of elements to the header, such as:

- **Social Media Icons**

  ```html
  <a href="https://twitter.com/yourprofile">
    <i class="fa-brands fa-x-twitter"></i>
  </a>
  ```

- **Search Icon**

  ```html
  <a href="/search">
    <i class="fa-solid fa-magnifying-glass"></i>
  </a>
  ```

- **Custom Text**

  ```html
  <span>Welcome!</span>
  ```

---

## How It Works

- If the file `layouts/partials/components/header/right.html` exists, the theme will render its content on the right
  side of the header, next to the language selector.
- If the file does not exist, no additional elements will be added, and the default header layout remains unchanged.

---

## Example Folder Structure

```plaintext
your-site/
├── layouts/
│   └── partials/
│       └── components/
│           └── header/
│               └── right.html
├── config/
│   └── _default/
│       └── params.toml
```

---

## Notes

- **Styling**: Use Bootstrap classes or custom CSS to style your custom elements.
- **Flexibility**: This approach allows you to add any type of element, such as buttons, icons, or custom links.
