import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Add Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const location = useLocation();

  const querySearch = new URLSearchParams(location.search);

  const step = querySearch.get("step");
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="px-10 lg:px-20 m-10">
      <Box sx={{ width: "100%" }}>
        <div className="hidden md:block">
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
        </div>

        {activeStep === steps.length ? (
          <div className="hidden md:block">
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
            </React.Fragment>
          </div>
        ) : (
          <React.Fragment>
            <div className="hidden md:block">
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </div>
            <div className="mt-10">
              {step == 1 ? (
                <div>Login</div>
              ) : step == 2 ? (
                <DeliveryAddressForm />
              ) : step == 3 ? (
                <OrderSummary />
              ) : (
                <div>Payment</div>
              )}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
