# Shortcode: `cta-1`

The `cta-1` shortcode creates a call-to-action section featuring an image, title, description, and button. It is a versatile component ideal for driving user engagement and highlighting key actions.

---

## Parameters

- **`context`** (required): Specifies the key in the front matter that contains the data for the call-to-action.
    - **`Title`**: The main heading of the section.
    - **`Content`**: A description or additional information for the section.
    - **`Image`**: The path to the image displayed in the section.
    - **`Button`**: Includes the button's `Link` and `Label`.

- **`id`** (optional): Unique identifier for the section.
- **`class`** (optional): Additional CSS classes for styling.
- **`bg-color`** (optional): Background color for the section, using Bootstrap's color scheme.
- **`btn-color`** (optional): Button color, also following Bootstrap's color scheme.
- **`dark`** (optional): Set to `"true"` to apply a dark mode style.
- **`reverse`** (optional): Set to `"true"` to reverse the order of the image and text.

---

## Front Matter Example

Define the call-to-action data in the page's front matter under the specified `context`.

```yaml
cta:
  Title: "Join Our Community"
  Content: "Be a part of our vibrant and growing community by signing up today."
  Image: "img/cta/community.jpg"
  Button:
    Label: "Get Started"
    Link: "/sign-up"
```

---

## Usage Example

### Basic Example

```markdown
{{< cta-1 context="cta" id="join-community" bg-color="primary" btn-color="secondary" dark="false" reverse="true" >}}
```

This will render a call-to-action section using the data defined in the `cta` field of the front matter.

---

## Notes

- **Colors**: Both `bg-color` and `btn-color` follow the Bootstrap color scheme.
- **Responsive Layout**: The section is fully responsive, with the image and text dynamically adjusting based on screen size.
- **Dark Mode**: Use the `dark` parameter to switch to a light-on-dark style for improved contrast.
