document.addEventListener("DOMContentLoaded", function() {
    fetch("data/assets.spawndata")
        .then(response => response.text())
        .then(data => {
            const assets = parseAssetData(data);
            displayAssets(assets);
        })
        .catch(error => console.error("Error loading spawndata:", error));

    function parseAssetData(data) {
        return data.split('\n\n').map(item => {
            const asset = {};
            item.split('\n').forEach(line => {
                const [key, value] = line.split(': ');
                asset[key.trim()] = value.trim();
            });
            return asset;
        });
    }

    function displayAssets(assets) {
        const container = document.querySelector(".card-grid");

        assets.forEach(asset => {
            const cardContainer = document.createElement("div");
            cardContainer.classList.add("card-container");

            const card = document.createElement("div");
            card.classList.add("card");

            const title = document.createElement("h2");
            title.textContent = asset.title;

            const thumbnail = document.createElement("div");
            thumbnail.classList.add("thumbnail");
            const img = document.createElement("img");
            img.src = asset.image;
            img.alt = `${asset.title} Thumbnail`;
            thumbnail.appendChild(img);

            const description = document.createElement("p");
            description.textContent = asset.description;

            const cardLogo = document.createElement("img");
            cardLogo.classList.add("card-logo");
            cardLogo.src = "img/orangebutton.png";  // You can replace this with a real logo or icon
            cardLogo.alt = "Orange Button Logo";

            // Dynamically create the article_url based on the asset id
            const articleUrl = `/asset?id=${asset.id}`;

            const link = document.createElement("a");
            link.href = articleUrl;  // Use the dynamically created URL
            link.appendChild(card);  // Wrap the entire card in the anchor link

            card.appendChild(title);
            card.appendChild(thumbnail);
            card.appendChild(description);
            card.appendChild(cardLogo);

            cardContainer.appendChild(link);
            container.appendChild(cardContainer);
        });
    }
});
