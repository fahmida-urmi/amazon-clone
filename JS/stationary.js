const allProducts = [
    {
        "id": 1,
        "name": "Pilot G2 Retractable Gel Pens",
        "price": 12.99,
        "discount": 9.99,
        "image": "./assets/stationary1.jpeg",
        "description": "Smooth-writing, long-lasting gel pens with a comfortable grip and vibrant ink.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 2,
        "name": "Moleskine Classic Hardcover Notebook",
        "price": 19.99,
        "discount": 15.99,
        "image": "./assets/stationary2.jpeg",
        "description": "Elegant and durable notebook with high-quality paper for writing and sketching.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 3,
        "name": "Post-it Super Sticky Notes",
        "price": 8.99,
        "discount": 6.99,
        "image": "./assets/stationary3.jpeg",
        "description": "Super sticky notes that hold longer and stronger on surfaces for better organization.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 4,
        "name": "Pentel Twist-Erase Mechanical Pencils",
        "price": 14.99,
        "discount": 11.99,
        "image": "./assets/stationary4.jpeg",
        "description": "High-quality mechanical pencils with a comfortable grip and large twist-up eraser.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 5,
        "name": "Sharpie Permanent Markers - Assorted Colors",
        "price": 16.99,
        "discount": 12.99,
        "image": "./assets/stationary5.jpeg",
        "description": "Bold, quick-drying permanent markers with fade-resistant ink for various surfaces.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 6,
        "name": "BIC Wite-Out Correction Tape",
        "price": 7.99,
        "discount": 5.99,
        "image": "./assets/stationary6.jpeg",
        "description": "Easy-to-use correction tape for quick and clean corrections without smudging.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 7,
        "name": "Five Star Spiral Notebook - College Ruled",
        "price": 10.99,
        "discount": 8.99,
        "image": "./assets/stationary7.jpeg",
        "description": "Durable spiral notebook with reinforced covers and high-quality college-ruled paper.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 8,
        "name": "Staedtler Triangular Colored Pencils - 24 Pack",
        "price": 13.99,
        "discount": 10.99,
        "image": "./assets/stationary8.jpeg",
        "description": "Smooth and vibrant colored pencils with a comfortable grip for detailed coloring.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 9,
        "name": "Scotch Heavy Duty Packing Tape",
        "price": 9.99,
        "discount": 7.99,
        "image": "./assets/stationary9.jpeg",
        "description": "Strong, long-lasting packing tape ideal for sealing and securing packages.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 10,
        "name": "Elmer's Disappearing Purple Glue Sticks - 6 Pack",
        "price": 5.99,
        "discount": 4.99,
        "image": "./assets/stationary10.jpeg",
        "description": "Washable glue sticks that go on purple and dry clear for easy application.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 11,
        "name": "Oxford 3x5 Index Cards - Ruled",
        "price": 6.99,
        "discount": 5.49,
        "image": "./assets/stationary11.jpeg",
        "description": "Sturdy index cards with ruled lines, perfect for notes, flashcards, and study aids.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 12,
        "name": "Swingline Stapler with 5000 Staples",
        "price": 15.99,
        "discount": 12.99,
        "image": "./assets/stationary12.jpeg",
        "description": "Reliable and durable stapler with a classic design, includes 5000 standard staples.",
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
