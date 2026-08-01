import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary','Payment'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);

  const step = querySearch.get("step");
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const previousActiveStepRef = React.useRef(activeStep);
  const resetButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);

  // Manage focus when the active step changes.
  React.useEffect(() => {
    const previousActiveStep = previousActiveStepRef.current;
    previousActiveStepRef.current = activeStep;

    if (activeStep === steps.length) {
      // If the user has completed all steps and hits "Finish", focus the "Reset" button.
      resetButtonRef.current?.focus();
      return;
    }
    if (activeStep === 0 && previousActiveStep === steps.length) {
      // If the user has completed all steps and hits "Reset", focus the "Next" button.
      nextButtonRef.current?.focus();
      return;
    }
  }, [activeStep]);

  return (
    <Box sx={{ width: '100%',padding: 5 }}>
      <Stepper activeStep={step}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
         
        </React.Fragment>
      ) : (
        <React.Fragment>
         
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
          </Box>

          <div className='mt-10'>
            {step == 2?<DeliveryAddressForm/>: <OrderSummary/>}
          </div>
        </React.Fragment>
      )}
    </Box>
  );
}
