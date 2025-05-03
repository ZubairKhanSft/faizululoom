import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Grid,Box,Typography, styled } from '@mui/material'
import { imgConfig } from '../Asset/Images/img.confg'
import { useTranslation } from 'react-i18next'
// import {styled,keyframes} from '@mui/system'
const Mission = () => {

   const { t } = useTranslation();
   const goals = [
    t('goal1'),
    t('goal2'),
    t('goal3'),
    t('goal4'),
    t('goal5')
  ];
    // const goals = [
    //     'Improve the quality of higher education.',
    //     'Place students in student-centered learning environment that promotes economic and social development, with the aim to provide them with leadership skills and engage them in society service.',
    //     'Promote innovation and the pursuit of excellence in teaching and learning.',
    //     'Adopt modern teaching methods such as classroom learning, distance learning, e-learning, mobile learning, and lifelong self-learning.',
    //     'Apply universally recognized systems to ensure the quality of education and academic accreditation, both at the administrative and academic levels, and to compete with Arab and international universities.'
    //   ];
      const AnimatedImageBox = styled(Box)(({ theme }) => ({
      //  height: '55vh',
        color: 'black',
        backgroundColor: 'black',
        overflow: 'hidden',
        '& img': {
          width: '70%',
          height: '40%',
          objectFit: 'contain',
          transition: 'transform 0.5s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      }));

      const AnimatedImageBox1 = styled
  return (
   <>
   {/* <Header/> */}
     <Grid container justifyContent="center" >
         
         
             <Box  sx={{
                         width: '100%',
                         height: '30vh',
                        //  background: 'linear-gradient(to right, #99aab5, #3f51b5)', // Adjust gradient colors as needed
                        backgroundColor:'white',
                        display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         color: 'white',
                     }}>
 
                 <Typography variant='h3' sx={{color:'#005587',fontWeight:'bold'}}>Mission </Typography>
             </Box>
            
            <Box  sx={{
                         width: '100%',
                         backgroundColor:'#f5f5f5',
                         color: 'black',
                         padding:'2rem',
                         justifyContent:'center',
                         alignItems:'center'
                     }}>

                        { goals.map((r,index) => (
                            <Typography variant="body1" sx={{marginBottom:'7px',
                                                             marginLeft:'20%',
                                                             marginRight:'10%',
                                                             padding:'5px',transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out','&:hover': {
                                                                transform: 'scale(1.1)',
                                                                backgroundColor: 'lightcyan',
                                                              },}}>
                            {index + 1}{"."} {r}
                          </Typography>
                        ))}
                        
            </Box>


       
         
        
      

     </Grid>
          
        <Grid   xs={12} md={12}  sx={{display:'flex',width:'100%'}}> 
         
                   

            <Box
             sx={{
             
              minHeight: '50vh',
              width: '100%',
             
              backgroundImage: `url(${imgConfig.mission}?w=1146&fit=crop&auto=format)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor:'grey',
              textAlign: 'center',
              color: 'black',
             
             
            }}>
              
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',alignContent:'center',justifyContent:'center',backgroundColor:'#E07A5F'}}>
              <Typography variant='h3' sx={{textAlign:'center',fontWeight:'bold',marginBottom:'5px',color:'#F4F1DE'}}>{t('Strength')}</Typography>
              <Typography variant='p' sx={{textAlign:'center',padding:'5px',color:'white'}}>{t('strengthbody')}</Typography>
                    
            </Box>
     </Grid>
   {/* <Footer/> */}
   </>
  )
}

export default Mission