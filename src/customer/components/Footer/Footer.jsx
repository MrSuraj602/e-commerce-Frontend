import { Button, Grid, Typography } from "@mui/material";
function Footer() {
  return (
    <div className="">
      <Grid
        className="flex justify-around bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Make Money with Us
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Sell online
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Protect and Build Your Brand
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Become an Affiliate
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Advertise Your Products
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              	
Let Us Help You
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
            Your Account
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Returns Centre
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Recalls and Product Safety Alerts
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              100% Purchase Protection
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Shop
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Sarees
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Lehenga Choli
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Salwar Kameez
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
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
