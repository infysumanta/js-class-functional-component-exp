// Paypal.js
import { createPayment, showPayment } from "./payment.js";
import { createOrder, showOrder } from "./order.js";
import getToken from "./token.js";

class Paypal {
  constructor({ appid, secret, mode }) {
    this.appid = appid;
    this.secret = secret;
    this.mode = mode;

    // Bind methods to the instance to make sure they have the correct 'this'
    this.payment = {
      v1: {
        /**
         * @deprecated Use newFunction() instead.
         * @param {string} param - The parameter for the deprecated function.
         * @returns {string} - The result of the deprecated function.
         */
        createPayment: (data) => createPayment(data, this.getToken()),
      },
      createPayment: (data) => createPayment(data, this.getToken()),
      showPayment: (data) => showPayment(data, this.getToken()),
    };

    this.order = {
      createOrder: (data) => createOrder(data, this.getToken()),
      showOrder: (data) => showOrder(data, this.getToken()),
    };
  }

  // Private function to get the token with appid, secret, and mode
  getToken() {
    return getToken(this.appid, this.secret, this.mode);
  }
}

export default Paypal;
