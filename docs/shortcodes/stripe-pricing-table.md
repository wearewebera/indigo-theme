# Shortcode: `stripe-pricing-table`

The `stripe-pricing-table` shortcode embeds a Stripe-hosted pricing table into your page. It simplifies the process of integrating Stripe payment plans, allowing users to view and select pricing options directly.

---

## Parameters

- **`id`** (required): The unique identifier for the Stripe pricing table. This is provided by Stripe when creating the pricing table.
- **`key`** (required): Your Stripe publishable key for embedding the pricing table securely.

---

## Usage Example

### Rendering a Stripe Pricing Table

```markdown
{{< stripe-pricing-table id="prctbl_1Example12345" key="pk_live_1234567890abcdef" >}}
```

This will embed the pricing table identified by the `id` and use the provided `key` to fetch the data from Stripe.

---

## Notes

- **Stripe Script**: The shortcode automatically includes the Stripe JavaScript library required for rendering the pricing table.
- **Container**: The pricing table is wrapped in a responsive container for proper alignment within the layout.
- **Secure Integration**: Ensure you use the correct publishable key and table ID provided by Stripe for your project.

---

## Additional Resources

- [Stripe Pricing Table Documentation](https://stripe.com/docs/payments/checkout/pricing-table)
- [Stripe API Keys](https://stripe.com/docs/keys)
