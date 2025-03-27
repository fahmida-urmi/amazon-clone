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
        name: "Apple iPad Wi-Fi Tablet",
        price: 249,
        discount: 219, // 12% discount
        image: "./assets/earbuds.webp",
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
        "id": 7,
        "name": "Apple 2024 MacBook Air 13-inch Laptop",
        "price": 949.00,
        "discount": 100.00,
        "image": "./assets/MacBook-Air-2024.jpeg",
        "description": "Apple 2024 MacBook Air 13-inch Laptop with M4 chip: Built for Apple Intelligence, 13.6-inch Liquid Retina Display, 16GB Unified Memory, 256GB SSD Storage, 12MP Center Stage Camera, Touch ID; Midnight",
        "rating": 5
    },
    {
        "id": 8,
        "name": "HP 14 Laptop",
        "price": 177.35,
        "discount": 52.64,
        "image": "./assets/hp.jpeg",
        "description": "HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home, Thin & Portable, 4K Graphics, One Year of Microsoft 365 (14-dq0040nr, Snowflake White)",
        "rating": 4
    },
    {
        "id": 9,
        "name": "Acer Aspire 3 A315-24P-R7VH Slim Laptop",
        "price": 299.99,
        "discount": 21.00,
        "image": "./assets/acer.jpeg",
        "description": "Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6\" Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home in S Mode",
        "rating": 4
    },
    {
        "id": 10,
        "name": "Lenovo 100E Chromebook 2nd Gen",
        "price": 40.00,
        "discount": 10.00,
        "image": "./assets/lenovo.jpeg",
        "description": "Lenovo 100E Chromebook 2ND Gen 81QB000AUS Laptop Computer, 11.6\" HD (1366 X 768) Display, MediaTek MT8173C Processor, 4GB RAM, 16GB eMMC TLC SSD, Powervr GX6250, Chrome OS, Black (Renewed)",
        "rating": 3
    },
    {
        "id": 11,
        "name": "ASUS ROG Strix G16 Gaming Laptop",
        "price": 1038.14,
        "discount": 161.85,
        "image": "./assets/ASUS-Gaming-Laptop.jpeg",
        "description": "ASUS ROG Strix G16 Gaming Laptop, 165Hz Display, NVIDIA® GeForce RTX™ 4060, Intel Core i7-13650HX, 16GB DDR5, 1TB PCIe Gen4 SSD, Wi-Fi 6E, Windows 11, G614JV-AS74",
        "rating": 5
    },
    {
        "id": 12,
        "name": "HP Pavilion 15.6\" HD Touchscreen Laptop",
        "price": 309.99,
        "discount": 90.00,
        "image": "./assets/HP-Pavilion-Laptop.jpeg",
        "description": "HP Pavilion 15.6\" HD Touchscreen Anti-Glare Laptop, 16GB RAM, 1TB SSD Storage, Intel Core Processor up to 4.1GHz, Up to 11 Hours Long Battery Life, Type-C, HDMI, Windows 11 Home, Silver",
        "rating": 4
    },
    {
        "id": 13,
        "name": "Apple 2024 MacBook Pro 14-inch Laptop",
        "price": 1273.09,
        "discount": 226.91,
        "image": "./assets/MacBook-Laptop.jpeg",
        "description": "Apple 2024 MacBook Pro Laptop with M4 chip with 10‑core CPU and 10‑core GPU: Built for Apple Intelligence, 14.2-inch Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage; Space Black",
        "rating": 5
    },
    {
        "id": 14,
        "name": "Apple 2022 MacBook Air Laptop with M2 chip",
        "price": 718.09,
        "discount": 80.91,
        "image": "./assets/MacBook Air- M2.jpeg",
        "description": "Apple 2022 MacBook Air Laptop with M2 chip: Built for Apple Intelligence, 13.6-inch Liquid Retina Display, 16GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera; Midnight",
        "rating": 5
    },
    {
        "id": 15,
        "name": "HP 15.6\" Business Laptop",
        "price": 412.79,
        "discount": 87.20,
        "image": "./assets/hp-business.jpeg",
        "description": "HP 15.6\" Business Laptop, Free Microsoft Office 2024 Lifetime License, Copilot AI Chat, HD Touchscreen Display, Intel 6-Core i3-1215U 4.4 GHz, 16GB RAM, 1TB SSD, Long Battery Life, Windows 11 Pro",
        "rating": 4
    },
    {
        "id": 16,
        "name": "Apple MacBook Air 2020 13.3-inch",
        "price": 429.00,
        "discount": 70.00,
        "image": "./assets/mac-2022.jpeg",
        "description": "Apple MacBook Air 2020 13.3-inch (Apple M1 Chip, 8GB RAM, 256GB SSD Storage) - Space Gray (Renewed)",
        "rating": 4
    },



    {
        id: 17,
        name: "Fujitsu LIFEBOOK A3511",
        price: 388.93,
        discount: 349.99, // 10% discount
        image: "./images/61yWngjvgWL._AC_UL480_QL65_.jpg",
        description: "Fujitsu LIFEBOOK A3511 Intel Core i3-1115G4 15.6 FHD Display 8GB DDR4-SDRAM 256GB SSD Wi-Fi 6 (802.11ax) Windows 11 Pro",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 18,
        name: "Apple MacBook Air",
        price: 649.97,
        discount: 589.99, // 10% discount
        image: "./images/A1MGN63BA_1_7781349_LargeProductImage.jpg",
        description: "Apple MacBook Air 13.3 Inch M1 8GB RAM 256GB SSD - Space Grey",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 19,
        name: "Microsoft Surface 7 Snapdragon",
        price: 1999.00,
        discount: 1749.00, // 12.5% discount
        image: "./images/ZIR-00003_1_Supersize.png",
        description: "Microsoft Surface 7 Snapdragon X Elite 16GB RAM 1TB SSD 13.8 Inch Touchscreen Windows 11 Pro Laptop",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        id: 20,
        name: "Fujitsu LIFEBOOK A3511",
        price: 388.93,
        discount: 349.99, // 10% discount
        image: "./images/61yWngjvgWL._AC_UL480_QL65_.jpg",
        description: "Fujitsu LIFEBOOK A3511 Intel Core i3-1115G4 15.6 FHD Display 8GB DDR4-SDRAM 256GB SSD Wi-Fi 6 (802.11ax) Windows 11 Pro",
        rating: Math.floor(Math.random() * 5) + 1,
    },
    {
        "id": 21,
        "name": "Dell 27-inch 4K UHD Monitor",
        "price": 349.99,
        "discount": 299.99,
        "image": "./assets/monitor1.jpeg",
        "description": "Dell UltraSharp 27-inch 4K UHD monitor with IPS technology, 60Hz refresh rate, and HDR support.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 22,
        "name": "LG 32-inch QHD Gaming Monitor",
        "price": 399.99,
        "discount": 349.99,
        "image": "./assets/monitor2.jpeg",
        "description": "LG 32-inch QHD gaming monitor with 165Hz refresh rate, 1ms response time, and FreeSync support.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 23,
        "name": "ASUS 24-inch Full HD Monitor",
        "price": 199.99,
        "discount": 149.99,
        "image": "./assets/monitor3.jpeg",
        "description": "ASUS 24-inch 1080p Full HD monitor with 75Hz refresh rate, ultra-slim bezel, and Eye Care technology.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 24,
        "name": "Samsung 34-inch UltraWide Curved Monitor",
        "price": 549.99,
        "discount": 479.99,
        "image": "./assets/monitor4.jpeg",
        "description": "Samsung 34-inch ultrawide curved monitor with WQHD resolution, 100Hz refresh rate, and HDR10 support.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 25,
        "name": "BenQ 27-inch 2K Designer Monitor",
        "price": 369.99,
        "discount": 319.99,
        "image": "./assets/monitor5.jpeg",
        "description": "BenQ 27-inch 2K QHD monitor with AQColor technology, HDR support, and factory-calibrated accuracy.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 26,
        "name": "Acer Nitro 27-inch Gaming Monitor",
        "price": 329.99,
        "discount": 279.99,
        "image": "./assets/monitor6.jpeg",
        "description": "Acer Nitro 27-inch 165Hz gaming monitor with 1ms response time, G-Sync compatibility, and HDR10.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 27,
        "name": "HP 24-inch Full HD Business Monitor",
        "price": 179.99,
        "discount": 139.99,
        "image": "./assets/monitor7.jpeg",
        "description": "HP 24-inch 1080p business monitor with an ergonomic stand, built-in speakers, and anti-glare screen.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    
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
    },
    {
        "id": 28,
        "name": "Pilot G2 Retractable Gel Pens",
        "price": 12.99,
        "discount": 9.99,
        "image": "./assets/stationary1.jpeg",
        "description": "Smooth-writing, long-lasting gel pens with a comfortable grip and vibrant ink.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 29,
        "name": "Moleskine Classic Hardcover Notebook",
        "price": 19.99,
        "discount": 15.99,
        "image": "./assets/stationary2.jpeg",
        "description": "Elegant and durable notebook with high-quality paper for writing and sketching.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 30,
        "name": "Post-it Super Sticky Notes",
        "price": 8.99,
        "discount": 6.99,
        "image": "./assets/stationary3.jpeg",
        "description": "Super sticky notes that hold longer and stronger on surfaces for better organization.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 31,
        "name": "Pentel Twist-Erase Mechanical Pencils",
        "price": 14.99,
        "discount": 11.99,
        "image": "./assets/stationary4.jpeg",
        "description": "High-quality mechanical pencils with a comfortable grip and large twist-up eraser.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 32,
        "name": "Sharpie Permanent Markers - Assorted Colors",
        "price": 16.99,
        "discount": 12.99,
        "image": "./assets/stationary5.jpeg",
        "description": "Bold, quick-drying permanent markers with fade-resistant ink for various surfaces.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 33,
        "name": "BIC Wite-Out Correction Tape",
        "price": 7.99,
        "discount": 5.99,
        "image": "./assets/stationary6.jpeg",
        "description": "Easy-to-use correction tape for quick and clean corrections without smudging.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 34,
        "name": "Five Star Spiral Notebook - College Ruled",
        "price": 10.99,
        "discount": 8.99,
        "image": "./assets/stationary7.jpeg",
        "description": "Durable spiral notebook with reinforced covers and high-quality college-ruled paper.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 33,
        "name": "Staedtler Triangular Colored Pencils - 24 Pack",
        "price": 13.99,
        "discount": 10.99,
        "image": "./assets/stationary8.jpeg",
        "description": "Smooth and vibrant colored pencils with a comfortable grip for detailed coloring.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 34,
        "name": "Scotch Heavy Duty Packing Tape",
        "price": 9.99,
        "discount": 7.99,
        "image": "./assets/stationary9.jpeg",
        "description": "Strong, long-lasting packing tape ideal for sealing and securing packages.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 35,
        "name": "Elmer's Disappearing Purple Glue Sticks - 6 Pack",
        "price": 5.99,
        "discount": 4.99,
        "image": "./assets/stationary10.jpeg",
        "description": "Washable glue sticks that go on purple and dry clear for easy application.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 36,
        "name": "Oxford 3x5 Index Cards - Ruled",
        "price": 6.99,
        "discount": 5.49,
        "image": "./assets/stationary11.jpeg",
        "description": "Sturdy index cards with ruled lines, perfect for notes, flashcards, and study aids.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
    {
        "id": 37,
        "name": "Swingline Stapler with 5000 Staples",
        "price": 15.99,
        "discount": 12.99,
        "image": "./assets/stationary12.jpeg",
        "description": "Reliable and durable stapler with a classic design, includes 5000 standard staples.",
        "rating": Math.floor(Math.random() * 5) + 1
    },
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
    },
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
},

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
},

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




// Listen for input in the search field
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
    } else {
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

    // Remove existing button container if it already exists
    let existingBtnContainer = document.getElementById("see-more-container");
    if (existingBtnContainer) {
        existingBtnContainer.remove();
    }

    // Add "See More" button if there are more products to show
    if (bestProducts.length > productsPerPage) {
        const btnContainer = document.createElement("div");
        btnContainer.id = "see-more-container"; // Unique ID for styling
        btnContainer.classList.add("see-more-container");

        const seeMoreBtn = document.createElement("button");
        seeMoreBtn.classList.add("products-btn");
        seeMoreBtn.textContent = "See More";
        seeMoreBtn.onclick = () => {
            productsPerPage += 8;
            displayProducts(); // Re-render with more products
        };

        btnContainer.appendChild(seeMoreBtn);
        productContainer.parentNode.appendChild(btnContainer); // Place it outside the product container
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

