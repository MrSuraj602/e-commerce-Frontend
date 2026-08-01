import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
const OrderCard = () => {
    return (
        <div className="p-5 shadow-lg shadow-gray hover:shadow-2xl ">
            <Grid container spacing={2} sx={{ width:[1100], justifyContent: "space-around",border: "1px solid #e5e7eb", p: 2, borderRadius: 2 }}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer ">
                        <img
                            className="w-[5rem] h-[5rem] object-cover object-top"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60O2hNRrpjGqozeVEoVEroO12Sqg5vaulcUOVDh_xGA&s=10"
                            alt=""
                        />

                        <div className="ml-5 space-y-2">
                            <p className="text-lg font-bold">Title the is best seller</p>
                            <p className="opacity-50 text-xs font-semibold">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold">Color : Black</p>
                        </div>
                    </div>

                  
                </Grid>
                  <Grid item xs={2}>
                        <p>Rs 1099</p>
                    </Grid>
                    <Grid item xs={4}>
                       { true && <div> <p>
                        <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                            <span>
                                Delivered on Jan 12th
                            </span>
                            
                        </p>
                        <p className="text-xs">Your Item Has Been Delivered</p>
                        </div>
                      }
                       {false && <p>
                            <span>
                                Expencted Delivery on Jan 12th
                            </span>
                        </p>}
                    </Grid>
            </Grid>
            
        </div>
    );
};

export default OrderCard;
