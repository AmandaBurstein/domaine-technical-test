document.addEventListener("DOMContentLoaded", () => {
  const productTiles = document.querySelectorAll("[data-product-tile]");

  productTiles.forEach(tile => {
    const productDataEl = tile.querySelector("[data-variants]");
    const variants = JSON.parse(productDataEl.textContent);
    const buttons = tile.querySelectorAll("[data-color-swatch]");
    const mainImage = tile.querySelector("[data-image-primary]");
    const hoverImage = tile.querySelector("[data-image-secondary]");
    const priceEl = tile.querySelector("[data-price]");
    const compareEl = tile.querySelector("[data-compare-at]");
    const badgeEl = tile.querySelector("[data-badge]");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const color = button.dataset.color;

        // Update active swatch border
        buttons.forEach(btn => btn.classList.remove("border"));
        button.classList.add("border");

        // Find matching variant
        const variant = variants.find(variant =>
          variant.options.includes(color)
        );
         if (!variant) return;

        // Update main image
        if (variant.featured_image && mainImage) {
          mainImage.src = variant.featured_image.src || variant.featured_image;
        }

        // Update hover/secondary image
        if (variant.hover_image && hoverImage) {
          hoverImage.src = variant.hover_image;
        }

        // Update price
        if (priceEl) priceEl.textContent = formatMoney(variant.price);
        if (compareEl) {
          if (variant.compare_at && variant.compare_at > variant.price) {
            compareEl.textContent = formatMoney(variant.compare_at);
            compareEl.classList.remove("hidden");
            priceEl.classList.add("text-[#FF0000]");
            badgeEl.classList.remove("hidden");
          } else {
            compareEl.classList.add("hidden");
            priceEl.classList.remove("text-[#FF0000]");
            badgeEl.classList.add("hidden");
          }
        }
      });
    });
  });
});

// Helper to format cents into Shopify money string
function formatMoney(cents) {
  if (!cents) return "";
  return "$" + (cents / 100).toFixed(2);
}