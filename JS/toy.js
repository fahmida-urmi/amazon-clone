const bestToys = [
    {
        id: 1,
        name: "Apple iPhone 16 Pro Max",
        price: 1299.00,
        discount: 1149.00,
        image: "./images/MYX13QNA_1_Classic.png",
        description: "Apple iPhone 16 Pro Max 512GB 5G SIM Free Smartphone - White Titanium",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 2,
        name: "Apple iPad Wi-Fi Tablet",
        price: 249,
        discount: 219,
        image: "./images/MK2K3LLA_1_Supersize.jpg",
        description: "Apple iPad 2021 10.2 Space Grey 64GB Wi-Fi Tablet - Global Spec",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 3,
        name: "Apple MacBook Air",
        price: 649.97,
        discount: 589.99,
        image: "./images/A1MGN63BA_1_7781349_LargeProductImage.jpg",
        description: "Apple MacBook Air 13.3 Inch M1 8GB RAM 256GB SSD - Space Grey",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 1,
        name: "Apple iPhone 16 Pro Max",
        price: 1299.00,
        discount: 1149.00,
        image: "./images/MYX13QNA_1_Classic.png",
        description: "Apple iPhone 16 Pro Max 512GB 5G SIM Free Smartphone - White Titanium",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 2,
        name: "Apple iPad Wi-Fi Tablet",
        price: 249,
        discount: 219,
        image: "./images/MK2K3LLA_1_Supersize.jpg",
        description: "Apple iPad 2021 10.2 Space Grey 64GB Wi-Fi Tablet - Global Spec",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 3,
        name: "Apple MacBook Air",
        price: 649.97,
        discount: 589.99,
        image: "./images/A1MGN63BA_1_7781349_LargeProductImage.jpg",
        description: "Apple MacBook Air 13.3 Inch M1 8GB RAM 256GB SSD - Space Grey",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 3,
        name: "Apple MacBook Air",
        price: 649.97,
        discount: 589.99,
        image: "./images/A1MGN63BA_1_7781349_LargeProductImage.jpg",
        description: "Apple MacBook Air 13.3 Inch M1 8GB RAM 256GB SSD - Space Grey",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    
    {
        id: 3,
        name: "Apple MacBook Air",
        price: 649.97,
        discount: 589.99,
        image: "./images/A1MGN63BA_1_7781349_LargeProductImage.jpg",
        description: "Apple MacBook Air 13.3 Inch M1 8GB RAM 256GB SSD - Space Grey",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 3,
        name: "Apple MacBook Air",
        price: 649.97,
        discount: 589.99,
        image: "./images/A1MGN63BA_1_7781349_LargeProductImage.jpg",
        description: "Apple MacBook Air 13.3 Inch M1 8GB RAM 256GB SSD - Space Grey",
        rating: Math.floor(Math.random() * 5) + 1,
    }
];

let cart = [];



document.getElementById('search-input').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const filteredProducts = bestProducts.filter(product => {
        return product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
    });

    // Display the filtered products
    displayFilteredProducts(filteredProducts);
});

// Function to display the filtered products
function displayFilteredProducts(products) {
    const productContainer = document.getElementById("product-list");
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
    const product = bestToys.find((p) => p.id === productId);
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
                <h4>${item.name}</h4>
                <p><s>$${item.price.toFixed(2)}</s> <strong>$${item.discount.toFixed(2)}</strong> x <span>${item.quantity}</span></p>
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
                <button onclick="removeFromCart(${item.id})">Delete</button>
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
function displayToys() {
    const productContainer = document.getElementById("toy-list");
    productContainer.innerHTML = "";

    const initialCount = 8;
    let visibleProducts = bestToys.slice(0, initialCount);
    let hiddenProducts = bestToys.slice(initialCount);

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
displayToys();
