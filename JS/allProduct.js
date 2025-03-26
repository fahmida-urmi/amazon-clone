//best products 
// Best Products with Discount and Ratings
//best products 
// Best Products with Discount and Ratings
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
        name: "Apple iPad Wi-Fi Tablet",
        price: 249,
        discount: 219, // 12% discount
        image: "./assets/earbuds.webp",
        description: "Apple iPad 2021 10.2 Space Grey 64GB Wi-Fi Tablet - Global Spec",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 3,
        name: "Apple iPhone 16 Pro Max",
        price: 1299.00,
        discount: 1149.00, // 12% discount
        image: "./images/MYX13QNA_1_Classic.png",
        description: "Apple iPhone 16 Pro Max 512GB 5G SIM Free Smartphone - White Titanium",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 4,
        name: "Apple iPad Wi-Fi Tablet",
        price: 249,
        discount: 219, // 12% discount
        image: "./images/MK2K3LLA_1_Supersize.jpg",
        description: "Apple iPad 2021 10.2 Space Grey 64GB Wi-Fi Tablet - Global Spec",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 5,
        name: "Apple MacBook Air",
        price: 649.97,
        discount: 589.99, // 10% discount
        image: "./images/A1MGN63BA_1_7781349_LargeProductImage.jpg",
        description: "Apple MacBook Air 13.3 Inch M1 8GB RAM 256GB SSD - Space Grey",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 6,
        name: "Microsoft Surface 7 Snapdragon",
        price: 1999.00,
        discount: 1749.00, // 12.5% discount
        image: "./images/ZIR-00003_1_Supersize.png",
        description: "Microsoft Surface 7 Snapdragon X Elite 16GB RAM 1TB SSD 13.8 Inch Touchscreen Windows 11 Pro Laptop",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 7,
        name: "Microsoft Surface 7 Snapdragon",
        price: 1999.00,
        discount: 1749.00, // 12.5% discount
        image: "./images/ZIR-00003_1_Supersize.png",
        description: "Microsoft Surface 7 Snapdragon X Elite 16GB RAM 1TB SSD 13.8 Inch Touchscreen Windows 11 Pro Laptop",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 8,
        name: "Microsoft Surface 7 Snapdragon",
        price: 1999.00,
        discount: 1749.00, // 12.5% discount
        image: "./images/ZIR-00003_1_Supersize.png",
        description: "Microsoft Surface 7 Snapdragon X Elite 16GB RAM 1TB SSD 13.8 Inch Touchscreen Windows 11 Pro Laptop",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    
    {
        id: 9,
        name: "Apple MacBook Air",
        price: 649.97,
        discount: 589.99, // 10% discount
        image: "./images/A1MGN63BA_1_7781349_LargeProductImage.jpg",
        description: "Apple MacBook Air 13.3 Inch M1 8GB RAM 256GB SSD - Space Grey",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 4,
        name: "Microsoft Surface 7 Snapdragon",
        price: 1999.00,
        discount: 1749.00, // 12.5% discount
        image: "./images/ZIR-00003_1_Supersize.png",
        description: "Microsoft Surface 7 Snapdragon X Elite 16GB RAM 1TB SSD 13.8 Inch Touchscreen Windows 11 Pro Laptop",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 5,
        name: "Fujitsu LIFEBOOK A3511",
        price: 388.93,
        discount: 349.99, // 10% discount
        image: "./images/61yWngjvgWL._AC_UL480_QL65_.jpg",
        description: "Fujitsu LIFEBOOK A3511 Intel Core i3-1115G4 15.6 FHD Display 8GB DDR4-SDRAM 256GB SSD Wi-Fi 6 (802.11ax) Windows 11 Pro",
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
        name: "Microsoft Surface 7 Snapdragon",
        price: 1999.00,
        discount: 1749.00, // 12.5% discount
        image: "./images/ZIR-00003_1_Supersize.png",
        description: "Microsoft Surface 7 Snapdragon X Elite 16GB RAM 1TB SSD 13.8 Inch Touchscreen Windows 11 Pro Laptop",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 5,
        name: "Fujitsu LIFEBOOK A3511",
        price: 388.93,
        discount: 349.99, // 10% discount
        image: "./images/61yWngjvgWL._AC_UL480_QL65_.jpg",
        description: "Fujitsu LIFEBOOK A3511 Intel Core i3-1115G4 15.6 FHD Display 8GB DDR4-SDRAM 256GB SSD Wi-Fi 6 (802.11ax) Windows 11 Pro",
        rating: Math.floor(Math.random() * 5) + 1,
    },
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

let productsPerPage = 9;

function displayProducts() {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = ""; // Clear existing products

    // Only display the first 'productsPerPage' products
    const productsToDisplay = bestProducts.slice(0, productsPerPage);
    productsToDisplay.forEach((product) => {
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

    // Add "See More" button if there are more products to show
    if (bestProducts.length > productsPerPage) {
        const seeMoreBtn = document.createElement("button");
        seeMoreBtn.classList.add("see-more-btn");
        seeMoreBtn.textContent = "See More";
        seeMoreBtn.onclick = () => {
            productsPerPage += 8;
            displayProducts(); // Re-render with more products
        };
        productContainer.appendChild(seeMoreBtn);
    }
}

displayProducts();
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




console.log(bestProducts.length);


// 
// Toys Under $25
// const toysUnder25 = [
//     {
//         id: 101,
//         name: "LEGO Classic Bricks Set",
//         price: 19.99,
//         discount: 15.99, // 20% discount
//         image: "./images/ZIR-00003_1_Supersize.png",
//         description: "LEGO Classic Creative Bricks Set - 221 Pieces",
//         rating: Math.floor(Math.random() * 5) + 1,
//     },
//     {
//         id: 102,
//         name: "Hot Wheels Car Pack",
//         price: 24.99,
//         discount: 19.99, // 20% discount
//         image: "./images/hotwheels.jpg",
//         description: "Hot Wheels 5-Car Gift Pack - Assorted Models",
//         rating: Math.floor(Math.random() * 5) + 1,
//     },
//     {
//         id: 103,
//         name: "Plush Teddy Bear",
//         price: 14.99,
//         discount: 12.49, // 17% discount
//         image: "./images/teddy.jpg",
//         description: "Soft and Cuddly Plush Teddy Bear - 12 Inches",
//         rating: Math.floor(Math.random() * 5) + 1,
//     },
//     {
//         id: 104,
//         name: "Coloring Book for Kids",
//         price: 9.99,
//         discount: 7.99, // 20% discount
//         image: "./images/coloringbook.jpg",
//         description: "Fun & Educational Coloring Book with 100+ Pages",
//         rating: Math.floor(Math.random() * 5) + 1,
//     },
// ];
