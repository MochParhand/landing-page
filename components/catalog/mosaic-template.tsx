import React from 'react';
import Card from './card';
import { cardsData } from './data';

const MosaicTemplate = () => {
  return (
    <div className="space-y-10">
      {cardsData.map(card => (
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
          badges={card.badges}
          liveDemoUrl={card.liveDemoUrl}
          buyUrl={card.buyUrl}
          images={card.images}
        />
      ))}
    </div>
  );
};

export default MosaicTemplate;
