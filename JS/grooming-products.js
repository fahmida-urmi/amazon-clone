const allProducts = [
    {
        id: 1,
        name: "Dog Grooming Vacuum, Pet Vacuum Grooming Kit",
        price:179,
        discount:89,
        image: "./assets/Grooming-product-1.jpg",
        description: "AIRROBO Dog Grooming Vacuum, 12000Pa Strong Pet Grooming Vacuum for Dogs",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 2,
        name: "Swihauk Self Cleaning Slicker Brush",
        price: 20,
        discount: 16,
        image: "./assets/Grooming-product2.jpg",
        description: "Swihauk Self Cleaning Slicker Brush - Skin Friendly Deshedding Grooming Tool for Dogs & Cats",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 3,
        name: "Cat Hair Brush",
        price: 16,
        discount: 7,
        image: "./assets/Grooming-product3.jpg",
        description: "Cat Hair Brush,Cat Brush for Shedding,Soft Silicone Self Cleaning Brush for Short and Long Haired Cats",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 4,
        name: " Dog Grooming Wipes",
        price: 27,
        discount:26,
        image: "./assets/Grooming-product4.jpg",
        description: "Earth Rated Dog Grooming Wipes, Hypoallergenic, Cleaning and Hydrating, for Paws, Body and Butt",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 5,
        name: "Pet Grooming Gloves",
        price: 249,
        discount: 219,
        image: "./assets/Grooming-product5.jpg",
        description: "Pet Grooming Gloves - Gentle Dog Bathing Shampoo Brush - Massage Mitt with Enhanced Five Finger Design",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 6,
        name: "EQyss Avocado Mist Pet Spray Conditioner",
        price: 649.97,
        discount: 589.99,
        image: "./assets/Grooming-product6.jpg",
        description: "EQyss Avocado Mist Pet Spray Conditioner - Shines, Conditions, and Reduces Shedding- for Dogs, Cats, Puppies",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 7,
        name: "Car Cleaning Gun Detailing Interior Dryer Air Blow Gun",
        price: 49,
        discount: 39,
        image: "./assets/Grooming-product7.jpg",
        description: "Car Cleaning Gun Detailing Interior Dryer Air Blow Gun, High Pressure Blower Gun, Car Detailing Kit Interior Cleaner",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    
    {
        id: 8,
        name: "Compressed Air Duster",
        price: 49,
        discount: 33,
        image: "./assets/Grooming-product8.jpg",
        description: "Compressed Air Duster,180000RPM Jet Dryer Blower,3 Gear Electric 5000 mAh Portable Air Duster",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 9,
        name: "German Beard & Mustache Scissors",
        price: 15,
        discount: 12,
        image: "./assets/Grooming-product9.jpg",
        description: "Ontaki 5 Professional German Beard & Mustache Scissors with 2 Comb & Carrying Pouch for Men - Bevel Edge for Precision",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 10,
        name: "The Liquid8r",
        price: 28,
        discount: 19,
        image: "./assets/Grooming-product10.jpg",
        description: "The Rag Company - The Liquid8r - Absorbent 70/30 Blend Microfiber Drying Towel for Cars, Trucks, SUVs, Safe for Detailing",
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
