import React,{useEffect,useRef,useState} from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Grid,Box,Typography ,Container} from '@mui/material'
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
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={sectionRef} sx={{
      background: `
        linear-gradient(160deg, rgba(240,245,249,0.98) 0%, rgba(255,255,255,0.98) 100%),
        repeating-radial-gradient(circle at 10% 20%, rgba(0,85,135,0.05) 0%, rgba(0,85,135,0.05) 15%, transparent 15%, transparent 25%)
      `,
      py: { xs: 6, md: 10 },
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-20%',
        right: '-20%',
        width: '400px',
        height: '400px',
        background: 'rgba(224,122,95,0.08)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }
    }}>
      <Container maxWidth="lg">
        {/* Title Section with Unique Background */}
        <Box sx={{
          textAlign: 'center',
          mb: { xs: 4, md: 6 },
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease',
          position: 'relative',
          zIndex: 2
        }}>
          <Typography variant="h2" sx={{
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#1a365d',
            fontFamily: "'Poppins', sans-serif",
            lineHeight: 1.3,
            display: 'inline-block',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              backgroundColor: '#005587',
              borderRadius: '2px'
            }
          }}>
            {t('Vision')}
          </Typography>
        </Box>

        {/* Content Grid with Distinct Backgrounds */}
        <Grid container spacing={4} alignItems="stretch">
          {/* Text Column */}
          <Grid item xs={12} md={6} sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.6s ease',
            zIndex: 2
          }}>
            <Box sx={{
              height: '100%',
              backgroundColor: 'rgba(255,255,255,0.9)',
              p: { xs: 3, md: 5 },
              borderRadius: '12px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,85,135,0.1)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(240,245,249,0.1) 100%)',
                zIndex: -1
              }
            }}>
              <Typography variant="body1" sx={{
                color: '#4a5568',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                fontFamily: "'Open Sans', sans-serif",
                mb: 3
              }}>
                {t('VisionBody')}
              </Typography>
            </Box>
          </Grid>

          {/* Image Column */}
          <Grid item xs={12} md={6} sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.6s ease',
            zIndex: 2
          }}>
            <Box sx={{
              height: '100%',
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
              '&:hover img': {
                transform: 'scale(1.03)'
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, rgba(0,85,135,0.08) 0%, rgba(224,122,95,0.08) 100%)',
                zIndex: 1
              }
            }}>
              <img
                src={imgConfig.img2}
                alt="Vision Illustration"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  minHeight: '400px',
                  transition: 'transform 0.4s ease',
                  position: 'relative',
                  zIndex: 0
                }}
              />
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 3,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
                color: 'white',
                zIndex: 2
              }}>
                <Typography variant="h6" sx={{
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                  textAlign: 'center',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  {t('Building Future Leaders')}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Vision

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