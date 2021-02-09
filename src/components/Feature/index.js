import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Promo del dia</h1>
      <p>
          cuenta regresiva de la promo
      </p>
      <FeatureButton>Pedir Ya</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;