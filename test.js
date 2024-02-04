import Paypal from "./index.js";
const paypalClient = new Paypal({
  appid: "APP-80W284485P519543T",
  secret: "secret",
  mode: "sandbox",
});
paypalClient.payment.createPayment({ amount: Math.floor(Math.random() * 101) });
paypalClient.payment.showPayment({ amount: Math.floor(Math.random() * 101) });
paypalClient.order.createOrder({ amount: Math.floor(Math.random() * 101) });
paypalClient.order.showOrder({ amount: Math.floor(Math.random() * 101) });
