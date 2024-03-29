import React from 'react';
import {Link} from 'react-router-dom';

import {
  HeroContainer,
  HeroContent,
  HeroItems,

  HeroBtn
} from './styles';

const Hero = () => {
  

  return (
    <HeroContainer>
     
      <HeroContent>
        <HeroItems>         
          <Link to="/nosotros">
          <HeroBtn component = {Link} >Acerca de Nosotros</HeroBtn>
          </Link>         
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;