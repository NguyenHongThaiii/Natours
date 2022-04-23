/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe(
  'pk_test_51KrfqiE5ecQMTu1W4dj3DWhfCL8zvboK7dRDJqfaPVMVOsimIWjYnezrMYWplQocBrrpaMXnzPYPdqo7YmmeP37s00aKRaRJil'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
    // 2) Create checkout form + chanre credit card
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
