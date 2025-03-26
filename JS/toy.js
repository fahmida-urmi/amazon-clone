const allProducts = [
    {
        id: 1,
        name: "3PCS Suction Cup Spinner Toy",
        price: 567,
        discount: 68,
        image: "./assets/toy1.jpeg",
        description: "A set of three suction cup spinner toys designed for baby bath time, promoting sensory development and fun.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 2,
        name: "Baby Bath Elephant Water Spray Toy",
        price: 337,
        discount: 68,
        image: "./assets/toy2.jpeg",
        description: "A cute elephant-shaped water spray toy for babies, making bath time enjoyable with water spraying fun.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 3,
        name: "Manhattan Star Ball Soft Silicone Rattle",
        price: 389,
        discount: 75,
        image: "./assets/toy3.jpeg",
        description: "A soft silicone rattle ball that aids in teething and sensory development for infants.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 4,
        name: "5pcs Colorful Shaking Jhunjhuni Toy Set",
        price: 989,
        discount: 40,
        image: "./assets/toy5.jpeg",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 5,
        name: "HelloKimi 7PCS Baby Rattles Set",
        price: 1079,
        discount: 40,
        image: "./assets/toy4.jpeg",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 6,
        name: "Soft Cartoon Baby Cloth Book",
        price: 191,
        discount: 44,
        image: "./assets/toy6.jpeg",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 7,
        name: "RFL Toys Frogy Slider",
        price: 2726,
        discount: 6,
        image: "./assets/toy7.jpeg",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 8,
        name: "RFL Playtime Yao Yao Fish Toy",
        price: 1880,
        discount: 6,
        image: "./assets/toy8.jpeg",
        description: "An interactive fish toy that moves and makes sounds, captivating babies' attention.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 9,
        name: "RFL Playtime Chicken Rider",
        price: 1520,
        discount: 6,
        image: "./assets/toy9.jpeg",
        description: "A chicken-themed ride-on toy that encourages physical activity and balance in toddlers.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 10,
        name: "Baby Walker with Music and Light",
        price: 2650,
        discount: 7,
        image:"./assets/toy10.jpeg",
        description: "An interactive baby walker featuring music and lights, supporting babies' first steps.",
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
