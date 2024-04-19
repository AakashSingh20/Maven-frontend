import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Context from "./Context/Context";
import { ThemeProvider } from "@material-tailwind/react";
import { ClerkProvider } from '@clerk/clerk-react'


// const PUBLISHABLE_KEY = process.env.REACT_CLERK_PUBLISHABLE_KEY

// if(!PUBLISHABLE_KEY) {
//   throw new Error('REACT_CLERK_PUBLISHABLE_KEY is not set')
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClerkProvider publishableKey="pk_test_c3RpcnJlZC1idWctOTkuY2xlcmsuYWNjb3VudHMuZGV2JA">
    <ThemeProvider>
      <Context>
        <App />
      </Context>
    </ThemeProvider>
  </ClerkProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
