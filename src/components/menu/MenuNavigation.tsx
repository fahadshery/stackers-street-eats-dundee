
import React from 'react';
import { Button } from '@/components/ui/button';

interface MenuNavigationProps {
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

const MenuNavigation: React.FC<MenuNavigationProps> = ({ activeSection, onScrollToSection }) => {
  const sections = [
    { id: 'starters', label: 'Starters' },
    { id: 'fried-gold', label: 'Fried Gold' },
    { id: 'smash-burgers', label: 'Smash Burgers' },
    { id: 'chicken-burgers', label: 'Chicken Burgers' },
    { id: 'wraps', label: 'Wraps' },
    { id: 'pizzas', label: 'Pizzas' },
    { id: 'boxes', label: 'Boxes' },
    { id: 'meal-deals', label: 'Meal Deals' },
    { id: 'loaded-fries', label: 'Loaded Fries' },
    { id: 'kids', label: 'Kids' },
    { id: 'sides', label: 'Sides' },
    { id: 'sweet-stacks', label: 'Sweet Stacks' },
    { id: 'ice-creams', label: 'Ice Creams' },
    { id: 'milkshakes', label: 'Milkshakes' },
    { id: 'drinks', label: 'Drinks' }
  ];

  return (
    <div className="sticky top-16 bg-white shadow-md z-40 border-b">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-3 space-x-4 scrollbar-hide">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              onClick={() => onScrollToSection(section.id)}
              className={`whitespace-nowrap px-4 py-2 font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-stackers-yellow text-stackers-charcoal'
                  : 'text-gray-700 hover:text-stackers-yellow hover:bg-gray-100'
              }`}
            >
              {section.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuNavigation;
