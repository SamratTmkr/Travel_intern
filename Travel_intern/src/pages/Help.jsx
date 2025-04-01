import React from 'react'
import { Telegram } from "@mui/icons-material";
import Help_image from "../assets/help_img.png"
import { Button, Container, Typography, Grid } from '@mui/material';

const Help = () => {
  return (
    <>
    <div>
    <Container className='mt-20 relative h-[calc(100vh - 122px)]'>
        <Typography variant='h2' 
        sx={{
            textAlign:"center",
            fontSize: { xs: '20px', sm: '28px'},
            mb:"8px"
        }}
        >Asked Any Question Any Time </Typography>
      <div className='w-full h-full'>
        <img src={Help_image} alt="Help image" width="100%" height="100%" className='rounded-xl'/>
      </div>
      <div className='absolute bottom-[-42px] w-full h-52 flex items-center justify-between sm:px-4 md:px-20 '>
        <Grid 
          container 
          sx={{
            justifyContent: 'space-between', 
            alignItems: 'center',
            px: { xs: 2, sm: 5, md: 10 },
            flexDirection: { xs: 'column', sm: 'row' },
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
            borderRadius: '10px',
            boxShadow: '0px 2px 16px rgba(255, 255, 255, 0.6)', // White drop shadow effect
            padding: '20px',
          }}
        >
          <Grid item xs={12} sm={6}>
            <Button sx={{ 
              color: 'white', 
              fontSize: { xs: '12px', sm: '16px', md: '18px' },
              my:{xs:"10px"}
            }}>
              Ask me Anything
            </Button>
            <Typography 
              variant='h2' 
              sx={{
                color: 'white', 
                fontSize: { xs: '20px', sm: '28px', md: '32px' },
                my:{xs:"5px"}
              }}
            >
              I'm OLIVIA
            </Typography>
            <Typography variant='body1' sx={{
              color: 'white', 
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              my:{xs:"7px"}
            }}>
              Your personal AI travel assistant
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            <Button sx={{
              color: 'white', 
              fontSize: { xs: '12px', sm: '16px', md: '18px' },
            }}>
              Start chat now
            </Button>
            <Telegram sx={{
              width: { xs: '40px', sm: '50px', md: '70px' },
              height: { xs: '40px', sm: '50px', md: '70px' },
              backgroundColor: "blue",
              borderRadius: "50%",
              padding: "2px 4px",
              marginLeft: "10px",
              color: "white",
            }} />
          </Grid>
        </Grid>
      </div>
    </Container>
    </div>
    </>
  );
}

export default Help;
