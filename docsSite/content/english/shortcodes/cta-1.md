---
title: "CTA 1"
description: "Hero 1 shortcode is used to display a hero section with a background image, title, subtitle, and a button."

cta:
  title: "Avanti’s Notion Store"
  content: "Explore our Notion Store to discover a wide range of templates designed to enhance your productivity. From project management to personal development, we have a template for every need."
  image: "img/content/shortcodes/cta-1/image-1.png"
  button:
    label: "Visit Notion Store"
    link: "https://avantistudio.gumroad.com/"

cta-1:
  title: "Avanti’s Notion Store"
  content: "Explore our Notion Store to discover a wide range of templates designed to enhance your productivity. From project management to personal development, we have a template for every need."
  image: "img/content/shortcodes/cta-1/image-2.png"
  items:
    - image: "img/content/shortcodes/cta-1/check.png"
      content: "<strong>The global ECG devices market</strong> is projected to reach $40 billion by 2031."
    - image: "img/content/shortcodes/cta-1/check.png"
      content: "<strong>Rural healthcare</strong> technology represents a $20 billion market."
    - image: "img/content/shortcodes/cta-1/check.png"
      content: "<strong>Telemedicine</strong> is expanding rapidly, growing at 35% annually."
    - image: "img/content/shortcodes/cta-1/check.png"
      content: "<strong>AI-driven healthcare</strong> solutions are expected to become a $187 billion industry by 2030."
    - image: "img/content/shortcodes/cta-1/check.png"
      content: "<strong>With a subscription-based</strong> SaaS model, Life Pulse offers a scalable and sustainable revenue stream."
---
<br>
<br>
<br>

{{< cta-1 context="cta" bg-color="primary" btn-color="secondary" dark="true" / >}}

<hr>

{{< cta-1 context="cta" bg-color="light" btn-color="primary" reverse="true" / >}}

<hr>

{{< cta-1 context="cta" bg-color="secondary" btn-color="primary" dark="true" / >}}

<hr>

{{< cta-1 context="cta-1" bg-color="light" btn-color="danger" >}}
{{< list-1 context="cta-1" class="mt-5" >}}
{{< / cta-1 >}}

<hr>

{{< cta-1 context="cta-1" bg-color="success" btn-color="primary" dark="true" reverse="true" >}}
{{< markdown class="mt-5 text-bg-light rounded-2 p-4" >}}

### This is a custom markdown content

This is a custom markdown content

{{< /markdown >}}
{{< / cta-1 >}}

<hr>
