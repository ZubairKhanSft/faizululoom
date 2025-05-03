import React,{useNavigate} from 'react'
import { Box,Grid ,ImageList,ImageListItem,Typography} from '@mui/material';
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
 
  return (
    <>
     <Grid  md={12} sx={{scrollBehavior:'smooth'}} >
             <Box  sx={{
                         width: '100%',
                         height: '20vh',
                        //  background: 'linear-gradient(to right, #99aab5, #3f51b5)', // Adjust gradient colors as needed
                        backgroundColor:'white',
                        display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         color: 'white',
                     }}>
 
                 <Typography variant='h3' sx={{color:'#005587',fontWeight:'bold'}}>Gallery </Typography>
             </Box>

             
          </Grid>
          
          <Grid container sx={{background:'#f5f5f5',padding:'1rem',scrollBehavior:'smooth'}}>
            <Box sx={{ width: 1000, height: 350, overflowY: 'scroll', margin:'auto',background:'lightcyan' }}>
                  
                  <ImageList>
                    {
                      itemData.map((item) => (

                        <ImageListItem key={item.img}>
                            <img
                              srcSet={`${item.img}?w=120&fit=crop&auto=format&dpr=4 2x`}
                              src={`${item.img}?w=121&fit=contain&auto=format`}
                              alt={item.title}
                              loading="lazy"
                              padding={7}
                            />
                        </ImageListItem>
                      ))
                    
                    }
                  </ImageList>
            </Box>
          </Grid>

    

       
    </>
  );
}


export default Gallery