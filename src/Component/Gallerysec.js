import React from 'react'
import { Grid,Box,Typography,Button } from '@mui/material'
import { imgConfig } from '../Asset/Images/img.confg'

const itemData = [
    {
      img: imgConfig.img1,
      title: 'Bed',
    },
    {
      img: imgConfig.img2,
      title: 'Books',
    },
    {
      img: imgConfig.img3,
      title: 'Sink',
    },
    {
      img: imgConfig.img4,
      title: 'Kitchen',
    },
    {
      img: imgConfig.img5,
      title: 'Blinds',
    },
    {
      img: imgConfig.img6,
      title: 'Chairs',
    },
    {
      img: imgConfig.img7,
      title: 'Laptop',
    },
    {
      img: imgConfig.img8,
      title: 'Doors',
    }
  ];
function Gallerysec() {
  return (
    <>
    <Box>
    <Typography variant="h3" align="center" sx={{ marginBottom: '1.5rem' ,color:'#005587',fontWeight:'bold',height:'20vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
         Gallery
      </Typography>
    </Box>
    <Box sx={{ padding: '2rem',backgroundColor:'#f4f4f9' }}>
      {/* <Typography variant="h3" align="center" sx={{ marginBottom: '1.5rem' ,color:'#005587',fontWeight:'bold'}}>
         Gallery
      </Typography> */}
      
      <Grid container spacing={2}>
        {itemData.slice(0, 8).map((img, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              component="img"
              src={img.img}
              alt={`Gallery ${index}`}
              sx={{ 
                width: '100%', 
                height: '175px', 
                objectFit: 'cover', 
                borderRadius: '8px' 
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" sx={{ marginTop: '2rem' }}>
        <Button 
          variant="contained" 
          color="primary" 
         // onClick={handleGalleryPage}
          sx={{ textTransform: 'none', padding: '0.75rem 2rem' }}
        >
          View Full Gallery
        </Button>
      </Box>
    </Box>
    </>
  )
}

export default Gallerysec