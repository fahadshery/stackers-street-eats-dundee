
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
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop',
    category: 'Starters'
  },
  {
    name: 'Onion Rings (10)',
    price: '£4.25',
    description: 'Crispy battered onion rings fried to perfection — a crunchy, savoury classic.',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop',
    category: 'Starters'
  },
  {
    name: 'Jalapeños Poppers (6) 127798',
    price: '£4.25',
    description: 'Spicy jalapeños filled with creamy cheese, lightly crumbed and fried for a delicious bite.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop',
    category: 'Starters'
  },
  {
    name: 'Garlic Bread (4)',
    price: '£3.25',
    description: 'Crispy Garlic Bread. Simple, soft, and satisfying.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop',
    category: 'Starters'
  },
  {
    name: 'Garlic Bread and Cheese (4)',
    price: '£3.75',
    description: 'Our classic garlic bread topped with melted cheese for that extra indulgence.',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop',
    category: 'Starters'
  },
  {
    name: 'Chargrilled Halloumi (2)',
    price: '£4.25',
    description: 'Thick-cut halloumi slices grilled with a golden char — delicious and satisfying.',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
    category: 'Starters'
  },
  {
    name: 'Peri-Peri Chicken Strips (4)',
    price: '£4.25',
    description: 'Tender chicken marinated in our signature peri-peri spices and grilled to juicy perfection.',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop',
    category: 'Starters'
  }
];

