import { useNavigate } from 'react-router-dom';
import React from 'react'
import { Grid,Box,Typography,Button,Container } from '@mui/material'
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
// function Gallerysec() {
//   return (
//     <>
//     <Box>
//     <Typography variant="h3" align="center" sx={{ marginBottom: '1.5rem' ,color:'#005587',fontWeight:'bold',height:'20vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
//          Gallery
//       </Typography>
//     </Box>
//     <Box sx={{ padding: '2rem',backgroundColor:'#f4f4f9' }}>
//       {/* <Typography variant="h3" align="center" sx={{ marginBottom: '1.5rem' ,color:'#005587',fontWeight:'bold'}}>
//          Gallery
//       </Typography> */}
      
//       <Grid container spacing={2}>
//         {itemData.slice(0, 8).map((img, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Box
//               component="img"
//               src={img.img}
//               alt={`Gallery ${index}`}
//               sx={{ 
//                 width: '100%', 
//                 height: '175px', 
//                 objectFit: 'cover', 
//                 borderRadius: '8px' 
//               }}
//             />
//           </Grid>
//         ))}
//       </Grid>

//       <Box display="flex" justifyContent="center" sx={{ marginTop: '2rem' }}>
//         <Button 
//           variant="contained" 
//           color="primary" 
//          // onClick={handleGalleryPage}
//           sx={{ textTransform: 'none', padding: '0.75rem 2rem' }}
//         >
//           View Full Gallery
//         </Button>
//       </Box>
//     </Box>
//     </>
//   )
// }


const Gallerysec = () => {
  const navigate = useNavigate();

  const handleViewGallery = () => {
    // Scroll to top before navigation
    window.scrollTo(0, 0);
    navigate('/gallery'); // Ensure you have route setup for GalleryAll component
  };

  return (
    <Box component="section" sx={{ py: 8, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Typography variant="h3" sx={{
          textAlign: 'center',
          mb: 6,
          color: '#1a365d',
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '2.5rem' },
          position: 'relative',
          '&::after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            backgroundColor: '#005587',
            mx: 'auto',
            mt: 3
          }
        }}>
          Gallery
        </Typography>

        {/* Image Grid */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {itemData.slice(0, 8).map((img, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  '& img': {
                    transform: 'scale(1.05)'
                  }
                }
              }}>
                <Box
                  component="img"
                  src={img.img}
                  alt={`Gallery item ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: { xs: '250px', md: '200px' },
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* CTA Button */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleViewGallery}
            sx={{
              backgroundColor: '#005587',
              color: 'white',
              px: 6,
              py: 1.5,
              borderRadius: '8px',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#003d5f',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            View Full Gallery
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
export default Gallerysec