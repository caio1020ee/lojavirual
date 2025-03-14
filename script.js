document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Protetor Fecha Veda Fresta", image: "protetor.jpg", link: "#" },
        { name: "Cortador de Legumes", image: "cortador.jpg", link: "#" },
        { name: "Câmera", image: "camera.jpg", link: "https://amzn.to/41ICoEQ" }
    ];

    const productList = document.getElementById("product-list");
    
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <a href="${product.link}" target="_blank">
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
            </a>
        `;

        productList.appendChild(productDiv);
    });

    document.getElementById("search").addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        document.querySelectorAll(".product").forEach(product => {
            const productName = product.textContent.toLowerCase();
            product.style.display = productName.includes(searchTerm) ? "block" : "none";
        });
    });
});
