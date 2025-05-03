import { Container,Grow,Box ,Typography,Grid ,Paper } from "@mui/material";
import Header from "../Component/Header";
import Home from "./Home";
import { imgConfig } from "../Asset/Images/img.confg";
import React,{useEffect,useRef,useState} from 'react'
import AboutUs from "./AboutUs";
import Vision from "./Vision";
import Mission from "./Mission";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import Footer from "../Component/Footer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LanguageIcon from "@mui/icons-material/Language";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Group";
import Gallerysec from "../Component/Gallerysec";
import { useTranslation } from "react-i18next";
// Define the card content in an array
const cardContent = [
    {
      title: "Authenticity",
      body:'AuthenticityBody',
      description: "Our curriculum is based on correct and authentic knowledge based on the Quran and Sunnah.",
      icon: <CheckCircleIcon sx={{ fontSize: '2rem', color: '#005587' }} />
    },
    {
      title: "Affordability",
      body:'AffordabilityBody',
      description: "Fees are comparatively low and affordable for a degree program.",
      icon: <SchoolIcon sx={{ fontSize: '2rem', color: '#005587' }} />
    },
    {
      title: "Accessibility",
      body:'AccessibilityBody',
      description: "You can study online from anywhere in the world.",
      icon: <LanguageIcon sx={{ fontSize: '2rem', color: '#005587' }} />
    },
    {
      title: "Community",
      body:'CommunityBody',
      description: "You can be part of a global community of Muslim students from over 200 countries.",
      icon: <GroupsIcon sx={{ fontSize: '2rem', color: '#005587' }} />
    }
  ];
function Landing() {
    const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
 
  const { t } = useTranslation(); // Use the translation hook
 
  // State to control animation on mount
const [checked, setChecked] = useState(true);
 
// Intersection Observer to trigger animations when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.8, // Trigger when 10% of the element is in view
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
        <Header/>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',scrollBehavior:'smooth',padding:'7px'}}>
              
              {/* Add Global Keyframes for Fade In */}
  <style>
    {`
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>
                <Typography variant='h3' sx={{ textAlign: 'center',color:'#005587', padding: '10px',fontWeight:'bold',animation:'fadeIn  1s ease-out'}}>
                 {t('welcome')}
                </Typography>
                <Typography variant='h5' sx={{ textAlign: 'center',color:'#005587' ,fontWeight:'bold',animation:'fadeIn  1.2s ease-out'}}>
                 {t('to')}
                </Typography>
                <Typography variant='h3' sx={{ textAlign: 'center',color:'#005587' ,fontWeight:'bold',animation:'fadeIn  1.4s ease-out'}}>
                 {t('madarsa')}
                </Typography>


               

                <Typography variant="body1" gutterBottom sx={{ marginTop: '20px', padding: '5px', textAlign: 'center',width:'80%',animation:'fadeIn  1.6s ease-in' }}>
                  {t('intro1')}
                </Typography>

                <Typography variant="body1" gutterBottom sx={{ marginTop: '5px', padding: '5px', textAlign: 'center',width:'80%',animation:'fadeIn  1.8s ease-in'}}>
                {t('intro2')}
                </Typography>

                <Typography variant="body1" gutterBottom sx={{ marginTop: '5px', padding: '5px', textAlign: 'center' ,animation:'fadeIn  2s ease-in'}}>{t('join')} </Typography>

        </Box>
        
        <Box sx={{ display:'flex',flexDirection:'column', padding: '1rem',backgroundColor:'green',scrollBehavior:'smooth',animation: 'slideIn 2.5s ease-out', // Apply the animation
    '@keyframes slideIn': {
      '0%': {
        opacity: 0,
        transform: 'translateY(-50px)', // Start position (above the final position)
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)', // Final position
      },
    }, }}>
            <Typography variant='h4' sx={{ textAlign: 'center', paddingTop: '15px', fontWeight: 'bold' ,color:'white'}}>{t('topReason')}</Typography>
            <Typography paragraph='p' sx={{ textAlign: 'center', padding: '1px',color:'whitesmoke', fontSize:'13px'}}>{t('topReasonBody')}</Typography>
        </Box>
       
        {/* 39aecf <Grid container spacing={2} sx={{width:'80%',margin:'auto',background:'#fafafa', scrollBehavior:'smooth'}}>
          <Grid item xs={12} md={6} >
            <img
              src={imgConfig.img8}
              alt="Student with laptop"
              style={{ width: '98%', height: '100%'}}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ paddingLeft: '20px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px', paddingTop:'15px',fontWeight:'bold',color:'#005587'}}>
                We strive for the highest standards of personal integrity, honesty and responsibility as Muslims first.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '5px',color:'#005587'}}>
                Authenticity
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                Our curriculum is based on correct and authentic knowledge based on the Quran and Sunnah.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '5px',color:'#005587'}}>
                Affordability
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '10px'}}>
                Fees are comparatively low and affordable for a degree program.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '5px' ,color:'#005587'}}>
                Accessibility
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '10px'}}>
                You can study online from anywhere in the world.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '5px',color:'#005587'}}>
                Community
              </Typography>
              <Typography variant="body1" >
                You can be part of a global community of Muslim students from over 200 countries.
              </Typography>
            </Box>
          </Grid>
        </Grid> */}

    
    
        <Box sx={{ backgroundColor: '#f4f4f9', padding: '3rem 2rem' ,color:'grey'}}>
        <Grid container spacing={1} justifyContent="center">
            
            {/* Iterate over cardContent array */}
            {cardContent.map((card, index) => (
            <Grow
                in={checked} // Animation trigger
                key={index}
                style={{ transformOrigin: '0 0 0' }} // Controls the origin of the grow animation
                {...(checked ? { timeout: index * 2000 } : {})} // Staggered animation delay
            >
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Paper 
                    elevation={3} 
                    sx={{ 
                    padding: '2rem', 
                    textAlign: 'center', 
                    position: 'relative', 
                    height: { xs: '1500px', sm: '200px', md: '250px' },  // Responsive height
                    width: { xs: '100%', sm: '100%', md: '250px' },  // Responsive width
                    margin: '0 auto', // Centering for smaller screens
                    borderRadius: '10px',
                    color: 'grey',
                    transition: 'transform 0.3s ease-in-out', // Hover effect
                    '&:hover': {
                        transform: 'scale(1.05)', // Scale on hover
                        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)', // Shadow on hover
                    }
                    }}
                > 
                    {/* Circular Icon Container */}
                    <Box 
                    sx={{
                        position: 'absolute',
                        top: '-30px', // Push circle upward
                        left: '50%',
                        transform: 'translateX(-50%)', // Center horizontally
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Shadow for circle
                    }}
                    >
                    {card.icon}
                    </Box>

                    {/* Card Content */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#005587', marginTop: '40px', marginBottom: '1rem' }}>
                    {t(`${card.title}`)}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333' }}>
                    {t(`${card.body}`)}
                    </Typography>
                </Paper>
                </Grid>
            </Grow>
            ))}

        </Grid>
        </Box>
 
       <AboutUs/>
       <Vision/>
       <Gallerysec/>
       {/* <Gallery/> */}
       <Mission/>
       {/* <Box  sx={{
                              width: '100%',
                              height: '40vh',
                              backgroundColor: '#FAF0CA', // Adjust gradient colors as needed
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#81B29A',
                          }}>

                      <Typography variant='h3'>DonateUs </Typography>
                      <Typography>Your support makes a difference</Typography>
        </Box> */}

        <ContactUs/>
        <Footer/>
   </>
  )
}

export default Landing


