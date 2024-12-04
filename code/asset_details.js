document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const assetId = params.get("id");

    if (!assetId) {
        document.querySelector("#asset-details").innerHTML = "<p>Asset not found.</p>";
        return;
    }

    fetch("data/assets.json")
        .then(response => response.json())
        .then(assets => {
            const asset = assets.find(item => item.id === assetId);
            if (asset) {
                const details = document.querySelector("#asset-details");
                details.innerHTML = `
                    <div class="thumbnail">
                        <img src="${asset.image}" alt="${asset.title}">
                    </div>
                    <h1>${asset.title}</h1>
                    <p>${asset.description}</p>
                    <a class="download-btn" href="downloads/${assetId}.zip">Download</a>
                `;
            } else {
                document.querySelector("#asset-details").innerHTML = "<p>Asset not found.</p>";
            }
        })
        .catch(error => console.error("Error loading asset details:", error));
});
