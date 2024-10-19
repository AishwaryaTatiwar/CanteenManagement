import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./PaymentPage.css";
import QR from "./Images/QRCode.png";
import receipt from "./Receipt";
const PaymentPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); // Initialize useNavigate
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [product] = useState({
    name: "Chhola Samosa",
    price: 10,
    productBy: "Anna",
  });

  // Handle payment method selection
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  // Handle card payment
  const handleCardPayment = async () => {
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod: stripePaymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });

      if (error) {
        console.error("Card payment error:", error);
        alert(error.message);
        return;
      }

      console.log("Card payment method created:", stripePaymentMethod);
      // Redirect to the Receipt component after successful payment
      navigate("/receipt"); // Adjust the path as per your routing setup
    } catch (err) {
      console.error("Error during card payment:", err);
    }
  };

  // Handle UPI payment
  const handleUPIPayment = () => {
    if (!upiId) {
      alert("Please enter a valid UPI ID.");
      return;
    }

    const upiLink = `upi://pay?pa=${upiId}&pn=${product.productBy}&am=${product.price}&cu=INR&tn=Payment for ${product.name}`;
    const androidIntentLink = `intent://pay?pa=${upiId}&pn=${product.productBy}&am=${product.price}&cu=INR&tn=Payment for ${product.name}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;

    // Detect Android device
    const isAndroid = /android/i.test(navigator.userAgent);
    const link = isAndroid ? androidIntentLink : upiLink;

    // Redirect to the payment link
    window.location.href = link;

    // Optionally redirect to the Receipt component after UPI payment
    // Uncomment the line below if you want to redirect regardless of UPI payment success
    // navigate("/receipt");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === "card") {
      handleCardPayment();
    } else if (paymentMethod === "upi") {
      handleUPIPayment();
    } else {
      console.log("Other payment methods are not implemented yet.");
    }
  };

  return (
    <div className="payment-page">
      <h2>Choose Your Payment Method</h2>

      <div className="payment-options">
        <button
          onClick={() => handlePaymentMethodChange("upi")}
          className={`payment-option ${
            paymentMethod === "upi" ? "active" : ""
          }`}
        >
          UPI
        </button>
        <button
          onClick={() => handlePaymentMethodChange("qr")}
          className={`payment-option ${paymentMethod === "qr" ? "active" : ""}`}
        >
          QR Code
        </button>
        <button
          onClick={() => handlePaymentMethodChange("card")}
          className={`payment-option ${
            paymentMethod === "card" ? "active" : ""
          }`}
        >
          Card Payment
        </button>
        <button
          onClick={() => handlePaymentMethodChange("netbanking")}
          className={`payment-option ${
            paymentMethod === "netbanking" ? "active" : ""
          }`}
        >
          Net Banking
        </button>
      </div>

      <form onSubmit={handleSubmit} className="payment-form">
        {/* UPI Payment Section */}
        {paymentMethod === "upi" && (
          <div className="upi-section">
            <label>UPI ID:</label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="Enter UPI ID"
              required
            />
          </div>
        )}

        {/* QR Code Payment Section */}
        {paymentMethod === "qr" && (
          <div className="qr-section">
            <label>Scan QR Code:</label>
            <div className="qr-code-placeholder">
              <img src={QR} alt="QR Code" /> {/* Display the QR Code image */}
            </div>
          </div>
        )}

        {/* Card Payment Section */}
        {paymentMethod === "card" && (
          <div className="card-section">
            <label>Card Details:</label>
            <CardElement
              className="card-element"
              options={{ hidePostalCode: true }}
            />
          </div>
        )}

        {/* Net Banking Payment Section */}
        {paymentMethod === "netbanking" && (
          <div className="netbanking-section">
            <label>Choose Bank:</label>
            <select required>
              <option value="">Select Bank</option>
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
            </select>
          </div>
        )}

        <button type="submit" className="submit-button">
          {paymentMethod === "card" ? "Pay with Card" : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
