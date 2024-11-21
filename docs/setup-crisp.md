# Configuring Crisp Chat and Crisp Form in the Indigo Theme

The Indigo theme integrates seamlessly with Crisp Chat and Crisp Form, enabling real-time communication with your visitors and an easy-to-use contact form setup.

---

## Configuration

To enable Crisp Chat and Crisp Form, add the following configuration to your `config.toml` file or create a `params.toml` file in the `config/_default/` directory.

### Example Configuration

```toml
[crisp_chat]
enable = true
id = "0790d7b5-508a-4c48-9a15-3a4a2c0e24c4"

[crisp_form]
enable = true
id = "0790d7b5-508a-4c48-9a15-3a4a2c0e24c4"
```

---

## Configuration Options

### Crisp Chat

- **`enable`**: Set to `true` to activate Crisp Chat.
- **`id`**: Your Crisp website ID. Replace `"0790d7b5-508a-4c48-9a15-3a4a2c0e24c4"` with the unique ID provided by Crisp.

### Crisp Form

- **`enable`**: Set to `true` to activate Crisp Form.
- **`id`**: Your Crisp form ID. Replace `"0790d7b5-508a-4c48-9a15-3a4a2c0e24c4"` with the unique ID provided by Crisp.

---

## Applying Changes

1. Add the configuration to your Hugo project as described above.
2. Restart your Hugo server to apply the changes:

   ```bash
   hugo server
   ```

Once configured, Crisp Chat will be enabled for live conversations, and Crisp Form will provide an integrated contact form for your visitors.

---

## Folder Structure Example

```plaintext
your-site/
├── config/
│   ├── _default/
│       ├── params.toml
├── config.toml
```

---

## Notes

- Make sure to create a Crisp account and obtain the required IDs for both Chat and Form.
- Use Crisp Chat for real-time visitor engagement and Crisp Form for easy lead capture.

