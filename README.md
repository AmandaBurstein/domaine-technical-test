<h1>👩‍💻 Domaine Technical Assessment 👩‍💻</h1>

## Overview

This project implements a product tile based on the provided Figma designs as part of the Domaine technical assessment.

The product tile is built within a Shopify theme environment using TailwindCSS and supports interactive features such as color variant selection, hover states, and dynamic pricing display.

## Links

- 🔗 Live Demo: [https://amandas-dev-store.myshopify.com/?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaVJoYldGdVpHRnpMV1JsZGkxemRHOXlaUzV0ZVhOb2IzQnBabmt1WTI5dEJqb0dSVlE9IiwiZXhwIjoiMjAyNi0wMy0zMVQxNzo0ODowMC45MjRaIiwicHVyIjoicGVybWFuZW50X3Bhc3N3b3JkX2J5cGFzcyJ9fQ%3D%3D--1a80c011ff7417ce867153b2ae7901df14161f2d&_fd=0&_sc=1&key=7a15a348cecfa77336ac36e9220f629a0e03ffdcd1853d501e5efd5c0a7c5312&preview_theme_id=160467747059]
- 📦 GitHub Repository: [https://github.com/AmandaBurstein/domaine-technical-test]

## Tech Stack

- Shopify (Liquid)
- TailwindCSS (using CDN vs build process reduce setup complexity)
- JavaScript (for interactivity)
- Shopify CLI (for local development)

## Features

- ✅ Display product title, brand, and pricing
- ✅ Sale badge and markdown pricing for discounted variants
- ✅ Variant swatches with clickable color selection
- ✅ Dynamic image update based on selected variant
- ✅ Secondary image on hover (configured via variant metafield)

## Design Decisions & Trade-offs

- Built the product tile as a reusable snippet to allow easy reuse across sections
- Used CDN Tailwind versus build process to reduce setup complexity for this small project
- Secondary hover images are driven by variant metafields, since variants have only a single featured image
- Default Tailwind font was used instead of the Figma-specified font to reduce setup complexity for this small project.

## Future Improvements

- Refactor interactive logic into web component custom elements (e.g., `<product-tile>` and `<product-price>`) to encapsulate state and behavior and enable reuse across different templates without tightly coupling to Liquid structure
- Add accessibility enhancements (ARIA labels, keyboard navigation)
- Optimize image loading (lazy loading, responsive sizes)
- Use Tailwind Build Process to allow for a `tailwind.config.js` file to define custom colors, spacing, fonts, etc.
