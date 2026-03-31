<h1>Domaine Technical Assessment</h1>

## Overview

This project implements a product tile based on the provided Figma designs as part of the Domaine technical assessment.

The product tile is built within a Shopify theme environment using TailwindCSS and supports interactive features such as color variant selection, hover states, and dynamic pricing display.

## Links

- 🔗 Live Demo: [Shopify preview link]
- 📦 GitHub Repository: [repo link]

## Tech Stack

- Shopify (Liquid)
- TailwindCSS (using CDN vs build process since small example project)
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
