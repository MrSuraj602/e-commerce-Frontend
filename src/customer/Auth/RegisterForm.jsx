import { Button, Grid, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, register } from '../../State/Auth/Action';

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store);

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }
    
  },[dispatch,jwt,auth.jwt]) 


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here

    const data = new FormData(event.currentTarget);
    const userData = {
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      email:data.get("email"),
      password:data.get("password")
    }
    dispatch(register(userData))
    console.log("userdata" , userData)
  }

  return (
    <div
      style={{
        padding: '0.25rem',
        backgroundColor: '#ffffff',
      }}
    >
      <form onSubmit={handleSubmit} >
        <Grid container spacing={2.25} sx={{ width: '100%' }}>
          <Grid size={{ xs: 12, sm: 12 }} sx={{ width: '100%' }}>
            <TextField 
            required
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            autoComplete="given-name" 
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                backgroundColor: '#fafafa',
              },
            }}
            />
          </Grid>
          
           <Grid size={{ xs: 12, sm: 12 }} sx={{ width: '100%' }}>
            <TextField 
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            autoComplete="family-name" 
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                backgroundColor: '#fafafa',
              },
            }}
            />
          </Grid>

           <Grid size={{ xs: 12 }} sx={{ width: '100%' }}>
            <TextField 
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email" 
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                backgroundColor: '#fafafa',
              },
            }}
            />
          </Grid>

           <Grid size={{ xs: 12 }} sx={{ width: '100%' }}>
            <TextField 
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="new-password" 
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                backgroundColor: '#fafafa',
              },
            }}
            />
          </Grid>
          
        </Grid>
         <Grid size={{ xs: 12, sm: 12 }} sx={{ mt: 2 }}>
            <Button 
            className="bg-[#9155FD] w-full"
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              padding: '.8rem 0',
              bgcolor: '#9155FD',
              borderRadius: '10px',
              fontWeight: 700,
              textTransform: 'none',
              boxShadow: '0 8px 18px rgba(145, 85, 253, 0.24)',
              '&:hover': {
                bgcolor: '#7b45dc',
                boxShadow: '0 10px 22px rgba(145, 85, 253, 0.3)',
              },
            }}
            >
              Register
            </Button>
          </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
      <div className="py-3 flex items-center">
        <p>if you have already account ?</p>
        <Button onClick={()=>navigate("/login")} className="ml-5" size="small">Login</Button>
      </div>
    </div>
    </div>

    
  )
}

export default RegisterForm