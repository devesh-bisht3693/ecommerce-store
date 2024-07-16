import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div className="flex text-left">
      <Grid item xs={1}>
        <Box>
          <Avatar
            className="text-white"
            sx={{ width: 45, height: 45, bgcolor: "#9155fd" }}
          >
            R
          </Avatar>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <div className="space-y-2">
          <div>
            <p className="font-semibold text-lg">Ram</p>
            <p className="opacity-70">June 5, 2024</p>
          </div>
        </div>
        <Rating
          name="half-rating-read"
          defaultValue={3.5}
          precision={0.5}
          readOnly
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
