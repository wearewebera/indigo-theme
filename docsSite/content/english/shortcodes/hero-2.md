---
title: "Hero 2"
description: "Hero 2 shortcode is used to display a hero section with a background image, title, subtitle, and a button."

hero:
  title: "Lorem ipsum dolor sit amet"
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  image: "img/content/shortcodes/hero-2/hero-1.png"
  button:
    label: "Action Button"
    link: "#"
    
hero-alt:
  title: "Lorem ipsum dolor sit amet"
  subtitle: "<span class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>"
  image: "img/content/shortcodes/hero-2/hero-2.png"
  button:
    label: "Action Button"
    link: "#"

hero-no-button:
  title: "Lorem ipsum dolor sit amet"
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  image: "img/content/shortcodes/hero-2/hero-1.png"
---

{{< hero-2 context="hero" btn-color="light" >}}

<hr>

{{< hero-2 context="hero" btn-color="danger" text-full-width="true" class="text-center" >}}

<hr>

{{< hero-2 context="hero-alt" btn-color="primary" overlay="false" class="text-secondary" >}}

<hr>

{{< hero-2 context="hero-no-button" >}}
