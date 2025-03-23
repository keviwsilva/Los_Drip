document.addEventListener("DOMContentLoaded", () => {
    fetch("assets/data/products.json")
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById("productsContainer");

            data.products.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("card");

                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">R$ ${product.price.toFixed(2)}</p>
        <p>Tamanho: ${product.size}</p>
        <a href="#" class="buy-button">Comprar</a>
                `;

                // Adiciona evento de clique para abrir o WhatsApp com a mensagem
                productElement.addEventListener("click", () => {
                    const phoneNumber = "5512988528896"; // Substitua pelo número correto
                    const message = `Olá! Gostaria de comprar a seguinte camisa: *${product.name}* Tamanho: ${product.size} Preço: R$ ${product.price.toFixed(2)}\n\nPoderia me ajudar com a compra?`;
                    const encodedMessage = encodeURIComponent(message);
                    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                    window.open(whatsappURL, "_blank");
                });

                productsContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error("Erro ao carregar produtos:", error));
});
