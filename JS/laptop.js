const allProducts = [
    {
        "id": 1,
        "name": "Apple 2024 MacBook Air 13-inch Laptop",
        "price": 949.00,
        "discount": 100.00,
        "image": "./assets/MacBook-Air-2024.jpeg",
        "description": "Apple 2024 MacBook Air 13-inch Laptop with M4 chip: Built for Apple Intelligence, 13.6-inch Liquid Retina Display, 16GB Unified Memory, 256GB SSD Storage, 12MP Center Stage Camera, Touch ID; Midnight",
        "rating": 5
    },
    {
        "id": 2,
        "name": "HP 14 Laptop",
        "price": 177.35,
        "discount": 52.64,
        "image": "./assets/hp.jpeg",
        "description": "HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home, Thin & Portable, 4K Graphics, One Year of Microsoft 365 (14-dq0040nr, Snowflake White)",
        "rating": 4
    },
    {
        "id": 3,
        "name": "Acer Aspire 3 A315-24P-R7VH Slim Laptop",
        "price": 299.99,
        "discount": 21.00,
        "image": "./assets/acer.jpeg",
        "description": "Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6\" Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home in S Mode",
        "rating": 4
    },
    {
        "id": 4,
        "name": "Lenovo 100E Chromebook 2nd Gen",
        "price": 40.00,
        "discount": 10.00,
        "image": "./assets/lenovo.jpeg",
        "description": "Lenovo 100E Chromebook 2ND Gen 81QB000AUS Laptop Computer, 11.6\" HD (1366 X 768) Display, MediaTek MT8173C Processor, 4GB RAM, 16GB eMMC TLC SSD, Powervr GX6250, Chrome OS, Black (Renewed)",
        "rating": 3
    },
    {
        "id": 5,
        "name": "ASUS ROG Strix G16 Gaming Laptop",
        "price": 1038.14,
        "discount": 161.85,
        "image": "./assets/ASUS-Gaming-Laptop.jpeg",
        "description": "ASUS ROG Strix G16 Gaming Laptop, 165Hz Display, NVIDIA® GeForce RTX™ 4060, Intel Core i7-13650HX, 16GB DDR5, 1TB PCIe Gen4 SSD, Wi-Fi 6E, Windows 11, G614JV-AS74",
        "rating": 5
    },
    {
        "id": 6,
        "name": "HP Pavilion 15.6\" HD Touchscreen Laptop",
        "price": 309.99,
        "discount": 90.00,
        "image": "./assets/HP-Pavilion-Laptop.jpeg",
        "description": "HP Pavilion 15.6\" HD Touchscreen Anti-Glare Laptop, 16GB RAM, 1TB SSD Storage, Intel Core Processor up to 4.1GHz, Up to 11 Hours Long Battery Life, Type-C, HDMI, Windows 11 Home, Silver",
        "rating": 4
    },
    {
        "id": 7,
        "name": "Apple 2024 MacBook Pro 14-inch Laptop",
        "price": 1273.09,
        "discount": 226.91,
        "image": "./assets/MacBook-Laptop.jpeg",
        "description": "Apple 2024 MacBook Pro Laptop with M4 chip with 10‑core CPU and 10‑core GPU: Built for Apple Intelligence, 14.2-inch Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage; Space Black",
        "rating": 5
    },
    {
        "id": 8,
        "name": "Apple 2022 MacBook Air Laptop with M2 chip",
        "price": 718.09,
        "discount": 80.91,
        "image": "./assets/MacBook Air- M2.jpeg",
        "description": "Apple 2022 MacBook Air Laptop with M2 chip: Built for Apple Intelligence, 13.6-inch Liquid Retina Display, 16GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera; Midnight",
        "rating": 5
    },
    {
        "id": 9,
        "name": "HP 15.6\" Business Laptop",
        "price": 412.79,
        "discount": 87.20,
        "image": "./assets/hp-business.jpeg",
        "description": "HP 15.6\" Business Laptop, Free Microsoft Office 2024 Lifetime License, Copilot AI Chat, HD Touchscreen Display, Intel 6-Core i3-1215U 4.4 GHz, 16GB RAM, 1TB SSD, Long Battery Life, Windows 11 Pro",
        "rating": 4
    },
    {
        "id": 10,
        "name": "Apple MacBook Air 2020 13.3-inch",
        "price": 429.00,
        "discount": 70.00,
        "image": "./assets/mac-2022.jpeg",
        "description": "Apple MacBook Air 2020 13.3-inch (Apple M1 Chip, 8GB RAM, 256GB SSD Storage) - Space Gray (Renewed)",
        "rating": 4
    }
];

