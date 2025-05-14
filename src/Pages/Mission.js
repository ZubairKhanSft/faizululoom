// import React from 'react'
// import Header from '../Component/Header'
// import Footer from '../Component/Footer'
// import { useInView } from 'react-intersection-observer';
// import { keyframes } from '@emotion/react';
// import { motion } from 'framer-motion';
// import { Grid,Box,Typography, styled,Button } from '@mui/material'
// import { imgConfig } from '../Asset/Images/img.confg'
// import { useTranslation } from 'react-i18next'
// // import {styled,keyframes} from '@mui/system'
// // const Mission = () => {

// //    const { t } = useTranslation();
// //    const goals = [
// //     t('goal1'),
// //     t('goal2'),
// //     t('goal3'),
// //     t('goal4'),
// //     t('goal5')
// //   ];
// //     // const goals = [
// //     //     'Improve the quality of higher education.',
// //     //     'Place students in student-centered learning environment that promotes economic and social development, with the aim to provide them with leadership skills and engage them in society service.',
// //     //     'Promote innovation and the pursuit of excellence in teaching and learning.',
// //     //     'Adopt modern teaching methods such as classroom learning, distance learning, e-learning, mobile learning, and lifelong self-learning.',
// //     //     'Apply universally recognized systems to ensure the quality of education and academic accreditation, both at the administrative and academic levels, and to compete with Arab and international universities.'
// //     //   ];
// //       const AnimatedImageBox = styled(Box)(({ theme }) => ({
// //       //  height: '55vh',
// //         color: 'black',
// //         backgroundColor: 'black',
// //         overflow: 'hidden',
// //         '& img': {
// //           width: '70%',
// //           height: '40%',
// //           objectFit: 'contain',
// //           transition: 'transform 0.5s ease-in-out',
// //           '&:hover': {
// //             transform: 'scale(1.05)',
// //           },
// //         },
// //       }));

// //       const AnimatedImageBox1 = styled
// //   return (
// //    <>
// //    {/* <Header/> */}
// //      {/* <Grid container justifyContent="center" >
         
         
// //              <Box  sx={{
// //                          width: '100%',
// //                          height: '30vh',
// //                         //  background: 'linear-gradient(to right, #99aab5, #3f51b5)', // Adjust gradient colors as needed
// //                         backgroundColor:'white',
// //                         display: 'flex',
// //                          alignItems: 'center',
// //                          justifyContent: 'center',
// //                          color: 'white',
// //                      }}>
 
// //                  <Typography variant='h3' sx={{color:'#005587',fontWeight:'bold'}}>Mission </Typography>
// //              </Box>
            
// //             <Box  sx={{
// //                          width: '100%',
// //                          backgroundColor:'#f5f5f5',
// //                          color: 'black',
// //                          padding:'2rem',
// //                          justifyContent:'center',
// //                          alignItems:'center'
// //                      }}>

// //                         { goals.map((r,index) => (
// //                             <Typography variant="body1" sx={{marginBottom:'7px',
// //                                                              marginLeft:'20%',
// //                                                              marginRight:'10%',
// //                                                              padding:'5px',transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out','&:hover': {
// //                                                                 transform: 'scale(1.1)',
// //                                                                 backgroundColor: 'lightcyan',
// //                                                               },}}>
// //                             {index + 1}{"."} {r}
// //                           </Typography>
// //                         ))}
                        
// //             </Box>


       
         
        
      

// //      </Grid> */}
          

// //           <Box sx={{ 
// //   width: '100%',
// //   backgroundColor: '#ffffff',
// //   overflow: 'hidden'
// // }}>
// //   {/* Mission Header */}
// //   <Box sx={{
// //     width: '100%',
// //     py: { xs: 4, md: 6 },
// //     px: { xs: 2, md: 0 },
// //     backgroundColor: '#005587',
// //     textAlign: 'center'
// //   }}>
// //     <Typography variant="h2" sx={{
// //       color: 'white',
// //       fontWeight: 600,
// //       fontSize: { xs: '1.8rem', md: '2.5rem' },
// //       lineHeight: 1.3,
// //       maxWidth: 800,
// //       mx: 'auto',
// //       letterSpacing: '-0.5px'
// //     }}>
// //       Our Mission Statement
// //     </Typography>
// //   </Box>

