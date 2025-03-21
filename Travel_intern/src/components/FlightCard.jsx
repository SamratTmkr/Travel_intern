import { Box, Button, Card, CardMedia, Typography } from "@mui/material";

const FlightCard = ({ destination, subtitle, price, imagePath }) => {
    return (
      <Card sx={{ 
        width: '100%', 
        height: '100%',
        borderRadius: 2,
        position: 'relative',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}>
        <CardMedia
          component="img"
          height="280"
          image={imagePath}
          alt={`${destination} image`}
          sx={{ filter: 'brightness(0.8)' }}
        />
        
        {/* Text overlay positioned above the button */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 70,
            left: 0,
            width: '100%',
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }}
        >
          <Box>
            <Typography variant="h6" component="div" color="white" fontWeight="bold">
              {destination}
            </Typography>
            <Typography variant="body2" color="white" sx={{ opacity: 0.9 }}>
              {subtitle}
            </Typography>
          </Box>
          <Typography variant="h5" color="white" fontWeight="bold">
            $ {price}
          </Typography>
        </Box>
        
        {/* Button positioned at the bottom of the image */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 0,
            width: '100%',
            px: 2,
          }}
        >
          <Button 
            fullWidth 
            variant="contained" 
            sx={{ 
                color:"black",
              bgcolor: '#4FC3F7', 
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#29B6F6',
              }
            }}
          >
            Book Flight
          </Button>
        </Box>
      </Card>
    );
  };
  export default FlightCard