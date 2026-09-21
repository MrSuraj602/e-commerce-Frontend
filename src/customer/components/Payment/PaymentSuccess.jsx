import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';
import { updatePayment } from '../../../State/Payment/Action';
import OrderTracker from '../Order/OrderTracker';
import AddressCard from '../AddressCard/AddressCard';
import { Alert, AlertTitle } from '@mui/material';


const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState();
    const [referenceId, setReferenceId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const {orderId} = useParams(); 
    
    const dispatch = useDispatch();
    const {order} = useSelector((state) => state.order);

    console.log("order -- - ",order);
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setPaymentId(urlParams.get('razorpay_payment_id'));
        setPaymentStatus(urlParams.get('razorpay_payment_link_status'));
    },[])

    useEffect(() => {
        if(paymentId){
             const data = {orderId,paymentId}
        dispatch(getOrderById(orderId));
        dispatch(updatePayment(data));
        }
       
    },[orderId,paymentId])

  return (
    <div className='px-2 lg:px-36'>
        <div className="flex flex-col justify-center items-center">

            <Alert
            variant="filled"
            severity="success"
            sx={{ width: "fit-content", mb: 6 }}
            >
                <AlertTitle>Payment Successful</AlertTitle>
                Congratulations! Your Order Get Placed Successfully.
            </Alert>
        </div>

        <OrderTracker activeStep={1} />

        <div className="mt-12 w-full rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            {order?.orderItems?.map((item, index) => (
                <div key={index} className="flex w-full items-center justify-between gap-6 border-b border-gray-200 py-5 last:border-b-0 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-5">
                        <img
                            className="h-20 w-20 rounded-md bg-gray-100 object-cover object-top"
                            src="https://rukmini1.flixcart.com/image/1500/1500/xif0q/shirt/m/g/h/s-jio-casual-shirt-webric-original-imahdjfu4xg2abxr.jpeg?q=70"
                            alt="product"
                        />

                        <div className="space-y-1 text-gray-700">
                            <p className="text-lg font-medium">{item.product.title}</p>
                            <div className="flex gap-5 text-sm text-gray-500">
                                <span>Color: {item.color}</span>
                                <span>Size: {item.size}</span>
                            </div>
                            <p className="text-sm text-gray-500">Seller : {item.product.brand}</p>
                            <p className="text-base font-semibold text-gray-800">₹ {item.price}</p>
                        </div>
                    </div>

                    <div className="min-w-[220px]">
                        <AddressCard address={order?.shippingAddress} />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PaymentSuccess