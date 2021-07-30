import React from 'react';
import { Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Link} from 'react-router-dom';

import ProductList from './ProductList';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);



const ConfirmationForm = ({ checkoutToken, nextStep, backStep, data, onCaptureCheckout }) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

      onCaptureCheckout(checkoutToken.id);

      nextStep();
    
  };
  console.log(data)

  return (
    <>
      <ProductList checkoutToken={checkoutToken} data={data} />
      <Divider />
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <CardElement />
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Atras</Button>
              <Button type="submit" component={Link} to ="/listo" variant="contained"  color="primary">Confirmar</Button>
            </div>
          </form>
        )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default ConfirmationForm;