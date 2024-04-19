import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import URL from "../utils/API_URL";

const Subscription = () => {
  const makePayment = async (amount) => {
    try {
      const stripe = await loadStripe(
        "pk_test_51P7FcvClJ4Spjkvvsmk42zMvm4EcJCiVumvotpawWZHnpz1nbeYTnErjv2O4AODSbwwXLUBT9k1VPSvvCWGJ1o1m00ODqgC4kp"
      );

      const body = {
        amount: amount,
      };

      const headers = {
        "Content-Type": "application/json",
      };

      const response = await fetch(`${URL}/stripe/create-checkout-session`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      const session = await response.json();

      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });

      console.log(result);

    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again later.");
    }
  };

  const priceInfo = [
    {
      title: "Start",
      price: "FREE",
      features: ["10 deploys per day", "10 GB of storage", "20 domains"],
      footer: "Sed ut unde omnis iste natus accusantium doloremque.",
      button: "Start for free",
    },
    {
      title: "Pro",
      price: "200",
      features: ["200 deploys per day", "80 GB of storage", "Global CDN"],
      footer: "Sed ut unde omnis iste natus accusantium doloremque.",
      button: "Buy Pro",
    },
    {
      title: "Business",
      price: "400",
      features: ["500 GB of storage", "Unlimited domains", "24/7 Support"],
      footer: "Sed ut unde omnis iste natus accusantium doloremque.",
      button: "Buy Business",
    },
  ];

  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Our Pricing
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Transparent</span>
            </span>{" "}
            pricing. Pay as you grow.
          </h2>
        </div>
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
          {priceInfo.map((price, index) => (
            <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow ">
              <div className="text-center">
                <div className="text-lg font-semibold">{price.title}</div>
                <div className="flex items-center justify-center mt-2">
                  <div className="mr-1 text-5xl font-bold">{price.price}</div>
                </div>
                <div className="mt-2 space-y-3">
                  {price.features.map((feature, index) => (
                    <div key={index} className="text-gray-700">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <button onClick={() => makePayment(price.price)}>
                  <a className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
                    {price.button}
                  </a>
                </button>
                <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                  {price.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Subscription;
