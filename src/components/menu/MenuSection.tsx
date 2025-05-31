
import React from 'react';

interface MenuSectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
  isActive: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({ id, label, children, sectionRef, isActive }) => (
  <section ref={sectionRef} id={id} className="mb-16">
    <div className="text-center mb-12">
      <h2 className={`text-4xl font-bold text-stackers-charcoal mb-2 ${isActive ? 'relative inline-block' : ''}`}>
        {label}
        {isActive && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-stackers-yellow"></div>
        )}
      </h2>
    </div>
    {children}
  </section>
);

export default MenuSection;
