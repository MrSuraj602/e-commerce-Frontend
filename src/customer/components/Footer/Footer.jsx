import { Button, Grid, Typography } from "@mui/material";
function Footer() {
  return (
    <div className="">
      <Grid
        className="flex justify-around bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Make Money with Us
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Sell online
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Protect and Build Your Brand
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Become an Affiliate
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Advertise Your Products
            </Button>
          </div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Let Us Help You
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Your Account
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Returns Centre
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Recalls and Product Safety Alerts
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              100% Purchase Protection
            </Button>
          </div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Shop
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Sarees
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Lehenga Choli
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Salwar Kameez
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ mb: 1 }}>
              Gowns
            </Button>
          </div>
        </Grid>


      </Grid>
                 <div className="flex justify-center  bg-black text-white text-center text-sm">
        <Typography className="pb-5">
          © 2023 Your Store. All rights reserved.
        </Typography>
      </div>
   
    </div>
  );
}

export default Footer;
