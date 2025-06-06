
import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

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
    { id: 'drinks', label: 'Drinks' },
    { id: 'sauces-and-dips', label: 'Sauces & Dips' }
  ];

  // Combine all sections for mobile single-line layout
  const allSections = [...sectionsLine1, ...sectionsLine2];

  return (
    <div className="sticky top-16 bg-white shadow-md z-40 border-t-0">
      <div className="container mx-auto px-4">
        {/* Mobile: Single scrollable line */}
        <div className="md:hidden py-2">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-2 pb-2">
              {allSections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  onClick={() => onScrollToSection(section.id)}
                  className={`whitespace-nowrap px-3 py-1 text-sm font-medium transition-colors flex-shrink-0 ${
                    activeSection === section.id
                      ? 'bg-stackers-yellow text-stackers-charcoal'
                      : 'text-gray-700 hover:text-stackers-yellow hover:bg-gray-100'
                  }`}
                >
                  {section.label}
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
          
          {/* Second line */}
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
    </div>
  );
};

export default MenuNavigation;
