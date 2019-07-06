import { unstable_createResource } from './vendor/react-cache';

const stripeResource = unstable_createResource(() => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.async = true;
    script.onload = () => {
      resolve(window.Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh'));
    };
    script.onerror = () => {
      reject('could not load stripe');
    };
    document.body.appendChild(script);
  });
});

export default stripeResource;