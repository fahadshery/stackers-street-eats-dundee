
import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface MenuNavigationProps {
  activeCategory: string;
  onCategorySelect: (category: string) => void;
}

const MenuNavigation: React.FC<MenuNavigationProps> = ({ activeCategory, onCategorySelect }) => {
  const categories = [
    'Starters',
    'Fried Gold',
    'Smash Burgers',
    'Chicken Burgers',
    'Pizzas',
    'Wraps',
    'Kids',
    'Sides',
    'Drinks',
    'Milkshakes',
    'Ice Creams',
    'Sweet Stacks',
    'Meal Deals',
    'Boxes',
    'Loaded Stackers\' Fries',
    'Sauces & Dips'
  ];

  const sectionsLine1 = [
    'Starters',
    'Fried Gold',
    'Smash Burgers',
    'Chicken Burgers',
    'Wraps',
    'Pizzas',
    'Boxes',
    'Meal Deals'
  ];

  const sectionsLine2 = [
    'Loaded Stackers\' Fries',
    'Kids',
    'Sides',
    'Sweet Stacks',
    'Ice Creams',
    'Milkshakes',
    'Drinks',
    'Sauces & Dips'
  ];

  return (
    <div className="sticky top-16 bg-white shadow-md z-40 border-t-0">
      <div className="container mx-auto px-4">
        {/* Mobile: Single scrollable line */}
        <div className="md:hidden py-2">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-2 pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  onClick={() => onCategorySelect(category)}
                  className={`whitespace-nowrap px-3 py-1 text-sm font-medium transition-colors flex-shrink-0 ${
                    activeCategory === category
                      ? 'bg-stackers-yellow text-stackers-charcoal'
                      : 'text-gray-700 hover:text-stackers-yellow hover:bg-gray-100'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Desktop: Two lines as before */}
        <div className="hidden md:block">
          {/* First line */}
          <div className="flex flex-wrap justify-center py-2 space-x-2">
            {sectionsLine1.map((category) => (
              <Button
                key={category}
                variant="ghost"
                onClick={() => onCategorySelect(category)}
                className={`whitespace-nowrap px-3 py-1 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-stackers-yellow text-stackers-charcoal'
                    : 'text-gray-700 hover:text-stackers-yellow hover:bg-gray-100'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Second line */}
          <div className="flex flex-wrap justify-center py-2 space-x-2">
            {sectionsLine2.map((category) => (
              <Button
                key={category}
                variant="ghost"
                onClick={() => onCategorySelect(category)}
                className={`whitespace-nowrap px-3 py-1 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-stackers-yellow text-stackers-charcoal'
                    : 'text-gray-700 hover:text-stackers-yellow hover:bg-gray-100'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuNavigation;
