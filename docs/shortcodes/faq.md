# Shortcode: `faq`

The `faq` shortcode creates a Frequently Asked Questions (FAQ) section using a collapsible accordion layout. Each question and answer is displayed in an interactive format, making it easy for users to navigate and find relevant information.

---

## Parameters

- **`context`** (required): Specifies the key in the front matter that contains the FAQ data.
    - **`Items`**: A list of questions and answers. Each item should include:
        - **`question`**: The FAQ question.
        - **`answer`**: The corresponding answer.

- **`id`** (optional): Unique identifier for the accordion, used to group and control collapsible elements.

---

## Front Matter Example

Define the FAQ data in the page's front matter under the specified `context`.

```yaml
faq:
  Items:
    - question: "What is the return policy?"
      answer: "You can return any item within 30 days of purchase for a full refund."
    - question: "Do you offer international shipping?"
      answer: "Yes, we ship to over 50 countries worldwide. Shipping costs may vary."
    - question: "How can I track my order?"
      answer: "Once your order is shipped, you'll receive a tracking number via email."
```

---

## Usage Example

### Rendering an FAQ Section

```markdown
{{< faq context="faq" id="faq-section" >}}
```

This will render an FAQ section using the data defined in the `faq` field of the front matter.

---

## Notes

- **Responsive Design**: The layout adjusts seamlessly for various screen sizes.
- **Unique IDs**: Ensure each FAQ section has a unique `id` if multiple sections are used on the same page.
