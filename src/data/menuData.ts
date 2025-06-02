export interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

export const startersItems: MenuItem[] = [
  {
    name: 'Mozzarella Sticks (6)',
    price: '£4.25',
    description: 'Golden-fried and gooey on the inside — served hot and melty with a crunchy coating.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e4095fec1?w=400&h=300&fit=crop',
    category: 'Starters'
  },
  {
    name: 'Onion Rings (10)',
    price: '£4.25',
    description: 'Crispy battered onion rings fried to perfection — a crunchy, savoury classic.',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop',
    category: 'Starters'
  },
  {
    name: 'Jalapeños Poppers (6) 🌶',
    price: '£4.25',
    description: 'Spicy jalapeños filled with creamy cheese, lightly crumbed and fried for a delicious bite.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'Starters'
  },
  {
    name: 'Garlic Bread (4)',
    price: '£3.25',
    description: 'Crispy Garlic Bread. Simple, soft, and satisfying.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Starters'
  },
  {
    name: 'Garlic Bread and Cheese (4)',
    price: '£3.75',
    description: 'Our classic garlic bread topped with melted cheese for that extra indulgence.',
    image: 'https://images.unsplash.com/photo-1571091318767-18b5b1457add?w=400&h=300&fit=crop',
    category: 'Starters'
  },
  {
    name: 'Chargrilled Halloumi (2)',
    price: '£4.25',
    description: 'Thick-cut halloumi slices grilled with a golden char — delicious and satisfying.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
    category: 'Starters'
  },
  {
    name: 'Peri-Peri Chicken Strips (4)',
    price: '£4.25',
    description: 'Tender chicken marinated in our signature peri-peri spices and grilled to juicy perfection.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Starters'
  }
];

