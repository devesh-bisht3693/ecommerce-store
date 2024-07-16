import { Grid } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <div>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70"
              alt=""
              className="w-[5rem] h-[5rem] object-cover object-top"
            />
            <div className="ml-5 space-y-2">
                <p>Men Printed Cotton Blend Straight Kurta</p>
                <p className="opacity-50 text-xs font-semibold">Size: M</p>
                <p className="opacity-50 text-xs font-semibold">Color: Blue</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
