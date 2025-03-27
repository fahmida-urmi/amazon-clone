//best products 

const bestProducts = [
    {
        id: 1,
        name: "Apple iPhone 16 Pro Max",
        price: 1299.00,
        discount: 1149.00, // 12% discount
        image: "./images/MYX13QNA_1_Classic.png",
        description: "Apple iPhone 16 Pro Max 512GB 5G SIM Free Smartphone - White Titanium",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 2,
        name: "Wireless earbuds",
        price: 49,
        discount: 39, 
        image: "./assets/earbuds.webp",
        description: "Wireless Earbuds Bluetooth Headphones, Ear Buds with Deep Bass, 40H Long Playtime, Power Display, IPX7 Waterproof in Ear Earphone",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 3,
        name: "Apple MacBook Air",
        price: 649.97,
        discount: 589.99, // 10% discount
        image: "./images/A1MGN63BA_1_7781349_LargeProductImage.jpg",
        description: "Apple MacBook Air 13.3 Inch M1 8GB RAM 256GB SSD - Space Grey",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 1.599,
        discount: 1.399, // 12.5% discount
        image: "./assets/smartwatch-black.jpg",
        description: "Smart DND, 100 Sports Modes, Smartwatch for Men and Women (Jet Black)",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 5,
        name: "Fujitsu LIFEBOOK A3511",
        price:35.99,
        discount: 25.93, // 10% discount
        image: "./assets/product_img.jpg",
        description: " BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Eaemuffs (Blue)",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 6,
        name: "Fujitsu LIFEBOOK A3511",
        price: 66,
        discount: -20, // 10% discount
        image: "./assets/Mechanical Keyboard.webp",
        description: "AULA F75 Pro Wireless Mechanical Keyboard,75% Gasket Hot Swappable Custom Keyboard,RGB Backlit,Pre-lubed Reaper Switches,Side Printed PBT Keycaps,2.4GHz/USB-C/BT5.0 Mechanical Gaming Keyboards",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    
    {
        id: 7,
        name: "Fujitsu LIFEBOOK A3511",
        price:41.99,
        discount: 29.93, // 10% discount
        image: "./assets/bluetoth.webp",
        description: " Ortizan Portable Bluetooth Speaker: IPX7 Waterproof, 24W Loud Sound, Deep Bass, Bluetooth 5.3, LED Lights, Wireless Stereo Pairing, 30H Playtime",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 8,
        name: "Fujitsu LIFEBOOK A3511",
        price: 44,
        discount: 10, // 10% discount
        image: "./assets/71LWUzbAs5L._AC_UL320_.jpg",
        description: "Revlon Liquid Foundation, ColorStay Face Makeup for Combination & Oily Skin, SPF 15, Medium-Full Coverage with Matte Finish, 370 Toast, 1 Fl Oz",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        "id": 9,
        "name": "Reclining Office Chair with Massage",
        "price": 299.99,
        "discount": 249.99,
        "image": "./assets/office-chair6.jpg",
        "description": "Luxurious reclining office chair with built-in massager, footrest, and thick cushions.",
        "rating": Math.floor(Math.random() * 5) + 1
    }
];

let cart = [];


// Toggle Cart Visibility'
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



// Toggle Cart Visibility'


function toggleCart() {
    const cartContainer = document.getElementById("cart-section");
    const productContainer = document.getElementById("products-section");
    const headerSlider = document.querySelector("header-slider");
    const productBox = document.querySelector("productBox");

    if (cartContainer.style.display === "none") {
        cartContainer.style.display = "block";
        productContainer.style.display = "none";
        headerSlider.style.display = "none";
        productBox.style.display = "none";
        
    } else {
        cartContainer.style.display = "none";
        productContainer.style.display = "block";
        productContainer.style.display = "block";
        productBox.style.display = "block";
        headerSlider.style.display = "block";
    }
}



// Add product to cart
function addToCart(productId) {
    const product = bestProducts.find((p) => p.id === productId);
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    displayCart(); // Keep cart updated
    updateCartIcon();
    showToast(`"${product.name}" has been added to your cart.`);
}


// Display cart items
function displayCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";
    let total = 0;

    const validCartItems = cart.filter(item => item.quantity > 0);

    if (validCartItems.length === 0) {
        cartContainer.innerHTML = `<p class="empty-cart-message">🛒 Your cart is empty.</p>`;
        updateCartSummary(0);
        return;
    }

    validCartItems.forEach((item) => {
        total += item.discount * item.quantity; // Use discounted price

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
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            // If quantity becomes 0 or less, remove the item from cart
            removeFromCart(productId);
        }
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

// smooth effect
function smoothRedirect(url) {
    document.body.classList.add("fade-out"); // Add fade-out effect
    setTimeout(() => {
        window.location.href = url;
    }, 5000); // Adjust time to match CSS duration
}



// Update the cart icon count
function updateCartIcon() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").innerText = cartCount;
}

// Show a toast notification
let toastTimeout;
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


// Generate Font Awesome Star Ratings
function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? `<i class="fas fa-star"></i>` : `<i class="far fa-star"></i>`;
    }
    return stars;
}



// Display product list
function displayProducts() {
    const productContainer = document.getElementById("product-list");
    bestProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="pPrice">
             <p class="original-price"><s>$${product.price.toFixed(2)}</s> </p>
            <p class="discount-price"><strong>$${product.discount.toFixed(2)}</strong></p>
            </div>
            <div class="review-stars">${generateStars(product.rating)}</div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });

    
}


// Update Cart Summary
function updateCartSummary(total) {
    document.getElementById("cart-subtotal").innerText = `$${total.toFixed(2)}`;
    document.getElementById("cart-total").innerText = `$${total.toFixed(2)}`;
    document.getElementById("checkout-button").disabled = total === 0;
    
}

function checkout() {
    alert("Proceeding to checkout...");
}

displayProducts();



