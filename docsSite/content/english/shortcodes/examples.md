---
title: "My Page"
description: "Examples of shortcodes in action."

hero:
  title: "Lorem ipsum dolor sit amet"
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  image: "img/content/shortcodes/hero-2/hero-1.png"

cta:
  title: "Avanti’s Notion Store"
  content: "Explore our Notion Store to discover a wide range of templates designed to enhance your productivity. From project management to personal development, we have a template for every need."
  image: "img/content/shortcodes/cta-1/image-2.png"
  button:
    label: "Visit Notion Store"
    link: "https://avantistudio.gumroad.com/"

join-us:
  title: "Join Us in Transforming Cardiac Care"
  subtitle: "Be part of shaping the future of cardiac diagnostics. We're seeking forward-thinking healthcare providers to collaborate on development and validation."

long-term-vision:
  title: "Long Term Vision"
  subtitle: "Our goal is to create a world where. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  items:
    - image: "img/content/shortcodes/examples/heart-check.png"
      title: "Universal access to cardiac care is a reality."
    - image: "img/content/shortcodes/examples/heart-check.png"
      title: "Healthcare disparities are significantly reduced."
    - image: "img/content/shortcodes/examples/heart-check.png"
      title: "Rural communities have sustainable, long-term healthcare solutions."
    - image: "img/content/shortcodes/examples/heart-check.png"
      title: "AI-driven diagnostics transform the standard of care globally."
---

{{< hero-2 context="hero" btn-color="danger" text-full-width="true" class="text-center" >}}

{{< cta-1 context="cta" bg-color="light" btn-color="primary" / >}}

{{< section id="long-term-vision" bg-color="primary" >}}
{{< section-header-1 context="long-term-vision" text-align="center" dark="true" >}}
{{< container >}}
{{< card-5 context="long-term-vision" bg-color="white" >}}
{{< / container >}}
{{< / section >}}