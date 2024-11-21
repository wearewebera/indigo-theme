# Shortcode: `contact-form`

The `contact-form` shortcode renders a contact form with a descriptive side panel. It integrates with Crisp for handling form submissions and provides a customizable layout for user engagement.

---

## Parameters

- **`context`** (required): Specifies the key in the front matter containing the data for the form and side panel.
    - **`Title`**: The title displayed in the side panel.
    - **`Content`**: A brief description or instructions displayed in the side panel.
    - **`Icon`**: An optional icon displayed above the title.
- **`class`** (optional): Additional CSS classes to customize the form's appearance.

---

## Front Matter Example

Define the contact form data in the page's front matter under the specified `context`.

```yaml
contact:
  Title: "Get in Touch"
  Content: "Feel free to reach out to us for any inquiries or assistance. We are here to help!"
  Icon: "fa-solid fa-envelope"
```

---

## Usage Example

### Rendering the Contact Form with Context

```markdown
{{< contact-form context="contact" class="custom-form" >}}
```

This will render the contact form using the data defined in the `contact` field of the front matter.

---

## Notes

- **Icons**: Use FontAwesome classes in the `Icon` field for consistent visual styling.
- **Integration**: The form integrates with Crisp for handling submissions. Ensure Crisp is configured in your project.
- **Responsive Layout**:
    - The contact form appears on the left.
    - The side panel with title, content, and icon is displayed on the right for larger screens and is hidden on smaller screens.

