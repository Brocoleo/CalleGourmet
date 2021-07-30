import React from 'react'; 
import Order from './Order/Order';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
} from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';



const Products = ({ heading, products }) => {

 
    
    return (
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          { !products.length ? <CircularProgress color="secondary" />
            : products.map((product, i) => (
              <Box p={1} >
                <Order key={i}/>  
              </Box>          
          ))    
          }
        </ProductWrapper>
      </ProductsContainer>
    );
  };

export default Products;