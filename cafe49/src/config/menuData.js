/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CAFE 49 — CANDIDATE MENU DATA
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * NOTE: The items listed below are extracted from public web listings and
 * aggregator directories for Cafe 49 in Samrala. They serve as a candidate
 * menu for this concept showcase.
 *
 * All prices are marked as "Ask for price" because exact current menu pricing
 * has not been verified with the café management.
 *
 * Photography used in this concept is verified food photography with local
 * SVG fallback assets in `/images/`.
 */

export const MENU_CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "pizza-pasta", label: "Pizza & Pasta" },
  { id: "burgers-sandwiches", label: "Burgers & Sandwiches" },
  { id: "wraps-snacks", label: "Wraps & Snacks" },
  { id: "indo-chinese", label: "Indo-Chinese" },
  { id: "tikka", label: "Tikka" },
  { id: "beverages", label: "Coffee & Beverages" }
];

export const SIGNATURE_FAVOURITES = [
  {
    id: "sig-1",
    name: "Special 49 Burger",
    category: "burgers-sandwiches",
    tag: "Signature Candidate",
    description: "Multi-layered café specialty burger with a crisp patty, melted cheese, and signature house-style sauce.",
    priceDisplay: "Ask for price",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmzQgPtejucCKyVLvk-_kNsCgT9TcrTzpCt2LVBY7Nert9M7-iAqfn3KsE&s=10",
    fallbackUrl: "/images/food-fallback.svg",
    imageAlt: "Gourmet double-layered burger with melted cheese and fresh greens"
  },
  {
    id: "sig-2",
    name: "Special 49 Wrap",
    category: "wraps-snacks",
    tag: "Signature Candidate",
    description: "Warm toasted tortilla stuffed with seasoned paneer, crisp julienne veggies, and tangy dressing.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",
    fallbackUrl: "/images/veg-wrap.svg",
    imageAlt: "Toasted savoury wrap filled with marinated cheese and fresh herbs"
  },
  {
    id: "sig-3",
    name: "Special 49 Noodles",
    category: "indo-chinese",
    tag: "Signature Candidate",
    description: "Wok-tossed noodles with colorful bell peppers, spring onions, crunchy cabbage, and piquant spices.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    imageAlt: "Stir-fried noodles in a wok with fresh vegetables and aromatic seasonings"
  },
  {
    id: "sig-4",
    name: "Tandoori Paneer Pizza",
    category: "pizza-pasta",
    tag: "Signature Candidate",
    description: "Stone-baked crust topped with marinated tandoori paneer cubes, capsicum, red onions, and mozzarella.",
    priceDisplay: "Ask for price",
    imageUrl: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.345b2b76013be77de027ba09aff9abe6.1.jpg",
    fallbackUrl: "/images/food-fallback.svg",
    imageAlt: "Hot pizza with molten mozzarella cheese, paneer, and charred vegetable toppings"
  },
  {
    id: "sig-5",
    name: "Cold Coffee",
    category: "beverages",
    tag: "Signature Candidate",
    description: "Thick, creamy blended espresso served chilled with a rich froth crown and chocolate drizzle.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    imageAlt: "Iced cold coffee in a tall glass with cream and chocolate drizzle"
  },
  {
    id: "sig-6",
    name: "Peri Peri Fries",
    category: "wraps-snacks",
    tag: "Signature Candidate",
    description: "Golden crispy potato batons generously dusted with zesty African bird's eye chili seasoning.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1647705195905-671a25be159d?auto=format&fit=crop&w=900&q=80",
    fallbackUrl: "/images/peri-peri-fries.svg",
    imageAlt: "Crisp golden french fries tossed with red peri-peri spice dust"
  }
];

