export const SMARTPHONES = [
  {
    id: "iphone-15-pro-max",
    name: "Apple iPhone 15 Pro Max",
    brand: "Apple",
    launchPrice: 1199,
    currentPrice: 1099,
    lowestPrice: 1049,
    highestPrice: 1249,
    priceStatus: "drop", // 'drop' | 'hike' | 'lowest' | 'stable'
    priceChangeAmount: -100,
    priceChangePercent: "-8.3%",
    hikeNotice: null,
    dropNotice: "Save $100 off launch MSRP!",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewsCount: 3420,
    category: "Flagship",
    tags: ["Best Camera", "Premium Design", "Gaming Powerhouse"],
    scores: { camera: 98, battery: 94, gaming: 97, value: 81, design: 99 },
    specs: {
      chipset: "Apple A17 Pro (3nm)",
      ramStorage: "8GB RAM / 256GB Storage",
      display: "6.7\" Super Retina XDR OLED, 120Hz ProMotion, 2000 nits",
      camera: "48MP OIS + 12MP 5x Telephoto + 12MP Ultra-wide",
      battery: "4422 mAh, 25W Wired, 15W MagSafe",
      osUpdates: "6+ Years iOS Updates",
      weight: "221g",
      antutuScore: "1,550,000"
    },
    stores: [
      { name: "Amazon", price: 1049, isLowest: true, inStock: true, link: "https://www.amazon.com/dp/B0CHWZ6R4N", freeShipping: true },
      { name: "Best Buy", price: 1099, isLowest: false, inStock: true, link: "https://www.bestbuy.com/site/apple-iphone-15-pro-max/6548777.p", freeShipping: true },
      { name: "Walmart", price: 1079, isLowest: false, inStock: true, link: "https://www.walmart.com/ip/iPhone-15-Pro-Max", freeShipping: true },
      { name: "Apple Store", price: 1199, isLowest: false, inStock: true, link: "https://www.apple.com/iphone-15-pro/", freeShipping: true },
      { name: "B&H Photo", price: 1089, isLowest: false, inStock: false, link: "https://www.bhphotovideo.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 1199 },
      { month: "Apr", price: 1199 },
      { month: "May", price: 1249 }, // Peak hike
      { month: "Jun", price: 1149 },
      { month: "Jul", price: 1099 },
      { month: "Aug", price: 1049 }  // Current lowest
    ]
  },
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    launchPrice: 1299,
    currentPrice: 1149,
    lowestPrice: 1099,
    highestPrice: 1349,
    priceStatus: "drop",
    priceChangeAmount: -150,
    priceChangePercent: "-11.5%",
    hikeNotice: null,
    dropNotice: "$150 Instant Rebate Available",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviewsCount: 2890,
    category: "Flagship",
    tags: ["Best Zoom Camera", "S-Pen Included", "Galaxy AI"],
    scores: { camera: 97, battery: 95, gaming: 98, value: 83, design: 96 },
    specs: {
      chipset: "Snapdragon 8 Gen 3 for Galaxy (4nm)",
      ramStorage: "12GB RAM / 256GB Storage",
      display: "6.8\" Dynamic AMOLED 2X, 120Hz, 2600 nits, Anti-Reflective",
      camera: "200MP OIS + 50MP 5x Periscope + 10MP 3x + 12MP Ultra-wide",
      battery: "5000 mAh, 45W Fast Charging",
      osUpdates: "7 Years Android OS Updates",
      weight: "232g",
      antutuScore: "1,810,000"
    },
    stores: [
      { name: "Amazon", price: 1099, isLowest: true, inStock: true, link: "https://www.amazon.com/dp/B0CS3Z5L5D", freeShipping: true },
      { name: "Samsung Direct", price: 1149, isLowest: false, inStock: true, link: "https://www.samsung.com/galaxy-s24-ultra/", freeShipping: true },
      { name: "Best Buy", price: 1149, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true },
      { name: "Walmart", price: 1119, isLowest: false, inStock: true, link: "https://www.walmart.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 1299 },
      { month: "Apr", price: 1349 }, // Tariff hike
      { month: "May", price: 1249 },
      { month: "Jun", price: 1199 },
      { month: "Jul", price: 1149 },
      { month: "Aug", price: 1099 }
    ]
  },
  {
    id: "google-pixel-8a",
    name: "Google Pixel 8a",
    brand: "Google",
    launchPrice: 499,
    currentPrice: 449,
    lowestPrice: 399,
    highestPrice: 499,
    priceStatus: "lowest",
    priceChangeAmount: -100,
    priceChangePercent: "-20.0%",
    hikeNotice: null,
    dropNotice: "All-Time Low Price! Best Budget Camera",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviewsCount: 1540,
    category: "Mid-Range",
    tags: ["Best Budget Camera", "Clean AI Software", "7-Yr Updates"],
    scores: { camera: 94, battery: 84, gaming: 82, value: 96, design: 88 },
    specs: {
      chipset: "Google Tensor G3 (4nm) + Titan M2 Security",
      ramStorage: "8GB RAM / 128GB Storage",
      display: "6.1\" Actua OLED, 120Hz, 2000 nits Peak",
      camera: "64MP Main OIS + 13MP Ultra-wide",
      battery: "4492 mAh, 18W Wired, Wireless Charging",
      osUpdates: "7 Years Android OS Updates",
      weight: "188g",
      antutuScore: "1,120,000"
    },
    stores: [
      { name: "Amazon", price: 399, isLowest: true, inStock: true, link: "https://www.amazon.com/dp/B0CZ3K8M2N", freeShipping: true },
      { name: "Google Store", price: 449, isLowest: false, inStock: true, link: "https://store.google.com/product/pixel_8a", freeShipping: true },
      { name: "Best Buy", price: 399, isLowest: true, inStock: true, link: "https://www.bestbuy.com", freeShipping: true },
      { name: "Target", price: 429, isLowest: false, inStock: true, link: "https://www.target.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 499 },
      { month: "Apr", price: 499 },
      { month: "May", price: 479 },
      { month: "Jun", price: 449 },
      { month: "Jul", price: 429 },
      { month: "Aug", price: 399 }
    ]
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12 5G",
    brand: "OnePlus",
    launchPrice: 799,
    currentPrice: 849,
    lowestPrice: 699,
    highestPrice: 849,
    priceStatus: "hike",
    priceChangeAmount: +50,
    priceChangePercent: "+6.2%",
    hikeNotice: "⚠️ Price hiked by $50 due to high demand & stock shortage!",
    dropNotice: null,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewsCount: 1980,
    category: "Flagship Killer",
    tags: ["100W Ultra Charging", "Hasselblad Camera", "Display King"],
    scores: { camera: 91, battery: 98, gaming: 96, value: 92, design: 92 },
    specs: {
      chipset: "Snapdragon 8 Gen 3 (4nm)",
      ramStorage: "12GB RAM / 256GB Storage",
      display: "6.82\" 2K 120Hz ProXDR AMOLED, 4500 nits Peak",
      camera: "50MP Sony LYT-808 + 64MP 3x Periscope + 48MP Ultra-wide",
      battery: "5400 mAh, 100W SUPERVOOC Fast Charge",
      osUpdates: "4 Years OS Updates",
      weight: "220g",
      antutuScore: "1,790,000"
    },
    stores: [
      { name: "OnePlus Store", price: 799, isLowest: true, inStock: true, link: "https://www.oneplus.com/oneplus-12", freeShipping: true },
      { name: "Amazon", price: 849, isLowest: false, inStock: true, link: "https://www.amazon.com/dp/B0CQ2W5M8Z", freeShipping: true },
      { name: "Best Buy", price: 849, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 799 },
      { month: "Apr", price: 699 }, // Historical low
      { month: "May", price: 749 },
      { month: "Jun", price: 799 },
      { month: "Jul", price: 829 },
      { month: "Aug", price: 849 } // Price Hike
    ]
  },
  {
    id: "nothing-phone-2a",
    name: "Nothing Phone (2a)",
    brand: "Nothing",
    launchPrice: 349,
    currentPrice: 319,
    lowestPrice: 299,
    highestPrice: 349,
    priceStatus: "drop",
    priceChangeAmount: -30,
    priceChangePercent: "-8.6%",
    hikeNotice: null,
    dropNotice: "Unique Glyph Interface under $350!",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    reviewsCount: 890,
    category: "Budget",
    tags: ["Glyph Lighting", "Clean Nothing OS", "Budget Style Icon"],
    scores: { camera: 84, battery: 92, gaming: 83, value: 95, design: 98 },
    specs: {
      chipset: "MediaTek Dimensity 7200 Pro (4nm)",
      ramStorage: "8GB RAM / 128GB Storage",
      display: "6.7\" Flexible AMOLED, 120Hz, 1300 nits",
      camera: "50MP Main OIS + 50MP Ultra-wide",
      battery: "5000 mAh, 45W Fast Charge",
      osUpdates: "3 Years Android OS Updates",
      weight: "190g",
      antutuScore: "740,000"
    },
    stores: [
      { name: "Nothing Direct", price: 319, isLowest: false, inStock: true, link: "https://nothing.tech/pages/phone-2a", freeShipping: true },
      { name: "Amazon", price: 299, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "B&H Photo", price: 319, isLowest: false, inStock: true, link: "https://www.bhphotovideo.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 349 },
      { month: "Apr", price: 349 },
      { month: "May", price: 339 },
      { month: "Jun", price: 329 },
      { month: "Jul", price: 319 },
      { month: "Aug", price: 299 }
    ]
  },
  {
    id: "samsung-a55-5g",
    name: "Samsung Galaxy A55 5G",
    brand: "Samsung",
    launchPrice: 449,
    currentPrice: 479,
    lowestPrice: 389,
    highestPrice: 479,
    priceStatus: "hike",
    priceChangeAmount: +30,
    priceChangePercent: "+6.6%",
    hikeNotice: "⚠️ Price increased by $30 due to high mid-range demand!",
    dropNotice: null,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    reviewsCount: 1120,
    category: "Mid-Range",
    tags: ["IP67 Water Resistant", "Aluminum Frame", "Knox Vault"],
    scores: { camera: 86, battery: 93, gaming: 81, value: 89, design: 91 },
    specs: {
      chipset: "Exynos 1480 (4nm) + AMD Xclipse 530 GPU",
      ramStorage: "8GB RAM / 128GB Storage (MicroSD expandable)",
      display: "6.6\" Super AMOLED, 120Hz, 1000 nits Vision Booster",
      camera: "50MP OIS + 12MP Ultra-wide + 5MP Macro",
      battery: "5000 mAh, 25W Fast Charge",
      osUpdates: "4 Years OS Updates",
      weight: "213g",
      antutuScore: "725,000"
    },
    stores: [
      { name: "Amazon", price: 389, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Samsung Store", price: 449, isLowest: false, inStock: true, link: "https://www.samsung.com", freeShipping: true },
      { name: "Walmart", price: 479, isLowest: false, inStock: true, link: "https://www.walmart.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 449 },
      { month: "Apr", price: 389 }, // Historical drop
      { month: "May", price: 419 },
      { month: "Jun", price: 439 },
      { month: "Jul", price: 459 },
      { month: "Aug", price: 479 }  // Price Hike alert
    ]
  },
  {
    id: "cmf-phone-1",
    name: "CMF Phone 1 by Nothing",
    brand: "Nothing",
    launchPrice: 239,
    currentPrice: 199,
    lowestPrice: 199,
    highestPrice: 239,
    priceStatus: "lowest",
    priceChangeAmount: -40,
    priceChangePercent: "-16.7%",
    hikeNotice: null,
    dropNotice: "🔥 Unbeatable Ultra Budget Deal under $200!",
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviewsCount: 760,
    category: "Budget",
    tags: ["Modular Backplate", "Super Fast 120Hz", "Value King"],
    scores: { camera: 80, battery: 94, gaming: 84, value: 99, design: 94 },
    specs: {
      chipset: "MediaTek Dimensity 7300 (4nm)",
      ramStorage: "6GB RAM / 128GB Storage",
      display: "6.67\" Super AMOLED, 120Hz, 2000 nits Peak",
      camera: "50MP Sony Sensor + Portrait Sensor",
      battery: "5000 mAh, 33W Fast Charge",
      osUpdates: "2 Years OS Updates",
      weight: "197g",
      antutuScore: "670,000"
    },
    stores: [
      { name: "Amazon", price: 199, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Nothing Official", price: 239, isLowest: false, inStock: true, link: "https://cmf.tech", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 239 },
      { month: "Apr", price: 239 },
      { month: "May", price: 229 },
      { month: "Jun", price: 219 },
      { month: "Jul", price: 209 },
      { month: "Aug", price: 199 }
    ]
  },
  {
    id: "google-pixel-8-pro",
    name: "Google Pixel 8 Pro",
    brand: "Google",
    launchPrice: 999,
    currentPrice: 749,
    lowestPrice: 699,
    highestPrice: 999,
    priceStatus: "drop",
    priceChangeAmount: -250,
    priceChangePercent: "-25.0%",
    hikeNotice: null,
    dropNotice: "Massive $250 Price Cut! Best AI Features",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewsCount: 2450,
    category: "Flagship",
    tags: ["Best AI Camera", "Matte Glass Finish", "Temperature Sensor"],
    scores: { camera: 97, battery: 89, gaming: 87, value: 91, design: 95 },
    specs: {
      chipset: "Google Tensor G3 (4nm)",
      ramStorage: "12GB RAM / 128GB Storage",
      display: "6.7\" Super Actua LTPO OLED, 120Hz, 2400 nits",
      camera: "50MP OIS + 48MP 5x Telephoto + 48MP Ultra-wide",
      battery: "5050 mAh, 30W Wired, Wireless",
      osUpdates: "7 Years Android OS Updates",
      weight: "213g",
      antutuScore: "1,180,000"
    },
    stores: [
      { name: "Amazon", price: 699, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Google Store", price: 749, isLowest: false, inStock: true, link: "https://store.google.com", freeShipping: true },
      { name: "Best Buy", price: 749, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true },
      { name: "B&H Photo", price: 729, isLowest: false, inStock: true, link: "https://www.bhphotovideo.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 999 },
      { month: "Apr", price: 899 },
      { month: "May", price: 849 },
      { month: "Jun", price: 799 },
      { month: "Jul", price: 749 },
      { month: "Aug", price: 699 }
    ]
  },
  {
    id: "xiaomi-14-ultra",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    launchPrice: 1499,
    currentPrice: 1299,
    lowestPrice: 1249,
    highestPrice: 1499,
    priceStatus: "drop",
    priceChangeAmount: -200,
    priceChangePercent: "-13.3%",
    hikeNotice: null,
    dropNotice: "Leica Quad Camera beast with $200 discount!",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviewsCount: 1100,
    category: "Ultra-Flagship",
    tags: ["Leica 1-inch Optics", "Titanium Edition", "Camera Monster"],
    scores: { camera: 100, battery: 91, gaming: 98, value: 78, design: 97 },
    specs: {
      chipset: "Snapdragon 8 Gen 3 (4nm)",
      ramStorage: "16GB RAM / 512GB Storage",
      display: "6.73\" LTPO AMOLED 2K, 120Hz, 3000 nits Peak",
      camera: "50MP 1-inch LYT-900 Variable Aperture + 3x & 5x Telephoto + 50MP UW",
      battery: "5000 mAh, 90W Wired, 80W Wireless",
      osUpdates: "4 Years OS Updates",
      weight: "220g",
      antutuScore: "2,050,000"
    },
    stores: [
      { name: "Giztop", price: 1249, isLowest: true, inStock: true, link: "https://www.giztop.com", freeShipping: true },
      { name: "Amazon (Import)", price: 1299, isLowest: false, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "TradingShenzhen", price: 1269, isLowest: false, inStock: true, link: "https://tradingshenzhen.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 1499 },
      { month: "Apr", price: 1449 },
      { month: "May", price: 1399 },
      { month: "Jun", price: 1349 },
      { month: "Jul", price: 1299 },
      { month: "Aug", price: 1249 }
    ]
  },
  {
    id: "motorola-edge-50-pro",
    name: "Motorola Edge 50 Pro",
    brand: "Motorola",
    launchPrice: 599,
    currentPrice: 529,
    lowestPrice: 499,
    highestPrice: 599,
    priceStatus: "drop",
    priceChangeAmount: -70,
    priceChangePercent: "-11.7%",
    hikeNotice: null,
    dropNotice: "Pantone Certified Design with 125W Super Charger!",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    reviewsCount: 650,
    category: "Upper Mid-Range",
    tags: ["125W TurboPower", "Vegan Leather Finish", "Pantone Colors"],
    scores: { camera: 88, battery: 90, gaming: 86, value: 92, design: 96 },
    specs: {
      chipset: "Snapdragon 7 Gen 3 (4nm)",
      ramStorage: "12GB RAM / 256GB Storage",
      display: "6.7\" pOLED 1.5K, 144Hz, 2000 nits Curved",
      camera: "50MP f/1.4 OIS + 10MP 3x Telephoto + 13MP Ultra-wide",
      battery: "4500 mAh, 125W Wired, 50W Wireless",
      osUpdates: "3 Years OS Updates",
      weight: "186g",
      antutuScore: "860,000"
    },
    stores: [
      { name: "Motorola Store", price: 529, isLowest: false, inStock: true, link: "https://www.motorola.com", freeShipping: true },
      { name: "Amazon", price: 499, isLowest: true, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Best Buy", price: 529, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 599 },
      { month: "Apr", price: 579 },
      { month: "May", price: 549 },
      { month: "Jun", price: 529 },
      { month: "Jul", price: 509 },
      { month: "Aug", price: 499 }
    ]
  },
  {
    id: "iphone-13-classic",
    name: "Apple iPhone 13",
    brand: "Apple",
    launchPrice: 799,
    currentPrice: 599,
    lowestPrice: 499,
    highestPrice: 799,
    priceStatus: "lowest",
    priceChangeAmount: -300,
    priceChangePercent: "-37.5%",
    hikeNotice: null,
    dropNotice: "🔥 Historic Price Drop! High Value iPhone",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewsCount: 15400,
    category: "Mid-Range",
    tags: ["High Value iOS", "Compact & Reliable", "Cinematic Mode"],
    scores: { camera: 89, battery: 86, gaming: 90, value: 94, design: 92 },
    specs: {
      chipset: "Apple A15 Bionic (5nm)",
      ramStorage: "4GB RAM / 128GB Storage",
      display: "6.1\" Super Retina XDR OLED, 60Hz, Ceramic Shield",
      camera: "12MP Sensor-shift OIS + 12MP Ultra-wide",
      battery: "3240 mAh, MagSafe Wireless",
      osUpdates: "4+ More Years iOS Updates",
      weight: "174g",
      antutuScore: "1,250,000"
    },
    stores: [
      { name: "Walmart", price: 499, isLowest: true, inStock: true, link: "https://www.walmart.com", freeShipping: true },
      { name: "Amazon", price: 529, isLowest: false, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Best Buy", price: 549, isLowest: false, inStock: true, link: "https://www.bestbuy.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 599 },
      { month: "Apr", price: 579 },
      { month: "May", price: 549 },
      { month: "Jun", price: 529 },
      { month: "Jul", price: 519 },
      { month: "Aug", price: 499 }
    ]
  },
  {
    id: "poco-f6-pro",
    name: "POCO F6 Pro 5G",
    brand: "Xiaomi",
    launchPrice: 499,
    currentPrice: 539,
    lowestPrice: 449,
    highestPrice: 539,
    priceStatus: "hike",
    priceChangeAmount: +40,
    priceChangePercent: "+8.0%",
    hikeNotice: "⚠️ Price hiked by $40 due to high gamer demand!",
    dropNotice: null,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviewsCount: 930,
    category: "Flagship Killer",
    tags: ["Snapdragon 8 Gen 2", "120W Charging", "120Hz WQHD+"],
    scores: { camera: 84, battery: 92, gaming: 99, value: 96, design: 89 },
    specs: {
      chipset: "Snapdragon 8 Gen 2 (4nm)",
      ramStorage: "12GB RAM / 256GB Storage",
      display: "6.67\" WQHD+ Flow AMOLED, 120Hz, 4000 nits Peak",
      camera: "50MP Light Fusion 800 OIS + 8MP Ultra-wide + 2MP Macro",
      battery: "5000 mAh, 120W HyperCharge (0-100% in 19 min)",
      osUpdates: "3 Years OS Updates",
      weight: "209g",
      antutuScore: "1,600,000"
    },
    stores: [
      { name: "AliExpress Store", price: 449, isLowest: true, inStock: true, link: "https://www.aliexpress.com", freeShipping: true },
      { name: "Amazon", price: 539, isLowest: false, inStock: true, link: "https://www.amazon.com", freeShipping: true },
      { name: "Giztop", price: 479, isLowest: false, inStock: true, link: "https://www.giztop.com", freeShipping: true }
    ],
    priceHistory: [
      { month: "Mar", price: 499 },
      { month: "Apr", price: 449 }, // Drop
      { month: "May", price: 469 },
      { month: "Jun", price: 499 },
      { month: "Jul", price: 519 },
      { month: "Aug", price: 539 } // Hike alert
    ]
  }
];

export const CATEGORIES = ["All", "Budget", "Mid-Range", "Flagship Killer", "Flagship", "Ultra-Flagship"];

export const BRANDS = ["All", "Apple", "Samsung", "Google", "OnePlus", "Nothing", "Xiaomi", "Motorola"];

export const PRIORITY_PREFERENCES = [
  { id: "all", label: "✨ Best Overall", icon: "Sparkles" },
  { id: "camera", label: "📸 Camera Champion", icon: "Camera" },
  { id: "battery", label: "🔋 Battery King", icon: "BatteryCharging" },
  { id: "gaming", label: "⚡ Gaming Powerhouse", icon: "Zap" },
  { id: "value", label: "💰 Value For Money", icon: "BadgeDollarSign" },
  { id: "design", label: "🎨 Premium Design", icon: "Palette" }
];
