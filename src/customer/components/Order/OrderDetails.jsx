import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';


const OrderDetails = () => {
    return (
        <div className="px:5 lg:px-20">
            <div>
                <h1 className="font-bold text-xl py-7">Delivery Address</h1>
                <AddressCard />
            </div>
            <div className="py-20">
                <OrderTracker activeStep={3} />
            </div>

            <Grid className="space-y-5 " container>
                {[1,1,1,1].map((item)=><Grid item container className="shadow-xl rounded-md p-5 border w-full " sx={{ alighItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className="flex items-center space-x-4 ">
                            <img 
                            className="w-[5rem] h-[5rem] object-cover object-top"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4j1Puj-Mcet4cRYOjJNhSgiRSUuqIHH8FqwPd4ybBQ&s=10" 
                            alt=""
                             />

                             <div className="ml-5 space-y-2">
                                <p  className="font-semibold ">Men Slim Mid Raise Black Jeans</p>
                                <p className="space-x-5 opacity-50 text-xs font-semibold"><span>Color: pink </span> <span>Size:M</span></p>
                                <p>Seller : Linaria</p>
                                <p>Rs 1099</p>
                             </div>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <Box sx={{color:deepPurple[500]}}>
                            <StarBorderIcon  sx={{fontSize:"2rem"}} className="px-2 text-5xl"></StarBorderIcon>
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid>)}
                
            </Grid>
        </div>
    );
};

export default OrderDetails;
