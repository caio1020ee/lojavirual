document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "luminaria", image: "luminaria.jpg", link: "https://amzn.to/4ipfEB0" },
        { name: "fechadura", image: "fechadura.jpg", link: "https://amzn.to/4hFmaCu" },
        { name: "Câmera", image: "camera.jpg", link: "https://amzn.to/41ICoEQ" },
        { name: "cortina", image: "janela.jpg", link: "https://amzn.to/4iQCIsb" },
        { name: "chaveiro", image: "chaveiro.jpg", link: "https://amzn.to/4iblIx4" },
        { name: "ehance", image: "enhance.jpg", link: "https://amzn.to/4iwQjVz" },
        { name: "Camera vigilancia", image: "cameravigilancia.jpg", link: "https://amzn.to/4iAoImC" },

       
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