let cart = [];



document.getElementById('search-input').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const filteredProducts = allProducts.filter(product => {
        return product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
    });

    // Display the filtered products
    displayFilteredProducts(filteredProducts);
});

// Function to display the filtered products
function displayFilteredProducts(products) { allProducts
    const productContainer = document.getElementById("toy-list");
    productContainer.innerHTML = ""; // Clear existing products

    if (products.length === 0) {
        productContainer.innerHTML = "<p>No products found.</p>"; // Display message if no products match
    }

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="pPrice">
                <p class="original-price"><s>$${product.price.toFixed(2)}</s></p>
                <p class="discount-price"><strong>$${product.discount.toFixed(2)}</strong></p>
            </div>
            <div class="review-stars">${generateStars(product.rating)}</div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}



// Toggle Cart Visibility
function toggleCart() {
    const cartContainer = document.getElementById("cart-section");
    const productContainer = document.getElementById("toys-section");

    if (cartContainer.style.display === "none") {
        cartContainer.style.display = "block";
        productContainer.style.display = "none";
    } else {
        cartContainer.style.display = "none";
        productContainer.style.display = "block";
    }
}


// Add product to cart
function addToCart(productId) {
    const product = allProducts.find((p) => p.id === productId);
    if (!product) return;

    const existingItem = cart.find((item) => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    displayCart();
    updateCartIcon();
    showToast(`"${product.name}" has been added to your cart.`);
}

function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? `<i class="fas fa-star"></i>` : `<i class="far fa-star"></i>`;
    }
    return stars;
}


// Display cart items
function displayCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p class="empty-cart-message">🛒 Your cart is empty.</p>`;
        updateCartSummary(0);
        return;
    }

    cart.forEach((item) => {
        total += item.discount * item.quantity;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
           <div class="item-details">
               <div>
                <h4>${item.name}</h4>
                <p><s>$${item.price.toFixed(2)}</s> <strong>$${item.discount.toFixed(2)}</strong> x <span>${item.quantity}</span></p>
               </div>
               <div>
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
                <button onclick="removeFromCart(${item.id})">delete</button>
               </div>
            </div>
        `;
        cartContainer.appendChild(cartItemDiv);
    });

    updateCartSummary(total);
}

// Update item quantity in the cart
function updateQuantity(productId, change) {
    const item = cart.find((item) => item.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    }

    displayCart();
    updateCartIcon();
}

// Remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    displayCart();
    updateCartIcon();
}

// Update the cart icon count
function updateCartIcon() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").innerText = cartCount;
}

// Show a toast notification
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// Display toys on the page
function displayProducts() {
    const productContainer = document.getElementById("toy-list");
    productContainer.innerHTML = "";

    const initialCount = 8;
    let visibleProducts = allProducts.slice(0, initialCount);
    let hiddenProducts = allProducts.slice(initialCount);

    function renderProducts(products) {
        products.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" />
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><s>$${product.price.toFixed(2)}</s> <strong>$${product.discount.toFixed(2)}</strong></p>
                <div class="review-stars">${generateStars(product.rating)}</div>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productDiv);
        });
    }

    // Render initial 8 products
    renderProducts(visibleProducts);

    // Create and append "See More" button if there are more products
    if (hiddenProducts.length > 0) {
        const seeMoreBtn = document.createElement("button");
        seeMoreBtn.classList.add("seeMore-btn");
        seeMoreBtn.innerText = "See More";
        seeMoreBtn.onclick = function () {
            renderProducts(hiddenProducts);
            seeMoreBtn.style.display = "none"; // Hide button after showing all products
        };
        productContainer.appendChild(seeMoreBtn);
    }
}


// Update Cart Summary
function updateCartSummary(total) {
    document.getElementById("cart-subtotal").innerText = `$${total.toFixed(2)}`;
    document.getElementById("cart-total").innerText = `$${total.toFixed(2)}`;
    document.getElementById("checkout-button").disabled = total === 0;
}

// Checkout function
function checkout() {
    alert("Proceeding to checkout...");
}

// Display products on page load
displayProducts();
