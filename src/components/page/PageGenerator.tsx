import React from 'react';
import { Hero } from '../Hero';
import { ItemsShowcase } from '../ItemsShowcase';
import { TrustBar } from '../TrustBar';

interface ComponentData {
  type: string;
  props: any;
}

interface SectionData {
  type: string;
  props: {
    backgroundColor: string; 
  };
  components: ComponentData[];
}

interface PageGeneratorProps {
  data: SectionData[];
}

const PageGenerator: React.FC<PageGeneratorProps> = ({ data }) => {
  return (
    <div>
      {data.map((section, index) => (
        <div key={index} className={section.props.backgroundColor}>
          {section.components.map((component, idx) => (
            <div key={idx}>
              {renderComponent(component)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  function renderComponent(component: ComponentData) {
    switch (component.type) {
      case 'componentHero':
        return <Hero {...component.props} />;
      case 'componentItemsShowcase':
        return <ItemsShowcase {...component.props} />;
      case 'componentTrustBar':
        return <TrustBar {...component.props} />;
      default:
        console.warn(`Unsupported component type: ${component.type}`);
        return null;
    }
  }
};

export default PageGenerator;
