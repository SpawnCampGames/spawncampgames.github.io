document.addEventListener("DOMContentLoaded", function () {
    fetch("data/assets.json")
        .then(response => response.json())
        .then(assets => {
            const grid = document.querySelector(".card-grid");

            // Display the first 3 assets dynamically
            assets.slice(0, 3).forEach(asset => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <div class="thumbnail">
                        <img src="${asset.image}" alt="${asset.title}">
                    </div>
                    <h2>${asset.title}</h2>
                    <p>${asset.description}</p>
                `;
                // Add click listener to redirect to asset.html with the asset ID
                card.addEventListener("click", () => {
                    window.location.href = `asset.html?id=${asset.id}`;
                });
                grid.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading assets:", error));
});
