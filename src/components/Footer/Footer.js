import React from 'react';
import {
  FaInstagram,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
    
          <SocialMediaWrap>
            <SocialLogo to='/'>La Calle Gourmet </SocialLogo>
            <SocialIcons>
            
              <SocialIconLink href='https://www.instagram.com/la.callegourmet/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
             
              
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;