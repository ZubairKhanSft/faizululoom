import React,{useState,useRef,useEffect} from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { Typography ,Box,Grid,Container,Divider,Button} from '@mui/material';
import { imgConfig } from '../Asset/Images/img.confg';
import { useTranslation } from 'react-i18next';
// function AboutUs() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const {t} = useTranslation();
//   // Intersection Observer to trigger animations when in view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: 0.1, // Trigger when 10% of the element is in view
//       }
//     );
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);
//   return (
//     // <>
      
//     //       <Box id='about' sx={{   display:'flex',flexDirection:'column',alignContent:'center', alignItems: 'center', backgroundColor: '#F1F9F5',scrollBehavior:'smooth'}}>
          
//     //          <Box>
              
      
//     //                       <Typography variant='h3' sx={{textAlign:'center',fontWeight:'bold',padding:'10px',marginTop:'25px',color:'#005587'}}>About Madarsa Faiz-Ul-Uloom</Typography>
                         
                         
//     //                       <Box
//     //                         sx={{
//     //                           minHeight: '50vh',
//     //                           width: '100%',
//     //                           display: 'flex',
//     //                           flexDirection: 'column',
//     //                           justifyContent: 'center',
//     //                           alignItems: 'center',
//     //                           backgroundImage: `url(${imgConfig.logo1}?w=1146&fit=crop&auto=format)`,
//     //                           backgroundSize: 'contain',
//     //                           backgroundRepeat: 'no-repeat',
//     //                           backgroundPosition: 'center',
                              
//     //                           textAlign: 'center',
//     //                           color: 'black',
//     //                           padding: '2rem',
//     //                           position: 'relative', // Make this Box the container for the overlay effect
//     //                         }}
//     //                       >
//     //                         {/* Overlay for Blurred and Low-Opacity Image */}
//     //                         <Box
//     //                           sx={{
//     //                             position: 'absolute',
//     //                             top: 0,
//     //                             left: 0,
//     //                             width: '100%',
//     //                             height: '100%',
//     //                             backgroundImage: `url(${imgConfig.logo1}?w=1114&auto=format)`,
//     //                             backgroundSize: 'contain',
//     //                             backgroundRepeat:'no-repeat',
//     //                             backgroundPosition: 'center',
//     //                             color:'black',
//     //                             filter: 'blur(2px)', // Apply blur effect
//     //                             opacity: 0.1, // Lower opacity
//     //                             zIndex: 1, // Set z-index for background overlay
//     //                           }}
//     //                         />

//     //                         {/* Content */}
//     //                         <Box
//     //                           sx={{
//     //                             position: 'relative',
//     //                             zIndex: 2, // Make sure content is above the overlay
//     //                             textAlign: 'center'
//     //                           }}
//     //                         >
    
    
 
//     //                         </Box>
//     //                       </Box>
                         
//     //                       <Typography sx={{marginTop:'20px',padding:'15px',width:'80%',margin:'auto'}}>
//     //                       Started in 1965 with a humble beginning of just a few rooms, Madarsa Faizul Uloom was the dream of a few good men who wanted to provide the students the best education of both worlds.

//     //             The students of the Madarsa are taught with guiding principles of Quran and Sunnah. They are also equipped with subjects of modern education like Mathematics, Sciences and Languages. The alumni are also trained in vocational trades, crafts and professional arts.

//     //             Since the inception of the Madrasa, it has been our endeavor to transform the young students into honorable human beings who can take charge of any role in any walk of life and become a beacon for the Deen-e-Islam.
//     //                       </Typography>
              
             
              
//     //          </Box>

//     //       </Box>
      
//     // </>
//     <>
//        <Box
//       id='about'
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F1F9F5',
//         scrollBehavior: 'smooth',
//         visibility: isVisible ? 'visible' : 'hidden', // Initially hidden
//         opacity: isVisible ? 1 : 0, // Fade in when visible
//         transition: 'opacity 0.5s ease-in-out', // Smooth fade-in transition
//         fontFamily: 'Roboto, sans-serif', // Updated font family
//       }}
//       ref={sectionRef} // Attach ref for intersection observer
//     >
//       {/* Title with Fade-in from top and scaling */}
//       <Typography
//         variant='h3'
//         sx={{
//           textAlign: 'center',
//           fontWeight: 'bold',
//           padding: '10px',
//           marginTop: '25px',
//           color: '#005587',
//           animation: isVisible
//             ? 'fadeInScale 1.5s ease-out'
//             : 'none', // Apply animation when visible
//           '@keyframes fadeInScale': {
//             '0%': {
//               opacity: 0,
//               transform: 'translateY(-50px) scale(0.95)',
//             },
//             '100%': {
//               opacity: 1,
//               transform: 'translateY(0) scale(1)',
//             },
//           },
//         }}
//       >
//        {t('About')}
//       </Typography>

