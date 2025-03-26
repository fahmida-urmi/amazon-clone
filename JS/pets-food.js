const allProducts = [
    {
        id: 1,
        name: "Hill's Science Diet Adult Sensitive Stomach & Skin Chicken Recipe Dry Cat Food",
        price: 18.99,
        discount: 14.99,
        image: "./assets/pet-food1.jpeg",
        description: "Digestive health and skin care formula for adult cats with sensitive stomachs.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 2,
        name: "Purina Pro Plan Savor Adult Shredded Blend Chicken & Rice Formula Dry Dog Food",
        price: 21.99,
        discount: 17.99,
        image: "./assets/pet-food2.jpeg",
        description: "Premium dog food with live probiotics for digestive health and a great taste.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 3,
        name: "Royal Canin Size Health Nutrition Small Adult Formula Dry Dog Food",
        price: 27.99,
        discount: 24.99,
        image: "./assets/pet-food3.jpeg",
        description: "Tailored nutrition for small breed adult dogs with a focus on healthy digestion.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 4,
        name: "Hill's Science Diet Adult 7+ Chicken Recipe Dry Dog Food",
        price: 22.99,
        discount: 18.99,
        image: "./assets/pet-food4.jpeg",
        description: "Balanced nutrition for senior dogs with high-quality protein to support muscle maintenance.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 5,
        name: "Iams ProActive Health Adult Minichunks Chicken Dog Food",
        price: 28.99,
        discount: 23.99,
        image: "./assets/pet-food5.jpeg",
        description: "Premium dry dog food with real chicken, tailored for adult dogs to maintain healthy digestion.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 6,
        name: "Blue Buffalo Life Protection Formula Adult Chicken & Brown Rice Recipe Dry Dog Food",
        price: 45.99,
        discount: 39.99,
        image: "./assets/pet-food6.jpeg",
        description: "Natural dog food with chicken and brown rice, designed to support immune system health.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 7,
        name: "Natural Balance L.I.D. Limited Ingredient Diets Sweet Potato & Fish Formula Dry Dog Food",
        price: 38.99,
        discount: 32.99,
        image: "./assets/pet-food7.jpeg",
        description: "Specially formulated limited ingredient diet to support sensitive dogs with food allergies.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 8,
        name: "Purina ONE Natural Sensitive Skin & Stomach Salmon & Rice Formula Dry Dog Food",
        price: 27.99,
        discount: 22.99,
        image: "./assets/pet-food8.jpeg",
        description: "A natural, sensitive stomach formula to help dogs with skin and stomach sensitivities.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 9,
        name: "Merrick Grain-Free Texas Beef & Sweet Potato Recipe Dry Dog Food",
        price: 48.99,
        discount: 43.99,
        image: "./assets/pet-food9.jpeg",
        description: "High-quality beef and sweet potato formula with no grains, perfect for sensitive dogs.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 10,
        name: "Wellness CORE RawRev High-Protein, Raw, Freeze-Dried Turkey & Chicken Recipe Dry Dog Food",
        price: 34.99,
        discount: 29.99,
        image: "./assets/pet-food10.jpeg",
        description: "High-protein dog food with real meat and freeze-dried raw pieces for optimal health.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 11,
        name: "Taste of the Wild High Prairie Canine Recipe with Roasted Bison & Roasted Roam Dry Dog Food",
        price: 43.99,
        discount: 39.99,
        image: "./assets/pet-food11.jpeg",
        description: "Grain-free, protein-rich dog food made with real roasted bison and roasted lamb.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 12,
        name: "Orijen Original Dry Dog Food",
        price: 55.99,
        discount: 49.99,
        image: "./assets/pet-food12.jpeg",
        description: "High-protein dog food with 85% poultry, fish, and egg ingredients, designed for all life stages.",
        rating: Math.floor(Math.random() * 5) + 1,
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
