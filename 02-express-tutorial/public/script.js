document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetch-products");
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const priceInput = document.getElementById("price-input");
    const productsContainer = document.getElementById("products-container");

   

    // Function to render product cards dynamically
    function renderProducts(products) {
        const productsContainer = document.getElementById("products-container");
        productsContainer.innerHTML = ""; // Clear previous content

        if (products.length === 0) {
            productsContainer.innerHTML = `<p>No products found.</p>`;
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                 <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
            `;

            productsContainer.appendChild(productCard);
        });
    }

    // Fetch all products
    fetchButton.addEventListener("click", async () => {
        const response = await fetch("/api/v1/products");
        const products = await response.json();
        renderProducts(products);
        
    });
    

   

    // Search products with name and price filter
    searchButton.addEventListener("click", () => {
        const searchValue = searchInput.value.trim();
        const priceValue = priceInput.value.trim();
        let query = [];

        if (searchValue) query.push(`search=${encodeURIComponent(searchValue)}`);
        if (priceValue) query.push(`maxPrice=${encodeURIComponent(priceValue)}`);

        if (query.length === 0) return alert("Please enter a search term or max price!");

        fetch(`/api/v1/query?${query.join("&")}`)
            .then(response => response.json())
            .then(data => renderProducts(data))
            .catch(error => console.error("Error searching products:", error));
    });
});
