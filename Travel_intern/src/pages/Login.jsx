import { Box, Button, Grid2, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <>
      <Grid2 container margin={'auto'} p={5} bgcolor={'yellow'} width={'100%'}>
        <Grid2 item size={{ xs: 12, md: 6 }} p={5} width={'512px'}>
          <Box width={'512px'} gap={'16px'} >
            <Typography variant='h3' color='secondary'>Login</Typography>
            <Typography variant='subtitle2' color='secondary'>Login to acess your golobe account.</Typography>
          </Box>

          <Box width={'512px'}>
            <Grid2 item size={{ xs: 12, md: 12 }}  >
              <TextField fullWidth placeholder='Enter Email' label='Email' variant='outlined'sx={{mb:'24px'}} />
              <TextField fullWidth placeholder='Enter Password' label='Password' variant='outlined' />
            <Typography variant='subtitle2' color='secondary' sx={{textAlign:'right' , mt:'16px'}}>Forget Password</Typography>
            </Grid2>
          <Button variant='outlined' fullWidth sx={{marginTop:'5px'}} >Submit</Button> 
          <Typography variant='subtitle2' color='secondary' sx={{textAlign:'center' , mt:'16px'}}>Don't have an account? Sign Up</Typography>

          </Box>

        </Grid2>


      </Grid2>
    </>
  )
}

export default Login