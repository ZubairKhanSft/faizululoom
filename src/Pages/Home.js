import React, { useState, useEffect } from 'react'
import { AppBar, Box, Button, Typography, IconButton, Grid, List, ListItem, ListItemText,Toolbar,MenuItem,Select, ImageList,ImageListItem } from '@mui/material'
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { imgConfig } from '../Asset/Images/img.confg';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Facebook, YouTube, LinkedIn, Instagram, Phone, Place, Email, Language } from '@mui/icons-material';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import AboutUs from './AboutUs';
import DonateUs from './DonateUs';
import ContactUs from './ContactUs';
import Mission from './Mission';
import Vision from './Vision';



const goals = [
  'Improve the quality of higher education.',
  'Place students in student-centered learning environment that promotes economic and social development, with the aim to provide them with leadership skills and engage them in society service.',
  'Promote innovation and the pursuit of excellence in teaching and learning.',
  'Adopt modern teaching methods such as classroom learning, distance learning, e-learning, mobile learning, and lifelong self-learning.',
  'Apply universally recognized systems to ensure the quality of education and academic accreditation, both at the administrative and academic levels, and to compete with Arab and international universities.'
];
const images = [imgConfig.img1, imgConfig.img2, imgConfig.img3, imgConfig.img5, imgConfig.img6, imgConfig.img7];
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
function Home() {


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <>
      {/* 082f18 */}

      <Header/>


      
      <Grid xs={12} md={12}>

     
      
          <Box sx={{ marginTop:'0.2rem',height: "85vh", backgroundColor: "white", display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Typography variant='h3' sx={{ textAlign: 'center',color:'#005587', padding: '10px',fontWeight:'bold'}}>
              Welcome
            </Typography>
            <Typography variant='h5' sx={{ textAlign: 'center',color:'#005587' ,fontWeight:'bold'}}>
              to
            </Typography>
            <Typography variant='h3' sx={{ textAlign: 'center',color:'#005587' ,fontWeight:'bold'}}>
              Madarsa Faizul Uloom, Seoni
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ marginTop: '20px', padding: '5px', textAlign: 'center',width:'80%' }}>
              At Madarsa Faizul Uloom, we are committed to nurturing minds and hearts with a balanced curriculum that includes both traditional Islamic teachings and modern academic subjects. Our goal is to empower individuals and uplift entire communities through education.
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ marginTop: '5px', padding: '5px', textAlign: 'center',width:'80%' }}>
              We offer various courses designed to cater to the needs of our students, ensuring that education is affordable and attainable for everyone, including those from underprivileged backgrounds. Our programs include a range of subjects to provide a comprehensive education that prepares students for both religious and worldly success.
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ marginTop: '5px', padding: '5px', textAlign: 'center' }}>Join us at Madarsa Faizul Uloom and be a part of a vibrant learning community where education meets values and tradition. </Typography>

          </Box>
      </Grid>
         
     
     <Grid xs={12} md={12}>
        <Box sx={{ height: "17vh", padding: 'auto',backgroundColor:'#39aecf' }}>
            <Typography variant='h4' sx={{ textAlign: 'center', paddingTop: '15px', fontWeight: 'bold' ,color:'white'}}>Top Reasons To Study at Madarsa Faizul Uloom</Typography>
            <Typography paragraph='p' sx={{ textAlign: 'center', padding: '1px',color:'whitesmoke', fontSize:'13px'}}>We would like to remind you of some of the many benefits of studying at Madarsa Faizul Uloom</Typography>
        </Box>
     </Grid>
               
        
        <Grid container spacing={2} sx={{width:'80%',margin:'auto',background:'#fafafa'}}>
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
        </Grid>

      
         
        
     
      <AboutUs/>
      <Vision/>         
          {/* <Box sx={{  position: 'relative',alignContent:'center', width: '100%', height: '70vh', backgroundColor: "#005587", borderRadius: '10%' }}>
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                style={{ marginLeft:'14rem',width: '70%', height: '78%', objectFit: 'cover' }}
              />
              <IconButton
                onClick={prevImage}
                sx={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', color: 'white' }}
              >
                <ArrowBackIos />
              </IconButton>
              <IconButton
                onClick={nextImage}
                sx={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', color: 'white' }}
              >
                <ArrowForwardIos />
              </IconButton>
          </Box> */}


          <Grid  md={12}  >
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
 
                 <Typography variant='h3' sx={{color:'#005587',fontWeight:'bold'}}>Gallery </Typography>
             </Box>

             
          </Grid>
          
          <Grid container sx={{background:'lightgrey',padding:'1rem'}}>
            <Box sx={{ width: 900, height: 550, overflowY: 'scroll', margin:'auto',background:'lightcyan' }}>
                  
                  <ImageList>
                    {
                      itemData.map((item) => (

                        <ImageListItem key={item.img}>
                            <img
                              srcSet={`${item.img}?w=190&fit=crop&auto=format&dpr=4 2x`}
                              src={`${item.img}?w=161&fit=crop&auto=format`}
                              alt={item.title}
                              loading="lazy"
                              padding={10}
                            />
                        </ImageListItem>
                      ))
                    
                    }
                  </ImageList>
            </Box>
          </Grid>
    
      <Mission/>
      <DonateUs/>
      <ContactUs/>
      <Footer/>

    </>
  );
}

export default Home