//       {/* Logo Box */}
//       <Box
//         sx={{
//           minHeight: '25vh',
//           width: '100%',
//           backgroundImage: `url(${imgConfig.logo1}?w=1146&fit=crop&auto=format)`,
//           backgroundSize: 'contain',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center',
//           textAlign: 'center',
//         }}
//       />

//       {/* Content Below the Logo */}
//       <Box
//         sx={{
//           textAlign: 'center',
//           padding: '2rem',
//           animation: isVisible
//             ? 'fadeInSlideFromRight 1.5s ease-out'
//             : 'none', // Apply animation when visible
//           '@keyframes fadeInSlideFromRight': {
//             '0%': {
//               opacity: 0,
//               transform: 'translateX(100px)', // Slide in from right
//             },
//             '100%': {
//               opacity: 1,
//               transform: 'translateX(0)',
//             },
//           },
//         }}
//       >
//         <Typography
//           sx={{
//             fontFamily: 'Montserrat, sans-serif', // Professional font
//             fontWeight: 'bold',
//             color: '#005587',
//             marginBottom: '10px',
//           }}
//         >
//          {t('AboutStart')}
//         </Typography>

//         <Typography
//           sx={{
//             fontFamily: 'Roboto, sans-serif', // Professional font
//             color: '#333', // Darker color for better contrast
//           }}
//         >
//          {t('AboutBody1')}
//         </Typography>
//       </Box>
//       </Box>
//     </>
//   )
// }
function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id='about'
      ref={sectionRef}
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 4, md: 8 },
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }}
    >
      <Container maxWidth="md">
        {/* Logo Section */}
        <Box sx={{
          textAlign: 'center',
          mb: { xs: 4, md: 6 },
          animation: isVisible ? 'float 3s ease-in-out infinite' : 'none',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' }
          }
        }}>
          <img 
            src={imgConfig.logo1}
            alt="Madarsa Logo"
            style={{
              width: '150px',
              height: 'auto',
              filter: 'drop-shadow(0 4px 12px rgba(0,85,135,0.1))'
            }}
          />
        </Box>

        {/* Content Section */}
        <Box sx={{
          backgroundColor: '#f8fafc',
          borderRadius: 4,
          p: { xs: 3, md: 5 },
          boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -20,
            left: '50%',
            transform: 'translateX(-50%',
            width: '60%',
            height: '4px',
            backgroundColor: '#005587',
            borderRadius: 2
          }
        }}>
          <Typography variant="h3" sx={{
            fontWeight: 700,
            color: '#1a365d',
            textAlign: 'center',
            mb: 3,
            fontSize: { xs: '1.75rem', md: '2.25rem' }
          }}>
            {t('About')}
          </Typography>

          <Box sx={{
            columnCount: { xs: 1, md: 2 },
            columnGap: 4,
            mb: 4
          }}>
            <Typography paragraph sx={{
              color: '#4a5568',
              lineHeight: 1.8,
              breakInside: 'avoid',
              fontSize: '1.1rem',
              mb: 3
            }}>
              {t('AboutStart')}
            </Typography>
            
            <Typography paragraph sx={{
              color: '#4a5568',
              lineHeight: 1.8,
              breakInside: 'avoid',
              fontSize: '1.1rem'
            }}>
              {t('AboutBody1')}
            </Typography>
          </Box>

          {/* Milestone Cards */}
          {/* <Grid container spacing={3}>
            {[t('milestone1'), t('milestone2'), t('milestone3')].map((text, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box sx={{
                  p: 3,
                  backgroundColor: 'white',
                  borderRadius: 2,
                  textAlign: 'center',
                  height: '100%',
                  border: '2px solid rgba(0,85,135,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#005587',
                    transform: 'translateY(-5px)'
                  }
                }}>
                  <Box sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'rgba(0,85,135,0.05)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}>
                    <Typography variant="h6" sx={{ 
                      color: '#005587',
                      fontWeight: 700 
                    }}>
                      {['1965', '200+', '10+'][index]}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#718096' }}>
                    {text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid> */}
        </Box>
      </Container>
    </Box>
  );
}
export default AboutUs;