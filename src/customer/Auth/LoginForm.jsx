import { Button, Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../State/Auth/Action';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here

    const data = new FormData(event.currentTarget);
    const userData = {
      email:data.get("email"),
      password:data.get("password")
    }
    dispatch(login(userData))
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
          

           <Grid item xs={12} sx={{ width: '100%' }}>
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

           <Grid item xs={12} sx={{ width: '100%' }}>
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
         <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
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
              Login
            </Button>
          </Grid>
      </form>

            <div className="flex justify-center flex-col items-center">
      <div className="py-3 flex items-center">
        <p>if you don't have account ?</p>
        <Button onClick={()=>navigate("/register")} className="ml-5" size="small">Register</Button>
      </div>
    </div>
    </div>
  )
}

export default LoginForm