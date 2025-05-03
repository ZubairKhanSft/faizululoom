import React,{useEffect,useRef,useState} from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Grid,Box,Typography } from '@mui/material'
import { imgConfig } from '../Asset/Images/img.confg'
import {styled,keyframes} from '@mui/system'
import { useTranslation } from 'react-i18next'


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(1);
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

// Styled components with animation
const AnimatedTypography = styled(Typography)(({ theme }) => ({
  padding: '30px',
  animation: `${fadeIn} 4s ease-out`,
}));

const AnimatedImageBox = styled(Box)(({ theme }) => ({
  height: '55vh',
  color: 'white',
  backgroundColor: 'black',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 1.5s ease-in-out',
    '&:hover': {
      transform: 'scale(2.05)',
    },
  },
}));

const Vision = () => {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const {t} = useTranslation();
  // Intersection Observer to trigger animations when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.4, // Trigger when 10% of the element is in view
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
   <>
   

    {/* <Grid container justifyContent="center" sx={{scrollBehavior:'smooth'}}>
         
          

            <Grid xs={12} md={12}  >
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
  
                  <Typography variant='h3' sx={{color:'#005587',fontWeight:'bold'}}>Vision </Typography>
              </Box>
              
          </Grid>

         
         
         

<Grid container md={12} xs={12} sx={{ display: 'flex' }}>
      <Grid item md={6} xs={12} sx={{
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Box>
          <AnimatedTypography>
            The Madarsa Faiz-Ul-Uloom is committed to 
            empowering students to become full citizens responsible for playing an active role in their
            communities. In this perspective, we advocate for quality education, as well as for the 
            excellence of research and innovative teaching methods that meet international standards in
            line with the technological development of our time. Our university embraces a culture of
            values, humanity, and tolerance that enable graduates to serve their community with the 
            knowledge and virtues developed therein.
          </AnimatedTypography>
        </Box>
      </Grid>

      <Grid md={6} item xs={12} sx={{ backgroundColor: '#f5f5f5' }}>
        <AnimatedImageBox>
          <img
            src={imgConfig.img2}
            alt="Madarsa Faiz-Ul-Uloom"
          />
        </AnimatedImageBox>
      </Grid>
    </Grid>
    </Grid> */}

<Grid container justifyContent="center" sx={{ scrollBehavior: 'smooth', padding: '1rem' }} ref={sectionRef}>
      {/* Title Section */}
      <Grid item xs={12} md={12}>
        <Box
          sx={{
            width: '100%',
            height: '20vh', // Reduced height for a cleaner layout
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            visibility: isVisible ? 'visible' : 'hidden',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-out',
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)', // Slightly reduced slide-in distance
          }}
        >
          <Typography variant='h3' sx={{ color: '#005587', fontWeight: 'bold' }}>
            Vision
          </Typography>
        </Box>
      </Grid>

      {/* Content Section */}
      <Grid container md={12} xs={12} sx={{ display: 'flex' }}>
        {/* Text Box */}
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            backgroundColor: '#f5f5f5',
            padding: '1.0rem', // Reduced padding for a more balanced look
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            visibility: isVisible ? 'visible' : 'hidden',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-out',
            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)', // Reduced slide-in distance for smoother animation
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto, sans-serif',
              color: '#333',
              fontSize: '15px',
              lineHeight: '1.6',
              textAlign: 'center', // Center-align for better readability
            }}
          >
            {t('VisionBody')}
          </Typography>
        </Grid>

        {/* Image Box */}
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            backgroundColor: '#f5f5f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
           // padding: '1.5rem', // Consistent padding
            visibility: isVisible ? 'visible' : 'hidden',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-out',
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)', // Reduced slide-in distance
          }}
        >
          <Box sx={{ }}> {/* Restrict max width for better image size */}
            <img
              src={imgConfig.img2}
              alt="Madarsa Faiz-Ul-Uloom"
              style={{
                width: '90%',
                height: 'auto',
                borderRadius: '8px', // Add a border-radius for a softer image
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
   
   </>
  )
}

export default Vision