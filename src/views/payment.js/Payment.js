import axios from "axios";
import { useState } from "react";
import React from 'react'
import logop from "../../Assets/img/logo.png"
import Swal from 'sweetalert2';
import "./Payment.css";

function Payment() {
  
  const [mpayment,setmpayment] = useState({
    price: 99,
    movie: "Movie",
    mimg: {logop}
  });
  
  const initPayment = (data) => {
    const options = {
      key: process.env.KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: mpayment.movie,
      description: "Pay to Pandit Utkarsh",
      image: mpayment.mimg,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "https://moviebooking-utkarsh.herokuapp.com/api/Payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
          Swal.fire({
            text: 'Your Booking has been Confirmed',
            imageUrl: 'https://cdn.dribbble.com/users/911154/screenshots/3332845/vfmov3.gif',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
          window.location.href = "/";
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  
  
  const handlePayment = async () => {
    try {
      const orderUrl = "https://moviebooking-utkarsh.herokuapp.com/api/Payment/orders";
			const { data } = await axios.post(orderUrl, { amount: mpayment.price});
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <div className='Payment_container'>
    <div id='payment_pay'><button className='pay' onClick={handlePayment}>Pay</button></div>
    </div>
  )
}

export default Payment
