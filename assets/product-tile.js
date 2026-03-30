document.addEventListener("DOMContentLoaded", () => {
  const productTiles = document.querySelectorAll(".product-tile");

  productTiles.forEach(tile => {
    const buttons = tile.querySelectorAll(".color-swatch");

    let selectedColor = null;

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const color = button.dataset.color;

        // Update selected state
        selectedColor = color;

        // Update UI (active class)
        buttons.forEach(btn => btn.classList.remove("border"));
        button.classList.add("border");


        console.log("Selected color:", selectedColor);
      });
    });
  });
});