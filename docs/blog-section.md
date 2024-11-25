# Blog Section in the Indigo Theme

The Indigo theme includes a dedicated blog section, allowing you to create and manage posts with ease. This guide
outlines how to structure your blog content, configure front matter, and set up author profiles.

---

## File Structure

Blog posts must be stored in the `content/blog` directory of your Hugo project.

### Example Folder Structure

```plaintext
your-site/
├── content/
│   ├── blog/
│       ├── post-1.md
│       ├── post-2.md
│   ├── author/
│       ├── joel-zamboni.md
```

---

## Blog Post Configuration

Each blog post requires front matter metadata to define its properties.

### Example Front Matter

```yaml
---
title: "5 Essential Tips for Seamless Video Calls"
description: "During quarantine, flexibility is the highest priority in everyone's life working from home, and technology is the central driver of this flexibility. Video calls are one of the most practical ways to hold meetings and virtually connect with all our work partners. But still, it is not always so easy. So, let's share some essential tips to help you using Google Meet."
keywords: "video calls, video conferencing, remote work, work from home, Google Meet"
author: "Joel Zamboni"
image: "img/blog/5-essential-tips-for-seamless-video-calls.png"
featured: true
---

During quarantine, flexibility is the highest priority in everyone's life working from home, and technology is the central driver of this flexibility. Video calls are one of the most practical ways to hold meetings and virtually connect with all our work partners. But still, it is not always so easy. So, let's share some essential tips to help you using Google Meet.
```

### Front Matter Fields

- **`title`**: The title of the blog post.
- **`description`**: A short summary or meta description of the post.
- **`keywords`**: SEO keywords associated with the post.
- **`author`**: The name of the author. This must match an author profile in the `content/author` directory.
- **`image`** (optional): The path to the blog post's cover image.
- **`featured`** (optional): Set to `true` to highlight the post on the blog's main page. The most recent post with
  `featured: true` will appear as the featured post.

---

## Author Profiles

Each author must have a profile stored in the `content/author` directory.

### Example Author Profile

Create a file like `joel-zamboni.md` in the `content/author` directory with the following content:

```yaml
---
title: "Joel Zamboni"
image: "/img/author/joel-zamboni.png"
social:
  - icon: "fa-brands fa-instagram"
    name: "instagram"
    link: "https://www.instagram.com/joelzamboni/"
  - icon: "fa-brands fa-linkedin-in"
    name: "linkedin"
    link: "https://www.linkedin.com/in/joelzamboni/"
  - icon: "fa-brands fa-x-twitter"
    name: "twitter"
    link: "https://twitter.com/joelzamboni"
---

Joel Zamboni is an entrepreneur with a business in technology, digital services, and coffee. Joel's career was developed
in managed services with experience in international and complex enterprise environments. He worked on several projects
including the migration of full data centers with thousands of servers to AWS & Google Cloud and more than 20.000 users
to G Suite. He has extensive experience in the deployment and monitoring of Web Apps, Content Management, Billing
Systems, CRM, ERP in companies like Nextel International, AARP, Natura, AOL, and HP.
```

### Fields for Author Profile

- **`title`**: The author's name.
- **`image`**: Path to the author's profile picture.
- **`social`**: List of social media accounts with the platform icon, name, and link.
- **Content**: A brief biography or description of the author.

---

## Applying Changes

1. Add blog posts to the `content/blog` directory.
2. Add corresponding author profiles to the `content/author` directory.
3. Restart your Hugo server to view changes:

   ```bash
   hugo server
   ```

---

## Notes

- Posts without a valid `author` field will not display author information.
- Use the **featured** field to promote important posts on the blog's main page.
- Ensure paths for `image` and `author` profiles are correct for seamless integration.

