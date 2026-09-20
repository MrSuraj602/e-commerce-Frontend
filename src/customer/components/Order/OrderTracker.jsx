import React from 'react';

const steps = [
  'Placed',
  'Order Confirmed',
  'Shipped',
  'Out For Delivery',
  'Delivered',
];

const OrderTracker = ({ activeStep = 0 }) => {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="relative flex items-center justify-between gap-3">
        <div className="absolute left-0 right-0 top-5 h-[2px] bg-gray-200" />

        {steps.map((label, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;

          return (
            <div key={label} className="relative z-10 flex w-1/5 flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold ${
                  isActive
                    ? 'border-blue-500 bg-blue-500 text-white shadow-md'
                    : isCompleted
                    ? 'border-green-500 bg-green-500 text-white'
                    : 'border-gray-300 bg-gray-200 text-gray-500'
                }`}
              >
                {isCompleted ? '✓' : index + 1}
              </div>
              <span className={`mt-3 text-center text-sm ${isActive ? 'text-gray-700' : 'text-gray-400'}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTracker;