import React, { Suspense, useState } from 'react';
import StripeCheckoutForm from './StripeCheckoutForm';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setFormVisible(true)}>Show Stripe checkout</button>

      {formVisible && (
        <Suspense fallback={<div>loading stripe</div>}>
          <ErrorBoundary errorMessage="could not load stripe">
            <StripeCheckoutForm/>
          </ErrorBoundary>
        </Suspense>
      )}
    </div>
  );
}

export default App;
