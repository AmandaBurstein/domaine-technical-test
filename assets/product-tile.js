document.addEventListener("DOMContentLoaded", () => {
  const productTiles = document.querySelectorAll(".product-tile");

  productTiles.forEach(tile => {
    const productDataEl = tile.querySelector(".variants-data");
    const variants = JSON.parse(productDataEl.textContent);

    console.log("variants", variants);

    const buttons = tile.querySelectorAll(".color-swatch");
    const mainImage = tile.querySelector(".product-image.primary");
    const hoverImage = tile.querySelector(".product-image.secondary");
    const priceEl = tile.querySelector(".price");
    const compareEl = tile.querySelector(".compare-at-price");

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

        // 1️⃣ Update main image
        if (variant.featured_image && mainImage) {
          mainImage.src = variant.featured_image.src || variant.featured_image;
        }

        // 2️⃣ Update hover/secondary image (optional)
        if (variant.hover_image && hoverImage) {
          hoverImage.src = variant.hover_image;
        }

        // 3️⃣ Update price
        if (priceEl) priceEl.textContent = formatMoney(variant.price);
        if (compareEl) {
          if (variant.compare_at && variant.compare_at > variant.price) {
            compareEl.textContent = formatMoney(variant.compare_at);
            compareEl.style.display = ""; // show compare-at price
          } else {
            compareEl.style.display = "none"; // hide compare-at if none
          }
        }
      });
    });
  });
});

// Helper to format cents into Shopify money string
function formatMoney(cents) {
  if (!cents) return "";
  // Example formatting for USD
  return "$" + (cents / 100).toFixed(2);
}