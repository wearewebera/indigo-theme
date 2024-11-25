# Shortcode: `section`

The `section` shortcode creates a customizable section element with optional background color and additional classes. It is designed to group content and provide consistent spacing across your pages.

---

## Parameters

- **`id`** (optional): Unique identifier for the section, used for linking or styling.
- **`bg-color`** (optional): Background color for the section, following Bootstrap's color scheme.
- **`class`** (optional): Additional CSS classes for custom styling or layout adjustments.

---

## Usage Example

### Basic Example

```markdown
{{< section id="about" >}}
## About Us

We are a company dedicated to providing excellent services and products.
{{< /section >}}
```

### With Background Color and Custom Classes

```markdown
{{< section id="services" bg-color="primary" class="text-center text-white" >}}
## Our Services

We offer a variety of services to meet your needs.
{{< /section >}}
```

---

## Notes

- **Spacing**: The section includes consistent vertical padding (`py-7`) for spacing.
- **Colors**: The `bg-color` parameter supports Bootstrap's predefined color classes, ensuring a consistent design system.
- **Customization**: Use the `class` parameter to add additional Bootstrap utility classes or custom styles.
