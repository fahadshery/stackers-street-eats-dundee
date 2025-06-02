
import React from 'react';
import { Button } from '@/components/ui/button';

interface MenuNavigationProps {
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

const MenuNavigation: React.FC<MenuNavigationProps> = ({ activeSection, onScrollToSection }) => {
  const sectionsLine1 = [
    { id: 'starters', label: 'Starters' },
    { id: 'fried-gold', label: 'Fried Gold' },
    { id: 'smash-burgers', label: 'Smash Burgers' },
    { id: 'chicken-burgers', label: 'Chicken Burgers' },
    { id: 'wraps', label: 'Wraps' },
    { id: 'pizzas', label: 'Pizzas' },
    { id: 'boxes', label: 'Boxes' },
    { id: 'meal-deals', label: 'Meal Deals' }
  ];

  const sectionsLine2 = [
    { id: 'loaded-fries', label: 'Loaded Fries' },
    { id: 'kids', label: 'Kids' },
    { id: 'sides', label: 'Sides' },
    { id: 'sweet-stacks', label: 'Sweet Stacks' },
    { id: 'ice-creams', label: 'Ice Creams' },
    { id: 'milkshakes', label: 'Milkshakes' },
    { id: 'drinks', label: 'Drinks' }
  ];

  return (
    <div className="sticky top-16 bg-white shadow-md z-40">
      <div className="container mx-auto px-4">
        {/* First line */}
        <div className="flex flex-wrap justify-center py-2 space-x-2">
          {sectionsLine1.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              onClick={() => onScrollToSection(section.id)}
              className={`whitespace-nowrap px-3 py-1 text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-stackers-yellow text-stackers-charcoal'
                  : 'text-gray-700 hover:text-stackers-yellow hover:bg-gray-100'
              }`}
            >
              {section.label}
            </Button>
          ))}
        </div>
        
        {/* Second line - removed border-t */}
        <div className="flex flex-wrap justify-center py-2 space-x-2">
          {sectionsLine2.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              onClick={() => onScrollToSection(section.id)}
              className={`whitespace-nowrap px-3 py-1 text-sm font-medium transition-colors ${
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
