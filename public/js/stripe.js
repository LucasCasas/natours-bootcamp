import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe(
  'pk_test_51Iil3VIzwFzhKF5h8LR1wQZatpn07M2TzfNUKhb070WzIafk1K1QtHNUVGzZe5oPQ8j4bkqZZylJWBjpLMU4Iofu00BzdMsITj'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    console.log(tourId);
    console.log(session);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
