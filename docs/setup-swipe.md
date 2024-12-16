# Integrating Swiper in the Indigo Theme

The Indigo theme supports **Swiper**, a modern, responsive, and customizable slider/carousel library. You can use Swiper
to create image sliders, carousels, and other interactive content sections.

---

## Enabling Swiper

To enable Swiper's JavaScript and CSS in your project, add the following configuration to your `config.toml` or
`params.toml` file:

```toml
[swiper]
enable = true
```

This setting will include the necessary Swiper JS and CSS files in your project.

---

## Using Swiper in Your Project

Once Swiper is enabled, you can create sliders or carousels using Swiper's HTML structure and initialization scripts.

### Example HTML Structure

```html

<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="img/slide1.jpg" alt="Slide 1">
    </div>
    <div class="swiper-slide">
      <img src="img/slide2.jpg" alt="Slide 2">
    </div>
    <div class="swiper-slide">
      <img src="img/slide3.jpg" alt="Slide 3">
    </div>
  </div>

  <!-- Navigation Buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- Pagination -->
  <div class="swiper-pagination"></div>
</div>
```

### Initialization Script

Add the following script to initialize the Swiper carousel:

```html

<script>
  document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
      },
    });
  });
</script>
```

---

## Folder Structure Example

```plaintext
your-site/
├── assets/
│   ├── img/
│       ├── slide1.jpg
│       ├── slide2.jpg
│       ├── slide3.jpg
├── config/
│   ├── _default/
│       ├── params.toml
```

---

## Notes

- **Customization**: Swiper offers many configuration options for autoplay, pagination, navigation, and transition
  effects. Refer to the [Swiper Documentation](https://swiperjs.com/) for more details.
- **Responsiveness**: Swiper is fully responsive and adapts to different screen sizes.
- **Performance**: Enabling Swiper loads the required JS and CSS files, so only enable it if your project uses Swiper
  components.
