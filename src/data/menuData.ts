
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
  // {
  //   name: 'Chicken (1pc)',
  //   price: '£2.25',
  //   description: 'Juicy, golden fried chicken piece. Hand breaded in a signature recipe',
  //   image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
  //   category: 'Fried Gold'
  // },
  // {
  //   name: 'Chicken (2pcs)',
  //   price: '£4.25',
  //   description: 'Two juicy, golden fried chicken pieces. Hand breaded in a signature recipe',
  //   image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
  //   category: 'Fried Gold'
  // },
  // {
  //   name: 'Chicken (3pcs)',
  //   price: '£5.75',
  //   description: 'Three juicy, golden fried chicken pieces. Hand breaded in a signature recipe',
  //   image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
  //   category: 'Fried Gold'
  // },
  // {
  //   name: 'Wings (1pc)',
  //   price: '£2.25',
  //   description: 'One crispy, golden-fried wing in our signature breading bursting with flavour — a tasty teaser.',
  //   image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  //   category: 'Fried Gold'
  // },
  // {
  //   name: 'Wings (2pcs)',
  //   price: '£4.25',
  //   description: 'Two juicy wings, fried to a golden crunch — ideal for a light starter or a side.',
  //   image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
  //   category: 'Fried Gold'
  // },
  // {
  //   name: 'Wings (3pcs)',
  //   price: '£5.75',
  //   description: 'Three crispy wings, seasoned and fried to perfection — bold flavour in every bite.',
  //   image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
  //   category: 'Fried Gold'
  // },
  // {
  //   name: 'Strips (3pcs)',
  //   price: '£3.99',
  //   description: '3 pieces of juicy, golden fried chicken Strips with a crispy finish. Hand breaded in a signature recipe',
  //   image: 'https://images.unsplash.com/photo-1519915195129-7d93adf4b882?w=400&h=300&fit=crop',
  //   category: 'Fried Gold'
  // },
  // {
  //   name: 'Strips (6pcs)',
  //   price: '£5.99',
  //   description: '6 pieces of juicy, golden fried chicken Strips with a crispy finish. Hand breaded in a signature recipe',
  //   image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
  //   category: 'Fried Gold'
  // },
  // {
  //   name: 'Strips (12pcs)',
  //   price: '£9.99',
  //   description: '12 pieces of juicy, golden fried chicken Strips with a crispy finish. Hand breaded in a signature recipe',
  //   image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
  //   category: 'Fried Gold'
  // },
  {
    name: 'Chicken on the bone',
    price: '£2.25',
    description: 'Succulent chicken on the bone, fried to golden perfection with our signature seasoning blend',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Wings',
    price: '£2.25',
    description: 'Crispy wings, seasoned and fried to perfection — bold flavour in every bite.',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Strips',
    price: '£3.99',
    description: 'Juicy, golden fried chicken Strips / tenders with a crispy finish. Hand breaded in our signature recipe',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  }
];

