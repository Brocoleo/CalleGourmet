import styled from 'styled-components';
import ImgBg from '../../assets/img/eventos.png';

export const HeroContainer = styled.div`
    background: url(${ImgBg});
    height: 1188;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #221e1e;
`;

export const HeroContent = styled.div`
  height: 100%;
  max-height: 100%;

`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(3rem, 9vw, 5rem);
  margin-bottom: 1rem;
  letter-spacing: 2px;
`;

export const HeroH2 = styled.h2`
  color: #e9ba23; 
  font-size: clamp(3rem, 9vw, 5rem);
  margin-bottom: 1rem;
  letter-spacing: 2px;

`;
export const HeroP = styled.p`
  font-size: clamp(1rem, 1.5vw, 2rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;