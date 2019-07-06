import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

const Card = () => {
  return <div style={{ border: '1px #ddd solid', marginTop: '30px', padding: '5px'}}>
    <CardElement/>
  </div>;
};

export default injectStripe(Card);