// //   {/* Goals List */}
// //   <Box sx={{
// //     maxWidth: 1200,
// //     mx: 'auto',
// //     py: { xs: 4, md: 6 },
// //     px: { xs: 2, md: 4 }
// //   }}>
// //     <Grid container spacing={3}>
// //       {goals.map((goal, index) => (
// //         <Grid item xs={12} sm={6} key={index}>
// //           <Box sx={{
// //             p: 3,
// //             height: '100%',
// //             borderLeft: '4px solid #005587',
// //             backgroundColor: '#f8fafc',
// //             transition: 'all 0.2s ease',
// //             '&:hover': {
// //               backgroundColor: '#f0f4f8'
// //             }
// //           }}>
// //             <Box sx={{ 
// //               display: 'flex',
// //               alignItems: 'center',
// //               mb: 2
// //             }}>
// //               <Box sx={{
// //                 width: 32,
// //                 height: 32,
// //                 backgroundColor: '#005587',
// //                 color: 'white',
// //                 borderRadius: '4px',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 mr: 2,
// //                 fontWeight: 600
// //               }}>
// //                 {index + 1}
// //               </Box>
// //               <Typography variant="h6" sx={{
// //                 color: '#1a365d',
// //                 fontWeight: 600,
// //                 fontSize: '1.1rem'
// //               }}>
// //                 Goal {index + 1}
// //               </Typography>
// //             </Box>
// //             <Typography variant="body1" sx={{
// //               color: '#4a5568',
// //               lineHeight: 1.6,
// //               fontSize: '1rem'
// //             }}>
// //               {goal}
// //             </Typography>
// //           </Box>
// //         </Grid>
// //       ))}
// //     </Grid>
// //   </Box>
// // </Box>

// //           {/* to be removed */}
// //           {/* <Grid container justifyContent="center" sx={{ backgroundColor: '#f8fafc' }}>
             
// //               <Grid item xs={12} sx={{ py: 8, backgroundColor: '#005587' }}>
// //                 <Box sx={{ 
// //                   maxWidth: 1200, 
// //                   margin: '0 auto',
// //                   px: { xs: 2, md: 4 } 
// //                 }}>
// //                   <Typography variant="h3" component="h2" sx={{
// //                     color: 'white',
// //                     fontWeight: 600,
// //                     fontSize: { xs: '2rem', md: '2.5rem' },
// //                     textAlign: 'center',
// //                     lineHeight: 1.3
// //                   }}>
// //                     Our Mission
// //                   </Typography>
// //                 </Box>
// //               </Grid>

             
// //               <Grid item xs={12} sx={{ py: 8 }}>
// //                 <Box sx={{ 
// //                   maxWidth: 800, 
// //                   margin: '0 auto',
// //                   px: { xs: 2, md: 4 } 
// //                 }}>
// //                   {goals.map((r, index) => (
// //                     <Box key={index} sx={{ 
// //                       display: 'flex',
// //                       alignItems: 'flex-start',
// //                       mb: 4,
// //                       p: 3,
// //                       backgroundColor: 'white',
// //                       borderRadius: '8px',
// //                       boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
// //                       transition: 'box-shadow 0.2s ease',
// //                       '&:hover': {
// //                         boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
// //                       }
// //                     }}>
// //                       <Box sx={{
// //                         flexShrink: 0,
// //                         width: 32,
// //                         height: 32,
// //                         backgroundColor: '#005587',
// //                         color: 'white',
// //                         borderRadius: '50%',
// //                         display: 'flex',
// //                         alignItems: 'center',
// //                         justifyContent: 'center',
// //                         mr: 3,
// //                         fontWeight: 500
// //                       }}>
// //                         {index + 1}
// //                       </Box>
// //                       <Typography variant="body1" sx={{
// //                         color: '#2d3748',
// //                         fontSize: '1.1rem',
// //                         lineHeight: 1.6
// //                       }}>
// //                         {r}
// //                       </Typography>
// //                     </Box>
// //                   ))}
// //                 </Box>
// //               </Grid>
// //           </Grid> */}
     

// //      {/* second one */}
// //      <Grid   xs={12} md={12}  sx={{display:'flex',width:'100%'}}> 
         
                   

// //             <Box
// //              sx={{
             
// //               minHeight: '50vh',
// //               width: '100%',
             
// //               backgroundImage: `url(${imgConfig.mission}?w=1146&fit=crop&auto=format)`,
// //               backgroundSize: 'contain',
// //               backgroundRepeat: 'no-repeat',
// //               backgroundPosition: 'center',
// //               backgroundColor:'grey',
// //               textAlign: 'center',
// //               color: 'black',
             
             
// //             }}>
              
