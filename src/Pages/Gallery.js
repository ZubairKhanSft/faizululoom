import React,{useNavigate} from 'react'
import { Box,Grid ,ImageList,ImageListItem,Typography} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { imgConfig } from '../Asset/Images/img.confg';


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
  const Gallery = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
      <Box sx={{ backgroundColor: '#ffffff' }}>
        {/* Header Section */}
        <Box sx={{
          py: 8,
          textAlign: 'center',
          borderBottom: '3px solid #005587',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
        }}>
          <Typography variant="h2" sx={{
            fontWeight: 700,
            color: '#1a365d',
            fontSize: { xs: '2rem', md: '2.75rem' },
            letterSpacing: '-0.5px'
          }}>
            Gallery
          </Typography>
        </Box>
  
        {/* Gallery Grid */}
        <Box sx={{
          p: { xs: 2, md: 4 },
          backgroundColor: '#f8fafc',
          minHeight: '60vh'
        }}>
          <Container maxWidth="lg">
            <ImageList
              variant="masonry"
              cols={isMobile ? 2 : 3}
              gap={isMobile ? 8 : 16}
              sx={{
                m: 0,
                overflow: 'hidden',
                borderRadius: 2
              }}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img} sx={{
                  overflow: 'hidden',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 3
                  }
                }}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: 8
                    }}
                  />
                  {item.title && (
                    <ImageListItemBar
                      title={item.title}
                      sx={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8
                      }}
                      titleStyle={{
                        fontSize: '0.875rem',
                        fontWeight: 500
                      }}
                    />
                  )}
                </ImageListItem>
              ))}
            </ImageList>
          </Container>
        </Box>
      </Box>
    );
  }

  // const Gallery = () => {
 
//   return (
//     <>
//      <Grid  md={12} sx={{scrollBehavior:'smooth'}} >
//              <Box  sx={{
//                          width: '100%',
//                          height: '20vh',
//                         //  background: 'linear-gradient(to right, #99aab5, #3f51b5)', // Adjust gradient colors as needed
//                         backgroundColor:'white',
//                         display: 'flex',
//                          alignItems: 'center',
//                          justifyContent: 'center',
//                          color: 'white',
//                      }}>
 
//                  <Typography variant='h3' sx={{color:'#005587',fontWeight:'bold'}}>Gallery </Typography>
//              </Box>

             
//           </Grid>
          
//           <Grid container sx={{background:'#f5f5f5',padding:'1rem',scrollBehavior:'smooth'}}>
//             <Box sx={{ width: 1000, height: 350, overflowY: 'scroll', margin:'auto',background:'lightcyan' }}>
                  
//                   <ImageList>
//                     {
//                       itemData.map((item) => (

//                         <ImageListItem key={item.img}>
//                             <img
//                               srcSet={`${item.img}?w=120&fit=crop&auto=format&dpr=4 2x`}
//                               src={`${item.img}?w=121&fit=contain&auto=format`}
//                               alt={item.title}
//                               loading="lazy"
//                               padding={7}
//                             />
//                         </ImageListItem>
//                       ))
                    
//                     }
//                   </ImageList>
//             </Box>
//           </Grid>

    

       
//     </>
//   );
// }


export default Gallery