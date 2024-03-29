import styled from 'styled-components';


export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: rgb(21,15,15);
  color: #fff;
`;


export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;
export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
`;