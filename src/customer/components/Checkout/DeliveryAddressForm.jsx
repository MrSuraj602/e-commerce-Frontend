import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("address");
        const data = new FormData(event.currentTarget);

        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobile: data.get("phoneNumber"),
        };
        console.log("address", address);
    };
    return (
        <div className="flex justify-around">
            <Grid container spacing={4}>
                <Grid
                    size={{ xs: 12, lg: 5 }}
                    className="boarder rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
                >
                    <div className="p-5 py-7 border-b cursor-pointer">
                        <AddressCard />
                        <Button
                            sx={{ mt: 2, bgcolor: "#9155fd" }}
                            size="large"
                            variant="contained"
                        >
                            Deliver Here
                        </Button>
                    </div>
                </Grid>

                <Grid size={{ xs: 12, lg: 7 }}>
                    <Box className="border rounded-s-md shadow-md p-5 w-[calc(100%-2rem)] ml-25">
                        <form onSubmit={handleSubmit} className="space-y-5 ">
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                            </Grid>
                            <Grid size={{ xs: 12 }} className="mt-5">
                                <TextField
                                    required
                                    id="address"
                                    name="address"
                                    label="Address"
                                    fullWidth
                                    autoComplete="given-name"
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }} className="mt-5">
                                <TextField
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    autoComplete="given-name"
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }} className="mt-5">
                                <TextField
                                    required
                                    id="state"
                                    name="state"
                                    label="State/Province/Region"
                                    fullWidth
                                    autoComplete="given-name"
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }} className="mt-5">
                                <TextField
                                    required
                                    id="zip"
                                    name="zip"
                                    label="Zip / Postal Code"
                                    fullWidth
                                    autoComplete="shipping postal-code"
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }} className="mt-5">
                                <TextField
                                    required
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Phone Number"
                                    fullWidth
                                    autoComplete="tel"
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }} className="mt-5">
                                <Button
                                    type="submit"
                                    size="large"
                                    variant="contained"
                                    sx={{ py: 1.5, mt: 2, bgcolor: "#9155fd" }}
                                >
                                    Save Address
                                </Button>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default DeliveryAddressForm;