export const MENU_ITEMS = [
  // PIZZA & PASTA
  {
    id: "m-1",
    name: "Cheese Pizza",
    category: "pizza-pasta",
    categoryLabel: "Pizza & Pasta",
    description: "Classic hand-stretched crust coated with rich tomato-herb sauce and smothered in golden mozzarella.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-2",
    name: "Tandoori Paneer Pizza",
    category: "pizza-pasta",
    categoryLabel: "Pizza & Pasta",
    description: "Indian-style pizza featuring spiced roasted paneer, crunchy capsicum, sliced onions, and cheese.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian",
    isSpecial: true
  },
  {
    id: "m-3",
    name: "Veg Supreme Pizza",
    category: "pizza-pasta",
    categoryLabel: "Pizza & Pasta",
    description: "Loaded garden pizza packed with sweet corn, mushrooms, olives, bell peppers, and melted cheese.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-4",
    name: "Red Pasta",
    category: "pizza-pasta",
    categoryLabel: "Pizza & Pasta",
    description: "Penne pasta simmered in an aromatic, slow-cooked arrabbiata tomato sauce with basil and herbs.",
    priceDisplay: "Ask for price",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dcmep8xZVOt8DWK1yxtYLZ6XyuWKtmdmx1cgZmDM6gfP2FqpntRzatc&s=10",
    fallbackUrl: "/images/red-pasta.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-5",
    name: "White Pasta",
    category: "pizza-pasta",
    categoryLabel: "Pizza & Pasta",
    description: "Al dente penne pasta bathed in a velvety, buttery garlic cream sauce with garden vegetables.",
    priceDisplay: "Ask for price",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBoK_XGwSpk1emRk-rWLGYRqHS3iLWoUbHTzniXJ8I85kd7EFNbv96hPf&s=10",
    fallbackUrl: "/images/white-pasta.svg",
    dietary: "Vegetarian"
  },

  // BURGERS & SANDWICHES
  {
    id: "m-6",
    name: "Special 49 Burger",
    category: "burgers-sandwiches",
    categoryLabel: "Burgers & Sandwiches",
    description: "Double-layered café specialty burger with a crisp patty, melted cheese slice, and signature sauce.",
    priceDisplay: "Ask for price",
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2026/1/22/daa15917-7ecb-40dc-9e54-46face4495d7_b3aa34b6-e4a9-4ff0-a2c3-2b774c6801c4.JPG",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian",
    isSpecial: true
  },
  {
    id: "m-7",
    name: "Aloo Tikki Burger",
    category: "burgers-sandwiches",
    categoryLabel: "Burgers & Sandwiches",
    description: "Crispy spiced potato patty nestled inside soft sesame buns with mint mayo and tomato rings.",
    priceDisplay: "Ask for price",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42VXJBzB2umIDgV46zo2WXxOapoR0xACzpg5kLR4nRo-3j2p9BsGf66g&s=10",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-8",
    name: "Cheese Burger",
    category: "burgers-sandwiches",
    categoryLabel: "Burgers & Sandwiches",
    description: "Classic veggie patty topped with a warm melted cheddar slice, crunchy lettuce, and mustard sauce.",
    priceDisplay: "Ask for price",
    imageUrl: "https://i.pinimg.com/736x/75/bb/bb/75bbbb36ed0002e96dcca2475ec48664.jpg",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-9",
    name: "Cheese Corn Burger",
    category: "burgers-sandwiches",
    categoryLabel: "Burgers & Sandwiches",
    description: "Savory corn-and-cheese fusion patty with crisp outer coating and creamy center in toasted buns.",
    priceDisplay: "Ask for price",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHiN5XpfooKP7E-0a-1-8xgX1W-ICArpNBLKWEvWuXwViEGSzIHVOZKwp&s=10",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-10",
    name: "Mexican Burger",
    category: "burgers-sandwiches",
    categoryLabel: "Burgers & Sandwiches",
    description: "Spicy Mexican-inspired seasoned patty with jalapeno slices, tangy salsa spread, and crisp greens.",
    priceDisplay: "Ask for price",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWgqNnKulwZWFl_o_BQmN0ujFi-_6JHBOrrpUOIxbcqBjK0c-xZBAysU&s=10",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-11",
    name: "Grilled Burger",
    category: "burgers-sandwiches",
    categoryLabel: "Burgers & Sandwiches",
    description: "Char-pressed artisanal burger bun with a smokey spiced vegetable patty and herb dressing.",
    priceDisplay: "Ask for price",
    imageUrl: "https://i.pinimg.com/736x/8f/ba/b5/8fbab5059965d76082a046dc58627338.jpg",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-12",
    name: "Cheese Corn Sandwich",
    category: "burgers-sandwiches",
    categoryLabel: "Burgers & Sandwiches",
    description: "Triple-layered toasted bread stuffed with sweet American corn, creamy mayo, and molten mozzarella.",
    priceDisplay: "Ask for price",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCp2GqkzqPOl-A5MKZYsKqc0XSCjZ4McFvhMrQpzrDV9GjS8eQPEfmTs_z&s=10",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-13",
    name: "Grilled Sandwich",
    category: "burgers-sandwiches",
    categoryLabel: "Burgers & Sandwiches",
    description: "Golden grill-marked sandwich packed with spiced potato filling, mint chutney, and fresh cucumber.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-14",
    name: "Veg Sandwich",
    category: "burgers-sandwiches",
    categoryLabel: "Burgers & Sandwiches",
    description: "Light, fresh café sandwich filled with crunchy vegetable slices, butter, and mild seasoning.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },

  // WRAPS & SNACKS
  {
    id: "m-15",
    name: "Special 49 Wrap",
    category: "wraps-snacks",
    categoryLabel: "Wraps & Snacks",
    description: "House special toasted roll stuffed with seasoned filling, pickled onions, and velvety spiced dressing.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/veg-wrap.svg",
    dietary: "Vegetarian",
    isSpecial: true
  },
  {
    id: "m-16",
    name: "Paneer Wrap",
    category: "wraps-snacks",
    categoryLabel: "Wraps & Snacks",
    description: "Chunks of fresh cottage cheese tossed in tandoori spices, rolled in a tender flatbread with herbs.",
    priceDisplay: "Ask for price",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkZb4pX0IiQNzZf-Dfmc3EOFE_PTAzTg-Yg5gSehtLE1tS-m-hTSHVgvK&s=10",
    fallbackUrl: "/images/veg-wrap.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-17",
    name: "Veg Wrap",
    category: "wraps-snacks",
    categoryLabel: "Wraps & Snacks",
    description: "Crispy vegetable strips, cabbage slaw, and mild mayonnaise wrapped inside a grilled tortilla.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1581570378527-9585a11deea2?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/veg-wrap.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-18",
    name: "Fries",
    category: "wraps-snacks",
    categoryLabel: "Wraps & Snacks",
    description: "Classic salted crispy potato french fries served hot with tangy tomato dip.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/fries.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-19",
    name: "Peri Peri Fries",
    category: "wraps-snacks",
    categoryLabel: "Wraps & Snacks",
    description: "Crispy french fries tossed with spicy, zesty red peri peri seasoning.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1647705195905-671a25be159d?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/peri-peri-fries.svg",
    dietary: "Vegetarian",
    isSpecial: true
  },
  {
    id: "m-20",
    name: "Spring Rolls",
    category: "wraps-snacks",
    categoryLabel: "Wraps & Snacks",
    description: "Crisp golden-fried pastry rolls filled with shredded Asian vegetables and served with sweet chili sauce.",
    priceDisplay: "Ask for price",
    imageUrl: "https://d1mxd7n691o8sz.cloudfront.net/static/recipe/recipe/2023-12/Vegetable-Spring-Rolls-2-1-906001560ca545c8bc72baf473f230b4_thumbnail_170.jpeg",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },

  // INDO-CHINESE
  {
    id: "m-21",
    name: "Special 49 Noodles",
    category: "indo-chinese",
    categoryLabel: "Indo-Chinese",
    description: "Signature wok-tossed long noodles loaded with julienne veggies, garlic crunch, and house sauces.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian",
    isSpecial: true
  },
  {
    id: "m-22",
    name: "Hakka Noodles",
    category: "indo-chinese",
    categoryLabel: "Indo-Chinese",
    description: "Traditional Indo-Chinese street style noodles prepared with crunchy cabbage, capsicum, and soy.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-23",
    name: "Paneer Noodles",
    category: "indo-chinese",
    categoryLabel: "Indo-Chinese",
    description: "Savory stir-fried noodles infused with pan-fried paneer cubes and mild oriental spices.",
    priceDisplay: "Ask for price",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Pio6L1sCiXC_giWmJKlCcoxGKNVGj-j1D8mVzum9KPpFY_B8KjrC8o5l&s=10",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-24",
    name: "Dry Manchurian",
    category: "indo-chinese",
    categoryLabel: "Indo-Chinese",
    description: "Crispy vegetable florets and dumplings tossed in ginger, garlic, green chilies, and dark soy.",
    priceDisplay: "Ask for price",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2rDTJccc4UBHaeCLhNZJMx-oIbE0Ch3U_rjcb1edS73ER3Z9fvI1dOf4&s=10",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-25",
    name: "Gravy Manchurian",
    category: "indo-chinese",
    categoryLabel: "Indo-Chinese",
    description: "Tender vegetable dumplings simmered in a rich, tangy, and mildly spiced soy-garlic gravy.",
    priceDisplay: "Ask for price",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjMNu9wT5EWBD0qql5lsLzHFpg0XuV1HkLp0Ai6ADJqPNCPlf22AuFKA&s=10",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-26",
    name: "Cheese Chilli",
    category: "indo-chinese",
    categoryLabel: "Indo-Chinese",
    description: "Crispy battered paneer cubes glazed with onion petals, green bell peppers, and chili sauce.",
    priceDisplay: "Ask for price",
    imageUrl: "https://www.funfoodfrolic.com/wp-content/uploads/2020/04/Chilli-Paneer-Thumbnail.jpg",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-27",
    name: "Special 49 Chilli",
    category: "indo-chinese",
    categoryLabel: "Indo-Chinese",
    description: "Chef's specialty Indo-Chinese sizzling platter with extra crunch, fiery sauce, and spring onions.",
    priceDisplay: "Ask for price",
    imageUrl: "https://thetwincookingproject.net/wp-content/uploads/2019/11/Chilli-Paneer-4.jpg",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian",
    isSpecial: true
  },

  // TIKKA
  {
    id: "m-28",
    name: "Paneer Tikka",
    category: "tikka",
    categoryLabel: "Tikka",
    description: "Cubed cottage cheese marinated in spiced curd, mustard oil, and herbs, char-grilled to perfection.",
    priceDisplay: "Ask for price",
    imageUrl: "https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-29",
    name: "Malai Tikka",
    category: "tikka",
    categoryLabel: "Tikka",
    description: "Silky paneer marinated in fresh heavy cream, cashew paste, cardamoms, and mild aromatic spices.",
    priceDisplay: "Ask for price",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4yMa_wwMLSJmf67NunT8z4D7ZkY5cqF7NuRZNLMBGN_EqC2xEVPyCRfw&s=10",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-30",
    name: "Afghani Tikka",
    category: "tikka",
    categoryLabel: "Tikka",
    description: "Rich, mildly spiced cottage cheese marinated in curd, black pepper, and butter glaze.",
    priceDisplay: "Ask for price",
    imageUrl: "https://i.ytimg.com/vi/d_RhCYI5aVo/maxresdefault.jpg",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },

  // BEVERAGES
  {
    id: "m-31",
    name: "Cold Coffee",
    category: "beverages",
    categoryLabel: "Coffee & Beverages",
    description: "Creamy whipped espresso cold coffee served over ice with thick foam and cocoa dusting.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian",
    isSpecial: true
  },
  {
    id: "m-32",
    name: "Cappuccino",
    category: "beverages",
    categoryLabel: "Coffee & Beverages",
    description: "Freshly brewed espresso topped with steamed milk foam and delicate cinnamon aroma.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-33",
    name: "Latte",
    category: "beverages",
    categoryLabel: "Coffee & Beverages",
    description: "Smooth espresso shot poured into velvety microfoam steamed milk in a cozy ceramic cup.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-34",
    name: "Espresso",
    category: "beverages",
    categoryLabel: "Coffee & Beverages",
    description: "Intense, concentrated shot of pure dark roast coffee with a dense hazelnut crema.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-35",
    name: "Chocolate Shake",
    category: "beverages",
    categoryLabel: "Coffee & Beverages",
    description: "Decadent thick milkshake crafted with rich dark cocoa syrup, vanilla ice cream, and chocolate curls.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-36",
    name: "Oreo Shake",
    category: "beverages",
    categoryLabel: "Coffee & Beverages",
    description: "Creamy blend of crunchy Oreo biscuit crumbles, milk, and sweet vanilla cream.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-37",
    name: "Strawberry Shake",
    category: "beverages",
    categoryLabel: "Coffee & Beverages",
    description: "Vibrant and refreshing fruit milkshake packed with sweet strawberry goodness.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  },
  {
    id: "m-38",
    name: "Mint Mojito",
    category: "beverages",
    categoryLabel: "Coffee & Beverages",
    description: "Sparkling mocktail with crushed fresh mint leaves, zesty lime wedges, simple syrup, and ice.",
    priceDisplay: "Ask for price",
    imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80",
    fallbackUrl: "/images/food-fallback.svg",
    dietary: "Vegetarian"
  }
];
