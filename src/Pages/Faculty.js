import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Card,CardMedia,Typography,CardContent,Box,Grid} from '@mui/material'
import { imgConfig } from '../Asset/Images/img.confg'

const Faculty = () => {
  return (
    <>
    <Header/>

    <Grid container justifyContent="center" >
         
         <Grid  md={12}marginTop={10}  >
             <Box  sx={{
                         width: '100%',
                         height: '40vh',
                        //  background: 'linear-gradient(to right, #99aab5, #3f51b5)', // Adjust gradient colors as needed
                        backgroundColor:'white',
                        display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         color: 'white',
                     }}>
 
                 <Typography variant='h3' sx={{color:'#005587',fontWeight:'bold'}}>Faculty </Typography>
             </Box>
            
          </Grid>
        
          <Grid container justifyContent="center" sx={{width:'100%',backgroundColor:'lightgrey'}} >
                <Grid md={12}>

                        

                    <Box sx={{margin:'auto'}}>
                        <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={imgConfig.img1}
                            // alt={`${name}'s photo`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                            hehe
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                            hehe
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', marginTop: '10px' }}>
                            hehe
                            </Typography>
                        </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    <Footer/>
    </>
  )
}

export default Faculty