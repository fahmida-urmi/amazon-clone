const allProducts = [
  
        {
            "id": 1,
            "name": "Ergonomic Mesh Office Chair",
            "price": 179.99,
            "discount": 139.99,
            "image": "./assets/office-chair1.jpg",
            "description": "Breathable mesh back office chair with lumbar support and adjustable armrests.",
            "rating": Math.floor(Math.random() * 5) + 1
        },
        {
            "id": 2,
            "name": "Leather Executive Office Chair",
            "price": 249.99,
            "discount": 199.99,
            "image": "./assets/office-chair2.jpg",
            "description": "High-back leather office chair with padded armrests and reclining function.",
            "rating": Math.floor(Math.random() * 5) + 1
        },
        {
            "id": 3,
            "name": "Gaming Office Chair with Footrest",
            "price": 229.99,
            "discount": 179.99,
            "image": "./assets/office-chair3.jpg",
            "description": "Comfortable gaming-style office chair with adjustable height, footrest, and headrest.",
            "rating": Math.floor(Math.random() * 5) + 1
        },
        {
            "id": 4,
            "name": "High-Back Mesh Office Chair",
            "price": 159.99,
            "discount": 129.99,
            "image": "./assets/office-chair4.jpg",
            "description": "Tall ergonomic office chair with breathable mesh, lumbar support, and tilt function.",
            "rating": Math.floor(Math.random() * 5) + 1
        },
        {
            "id": 5,
            "name": "Mid-Back Swivel Task Chair",
            "price": 129.99,
            "discount": 99.99,
            "image": "./assets/office-chair5.jpg",
            "description": "Compact and stylish office chair with soft padding, swivel base, and adjustable height.",
            "rating": Math.floor(Math.random() * 5) + 1
        },
        {
            "id": 6,
            "name": "Reclining Office Chair with Massage",
            "price": 299.99,
            "discount": 249.99,
            "image": "./assets/office-chair6.jpg",
            "description": "Luxurious reclining office chair with built-in massager, footrest, and thick cushions.",
            "rating": Math.floor(Math.random() * 5) + 1
        },
        {
            "id": 7,
            "name": "Adjustable Standing Desk Chair",
            "price": 189.99,
            "discount": 149.99,
            "image": "./assets/office-chair7.jpg",
            "description": "Ergonomic standing desk chair with adjustable height, back support, and 360-degree swivel.",
            "rating": Math.floor(Math.random() * 5) + 1
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
