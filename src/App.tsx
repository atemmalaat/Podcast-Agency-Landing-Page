import React, { useCallback, useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { LandingPage } from "./LandingPage";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY_LIVE || "pk_test_51S4FhuHK1CRTD6x4xfWGpLLOYoVimGnfahgpAoQ5mWgDP8cDhWexP6xlW81aT5YaeEM87xldIosBYFG7HuxYko6C00QB3bJ5R1");


//Stripe checkout component
const CheckoutForm = () => {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("https://podcast-agency-landing-page-fxf6-git-main-atem-biors-projects.vercel.app/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId: new URLSearchParams(window.location.search).get("priceId") }),
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

//Stripe return component 
const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`https://podcast-agency-landing-page-fxf6-git-main-atem-biors-projects.vercel.app/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === 'open') {
    return (
      <Navigate to="/checkout" />
    )
  }

  if (status === 'complete') {
    return (
      <section
        id="success"
        style={{
          maxWidth: 400,
          margin: "60px auto",
          padding: "32px",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          background: "#F8FAFC", // Updated to match landing page theme
          textAlign: "center",
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          style={{ marginBottom: 16 }}
        >
          <circle cx="12" cy="12" r="12" fill="#2563EB" /> {/* Primary theme color */}
          <path
            d="M7 13l3 3 7-7"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 style={{ color: "#2563EB", marginBottom: 12 }}>Payment Successful!</h2> {/* Primary theme color */}
        <p style={{ marginBottom: 16 }}>
          Thank you for your business! A confirmation email will be sent to <b>{customerEmail}</b>.
        </p>
        <p style={{ fontSize: "0.95em", color: "#334155", marginBottom: 24 }}> {/* Neutral theme color */}
          Please do <b>not</b> press your browser's back button.<br />
          If you have any questions, email <a href="mailto:orders@example.com" style={{ color: "#2563EB" }}>orders@example.com</a>. {/* Primary theme color */}
        </p>
        <button
          style={{
            padding: "10px 24px",
            borderRadius: "8px",
            border: "none",
            background: "#2563EB", // Primary theme color
            color: "#fff",
            fontWeight: 600,
            fontSize: "1em",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onClick={() => window.location.href = "/"}
        >
          Back to Home
        </button>
      </section>
    );
  }

  return null;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/return" element={<Return />} />
      </Routes>
    </Router>
  );
}
