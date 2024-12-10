import React, { useState, useEffect } from "react";
import axios from "axios";

const MainPage = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.post("/api/getPaymentMethods")
      .then((response) => {
        if (response.data.paymentMethods) {
          setPaymentMethods(response.data.paymentMethods);
        } else {
          alert("No payment methods available.");
        }
      })
      .catch((err) => {
        console.error("Error fetching payment methods:", err);
      });
  }, []);

  const handlePayment = () => {
    if (!selectedMethod) {
      alert("Please select a payment method.");
      return;
    }

    setLoading(true);

    // Initiate the payment process
    axios.post("/api/initiatePayment", { paymentMethod: { type: selectedMethod } })
      .then((response) => {
        setLoading(false);
        setPaymentStatus(`Payment Status: ${response.data.resultCode}`);
      })
      .catch((err) => {
        setLoading(false);
        setPaymentStatus(`Error: ${err.response?.data || err.message}`);
      });
  };

  return (
    <div className="container">
      <h1>Payment Page</h1>

      {/* Payment Method Selector */}
      <div id="payment-methods">
        <h3>Select Payment Method</h3>
        <select
          id="payment-method-selector"
          value={selectedMethod}
          onChange={(e) => setSelectedMethod(e.target.value)}
        >
          <option value="">Select a payment method</option>
          {paymentMethods.map((method) => (
            <option key={method.type} value={method.type}>{method.name}</option>
          ))}
        </select>
      </div>

      {/* Payment Form */}
      {selectedMethod && (
        <div id="payment-form">
          <h3>Payment Details</h3>
          <button
            id="pay-button"
            onClick={handlePayment}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      )}

      {/* Payment Result */}
      {paymentStatus && (
        <div id="result">
          <h3>Payment Result</h3>
          <div id="result-message">{paymentStatus}</div>
          <a href="/" className="btn">Go back</a>
        </div>
      )}
    </div>
  );
};

export default MainPage;
