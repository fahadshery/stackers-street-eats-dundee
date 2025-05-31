
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
    name: 'Jalapeños Poppers (6)',
    price: '£4.25',
    description: 'Spicy jalapeños filled with creamy cheese, lightly crumbed and fried for a fiery bite.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop',
    category: 'Starters'
  },
  {
    name: 'Garlic Bread (4)',
    price: '£3.25',
    description: 'Simple, soft, and satisfying.',
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
    description: 'Thick-cut halloumi slices grilled with a golden char — salty, savoury and satisfying.',
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
    name: 'Fish & Chips',
    price: '£6.99',
    description: 'Fresh cod in crispy batter served with golden chips and mushy peas.',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Battered Sausage & Chips',
    price: '£5.49',
    description: 'Premium pork sausage in crispy batter with chips.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Scampi & Chips',
    price: '£6.49',
    description: 'Wholetail breaded scampi with chips and tartare sauce.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  },
  {
    name: 'Pie & Chips',
    price: '£5.99',
    description: 'Traditional steak and kidney pie served with chips and gravy.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'Fried Gold'
  }
];

export const chickenBurgerItems: MenuItem[] = [
  {
    name: 'Classic Chicken Burger',
    price: '£6.99',
    description: 'Crispy chicken breast with lettuce, tomato and mayo in a brioche bun.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'Spicy Chicken Burger',
    price: '£7.49',
    description: 'Spicy chicken breast with jalapeños, cheese and chipotle mayo.',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'BBQ Chicken Burger',
    price: '£7.99',
    description: 'Grilled chicken with BBQ sauce, crispy bacon and onion rings.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  },
  {
    name: 'Buffalo Chicken Burger',
    price: '£7.99',
    description: 'Buffalo chicken with blue cheese sauce and crispy lettuce.',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Chicken Burgers'
  }
];

export const smashBurgerItems: MenuItem[] = [
  {
    name: 'Classic Smash Burger',
    price: '£5.99',
    description: 'Double smashed beef patties with cheese, pickles and special sauce.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'Double Smash Burger',
    price: '£7.99',
    description: 'Four smashed patties with double cheese and all the fixings.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'Bacon Smash Burger',
    price: '£6.99',
    description: 'Smashed patties with crispy bacon, cheese and onions.',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  },
  {
    name: 'BBQ Bacon Smash',
    price: '£7.49',
    description: 'Smashed beef with BBQ sauce, bacon and onion rings.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Smash Burgers'
  }
];

export const pizzaItems: MenuItem[] = [
  {
    name: 'Margherita Pizza',
    price: '£8.99',
    description: 'Classic pizza with tomato sauce, fresh mozzarella and basil.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Pepperoni Pizza',
    price: '£9.99',
    description: 'Traditional pepperoni pizza with mozzarella cheese.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'BBQ Chicken Pizza',
    price: '£10.99',
    description: 'BBQ sauce base with grilled chicken, red onions and peppers.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Pizzas'
  },
  {
    name: 'Meat Feast Pizza',
    price: '£11.99',
    description: 'Loaded with pepperoni, sausage, ham and bacon.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    category: 'Pizzas'
  }
];

export const wrapItems: MenuItem[] = [
  {
    name: 'Chicken Caesar Wrap',
    price: '£5.99',
    description: 'Grilled chicken with romaine lettuce, parmesan and caesar dressing.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Wraps'
  },
  {
    name: 'Buffalo Chicken Wrap',
    price: '£6.49',
    description: 'Spicy buffalo chicken with lettuce, tomatoes and ranch dressing.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'Wraps'
  },
  {
    name: 'Veggie Wrap',
    price: '£5.49',
    description: 'Fresh vegetables with hummus and mixed greens.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Wraps'
  },
  {
    name: 'BLT Wrap',
    price: '£5.49',
    description: 'Crispy bacon, lettuce, tomato and mayo in a flour tortilla.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'Wraps'
  }
];

export const kidsItems: MenuItem[] = [
  {
    name: 'Kids Chicken Nuggets & Chips',
    price: '£4.99',
    description: 'Golden chicken nuggets with crispy chips and beans.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop',
    category: 'Kids'
  },
  {
    name: 'Kids Fish Fingers & Chips',
    price: '£4.99',
    description: 'Crispy fish fingers with chips and peas.',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&h=300&fit=crop',
    category: 'Kids'
  },
  {
    name: 'Kids Burger & Chips',
    price: '£5.49',
    description: 'Mini beef burger with cheese and chips.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'Kids'
  },
  {
    name: 'Kids Pizza Slice & Chips',
    price: '£4.99',
    description: 'Margherita pizza slice with crispy chips.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Kids'
  }
];

export const sidesItems: MenuItem[] = [
  {
    name: 'Chips',
    price: '£2.99',
    description: 'Golden crispy chips seasoned with sea salt.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Cheesy Chips',
    price: '£3.49',
    description: 'Crispy chips topped with melted cheese.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Loaded Fries',
    price: '£4.99',
    description: 'Chips loaded with cheese, bacon and sour cream.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    category: 'Sides'
  },
  {
    name: 'Onion Rings',
    price: '£3.49',
    description: 'Crispy beer-battered onion rings.',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop',
    category: 'Sides'
  }
];

export const drinkItems: MenuItem[] = [
  {
    name: 'Coca Cola Can',
    price: '£1.25',
    description: 'Classic Coca Cola in a 330ml can.',
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
    name: 'Sprite Can',
    price: '£1.25',
    description: 'Refreshing lemon-lime soda in a 330ml can.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Sprite 1.5L',
    price: '£2.99',
    description: 'Refreshing lemon-lime soda in a 1.5L bottle.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Orange Juice',
    price: '£2.49',
    description: 'Fresh squeezed orange juice.',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop',
    category: 'Drinks'
  },
  {
    name: 'Water',
    price: '£1.49',
    description: 'Still mineral water.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop',
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
    description: 'Premium ice cream in your choice of scoops and flavors.',
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
    description: 'Special discounted meals for students with valid ID.',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Blue Card Holders',
    price: '£8.99',
    description: 'Exclusive deals for blue card holders.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Deals for Educators',
    price: '£10.99',
    description: 'Special pricing for teachers and education professionals.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Solo Supreme',
    price: '£12.99',
    description: 'Perfect individual meal with burger, sides and drink.',
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Party Platter',
    price: '£29.99',
    description: 'Large sharing platter perfect for groups and parties.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
    category: 'Meal Deals'
  },
  {
    name: 'Mighty Tower',
    price: '£15.99',
    description: 'Towering burger stack with multiple patties and sides.',
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