// //             </Box>
// //             <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',alignContent:'center',justifyContent:'center',backgroundColor:'#E07A5F'}}>
// //               <Typography variant='h3' sx={{textAlign:'center',fontWeight:'bold',marginBottom:'5px',color:'#F4F1DE'}}>{t('Strength')}</Typography>
// //               <Typography variant='p' sx={{textAlign:'center',padding:'5px',color:'white'}}>{t('strengthbody')}</Typography>
                    
// //             </Box>
// //      </Grid>




// //    {/* <Footer/> */}
// //    </>
// //   )
// // }

// const Mission = () => {
//   const { t } = useTranslation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
//   const goals = [
//     t('goal1'),
//     t('goal2'),
//     t('goal3'),
//     t('goal4'),
//     t('goal5')
//   ];

//   return (
//     <>
//       {/* Mission Section */}
//       <Box sx={{ 
//         backgroundColor: '#ffffff',
//         overflow: 'hidden',
//         position: 'relative'
//       }}>
//         {/* Animated Header */}
//         <Box sx={{
//           py: { xs: 6, md: 8 },
//           px: 2,
//           backgroundColor: '#005587',
//           textAlign: 'center',
//           animation: inView ? `${fadeInUp} 1s ease-out` : 'none'
//         }} ref={ref}>
//           <Typography variant="h2" sx={{
//             color: 'white',
//             fontWeight: 700,
//             fontSize: { xs: '2rem', md: '2.75rem' },
//             lineHeight: 1.2,
//             maxWidth: 1200,
//             mx: 'auto',
//             letterSpacing: { md: '-0.5px' }
//           }}>
//             {t('Our Mission Statement')}
//           </Typography>
//         </Box>

//         {/* Goals Grid */}
//         <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 4 } }}>
//           <Grid container spacing={3}>
//             {goals.map((goal, index) => (
//               <Grid 
//                 item 
//                 xs={12} 
//                 md={6} 
//                 key={index}
//                 sx={{
//                   opacity: 0,
//                   animation: inView ? `${fadeInUp} 0.6s ease-out forwards` : 'none',
//                   animationDelay: `${index * 0.1}s`
//                 }}
//               >
//                 <motion.div whileHover={{ scale: 1.02 }}>
//                   <Box sx={{
//                     p: 3,
//                     height: '100%',
//                     borderLeft: '4px solid #005587',
//                     backgroundColor: '#f8fafc',
//                     borderRadius: 2,
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       backgroundColor: '#f0f4f8'
//                     }
//                   }}>
//                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                       <Box sx={{
//                         width: 40,
//                         height: 40,
//                         backgroundColor: '#005587',
//                         color: 'white',
//                         borderRadius: '8px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         mr: 2,
//                         fontWeight: 700,
//                         fontSize: '1.1rem'
//                       }}>
//                         {index + 1}
//                       </Box>
//                       <Typography variant="h6" sx={{
//                         color: '#1a365d',
//                         fontWeight: 600,
//                         fontSize: { xs: '1rem', md: '1.1rem' }
//                       }}>
//                         {t('Goal')} {index + 1}
//                       </Typography>
//                     </Box>
//                     <Typography variant="body1" sx={{
//                       color: '#4a5568',
//                       lineHeight: 1.7,
//                       fontSize: { xs: '0.95rem', md: '1rem' }
//                     }}>
//                       {goal}
//                     </Typography>
//                   </Box>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Strength Section */}
//       <Grid container sx={{ 
//         minHeight: { xs: 'auto', md: '60vh' },
//         position: 'relative',
//         overflow: 'hidden'
//       }}>
//         <Grid 
//           item 
//           xs={12} 
//           md={6} 
//           sx={{
//             minHeight: { xs: '50vh', md: 'auto' },
//             position: 'relative'
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Box
//               component="img"
//               src={imgConfig.mission}
//               alt="Mission Visual"
//               sx={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 minHeight: 400
//               }}
//             />
//           </motion.div>
//         </Grid>

