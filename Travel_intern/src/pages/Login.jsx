import { Apple, FacebookOutlined, Google } from '@mui/icons-material'
import { Box, Button, Divider, Grid2, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import MyCarousel from '../components/Carousel'

const Login = () => {
  return (
    <>
      <Grid2 container margin={'auto'} p={8} bgcolor={'white'} width={'100%'} alignItems={'center'} justifyContent={'center'}>
        <Grid2 item size={{ xs: 12, md: 5 }} p={1}>
          <img src="./logo/logo.png" alt="" className=''/>
          <Box width={'512px'} gap={'16px'} py={5} >
            <Typography variant='h3' color='black'>Login</Typography>
            <Typography variant='subtitle2' className='text-gray-500'>Login to acess your golobe account.</Typography>
          </Box>

          <Box>
            <Grid2 item size={{ xs: 12, md: 12 }}  >
              <TextField fullWidth placeholder='Enter Email' label='Email' variant='outlined' sx={{ mb: '24px' }} />
              <TextField fullWidth placeholder='Enter Password' label='Password' variant='outlined' />
              <Typography variant='subtitle2' color='black' sx={{ textAlign: 'right', mt: '16px' }}>Forget Password</Typography>
            </Grid2>
            <Button variant='outlined' fullWidth sx={{ marginTop: '5px' }} >Submit</Button>
            <Typography variant='subtitle2' color='black' sx={{ textAlign: 'center', mt: '16px' }}>Don't have an account? <span className='text-red-400'>Sign Up</span></Typography>

          </Box>
          <Divider textAlign='center' fullWidth sx={{ my: '16px' }}>
            Or login with
          </Divider>
          <Stack direction="row" spacing={2} justifyContent={'space-between'} mt={'24px'}>

            <Button variant="outlined" sx={{ px: '48px', py: '16px' }} >
              <FacebookOutlined />
            </Button>
            <Button variant="outlined" sx={{ px: '48px', py: '16px' }}>
              <Google />
            </Button>
            <Button variant="outlined" sx={{ px: '48px', py: '16px' }} color='black'>
              <Apple />
            </Button>
          </Stack>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 5 }} p={5} maxWidth={'500px'}>
        <MyCarousel/>

        </Grid2>


      </Grid2>
    </>
  )
}

export default Login