export const chickenBurgerItems: MenuItem[] = [
  {
    name: 'Chicken Stack Classic',
    price: '£6.45',
    description: 'Succulent chicken coated in a seasoned breading, stacked in a soft seeded bun, layered with melted cheese, fresh lettuce, onions, creamy mayo. A true Stackers favourite.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'Zing Stack',
    price: '£7.45',
    description: 'Our signature zinger burger with a bold spicy kick, layered in a soft bun, mayo, fresh onions, and crunchy lettuce. Because bland just isn’t your thing!',
    image: 'https://images.unsplash.com/photo-1612197529270-0a3a3a1a3a3a?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'Peri-Peri Chicken Stack',
    price: '£7.45',
    description: 'Tender grilled peri-peri chicken, melted cheese, peri mayo, crisp lettuce, and fresh onions all stacked in a soft bun for the perfect bite. Grilled to perfection, stacked for satisfaction.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'Stack Veg Titan 🌱',
    price: '£8',
    description: 'Grilled halloumi, cheese, golden hash brown, fresh veggie patty, onion rings, mayo, red onions, and fresh lettuce. Crunchy. Cheesy. Legendary.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'Firebird Stack 🌶🌶🌶',
    price: '£8.45',
    description: 'Crispy fried chicken meets melted cheese, our signature fire-cracker hot sauce, creamy mayo, topped with fresh lettuce, onions and fiery jalapeños for a kick. All nestled in a toasted bun. Packed with spice and crunch.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'Halloumi Chicken Stack 🌶',
    price: '£8.99',
    description: 'Golden crispy fried chicken layered with melted cheese, flame grilled halloumi, tangy Algerian sauce, creamy mayo, fresh lettuce, zesty onions, fiery jalapeños, then crowned with crunchy nachos for the ultimate texture explosion. Engineered for serious taste seekers.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  }
];

export const smashBurgerItems: MenuItem[] = [
  {
    name: 'Stack Classic',
    price: '£6.45',
    description: 'Premium quality Angus beef, melted cheese, our secret sauce, mayo, onions, gherkins, and fresh lettuce on a soft bun. Simple. Juicy. Iconic.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'BBQ Stack',
    price: '£7.45',
    description: 'Tender Angus beef, melted cheese, BBQ sauce, onions, and fresh lettuce on a soft bun. Smoky, juicy, and irresistible!',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'Double Stack',
    price: '£8.45',
    description: 'Signature Angus beef stacked with cheese, secret sauce, mayo, onions, gherkins, and lettuce in a toasted bun. Twice the beef, double the flavour.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'Stackzilla',
    price: '£10.45',
    description: 'A towering Angus beef with melted cheese, secret sauce, mayo, onions, gherkins, and lettuce. Massive. Meaty. Unstoppable.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'Fire Stack 🌶',
    price: '£10.45',
    description: 'Juicy Angus beef stacked with turkey rashers, crispy hash brown, fiery jalapeños, melted cheese, secret sauce, mayo, onions, gherkins, and lettuce. Crunchy. Spicy. Loaded.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'Stack Titan',
    price: '£10.45',
    description: 'Premium Angus beef, secret seasoning, cheddar, mozzarella, hash brown, two crispy onion rings, turkey rashers, jalapeños, mayo, red onions, gherkins, lettuce, and our secret sauce in a toasted bun. The ultimate flavour stack.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  }
];

export const pizzaItems: MenuItem[] = [
  {
    name: 'Margherita',
    price: '£5.95',
    description: 'Classic pizza with tomato sauce, and mozzarella',
    image: 'https://images.unsplash.com/photo-1548365328-9b7a7a7a7a7a?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Pepperoni Feast',
    price: '£6.95',
    description: 'Tomato sauce, and pepperoni slices. Double pepperoni and cheese.',
    image: 'https://images.unsplash.com/photo-1548365328-9b7a7a7a7a7a?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Meat Feast',
    price: '£7.45',
    description: 'Chicken, ham, meatballs, and pepperoni.',
    image: 'https://images.unsplash.com/photo-1548365328-9b7a7a7a7a7a?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'BBQ Sizzlers',
    price: '£7.45',
    description: 'BBQ sauce base, topped with pepperoni, chicken, and cheese.',
    image: 'https://images.unsplash.com/photo-1548365328-9b7a7a7a7a7a?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Veggie Sizzler 🌱',
    price: '£7.45',
    description: 'Tomato, mushrooms, peppers, onions, sweetcorn & jalapeños.',
    image: 'https://images.unsplash.com/photo-1548365328-9b7a7a7a7a7a?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Spicy Meatballs 🌶',
    price: '£8.45',
    description: 'Meatballs in a peri-peri sauce with onions and jalapeños.',
    image: 'https://images.unsplash.com/photo-1548365328-9b7a7a7a7a7a?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Peri-Peri Chicken',
    price: '£8.45',
    description: 'Freshly grilled peri-peri chicken, peppers, jalapeños & red onions.',
    image: 'https://images.unsplash.com/photo-1548365328-9b7a7a7a7a7a?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Stackers Special',
    price: '£8.95',
    description: 'Pepperoni, meatballs, peri-peri chicken, onions, peppers, and peri-peri sauce.',
    image: 'https://images.unsplash.com/photo-1548365328-9b7a7a7a7a7a?w=400&h=300&fit=crop',
    category: 'Pizzas'
  }
];

export const wrapItems: MenuItem[] = [
  {
    name: 'Chicken Stack Wrap',
    price: '£6.45',
    description: 'Crispy fried chicken with your choice of fresh lettuce, onions, creamy mayo, and our signature secret sauce.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Wraps'
  },
  {
    name: 'BBQ Blaze Wrap',
    price: '£6.45',
    description: 'Bold BBQ flavour meets crispy fried chicken, layered with your choice of jalapeños, lettuce, onions, and creamy mayo.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Wraps'
  },
  {
    name: 'Grilled Chicken Wrap',
    price: '£6.45',
    description: 'Juicy grilled chicken with your choice of fresh lettuce, onions, and smooth mayo, all wrapped for a lighter, satisfying bite.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Wraps'
  },
  {
    name: 'Peri-Peri Chicken Wrap 🌶',
    price: '£6.45',
    description: 'Succulent grilled peri-peri chicken with your choice of lettuce, onions, and smooth mayo.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Wraps'
  },
  {
    name: 'Fire-cracker Wrap 🌶🌶🌶',
    price: '£6.99',
    description: 'Crunchy and crispy fried chicken strips with our signature fire-cracker hot sauce with optional fresh lettuce, & jalapeños.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Wraps'
  },
  {
    name: 'Grilloumi Stack Wrap 🌱',
    price: '£7.45',
    description: 'Grilled halloumi, stacked with lettuce, onions, and mayo. A melt-in-your-mouth vegetarian delight.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Wraps'
  }
];

export const kidsItems: MenuItem[] = [
  {
    name: 'Chicken Nuggets (4) and a drink',
    price: '£3.49',
    description: 'Crispy chicken nuggets and a fruitshoot.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Kids'
  },
  {
    name: 'Chicken Nuggets (2), Mozzarella sticks (2), Fries',
    price: '£3.99',
    description: 'Crispy chicken nuggets with mozzarella sticks and fries. Comes with fruitshoot.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Kids'
  },
  {
    name: 'Chicken nuggets (4) & chips and fruitshoot',
    price: '£4.95',
    description: 'Golden chicken nuggets (4) served with crispy chips — the perfect mini meal for little Stackers!',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Kids'
  },
  {
    name: 'Gold strips (4) with chips and fruitshoot',
    price: '£5.50',
    description: 'Four crispy, tender chicken strips served with a side of golden fries — a tasty treat for young Stackers!',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Kids'
  },
  {
    name: 'Chicken Burger Meal',
    price: '£6.49',
    description: 'A mini crispy chicken burger with optional lettuce and mayo, served with golden fries — perfect for little hands and big smiles!',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Kids'
  },
  {
    name: 'Mini Smash Beef Burger Meal',
    price: '£7.49',
    description: 'Mini beef burger with cheese, served with fries and a drink.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Kids'
  }
];

export const sidesItems: MenuItem[] = [
  {
    name: 'Coleslaw',
    price: '£1.50',
    description: 'A refreshing, creamy blend of shredded cabbage, carrots, and a tangy dressing — the perfect cool companion to any Stackers meal.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Chips / Fries',
    price: '£2.25',
    description: 'Golden, crispy fries served hot and perfectly seasoned — the ultimate classic side to stack up your meal.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Peri-Peri Chips',
    price: '£2.75',
    description: 'Crispy golden fries tossed in our fiery peri-peri seasoning — bold, zesty, and packed with flavour for those who like a little heat on the side.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Curly Fries',
    price: '£3.00',
    description: 'Twisted, crispy, and irresistibly fun — our seasoned curly fries bring bold flavour and crunch to every bite. A side with serious taste!',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Cheesy Chips',
    price: '£3.95',
    description: 'Golden fries smothered in rich, melted cheese for the ultimate gooey, savoury indulgence. A comfort food classic done the Stackers way.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Peri-Peri Curly Fries',
    price: '£4.00',
    description: 'Crispy, seasoned curly fries tossed in fiery Peri-Peri spice—bold, twisty, and packed with flavour in every bite.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Peri-Peri Cheesy Chips',
    price: '£4.45',
    description: 'Golden fries dusted in zesty Peri-Peri seasoning, smothered in melted cheese for a spicy, gooey, irresistible sidekick to any meal.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Sides'
  }
];

export const drinkItems: MenuItem[] = [
  {
    name: 'Irn Bru',
    price: '£1.25',
    description: 'Scotland\'s 🏴 other national drink, sweet and tangy.',
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
    description: 'Thick, creamy, and blended to perfection. Our milkshakes come in a variety of irresistible flavours. Whether you are craving classic chocolate, fruity strawberry, or indulgent Biscoff, we have got the perfect shake to sip and savour.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    category: 'Milkshakes'
  }
];

export const iceCreamItems: MenuItem[] = [
  {
    name: 'Ice Cream',
    price: '£2.50',
    description: 'Scoop into pure indulgence with our premium-quality ice cream—crafted for rich flavour and smooth texture. Choose from a variety of delicious flavours to finish your meal on a sweet, satisfying note.',
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
    description: 'Warm, gooey cookie dough served fresh — because life is too short to bake cookies at home.',
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
    price: '£24.99',
    description: 'Includes: 🍔 Zing Stack burger, 🌯 Chicken Stack wrap OR Fire-Cracker wrap, 🍗 4 x Fried Gold Chicken, 🍗 4 x Spicy Chicken Wings, 🍟 2 x Regular Fries, 🥤 1 x 1.5L Juice, 🍴 Stackers Garlic Dip, 🍴 Stackers Chilli Dip, 10% Student and Blue Card Holders discount. Family feast for sharing! ',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Mighty Tower',
    price: '34.99',
    description: 'Includes: 🍔 Zing Stack burger, 🍔 Peri-Peri Chicken Stack burger, 🌯 Chicken Stack wrap, 🌯 Peri-Peri Chicken wrap, 🍗 6 x Fried Gold Chicken, 🍗 6 x Spicy Hot Wings, 🍗 6 x Fried Gold Chicken Strips, 🍟 2 x Regular Fries, 🥤 1 x 1.5L Juice, 2 x 🍴 Stackers Garlic Dips, 2 x 🍴 Stackers Chilli Dips',
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
    description: '10% off on all menu items for Police, Teachers, NHS workers,  emergency services & other blue card holders. Thank you for your service.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  }
];

export const boxesItems: MenuItem[] = [
  {
    name: 'Chicken Box',
    price: '£4.99',
    description: 'Box with 🍗 2 pieces of fried chicken, 🍟 fries, and a can of juice.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Boxes'
  },
  {
    name: 'Zing Stack Burger Box',
    price: '£8.99',
    description: 'Box with a 🍔 Zing Stack burger, 🍟 fries, and a can of juice.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Boxes'
  },
  {
    name: 'Solo Supreme',
    price: '£10.99',
    description: '🍗 4 x Fried Gold Chicken, 🍗 4 x Fried Gold Strips, 🍟 Fries, 🍴 Stackers Garlic Dip and a can of juice.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Boxes'
  },
  {
    name: 'Family Feast Bucket',
    price: '£15.45',
    description: '🍗 4 x Fried Gold Chicken, 🍔 2 Chicken Stack Classic burgers, 🍟 Fries, 🍴 Stackers Garlic Dip, 2 cans of juice.',
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
    name: 'Loaded Stackers\' Fries',
    price: '£7.50',
    description: 'Chunks of peri-peri chicken, crispy chicken bites, cheesy sauce and jalapeños.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Loaded Stackers\' Fries'
  }
];

export const milkshakeFlavours = [
  'Oreo', 'Biscoff', 'Strawberry', 'Kinder Buneo', 'White Kinder Bueno', 'Malteaser', 'Galaxy Caramel', 'Milky bar', 'Banana', 'Ferrero Rocher', 'Mango', 'Twix', 'Mars bar', 'Snickers', 'Milky way', 'Crunchie'
];

export const iceCreamFlavours = [
  'Vanilla', 'Strawberry', 'Scottish Tablet', 'Blue Bubblegum', 'Belgian Chocolate', 'White Bueno', 'Cookies & Cream', 'Raspberry Ripple', 'Chocolate Fudge Brownie', 'Honeycomb', 'Mint'
];

export const pizzaCustomisations = [
  'Extra Cheese', 'Pepperoni', 'Mushrooms', 'Bell Peppers', 'Onions', 'Olives', 'Ham', 'Chicken', 'Jalapeños', 'Pineapple', 'Tomato', 'Sweetcorn', 'Peri-Peri Chicken', 'Meatballs'
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
    name: 'Sauces & Dips',
    description: 'Choose from our selection of delicious sauces and dips to complement your meal.',
    price: '£0.70',
    image: '/placeholder.svg',
    category: 'Sauces & Dips'
  }
];

export const saucesAndDipsList = [
  'Garlic Mayo', 'Classic Mayo', 'Sweet Chilli', 'BBQ Sauce', 'Chilli Sauce', 'Tomato Ketchup', 'Burger Sauce'
];