export const friedGoldItems: MenuItem[] = [
  {
    name: 'Chicken (1pc)',
    price: '£2.25',
    description: 'Juicy, golden fried chicken piece. Hand breaded in a signature recipe',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Chicken (2pcs)',
    price: '£4.25',
    description: 'Two juicy, golden fried chicken pieces. Hand breaded in a signature recipe',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Chicken (3pcs)',
    price: '£5.75',
    description: 'Three juicy, golden fried chicken pieces. Hand breaded in a signature recipe',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Wings (1pc)',
    price: '£2.25',
    description: 'One crispy, golden-fried wing in our signature breading bursting with flavour — a tasty teaser.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Wings (2pcs)',
    price: '£4.25',
    description: 'Two juicy wings, fried to a golden crunch — ideal for a light starter or a side.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Wings (3pcs)',
    price: '£5.75',
    description: 'Three crispy wings, seasoned and fried to perfection — bold flavour in every bite.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },

  {
    name: 'Strips (3pcs)',
    price: '£3.99',
    description: '3 pieces of juicy, golden fried chicken Strips with a crispy finish. Hand breaded in a signature recipe',
    image: 'https://images.unsplash.com/photo-1519915195129-7d93adf4b882?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Strips (6pcs)',
    price: '£5.99',
    description: '6 pieces of juicy, golden fried chicken Strips with a crispy finish. Hand breaded in a signature recipe',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Strips (12pcs)',
    price: '£9.99',
    description: '12 pieces of juicy, golden fried chicken Strips with a crispy finish. Hand breaded in a signature recipe',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  }
];

export const chickenBurgerItems: MenuItem[] = [
  {
    name: 'Classic Chicken Burger',
    price: '£5.99',
    description: 'Juicy grilled chicken breast with lettuce, tomato, and mayo on a toasted bun.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'Spicy Chicken Burger',
    price: '£6.49',
    description: 'Crispy chicken fillet with spicy sauce, lettuce, and pickles.',
    image: 'https://images.unsplash.com/photo-1612197529270-0a3a3a1a3a3a?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'BBQ Chicken Burger',
    price: '£6.99',
    description: 'Grilled chicken with BBQ sauce, cheese, and onion rings.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  }
];

export const smashBurgerItems: MenuItem[] = [
  {
    name: 'Classic Smash Burger',
    price: '£5.99',
    description: 'Double smashed beef patties with cheese, lettuce, tomato, and special sauce.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'Bacon Smash Burger',
    price: '£6.99',
    description: 'Smash burger topped with crispy bacon and melted cheese.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'Mushroom Swiss Smash Burger',
    price: '£7.49',
    description: 'Smash burger with sautéed mushrooms and Swiss cheese.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  }
];

export const pizzaItems: MenuItem[] = [
  {
    name: 'Margherita',
    price: '£7.99',
    description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil.',
    image: 'https://images.unsplash.com/photo-1548365328-9b7a7a7a7a7a?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Pepperoni',
    price: '£8.99',
    description: 'Tomato sauce, mozzarella, and pepperoni slices.',
    image: 'https://images.unsplash.com/photo-1548365328-9b7a7a7a7a7a?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Veggie',
    price: '£8.49',
    description: 'Tomato sauce, mozzarella, bell peppers, onions, mushrooms, and olives.',
    image: 'https://images.unsplash.com/photo-1548365328-9b7a7a7a7a7a?w=400&h=300&fit=crop',
    category: 'Pizzas'
  }
];

export const wrapItems: MenuItem[] = [
  {
    name: 'Chicken Caesar Wrap',
    price: '£5.99',
    description: 'Grilled chicken, romaine lettuce, parmesan, and Caesar dressing wrapped in a soft tortilla.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Wraps'
  },
  {
    name: 'Falafel Wrap',
    price: '£5.49',
    description: 'Crispy falafel balls with hummus, lettuce, tomato, and tahini sauce.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Wraps'
  },
  {
    name: 'BBQ Chicken Wrap',
    price: '£6.49',
    description: 'Grilled chicken with BBQ sauce, lettuce, and cheese wrapped in a tortilla.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Wraps'
  }
];

export const kidsItems: MenuItem[] = [
  {
    name: 'Kids Chicken Nuggets',
    price: '£3.99',
    description: 'Crispy chicken nuggets served with fries and a drink.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Kids'
  },
  {
    name: 'Kids Mini Burger',
    price: '£4.49',
    description: 'Mini beef burger with cheese, served with fries and a drink.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Kids'
  }
];

export const sidesItems: MenuItem[] = [
  {
    name: 'Fries',
    price: '£2.50',
    description: 'Crispy golden fries, perfect as a side.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Onion Rings',
    price: '£3.00',
    description: 'Crispy battered onion rings.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Sides'
  }
];

export const drinkItems: MenuItem[] = [
  {
    name: 'Irn Bru',
    price: '£1.25',
    description: 'Scotland\'s other national drink, sweet and tangy.',
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Pepsi',
    price: '£1.25',
    description: 'Classic Pepsi cola, refreshing and crisp.',
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Coke',
    price: '£1.25',
    description: 'Classic Coca-Cola, the original cola.',
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Sprite',
    price: '£1.25',
    description: 'Crisp lemon-lime soda, light and refreshing.',
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Fanta',
    price: '£1.25',
    description: 'Orange flavoured soda, sweet and fruity.',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Rubicon',
    price: '£1.25',
    description: 'Exotic fruit drink available in tropical flavours.',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop',
    category: 'Drinks'
  }
];

export const milkshakeItems: MenuItem[] = [
  {
    name: 'Milkshakes',
    price: '£4.20',
    description: 'Creamy milkshakes available in various flavours.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    category: 'Milkshakes'
  }
];

export const iceCreamItems: MenuItem[] = [
  {
    name: 'Ice Cream',
    price: '£2.50',
    description: 'Choose your scoops and flavours.',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop',
    category: 'Ice Creams'
  }
];

export const sweetStacksItems: MenuItem[] = [
  {
    name: 'Waffle',
    price: '£6.50',
    description: 'Crispy, golden waffles made fresh to order — the perfect canvas for your favourite flavours and toppings.',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=300&fit=crop',
    category: 'Sweet Stacks'
  },
  {
    name: 'Crepe',
    price: '£6.50',
    description: 'Delicate, thin crepes crafted to perfection — light, airy, and ready for your sweetest dreams.',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop',
    category: 'Sweet Stacks'
  },
  {
    name: 'Cookie Dough Delight',
    price: '£6.50',
    description: 'Warm, gooey cookie dough served fresh — because life is too short for fully baked cookies.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
    category: 'Sweet Stacks'
  },
  {
    name: 'Cheesecake Slices',
    price: '£3.99',
    description: 'Rich, creamy cheesecake slices available in multiple flavours — the perfect ending to any meal.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    category: 'Sweet Stacks'
  },
  {
    name: 'Stackers\' Specials',
    price: '£4.99',
    description: 'Our signature dessert creations that change regularly — ask about today\'s special sweet treats.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop',
    category: 'Sweet Stacks'
  }
];

export const mealDealsItems: MenuItem[] = [
  {
    name: 'Party Platter',
    price: '£16.20',
    description: '10% Student and Blue Card Holders discount. Family feast for sharing! Includes: 🍗 4 x Gold Fried Chicken, 🍟 2 x Regular Fries, 🥤 4 x Cans of Juice, 🍴 Stackers Garlic Dip',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Mighty Tower',
    price: '£18.90',
    description: '10% Student and Blue Card Holders discount. The ultimate stack for big appetites! Includes: 🍔 2 x Stackzilla Burgers, 🍟 2 x Regular Fries, 🥤 2 x Cans of Juice, 🍴 Stackers Garlic Dip',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Student Deals',
    price: '',
    description: '10% off on all menu items with valid student ID. Perfect for hungry students on a budget.',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Blue Card Holders',
    price: '',
    description: '10% off on all menu items for NHS workers and emergency services. Thank you for your service.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  }
];

export const boxesItems: MenuItem[] = [
  {
    name: 'Chicken Box',
    price: '£7.99',
    description: 'Box with 3 pieces of fried chicken, fries, and a drink.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Boxes'
  },
  {
    name: 'Burger Box',
    price: '£8.99',
    description: 'Box with a burger, fries, and a drink.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Boxes'
  }
];

export const loadedFriesItems: MenuItem[] = [
  {
    name: 'Cheese Loaded Fries',
    price: '£4.99',
    description: 'Fries loaded with melted cheese and bacon bits.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Loaded Stackers\' Fries'
  },
  {
    name: 'Chili Loaded Fries',
    price: '£5.49',
    description: 'Fries topped with chili con carne and cheese.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Loaded Stackers\' Fries'
  }
];

export const milkshakeFlavours = [
  'Oreo', 'Strawberry', 'Chocolate', 'Vanilla', 'Banana', 'Bubblegum'
];

export const iceCreamFlavours = [
  'Vanilla', 'Chocolate', 'Strawberry', 'Mint Chocolate Chip', 'Cookies & Cream', 'Pistachio'
];

export const pizzaCustomisations = [
  'Extra Cheese', 'Pepperoni', 'Mushrooms', 'Bell Peppers', 'Onions', 'Olives', 'Ham', 'Chicken', 'Jalapeños'
];

export const rubiconFlavours = [
  'Mango', 'Passionfruit'
];

export const fantaFlavours = [
  'Orange', 'Lemon', 'Fruit Twist', 'Grapefruit'
];

export const pepsiFlavours = [
  'Pepsi', 'Max', 'Diet'
];

export const cokeFlavours = [
  'Coke', 'Zero', 'Diet'
];

export const saucesAndDipsItems: MenuItem[] = [
  {
    name: 'Garlic Mayo',
    price: '£0.70',
    description: 'Creamy garlic mayonnaise.',
    image: 'https://images.unsplash.com/photo-1573308866828-8ad1f8e8c7cd?w=400&h=300&fit=crop',
    category: 'Sauces & Dips'
  },
  {
    name: 'Classic Mayo',
    price: '£0.70',
    description: 'Traditional mayonnaise.',
    image: 'https://images.unsplash.com/photo-1573308866828-8ad1f8e8c7cd?w=400&h=300&fit=crop',
    category: 'Sauces & Dips'
  },
  {
    name: 'Sweet Chilli',
    price: '£0.70',
    description: 'Sweet and spicy chilli sauce.',
    image: 'https://images.unsplash.com/photo-1573308866828-8ad1f8e8c7cd?w=400&h=300&fit=crop',
    category: 'Sauces & Dips'
  },
  {
    name: 'BBQ Sauce',
    price: '£0.70',
    description: 'Smoky barbecue sauce.',
    image: 'https://images.unsplash.com/photo-1573308866828-8ad1f8e8c7cd?w=400&h=300&fit=crop',
    category: 'Sauces & Dips'
  },
  {
    name: 'Chilli Sauce',
    price: '£0.70',
    description: 'Hot chilli sauce.',
    image: 'https://images.unsplash.com/photo-1573308866828-8ad1f8e8c7cd?w=400&h=300&fit=crop',
    category: 'Sauces & Dips'
  },
  {
    name: 'Tomato Ketchup',
    price: '£0.70',
    description: 'Classic tomato ketchup.',
    image: 'https://images.unsplash.com/photo-1573308866828-8ad1f8e8c7cd?w=400&h=300&fit=crop',
    category: 'Sauces & Dips'
  },
  {
    name: 'Burger Sauce',
    price: '£0.70',
    description: 'Special burger sauce.',
    image: 'https://images.unsplash.com/photo-1573308866828-8ad1f8e8c7cd?w=400&h=300&fit=crop',
    category: 'Sauces & Dips'
  }
];

export const saucesAndDipsList = [
  'Garlic Mayo', 'Classic Mayo', 'Sweet Chilli', 'BBQ Sauce', 'Chilli Sauce', 'Tomato Ketchup', 'Burger Sauce'
];
