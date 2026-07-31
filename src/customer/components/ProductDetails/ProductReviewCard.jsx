import { Avatar, Box, Grid, Rating } from '@mui/material';
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className="text-white sx={{width: 56, height: 56}}" style={{backgroundColor: '#3f51b5'}}>
                        R
                    </Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
               <div className="space-y-2">
                    <div>
                        <p className="font-semibold text-lg">Rahul</p>
                    <p className="opacity-70">April 15, 2026</p>
                    
                    </div>
                </div>

                <Rating value={3.5} name="half-rating" readOnly precision={0.5}></Rating>
                <p className="text-gray-600">
                    This is a great product. 
                    I really liked it and would recommend it to others.
                    
                    </p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard