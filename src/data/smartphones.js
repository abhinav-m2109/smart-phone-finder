export const SMARTPHONES = [
  // --- APPLE IPHONE SERIES ---
  {
    id: "iphone-16-pro-max",
    name: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    launchPrice: 1199,
    currentPrice: 1199,
    lowestPrice: 1149,
    highestPrice: 1249,
    priceStatus: "stable",
    priceChangeAmount: 0,
    priceChangePercent: "0.0%",
    hikeNotice: null,
    dropNotice: null,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviewsCount: 4120,
    category: "Flagship",
    tags: ["A18 Pro", "Camera Control", "48MP Fusion Camera", "4K 120fps Dolby Vision"],
    scores: { camera: 99, battery: 96, gaming: 99, value: 83, design: 99 },
    specs: {
      chipset: "Apple A18 Pro (3nm Second Gen)",
      ramStorage: "8GB RAM / 256GB Storage",
      display: "6.9\" Super Retina XDR OLED, 120Hz ProMotion, 2000 nits",
      camera: "48MP Fusion OIS + 48MP Ultra-wide + 12MP 5x Tetraprism",
      battery: "4685 mAh, 45W Wired, 25W MagSafe",
      osUpdates: "6+ Years iOS Support",
      weight: "227g",
      antutuScore: "1,710,000"
    },
    stores: [
      { name: "Apple Store", price: 1199, isLowest: true, inStock: true, link: "https://www.apple.com/iphone-16-pro/", freeShipping: true },
      { name: "Amazon", price: 1199, isLowest: true, inStock: true, link: "https://www.amazon.com/dp/B0DGJ9B5X7", freeShipping: true },
      { name: "Best Buy", price: 1199, isLowest: true, inStock: true, link: "https://www.bestbuy.com", freeShipping: true },
      { name: "Walmart", price: 1199, isLowest: true, inStock: true, link: "https://www.walmart.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 1199 },
      { month: "Apr", price: 1199 },
      { month: "May", price: 1249 },
      { month: "Jun", price: 1199 },
      { month: "Jul", price: 1199 },
      { month: "Aug", price: 1199 }
    ]
  },
  {
    id: "iphone-16-pro",
    name: "Apple iPhone 16 Pro",
    brand: "Apple",
    launchPrice: 999,
    currentPrice: 999,
    lowestPrice: 949,
    highestPrice: 1049,
    priceStatus: "stable",
    priceChangeAmount: 0,
    priceChangePercent: "0.0%",
    hikeNotice: null,
    dropNotice: null,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewsCount: 2890,
    category: "Flagship",
    tags: ["A18 Pro", "Grade 5 Titanium", "5x Telephoto", "Studio Mics"],
    scores: { camera: 98, battery: 92, gaming: 98, value: 85, design: 98 },
    specs: {
      chipset: "Apple A18 Pro (3nm)",
      ramStorage: "8GB RAM / 128GB Storage",
      display: "6.3\" Super Retina XDR OLED, 120Hz ProMotion, 2000 nits",
      camera: "48MP Fusion OIS + 48MP Ultra-wide + 12MP 5x Telephoto",
      battery: "3582 mAh, 45W Fast Charge",
      osUpdates: "6+ Years iOS Support",
      weight: "199g",
      antutuScore: "1,690,000"
    },
    stores: [
      { name: "Amazon", price: 999, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Best Buy", price: 999, isLowest: true, inStock: true, link: "https://www.bestbuy.com", freeShipping: true },
      { name: "Apple Direct", price: 999, isLowest: true, inStock: true, link: "https://www.apple.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 999 },
      { month: "Apr", price: 999 },
      { month: "May", price: 1029 },
      { month: "Jun", price: 999 },
      { month: "Jul", price: 999 },
      { month: "Aug", price: 999 }
    ]
  },
  {
    id: "iphone-16",
    name: "Apple iPhone 16",
    brand: "Apple",
    launchPrice: 799,
    currentPrice: 799,
    lowestPrice: 749,
    highestPrice: 799,
    priceStatus: "stable",
    priceChangeAmount: 0,
    priceChangePercent: "0.0%",
    hikeNotice: null,
    dropNotice: null,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviewsCount: 3100,
    category: "Upper Mid-Range",
    tags: ["Apple Intelligence", "Action Button", "A18 Chip", "Spatial Video"],
    scores: { camera: 93, battery: 90, gaming: 94, value: 89, design: 96 },
    specs: {
      chipset: "Apple A18 (3nm)",
      ramStorage: "8GB RAM / 128GB Storage",
      display: "6.1\" Super Retina XDR OLED, 2000 nits Peak",
      camera: "48MP Fusion OIS + 12MP Ultra-wide (Macro)",
      battery: "3561 mAh, MagSafe Wireless",
      osUpdates: "6+ Years iOS Support",
      weight: "170g",
      antutuScore: "1,520,000"
    },
    stores: [
      { name: "Amazon", price: 799, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Walmart", price: 799, isLowest: true, inStock: true, link: "https://www.walmart.com", freeShipping: true },
      { name: "Best Buy", price: 799, isLowest: true, inStock: true, link: "https://www.bestbuy.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 799 },
      { month: "Apr", price: 799 },
      { month: "May", price: 799 },
      { month: "Jun", price: 799 },
      { month: "Jul", price: 799 },
      { month: "Aug", price: 799 }
    ]
  },
  {
    id: "iphone-15-pro-max",
    name: "Apple iPhone 15 Pro Max",
    brand: "Apple",
    launchPrice: 1199,
    currentPrice: 1049,
    lowestPrice: 999,
    highestPrice: 1249,
    priceStatus: "drop",
    priceChangeAmount: -150,
    priceChangePercent: "-12.5%",
    hikeNotice: null,
    dropNotice: "Save $150 off launch MSRP!",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewsCount: 5420,
    category: "Flagship",
    tags: ["A17 Pro", "Titanium Frame", "5x Optical Zoom", "USB-C 3.0"],
    scores: { camera: 97, battery: 94, gaming: 97, value: 88, design: 98 },
    specs: {
      chipset: "Apple A17 Pro (3nm)",
      ramStorage: "8GB RAM / 256GB Storage",
      display: "6.7\" Super Retina XDR OLED, 120Hz ProMotion",
      camera: "48MP OIS + 12MP 5x Telephoto + 12MP Ultra-wide",
      battery: "4422 mAh, 25W Wired, 15W MagSafe",
      osUpdates: "5+ Years iOS Support",
      weight: "221g",
      antutuScore: "1,550,000"
    },
    stores: [
      { name: "Amazon", price: 999, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Best Buy", price: 1049, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true },
      { name: "Walmart", price: 1029, isLowest: false, inStock: true, link: "https://www.walmart.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 1199 },
      { month: "Apr", price: 1149 },
      { month: "May", price: 1129 },
      { month: "Jun", price: 1099 },
      { month: "Jul", price: 1049 },
      { month: "Aug", price: 999 }
    ]
  },
  {
    id: "iphone-15",
    name: "Apple iPhone 15",
    brand: "Apple",
    launchPrice: 799,
    currentPrice: 669,
    lowestPrice: 649,
    highestPrice: 799,
    priceStatus: "drop",
    priceChangeAmount: -130,
    priceChangePercent: "-16.3%",
    hikeNotice: null,
    dropNotice: "Dynamic Island under $670!",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviewsCount: 6100,
    category: "Mid-Range",
    tags: ["Dynamic Island", "48MP Camera", "USB-C", "A16 Bionic"],
    scores: { camera: 91, battery: 88, gaming: 91, value: 92, design: 95 },
    specs: {
      chipset: "Apple A16 Bionic (4nm)",
      ramStorage: "6GB RAM / 128GB Storage",
      display: "6.1\" Super Retina XDR OLED, 2000 nits Peak",
      camera: "48MP Main OIS + 12MP Ultra-wide",
      battery: "3349 mAh, USB-C Charging",
      osUpdates: "5+ Years iOS Support",
      weight: "171g",
      antutuScore: "1,380,000"
    },
    stores: [
      { name: "Walmart", price: 649, isLowest: true, inStock: true, link: "https://www.walmart.com", freeShipping: true },
      { name: "Amazon", price: 669, isLowest: false, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Best Buy", price: 679, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 799 },
      { month: "Apr", price: 749 },
      { month: "May", price: 719 },
      { month: "Jun", price: 689 },
      { month: "Jul", price: 669 },
      { month: "Aug", price: 649 }
    ]
  },

  // --- SAMSUNG GALAXY SERIES ---
  {
    id: "samsung-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    launchPrice: 1299,
    currentPrice: 1349,
    lowestPrice: 1299,
    highestPrice: 1399,
    priceStatus: "hike",
    priceChangeAmount: +50,
    priceChangePercent: "+3.8%",
    hikeNotice: "⚠️ High demand price increase (+ $50)",
    dropNotice: null,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviewsCount: 1850,
    category: "Ultra-Flagship",
    tags: ["Snapdragon 8 Elite", "Galaxy AI 2.0", "Titanium Frame", "S-Pen"],
    scores: { camera: 100, battery: 97, gaming: 100, value: 81, design: 98 },
    specs: {
      chipset: "Snapdragon 8 Elite for Galaxy (3nm)",
      ramStorage: "12GB RAM / 256GB Storage",
      display: "6.9\" Dynamic AMOLED 2X, 120Hz LTPO, 2800 nits Anti-Reflective",
      camera: "200MP OIS + 50MP 5x Periscope + 50MP Ultra-wide + 10MP 3x",
      battery: "5000 mAh, 45W Fast Charging",
      osUpdates: "7 Years Android OS Support",
      weight: "219g",
      antutuScore: "2,750,000"
    },
    stores: [
      { name: "Samsung Direct", price: 1299, isLowest: true, inStock: true, link: "https://www.samsung.com", freeShipping: true },
      { name: "Amazon", price: 1349, isLowest: false, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Best Buy", price: 1349, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 1299 },
      { month: "Apr", price: 1299 },
      { month: "May", price: 1349 },
      { month: "Jun", price: 1349 },
      { month: "Jul", price: 1349 },
      { month: "Aug", price: 1349 }
    ]
  },
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    launchPrice: 1299,
    currentPrice: 1049,
    lowestPrice: 999,
    highestPrice: 1349,
    priceStatus: "drop",
    priceChangeAmount: -250,
    priceChangePercent: "-19.2%",
    hikeNotice: null,
    dropNotice: "$250 Instant Discount!",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewsCount: 8400,
    category: "Flagship",
    tags: ["200MP Quad Camera", "Titanium Build", "7-Yr Updates", "S-Pen"],
    scores: { camera: 97, battery: 95, gaming: 97, value: 89, design: 96 },
    specs: {
      chipset: "Snapdragon 8 Gen 3 for Galaxy (4nm)",
      ramStorage: "12GB RAM / 256GB Storage",
      display: "6.8\" Dynamic AMOLED 2X, 120Hz, 2600 nits",
      camera: "200MP OIS + 50MP 5x + 10MP 3x + 12MP Ultra-wide",
      battery: "5000 mAh, 45W Fast Charge",
      osUpdates: "7 Years Android OS Support",
      weight: "232g",
      antutuScore: "1,810,000"
    },
    stores: [
      { name: "Amazon", price: 999, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Samsung Store", price: 1049, isLowest: false, inStock: true, link: "https://www.samsung.com", freeShipping: true },
      { name: "Best Buy", price: 1049, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 1299 },
      { month: "Apr", price: 1199 },
      { month: "May", price: 1149 },
      { month: "Jun", price: 1099 },
      { month: "Jul", price: 1049 },
      { month: "Aug", price: 999 }
    ]
  },
  {
    id: "samsung-z-fold6",
    name: "Samsung Galaxy Z Fold6",
    brand: "Samsung",
    launchPrice: 1899,
    currentPrice: 1549,
    lowestPrice: 1499,
    highestPrice: 1899,
    priceStatus: "drop",
    priceChangeAmount: -350,
    priceChangePercent: "-18.4%",
    hikeNotice: null,
    dropNotice: "Huge $350 Foldable Savings!",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviewsCount: 1420,
    category: "Ultra-Flagship",
    tags: ["7.6\" Foldable Display", "Armor Aluminum", "Dual Screen Multi-tasking"],
    scores: { camera: 92, battery: 89, gaming: 96, value: 76, design: 99 },
    specs: {
      chipset: "Snapdragon 8 Gen 3 for Galaxy (4nm)",
      ramStorage: "12GB RAM / 256GB Storage",
      display: "7.6\" Main QXGA+ AMOLED 120Hz + 6.3\" Cover Screen",
      camera: "50MP OIS + 10MP 3x Telephoto + 12MP Ultra-wide",
      battery: "4400 mAh, 25W Wired, 15W Wireless",
      osUpdates: "7 Years OS Support",
      weight: "239g",
      antutuScore: "1,790,000"
    },
    stores: [
      { name: "Amazon", price: 1499, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Samsung Store", price: 1549, isLowest: false, inStock: true, link: "https://www.samsung.com", freeShipping: true },
      { name: "Best Buy", price: 1549, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 1899 },
      { month: "Apr", price: 1799 },
      { month: "May", price: 1699 },
      { month: "Jun", price: 1629 },
      { month: "Jul", price: 1549 },
      { month: "Aug", price: 1499 }
    ]
  },
  {
    id: "samsung-a55-5g",
    name: "Samsung Galaxy A55 5G",
    brand: "Samsung",
    launchPrice: 449,
    currentPrice: 379,
    lowestPrice: 349,
    highestPrice: 449,
    priceStatus: "drop",
    priceChangeAmount: -70,
    priceChangePercent: "-15.6%",
    hikeNotice: null,
    dropNotice: "Metal frame & IP67 water resistant under $380",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    reviewsCount: 3200,
    category: "Mid-Range",
    tags: ["Metal Frame", "IP67 Water Resistant", "AMD Graphics", "Super AMOLED"],
    scores: { camera: 87, battery: 94, gaming: 82, value: 94, design: 92 },
    specs: {
      chipset: "Exynos 1480 (4nm) with AMD Xclipse GPU",
      ramStorage: "8GB RAM / 128GB Storage (MicroSD expandable)",
      display: "6.6\" Super AMOLED, 120Hz, 1000 nits Vision Booster",
      camera: "50MP OIS + 12MP Ultra-wide + 5MP Macro",
      battery: "5000 mAh, 25W Fast Charging",
      osUpdates: "4 Years OS Support",
      weight: "213g",
      antutuScore: "735,000"
    },
    stores: [
      { name: "Amazon", price: 349, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Samsung Store", price: 379, isLowest: false, inStock: true, link: "https://www.samsung.com", freeShipping: true },
      { name: "Walmart", price: 369, isLowest: false, inStock: true, link: "https://www.walmart.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 449 },
      { month: "Apr", price: 429 },
      { month: "May", price: 399 },
      { month: "Jun", price: 389 },
      { month: "Jul", price: 379 },
      { month: "Aug", price: 349 }
    ]
  },

  // --- GOOGLE PIXEL SERIES ---
  {
    id: "google-pixel-9-pro-xl",
    name: "Google Pixel 9 Pro XL",
    brand: "Google",
    launchPrice: 1099,
    currentPrice: 999,
    lowestPrice: 949,
    highestPrice: 1099,
    priceStatus: "drop",
    priceChangeAmount: -100,
    priceChangePercent: "-9.1%",
    hikeNotice: null,
    dropNotice: "$100 Off Google's Flagship AI Phone",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewsCount: 1980,
    category: "Flagship",
    tags: ["Tensor G4", "Gemini Nano AI", "3000 nits Display", "Pro Cameras"],
    scores: { camera: 98, battery: 93, gaming: 88, value: 89, design: 97 },
    specs: {
      chipset: "Google Tensor G4 (4nm) + Titan M2 Security",
      ramStorage: "16GB RAM / 128GB Storage",
      display: "6.8\" Super Actua LTPO OLED, 120Hz, 3000 nits Peak",
      camera: "50MP OIS + 48MP 5x Periscope + 48MP Ultra-wide (Macro)",
      battery: "5060 mAh, 37W Wired, 23W Wireless",
      osUpdates: "7 Years Android OS Support",
      weight: "221g",
      antutuScore: "1,310,000"
    },
    stores: [
      { name: "Amazon", price: 949, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Google Store", price: 999, isLowest: false, inStock: true, link: "https://store.google.com", freeShipping: true },
      { name: "Best Buy", price: 999, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 1099 },
      { month: "Apr", price: 1099 },
      { month: "May", price: 1049 },
      { month: "Jun", price: 999 },
      { month: "Jul", price: 999 },
      { month: "Aug", price: 949 }
    ]
  },
  {
    id: "google-pixel-8a",
    name: "Google Pixel 8a",
    brand: "Google",
    launchPrice: 499,
    currentPrice: 399,
    lowestPrice: 379,
    highestPrice: 499,
    priceStatus: "lowest",
    priceChangeAmount: -120,
    priceChangePercent: "-24.0%",
    hikeNotice: null,
    dropNotice: "Record Low Price! #1 Budget Camera",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviewsCount: 3840,
    category: "Mid-Range",
    tags: ["Tensor G3", "Best Budget Camera", "7-Yr Updates", "Clean Android"],
    scores: { camera: 95, battery: 85, gaming: 83, value: 98, design: 89 },
    specs: {
      chipset: "Google Tensor G3 (4nm)",
      ramStorage: "8GB RAM / 128GB Storage",
      display: "6.1\" Actua OLED, 120Hz, 2000 nits Peak",
      camera: "64MP Main OIS + 13MP Ultra-wide",
      battery: "4492 mAh, 18W Wired, Wireless",
      osUpdates: "7 Years Android OS Support",
      weight: "188g",
      antutuScore: "1,120,000"
    },
    stores: [
      { name: "Amazon", price: 379, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Best Buy", price: 399, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true },
      { name: "Google Store", price: 399, isLowest: false, inStock: true, link: "https://store.google.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 499 },
      { month: "Apr", price: 479 },
      { month: "May", price: 449 },
      { month: "Jun", price: 419 },
      { month: "Jul", price: 399 },
      { month: "Aug", price: 379 }
    ]
  },

  // --- ONEPLUS SERIES ---
  {
    id: "oneplus-13-5g",
    name: "OnePlus 13 5G",
    brand: "OnePlus",
    launchPrice: 899,
    currentPrice: 949,
    lowestPrice: 899,
    highestPrice: 949,
    priceStatus: "hike",
    priceChangeAmount: +50,
    priceChangePercent: "+5.6%",
    hikeNotice: "⚠️ High gamer demand price increase (+ $50)",
    dropNotice: null,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviewsCount: 1290,
    category: "Flagship Killer",
    tags: ["Snapdragon 8 Elite", "6000 mAh Battery", "100W Charging", "IP69 Water Resistant"],
    scores: { camera: 94, battery: 100, gaming: 100, value: 93, design: 95 },
    specs: {
      chipset: "Snapdragon 8 Elite (3nm)",
      ramStorage: "12GB RAM / 256GB Storage",
      display: "6.82\" 2K 120Hz quad-curved AMOLED, 4500 nits",
      camera: "50MP Sony LYT-808 OIS + 50MP 3x Tri-prism + 50MP Ultra-wide",
      battery: "6000 mAh, 100W SUPERVOOC, 50W Wireless",
      osUpdates: "4 Years OS Support",
      weight: "213g",
      antutuScore: "2,920,000"
    },
    stores: [
      { name: "OnePlus Direct", price: 899, isLowest: true, inStock: true, link: "https://www.oneplus.com", freeShipping: true },
      { name: "Amazon", price: 949, isLowest: false, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Best Buy", price: 949, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 899 },
      { month: "Apr", price: 899 },
      { month: "May", price: 919 },
      { month: "Jun", price: 949 },
      { month: "Jul", price: 949 },
      { month: "Aug", price: 949 }
    ]
  },
  {
    id: "oneplus-12-5g",
    name: "OnePlus 12 5G",
    brand: "OnePlus",
    launchPrice: 799,
    currentPrice: 699,
    lowestPrice: 649,
    highestPrice: 799,
    priceStatus: "drop",
    priceChangeAmount: -100,
    priceChangePercent: "-12.5%",
    hikeNotice: null,
    dropNotice: "$100 Discount on Snapdragon 8 Gen 3 Flagship",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewsCount: 4200,
    category: "Flagship Killer",
    tags: ["Snapdragon 8 Gen 3", "5400 mAh", "100W Charge", "Hasselblad Camera"],
    scores: { camera: 92, battery: 98, gaming: 97, value: 95, design: 93 },
    specs: {
      chipset: "Snapdragon 8 Gen 3 (4nm)",
      ramStorage: "12GB RAM / 256GB Storage",
      display: "6.82\" 2K 120Hz AMOLED, 4500 nits Peak",
      camera: "50MP Sony OIS + 64MP 3x Periscope + 48MP Ultra-wide",
      battery: "5400 mAh, 100W SUPERVOOC",
      osUpdates: "4 Years OS Support",
      weight: "220g",
      antutuScore: "1,790,000"
    },
    stores: [
      { name: "Amazon", price: 649, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "OnePlus Store", price: 699, isLowest: false, inStock: true, link: "https://www.oneplus.com", freeShipping: true },
      { name: "Best Buy", price: 699, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 799 },
      { month: "Apr", price: 749 },
      { month: "May", price: 719 },
      { month: "Jun", price: 699 },
      { month: "Jul", price: 679 },
      { month: "Aug", price: 649 }
    ]
  },

  // --- NOTHING & CMF ---
  {
    id: "nothing-phone-2a-plus",
    name: "Nothing Phone (2a) Plus",
    brand: "Nothing",
    launchPrice: 399,
    currentPrice: 349,
    lowestPrice: 329,
    highestPrice: 399,
    priceStatus: "drop",
    priceChangeAmount: -50,
    priceChangePercent: "-12.5%",
    hikeNotice: null,
    dropNotice: "Glyph Design + 50MP Selfie Camera under $350",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviewsCount: 1650,
    category: "Budget",
    tags: ["Glyph Interface", "50MP Selfie", "Dimensity 7350 Pro", "Nothing OS 2.6"],
    scores: { camera: 86, battery: 93, gaming: 85, value: 97, design: 98 },
    specs: {
      chipset: "MediaTek Dimensity 7350 Pro 5G (4nm)",
      ramStorage: "12GB RAM / 256GB Storage",
      display: "6.7\" Flexible AMOLED, 120Hz, 1300 nits",
      camera: "50MP Main OIS + 50MP Ultra-wide + 50MP Selfie",
      battery: "5000 mAh, 50W Fast Charge",
      osUpdates: "3 Years OS Support",
      weight: "190g",
      antutuScore: "805,000"
    },
    stores: [
      { name: "Amazon", price: 329, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Nothing Store", price: 349, isLowest: false, inStock: true, link: "https://nothing.tech", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 399 },
      { month: "Apr", price: 389 },
      { month: "May", price: 369 },
      { month: "Jun", price: 359 },
      { month: "Jul", price: 349 },
      { month: "Aug", price: 329 }
    ]
  },
  {
    id: "cmf-phone-1",
    name: "CMF Phone 1 by Nothing",
    brand: "Nothing",
    launchPrice: 239,
    currentPrice: 199,
    lowestPrice: 189,
    highestPrice: 239,
    priceStatus: "lowest",
    priceChangeAmount: -40,
    priceChangePercent: "-16.7%",
    hikeNotice: null,
    dropNotice: "#1 Budget Smartphone Deal Under $200",
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewsCount: 2900,
    category: "Budget",
    tags: ["Modular Case", "Dimensity 7300", "120Hz Super AMOLED", "Value King"],
    scores: { camera: 81, battery: 95, gaming: 85, value: 99, design: 95 },
    specs: {
      chipset: "MediaTek Dimensity 7300 (4nm)",
      ramStorage: "6GB RAM / 128GB Storage (MicroSD expandable)",
      display: "6.67\" Super AMOLED, 120Hz, 2000 nits Peak",
      camera: "50MP Sony Sensor + Portrait Sensor",
      battery: "5000 mAh, 33W Fast Charge",
      osUpdates: "2 Years OS Support",
      weight: "197g",
      antutuScore: "670,000"
    },
    stores: [
      { name: "Amazon", price: 189, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Nothing Direct", price: 199, isLowest: false, inStock: true, link: "https://cmf.tech", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 239 },
      { month: "Apr", price: 229 },
      { month: "May", price: 219 },
      { month: "Jun", price: 209 },
      { month: "Jul", price: 199 },
      { month: "Aug", price: 189 }
    ]
  },

  // --- XIAOMI & POCO ---
  {
    id: "xiaomi-14-ultra",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    launchPrice: 1499,
    currentPrice: 1199,
    lowestPrice: 1149,
    highestPrice: 1499,
    priceStatus: "drop",
    priceChangeAmount: -300,
    priceChangePercent: "-20.0%",
    hikeNotice: null,
    dropNotice: "$300 Off Leica 1-inch Camera Beast",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviewsCount: 1800,
    category: "Ultra-Flagship",
    tags: ["Leica 1-inch Optics", "Variable Aperture", "Snapdragon 8 Gen 3", "90W Wired / 80W Wireless"],
    scores: { camera: 100, battery: 92, gaming: 98, value: 82, design: 97 },
    specs: {
      chipset: "Snapdragon 8 Gen 3 (4nm)",
      ramStorage: "16GB RAM / 512GB Storage",
      display: "6.73\" LTPO AMOLED 2K, 120Hz, 3000 nits",
      camera: "50MP 1-inch LYT-900 Variable Aperture + 3x & 5x Telephoto + 50MP UW",
      battery: "5000 mAh, 90W Wired, 80W Wireless",
      osUpdates: "4 Years OS Support",
      weight: "220g",
      antutuScore: "2,050,000"
    },
    stores: [
      { name: "Giztop", price: 1149, isLowest: true, inStock: true, link: "https://www.giztop.com", freeShipping: true },
      { name: "Amazon", price: 1199, isLowest: false, inStock: true, link: "https://www.amazon.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 1499 },
      { month: "Apr", price: 1399 },
      { month: "May", price: 1329 },
      { month: "Jun", price: 1269 },
      { month: "Jul", price: 1199 },
      { month: "Aug", price: 1149 }
    ]
  },
  {
    id: "poco-x6-pro",
    name: "POCO X6 Pro 5G",
    brand: "Xiaomi",
    launchPrice: 349,
    currentPrice: 279,
    lowestPrice: 269,
    highestPrice: 349,
    priceStatus: "drop",
    priceChangeAmount: -70,
    priceChangePercent: "-20.1%",
    hikeNotice: null,
    dropNotice: "#1 Gaming Phone Under $280 (Dimensity 8300 Ultra)",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewsCount: 5200,
    category: "Budget",
    tags: ["Dimensity 8300 Ultra", "1.5K 120Hz Flow AMOLED", "67W Turbo Charge"],
    scores: { camera: 82, battery: 94, gaming: 98, value: 99, design: 88 },
    specs: {
      chipset: "MediaTek Dimensity 8300 Ultra (4nm)",
      ramStorage: "8GB RAM / 256GB Storage",
      display: "6.67\" 1.5K Flow AMOLED, 120Hz, 1800 nits Peak",
      camera: "64MP Main OIS + 8MP Ultra-wide + 2MP Macro",
      battery: "5000 mAh, 67W Turbo Charge (0-100% in 45 min)",
      osUpdates: "3 Years OS Support",
      weight: "186g",
      antutuScore: "1,460,000"
    },
    stores: [
      { name: "AliExpress", price: 269, isLowest: true, inStock: true, link: "https://www.aliexpress.com", freeShipping: true },
      { name: "Amazon", price: 279, isLowest: false, inStock: true, link: "https://www.amazon.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 349 },
      { month: "Apr", price: 329 },
      { month: "May", price: 309 },
      { month: "Jun", price: 299 },
      { month: "Jul", price: 279 },
      { month: "Aug", price: 269 }
    ]
  },

  // --- MOTOROLA SERIES ---
  {
    id: "motorola-razr-50-ultra",
    name: "Motorola Razr 50 Ultra / Razr+",
    brand: "Motorola",
    launchPrice: 999,
    currentPrice: 849,
    lowestPrice: 799,
    highestPrice: 999,
    priceStatus: "drop",
    priceChangeAmount: -150,
    priceChangePercent: "-15.0%",
    hikeNotice: null,
    dropNotice: "Best 4.0\" Cover Display Flip Phone $150 Off",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewsCount: 1540,
    category: "Flagship",
    tags: ["4.0\" Outer Display", "Snapdragon 8s Gen 3", "Pantone Colors", "IPX8 Submersible"],
    scores: { camera: 90, battery: 87, gaming: 93, value: 88, design: 100 },
    specs: {
      chipset: "Snapdragon 8s Gen 3 (4nm)",
      ramStorage: "12GB RAM / 512GB Storage",
      display: "6.9\" FHD+ 165Hz pOLED Foldable + 4.0\" 165Hz Outer Display",
      camera: "50MP OIS + 50MP 2x Telephoto",
      battery: "4000 mAh, 45W Wired, 15W Wireless",
      osUpdates: "3 Years OS Support",
      weight: "189g",
      antutuScore: "1,510,000"
    },
    stores: [
      { name: "Amazon", price: 799, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Motorola Store", price: 849, isLowest: false, inStock: true, link: "https://www.motorola.com", freeShipping: true },
      { name: "Best Buy", price: 849, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 999 },
      { month: "Apr", price: 949 },
      { month: "May", price: 899 },
      { month: "Jun", price: 869 },
      { month: "Jul", price: 849 },
      { month: "Aug", price: 799 }
    ]
  }
];

export const CATEGORIES = ["All", "Budget", "Mid-Range", "Flagship Killer", "Flagship", "Ultra-Flagship"];
export const BRANDS = ["All", "Apple", "Samsung", "Google", "OnePlus", "Nothing", "Xiaomi", "Motorola"];

export const PRIORITY_PREFERENCES = [
  { id: "all", label: "Best Overall", icon: "Sparkles" },
  { id: "camera", label: "Camera Champion", icon: "Camera" },
  { id: "battery", label: "Battery King", icon: "BatteryCharging" },
  { id: "gaming", label: "Gaming Powerhouse", icon: "Zap" },
  { id: "value", label: "Value For Money", icon: "BadgeDollarSign" },
  { id: "design", label: "Premium Design", icon: "Palette" }
];
