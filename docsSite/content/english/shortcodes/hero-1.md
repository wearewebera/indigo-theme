---
title: "Hero 1"
description: "Hero 1 shortcode is used to display a hero section with a background image, title, subtitle, and a button."

hero:
  title: "Lorem ipsum dolor sit amet"
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  image: "img/content/shortcodes/hero-1/hero-1.png"
  button:
    label: "Action Button"
    link: "#"
    
hero-alt:
  title: "Lorem ipsum dolor sit amet"
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  image: "img/content/shortcodes/hero-1/hero-2.png"
  button:
    label: "Action Button"
    link: "#"

hero-no-button:
  title: "Lorem ipsum dolor sit amet"
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  image: "img/content/shortcodes/hero-1/hero-2.png"
---

{{< hero-1 context="hero" bg-color="light" btn-color="secondary" >}}

<hr>

{{< hero-1 context="hero-alt" bg-color="primary" btn-color="secondary" dark="true" >}}

<hr>

{{< hero-1 context="hero" bg-color="secondary" btn-color="light" dark="true" >}}

<hr>

{{< hero-1 context="hero-no-button" bg-color="danger" dark="true" >}}