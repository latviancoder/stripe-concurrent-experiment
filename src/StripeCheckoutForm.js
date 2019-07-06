import React from 'react';
import {StripeProvider, Elements} from 'react-stripe-elements';

import stripeResource from './stripeResource';
import Card from './Card';

export default function StripeCheckoutForm() {
  const stripe = stripeResource.read();

  return <StripeProvider stripe={stripe}>
    <Elements>
      <Card/>
    </Elements>
  </StripeProvider>;
}