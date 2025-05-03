import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Box,Typography,Grid } from '@mui/material'
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
    },
    {
      img: imgConfig.lib1,
      title: 'Doors',
    },
    {
      img: imgConfig.lib2,
      title: 'Doors',
    },
    {
      img: imgConfig.lib3,
      title: 'Doors',
    },
    {
      img: imgConfig.lib4,
      title: 'Doors',
    },
    {
      img: imgConfig.lib5,
      title: 'Doors',
    },
    {
      img: imgConfig.lib6,
      title: 'Doors',
    },
    {
      img: imgConfig.lib7,
      title: 'Doors',
    },
    {
      img: imgConfig.stud1,
      title: 'Doors',
    },
    {
      img: imgConfig.stud2,
      title: 'Doors',
    },
    {
      img: imgConfig.stud4,
      title: 'Doors',
    },
    {
      img: imgConfig.stud5,
      title: 'Doors',
    },
    {
      img: imgConfig.stud6,
      title: 'Doors',
    },
  ];
const GalleryAll = () => {
  return (
    <>
    <Header/>
       <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',height:'20vh'}}>
          <Typography variant="h3" align="center" sx={{color:'#005587',fontWeight:'bold'}}>
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
                height: '200px', 
                objectFit: 'cover', 
                borderRadius: '8px' 
              }}
            />
          </Grid>
        ))}
      </Grid>

      
        </Box>

        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',height:'20vh'}}>
          <Typography variant="h3" align="center" sx={{color:'#005587',fontWeight:'bold'}}>
              Library
          </Typography>
        </Box>

        <Box sx={{ padding: '2rem',backgroundColor:'#f4f4f9' }}>
            <Grid container spacing={4}>
              {itemData.slice(9, 15).map((img, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    component="img"
                    src={img.img}
                    alt={`Gallery ${index}`}
                    sx={{ 
                      width: '100%', 
                      height: '300px', 
                      objectFit: 'cover', 
                      borderRadius: '8px' 
                    }}
                  />
                </Grid>
              ))}
            </Grid>
        </Box>
       
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',height:'20vh'}}>
          <Typography variant="h3" align="center" sx={{color:'#005587',fontWeight:'bold'}}>
              Students
          </Typography>
        </Box>

        <Box sx={{ padding: '2rem',backgroundColor:'#f4f4f9' }}>
            <Grid container spacing={2}>
              {itemData.slice(15, 21).map((img, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    component="img"
                    src={img.img}
                    alt={`Gallery ${index}`}
                    sx={{ 
                      width: '100%', 
                      height: '300px', 
                      objectFit: 'cover', 
                      borderRadius: '8px' 
                    }}
                  />
                </Grid>
              ))}
            </Grid>
        </Box>
    <Footer/>
    
    </>
  )
}

export default GalleryAll