export const friedGoldItems: MenuItem[] = [
  {
    name: 'Chicken (1pc)',
    price: '£2.25',
    description: 'Juicy, golden fried chicken piece. Hand breaded in a signature recipe',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Chicken (2pcs)',
    price: '£4.25',
    description: 'Two juicy, golden fried chicken pieces. Hand breaded in a signature recipe',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Chicken (3pcs)',
    price: '£5.75',
    description: 'Three juicy, golden fried chicken pieces. Hand breaded in a signature recipe',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Wings (1pc)',
    price: '£2.25',
    description: 'One crispy, golden-fried wing in our signature breading bursting with flavour — a tasty teaser.',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Wings (2pcs)',
    price: '£4.25',
    description: 'Two juicy wings, fried to a golden crunch — ideal for a light starter or a side.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Wings (3pcs)',
    price: '£5.75',
    description: 'Three crispy wings, seasoned and fried to perfection — bold flavour in every bite.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  
  {
    name: 'Strips (3pcs)',
    price: '£3.99',
    description: '3 pieces of juicy, golden fried chicken Strips with a crispy finish. Hand breaded in a signature recipe',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Strips (6pcs)',
    price: '£5.99',
    description: '6 pieces of juicy, golden fried chicken Strips with a crispy finish. Hand breaded in a signature recipe',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Strips (12pcs)',
    price: '£9.99',
    description: '12 pieces of juicy, golden fried chicken Strips with a crispy finish. Hand breaded in a signature recipe',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  }
];

export const chickenBurgerItems: MenuItem[] = [
  {
    name: 'Chicken Stack Classic',
    price: '£6.45',
    description: 'Succulent chicken coated in a seasoned breading, stacked in a soft seeded bun, layered with melted cheese, fresh lettuce, onions, creamy mayo. A true Stackers favourite.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'Zing Stack',
    price: '£7.45',
    description: 'Our signature zinger burger with a bold spicy kick, layered in a soft bun, mayo, fresh onions, and crunchy lettuce. Because bland just isn’t your thing!',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'Peri-Peri Chicken Stack',
    price: '£7.45',
    description: 'Tender grilled peri-peri chicken, melted cheese, peri mayo, crisp lettuce, and fresh onions all stacked in a soft bun for the perfect bite. Grilled to perfection, stacked for satisfaction.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'Stack Veg Titan',
    price: '£8',
    description: 'Grilled halloumi, cheese, golden hash brown, fresh veggie patty, onion rings, mayo, red onions, and fresh lettuce. Crunchy. Cheesy. Legendary.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'Firebird Stack',
    price: '£8.45',
    description: 'Crispy fried chicken meets melted cheese, our signature fire-cracker hot sauce, creamy mayo, topped with fresh lettuce, onions and fiery jalapeños for a kick. All nestled in a toasted bun. Packed with spice and crunch.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'Halloumi Chicken Stack',
    price: '£8.99',
    description: 'Golden crispy fried chicken layered with melted cheese, flame grilled halloumi, tangy Algerian sauce, creamy mayo, fresh lettuce, zesty onions, fiery jalapeños, then crowned with crunchy nachos for the ultimate texture explosion. Engineered for serious taste seekers.',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  }
];

export const smashBurgerItems: MenuItem[] = [
  {
    name: 'Stack Classic',
    price: '£6.45',
    description: 'Premium quality Angus beef, melted cheese, our secret sauce, mayo, onions, gherkins, and fresh lettuce on a soft bun. Simple. Juicy. Iconic.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'BBQ Stack',
    price: '£7.45',
    description: 'Tender Angus beef, melted cheese, BBQ sauce, onions, and fresh lettuce on a soft bun. Smoky, juicy, and irresistible!',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'Double Stack',
    price: '£8.45',
    description: 'Signature Angus beef stacked with cheese, secret sauce, mayo, onions, gherkins, and lettuce in a toasted bun. Twice the beef, double the flavour.',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'Stackzilla',
    price: '£10.45',
    description: 'A towering Angus beef with melted cheese, secret sauce, mayo, onions, gherkins, and lettuce. Massive. Meaty. Unstoppable.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'Fire Stack',
    price: '£10.45',
    description: 'Juicy Angus beef stacked with turkey rashers, crispy hash brown, fiery jalapeños, melted cheese, secret sauce, mayo, onions, gherkins, and lettuce. Crunchy. Spicy. Loaded.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'Stack Titan',
    price: '£10.99',
    description: 'Premium Angus beef, secret seasoning, cheddar, mozzarella, hash brown, two crispy onion rings, turkey rashers, jalapeños, mayo, red onions, gherkins, lettuce, and our secret sauce in a toasted bun. The ultimate flavour stack.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  }
];

export const pizzaItems: MenuItem[] = [
  {
    name: 'Margherita',
    price: '£5.95',
    description: 'Our classic Margherita brings together the perfect harmony of flavors with a rich, house-made tomato base and generous melted mozzarella cheese on our signature crispy crust. Simple, fresh, and absolutely delicious – sometimes the classics are classic for a reason.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Pepperoni Feast',
    price: '£6.95',
    description: 'For the pepperoni lovers who believe more is always better. We load our rich tomato base with double the pepperoni and a generous blanket of melted mozzarella cheese. Every bite delivers that perfect spicy, savory punch that makes this pizza a crowd favorite.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Meat Feast',
    price: '£7.45',
    description: 'Chicken, ham, meatballs, and pepperoni.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'BBQ Sizzlers',
    price: '£7.45',
    description: 'Turn up the heat with our smoky BBQ sauce base loaded with spicy pepperoni and tender chicken pieces, all topped with melted mozzarella cheese. This bold combination brings together tangy BBQ flavors with premium meats for a pizza that packs serious flavour and satisfaction.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Veggie Sizzler',
    price: '£7.45',
    description: 'A vibrant medley of fresh vegetables that brings serious flavour and crunch. Our rich tomato base is topped with juicy tomatoes, earthy mushrooms, colourful peppers, sweet onions, golden sweetcorn, and fiery jalapeños, all finished with melted mozzarella cheese.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Spicy Meatballs',
    price: '£8.45',
    description: 'Bring the heat with our seasoned meatballs smothered in fiery peri-peri sauce, topped with sharp onions and spicy jalapeños, all finished with melted mozzarella cheese.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Peri-Peri Chicken',
    price: '£8.45',
    description: 'Fire up your taste buds with freshly grilled peri-peri chicken paired with colorful peppers, spicy jalapeños, and sharp red onions on our rich tomato base. Topped with melted mozzarella cheese, this fiery combination delivers authentic peri-peri heat with every delicious bite.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Stackers Special',
    price: '£8.95',
    description: 'Our signature pizza that brings together the best of everything. We load our base with zesty pepperoni, seasoned meatballs, and freshly grilled peri-peri chicken, then add sharp onions and colorful peppers, all drizzled with our fiery peri-peri sauce and topped with melted mozzarella cheese. This is our ultimate creation for those who want it all.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
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
    name: 'Peri-Peri Chicken Wrap',
    price: '£6.45',
    description: 'Succulent grilled peri-peri chicken with your choice of lettuce, onions, and smooth mayo.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'Wraps'
  },
  {
    name: 'Fire-cracker Wrap',
    price: '£6.99',
    description: 'Crunchy and crispy fried chicken strips with our signature fire-cracker hot sauce with optional fresh lettuce, & jalapeños.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'Wraps'
  },
  {
    name: 'Grilloumi Stack Wrap',
    price: '£7.45',
    description: 'Grilled halloumi, stacked with lettuce, onions, and mayo. A melt-in-your-mouth vegetarian delight.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'Wraps'
  }
];

export const kidsItems: MenuItem[] = [
  {
    name: 'Kids Chicken Nuggets (2), Mozzarella sticks (2) & Chips',
    price: '3.99',
    description: 'Golden chicken nuggets with mozzarella sticks, crispy chips and a free fruitshoot.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop',
    category: 'Kids'
  },
  {
    name: 'Chicken nuggets (4) & chips',
    price: '£4.95',
    description: 'Golden chicken nuggets (4) served with crispy chips — the perfect mini meal for little Stackers! Comes with a free fruitshoot',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Kids'
  },
  {
    name: 'Gold strips (4) with chips',
    price: '£5.50',
    description: '4 crispy, tender chicken strips served with a side of golden fries — a tasty treat for young Stackers! Comes with a free fruitshoot.',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&h=300&fit=crop',
    category: 'Kids'
  },
  {
    name: 'Kids Burger & Chips',
    price: '£6.50',
    description: 'Mini kids burger with chips and a free fruitshoot.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'Kids'
  }
];

export const sidesItems: MenuItem[] = [
  {
    name: 'Coleslaw',
    price: '£1.50',
    description: 'A refreshing, creamy blend of shredded cabbage, carrots, and a tangy dressing — the perfect cool companion to any Stackers meal.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Chips / Fries',
    price: '£2.25',
    description: 'Golden, crispy fries served hot and perfectly seasoned — the ultimate classic side to stack up your meal.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Peri-Peri Chips',
    price: '£2.75',
    description: 'Crispy golden fries tossed in our fiery peri-peri seasoning — bold, zesty, and packed with flavour for those who like a little heat on the side.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Curly Fries',
    price: '£3.00',
    description: 'Twisted, crispy, and irresistibly fun — our seasoned curly fries bring bold flavour and crunch to every bite. A side with serious taste!',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Cheesy Chips',
    price: '£3.95',
    description: 'Golden fries smothered in rich, melted cheese for the ultimate gooey, savoury indulgence. A comfort food classic done the Stackers way.',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Peri-Peri Curly Fries',
    price: '£4.00',
    description: 'Crispy, seasoned curly fries tossed in fiery Peri-Peri spice—bold, twisty, and packed with flavour in every bite.',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Peri-Peri Cheesy Chips',
    price: '£4.45',
    description: 'Golden fries dusted in zesty Peri-Peri seasoning, smothered in melted cheese for a spicy, gooey, irresistible sidekick to any meal.',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop',
    category: 'Sides'
  }
];

export const drinkItems: MenuItem[] = [
    {
    name: 'Irn Bru Can',
    price: '£1.25',
    description: 'Classic Coca Cola in a 330ml can.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Coca Cola Can',
    price: '£1.25',
    description: 'Classic Coca Cola in a 330ml can.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Sprite Can',
    price: '£1.25',
    description: 'Refreshing lemon-lime soda in a 330ml can.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Fanta Can',
    price: '£1.25',
    description: 'Refreshing lemon-lime soda in a 330ml can.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Rubicon Can',
    price: '£1.25',
    description: 'Refreshing lemon-lime soda in a 330ml can.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Pepsi Can',
    price: '£1.25',
    description: 'Refreshing lemon-lime soda in a 330ml can.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Pepsi Max Can',
    price: '£1.25',
    description: 'Refreshing lemon-lime soda in a 330ml can.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Diet Pepsi Can',
    price: '£1.25',
    description: 'Refreshing lemon-lime soda in a 330ml can.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Water',
    price: '£0.85',
    description: 'Still mineral water.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
    {
    name: 'Irn Bru 1.5L',
    price: '£2.99',
    description: 'Classic Coca Cola in a 1.5L bottle.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Coca Cola 1.5L',
    price: '£2.99',
    description: 'Classic Coca Cola in a 1.5L bottle.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Sprite 1.5L',
    price: '£2.99',
    description: 'Refreshing lemon-lime soda in a 1.5L bottle.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Drinks'
  }
];

export const milkshakeItems: MenuItem[] = [
  {
    name: 'Milkshake',
    price: '£4.20',
    description: 'Creamy milkshake in your choice of flavor and size.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    category: 'Milkshakes'
  }
];

export const iceCreamItems: MenuItem[] = [
  {
    name: 'Ice Cream',
    price: '£2.50',
    description: 'Premium ice cream in your choice of scoops and flavours.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    category: 'Ice Creams'
  }
];

export const sweetStacksItems: MenuItem[] = [
  {
    name: 'Chocolate Waffle',
    price: '£5.99',
    description: 'Warm waffle drizzled with chocolate sauce and fresh berries.',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=300&fit=crop',
    category: 'Sweet Stacks'
  },
  {
    name: 'Strawberry Crepe',
    price: '£6.49',
    description: 'Delicate crepe filled with fresh strawberries and cream.',
    image: 'https://images.unsplash.com/photo-1519915195129-7d93adf4b882?w=400&h=300&fit=crop',
    category: 'Sweet Stacks'
  },
  {
    name: 'Cookie Dough Delight',
    price: '£5.49',
    description: 'Warm cookie dough served with vanilla ice cream.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
    category: 'Sweet Stacks'
  },
  {
    name: 'Premium Ice Cream (2 Scoops)',
    price: '£3.99',
    description: 'Two scoops of premium ice cream in your choice of flavors.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    category: 'Sweet Stacks'
  }
];

export const mealDealsItems: MenuItem[] = [
  {
    name: 'Student Deals',
    price: '£9.99',
    description: 'Flash your valid Student ID in-store and get 15% off your total bill! Perfect for study breaks, post-lecture cravings, or just stacking up on flavour.',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Blue Card Holders',
    price: '£9.99',
    description: 'A small thank you to those who serve our city & community. Police, NHS staff, veterans, firefighters, ambulance crews and other Blue Light Card holders enjoy 15% off your total bill. Valid in-store with proof of service.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Educators’ Appreciation',
    price: '£9.99',
    description: 'To those who shape minds and inspire futures — enjoy 15% off your total bill as a thank you for all you do. Open to teachers, professors, and educators with valid school or university ID. In-store only.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Solo Supreme',
    price: '£10.99',
    description: 'The perfect solo feast that brings together our best fried favorites. Get 4 pieces of our crispy fried chicken and 4 golden chicken strips, served with a generous portion of fries and your choice of canned drink. This hearty combo delivers serious satisfaction when you are craving the ultimate chicken experience all to yourself.',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Party Platter',
    price: '£24.99',
    description: 'The ultimate party platter. Includes 4 pieces of crispy fried chicken, 2 Chicken Stack Classic burgers, 2 golden fries, and 2 chilled cans of juice — perfect for sharing',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Mighty Tower',
    price: '£34.99',
    description: 'Stacked to impress! A feast of Margherita 12” pizza, 6 crispy fried chicken pieces, 6 fiery hot wings, 6 tender chicken strips, Zing Stack burger, Peri-Peri Chicken Stack burger, Peri-Peri Chicken Wrap, Chicken Stack Wrap, 2 golden fries, and a 1.5L drink to wash it all down.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  }
];

export const boxesItems: MenuItem[] = [
  {
    name: 'Burger Bash Box',
    price: '£15.00',
    description: 'A selection of our best burgers in one convenient box.',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Boxes'
  },
  {
    name: 'Fried Gold Box',
    price: '£18.00',
    description: 'Mix of our finest fried items including fish, chicken and sides.',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&h=300&fit=crop',
    category: 'Boxes'
  }
];

export const loadedFriesItems: MenuItem[] = [
  {
    name: "Loaded Stackers' Fries",
    price: '£7.50',
    description: 'Chunks of peri-peri chicken, crispy chicken bites, cheesy sauce and jalapeños.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    category: "Loaded Stackers' Fries"
  }
];

export const pizzaCustomizations = ['Extra Cheese', 'Extra Pepperoni', 'Mushrooms', 'Olives', 'Peppers', 'Pineapple', 'Ham'];

export const milkshakeFlavors = [
  'Oreo', 'Biscoff', 'Strawberry', 'Kinder Bueno', 'White Kinder Bueno', 
  'Malteaser', 'Galaxy Caramel', 'Galaxy', 'Milky bar', 'Banana', 
  'Ferrero Rocher', 'Mango', 'Twix', 'Mars bar', 'Snickers', 'Milky way', 'Crunchie'
];

export const iceCreamFlavors = [
  'Vanilla', 'Strawberry', 'Scottish Tablet', 'Blue Bubblegum', 'Belgian Chocolate',
  'White Bueno', 'Cookies & Cream', 'Raspberry Ripple', 'Chocolate Fudge Brownie',
  'Honeycomb', 'Mint'
];
