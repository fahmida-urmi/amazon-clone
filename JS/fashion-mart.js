const allProducts = [
    {
        id: 1,
        name: "ANRABESS Women's Long Sleeve V Neck Sweater",
        price: 23.99,
        discount: 16.99,
        image: "./assets/fashion-mart1.webp",
        description: "Casual loose fit lightweight sweater, perfect for fall fashion.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 2,
        name: "Trendy Queen Women's Oversized Summer T-Shirt",
        price: 19.99,
        discount: 14.99,
        image: "./assets/fashion-mart2.jpeg",
        description: "Business casual dressy top, ideal for beach vacations and spring fashion.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 3,
        name: "Dokotoo Women's Casual Crew Neck Sweatshirt",
        price: 32.99,
        discount: 27.09,
        image: "./assets/fashion-mart3.jpeg",
        description: "Loose soft long sleeve pullover top, suitable for casual wear.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 4,
        name: "AUTOMET Women's Casual Basic T-Shirt",
        price: 16.99,
        discount: 14.99,
        image: "./assets/fashion-mart4.jpeg",
        description: "Loose fit crewneck short sleeve summer top, great for everyday wear.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 5,
        name: "ANRABESS Women's Summer 2 Piece Outfit",
        price: 46.99,
        discount: 33.99,
        image: "./assets/fashion-mart5.jpeg",
        description: "Sleeveless crop top and capri wide leg pants jumpsuit, perfect for beach travel.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 6,
        name: "Dokotoo Women's Oversized Denim Jacket",
        price: 60.99,
        discount: 46.96,
        image: "./assets/fashion-mart6.jpg",
        description: "Casual long boyfriend distressed jean jacket, suitable for autumn and spring.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 7,
        name: "AUTOMET Women's Zip Up Hoodie",
        price: 52.99,
        discount: 34.99,
        image: "./assets/fashion-mart7.jpeg",
        description: "Oversized sweatshirt with long sleeves, perfect for fall outfits.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 8,
        name: "ANRABESS Women's Striped Oversized Sweatshirt",
        price: 29.99,
        discount: 26.99,
        image: "./assets/fashion-mart8.jpeg",
        description: "Long sleeve crew neck shirt, trendy preppy style for fall.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 9,
        name: "AUTOMET Women's Leather Jacket",
        price: 54.99,
        discount: 49.99,
        image: "./assets/fashion-mart9.jpeg",
        description: "Faux suede fall fashion motorcycle coat, suitable for winter outfits.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 10,
        name: "Dokotoo Women's Waffle Knit Shacket",
        price: 39.99,
        discount: 32.99,
        image: "./assets/fashion-mart10.jpeg",
        description: "Casual long sleeve button-down shirt, perfect for layering.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 11,
        name: "YESNO Women's Bohemian Floral Maxi Dress",
        price: 45.99,
        discount: 39.99,
        image: "./assets/fashion-mart11.jpeg",
        description: "Loose casual summer dress with pockets, great for beach vacations.",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 12,
        name: "PRETTYGARDEN Women's Blazer",
        price: 59.99,
        discount: 49.99,
        image: "./assets/fashion-mart12.jpeg",
        description: "Casual one-button suit jacket, perfect for office and formal wear.",
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