//         <Grid 
//           item 
//           xs={12} 
//           md={6} 
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             backgroundColor: '#E07A5F',
//             p: { xs: 4, md: 8 },
//             position: 'relative'
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <Typography variant="h3" sx={{
//               textAlign: 'center',
//               fontWeight: 700,
//               color: '#F4F1DE',
//               fontSize: { xs: '1.75rem', md: '2.5rem' },
//               mb: 3
//             }}>
//               {t('Strength')}
//             </Typography>
//             <Typography variant="body1" sx={{
//               color: 'white',
//               fontSize: { xs: '1rem', md: '1.1rem' },
//               lineHeight: 1.7,
//               textAlign: 'center',
//               maxWidth: 600,
//               mx: 'auto'
//             }}>
//               {t('strengthbody')}
//             </Typography>
//           </motion.div>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default Mission


import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Box, 
  Typography, 
  Grid, 
  Container, 
  Button,
  keyframes 
} from '@mui/material';
import { imgConfig } from '../Asset/Images/img.confg'

const Mission = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const goals = [
    t('goal1'),
    t('goal2'),
    t('goal3'),
    t('goal4'),
    t('goal5')
  ];

  // Simple scroll animation trigger
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('mission-section');
      if (element) {
        const top = element.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Basic fade-in animation
  const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `;

  return (
    <Box id="mission-section" sx={{ 
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.6s ease, transform 0.6s ease',
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
    }}>
      {/* Mission Header */}
      <Box sx={{
        py: { xs: 6, md: 8 },
        px: 2,
        backgroundColor: '#005587',
        textAlign: 'center'
      }}>
        <Typography variant="h2" sx={{
          color: 'white',
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '2.5rem' },
          lineHeight: 1.2,
          maxWidth: 1200,
          mx: 'auto'
        }}>
          {t('Our Mission Statement')}
        </Typography>
      </Box>

      {/* Goals Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={3}>
          {goals.map((goal, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{
                p: 3,
                height: '100%',
                borderLeft: '4px solid #005587',
                backgroundColor: '#f8fafc',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3
                }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#005587',
                    color: 'white',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    fontWeight: 700
                  }}>
                    {index + 1}
                  </Box>
                  <Typography variant="h6" sx={{
                    color: '#1a365d',
                    fontWeight: 600,
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}>
                    {t('Goal')} {index + 1}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{
                  color: '#4a5568',
                  lineHeight: 1.7,
                  fontSize: { xs: '0.95rem', md: '1rem' }
                }}>
                  {goal}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Strength Section */}
      {/* <Grid container sx={{ minHeight: { xs: 'auto', md: '60vh' } }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={imgConfig.mission}
            alt="Mission Visual"
            sx={{
              width: '100%',
              height: { xs: '300px', md: '100%' },
              objectFit: 'cover'
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#E07A5F',
          p: { xs: 4, md: 6 }
        }}>
          <Typography variant="h3" sx={{
            textAlign: 'center',
            fontWeight: 700,
            color: '#F4F1DE',
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            mb: 3
          }}>
            {t('Strength')}
          </Typography>
          <Typography variant="body1" sx={{
            color: 'white',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.7,
            textAlign: 'center'
          }}>
            {t('strengthbody')}
          </Typography>
        </Grid>
      </Grid> */}
      {/* Strength Section */}
      <Grid container sx={{ 
        minHeight: { xs: 'auto', md: '500px' },
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 3,
        borderRadius: { xs: 0, md: 2 },
        margin: { xs: 0, md: 4 },
      }}>
        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{
          position: 'relative',
          height: { xs: '300px', md: '500px' },
          order: { xs: 2, md: 1 } // Change order on mobile
        }}>
          <Box
            component="img"
            src={imgConfig.mission}
            alt="Our Strength"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)'
              }
            }}
          />
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#E07A5F',
          p: { xs: 4, md: 6 },
          order: { xs: 1, md: 2 }, // Content first on mobile
          textAlign: { xs: 'center', md: 'left' }
        }}>
          <Typography variant="h3" sx={{
            fontWeight: 700,
            color: '#F4F1DE',
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            mb: 3,
            lineHeight: 1.2
          }}>
            {t('Strength')}
          </Typography>
          
          <Typography variant="body1" sx={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.7,
            mb: 3
          }}>
            {t('strengthbody')}
          </Typography>

          {/* Optional CTA Button */}
          <Button
            variant="outlined"
            sx={{
              alignSelf: { xs: 'center', md: 'flex-start' },
              color: '#F4F1DE',
              borderColor: '#F4F1DE',
              '&:hover': {
                backgroundColor: 'rgba(244, 241, 222, 0.1)',
                borderColor: 'white'
              },
              width: 'fit-content'
            }}
          >
            {t('Learn More')}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mission;