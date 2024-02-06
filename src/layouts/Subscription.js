import React from 'react'
import {loadStripe} from '@stripe/stripe-js';

const Subscription = () => {

    const makePayment = async()=>{
        const stripe = await loadStripe("pk_test_51OWB0bSHIT7HwH4CJUTKLyX0jSKROMDYIdXLeWrmglyjoTQX5iuZQejxk4M8LLCPP7ndSYu2PoBGud15lZGHOwFM00tWmIclPa");

        const body = {
           amount:1000
        }

        const headers = {
            "Content-Type":"application/json"
        }

        const response = await fetch("http://localhost:4000/stripe/create-checkout-session",{
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
        });

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        });
        
        if(result.error){
            console.log(result.error);
        }
    }

  return (
    <>
        <div>
            UI
        </div>
        <button
            onClick={makePayment}
        >Subscribe</button>
    </>
  )
}

export default Subscription