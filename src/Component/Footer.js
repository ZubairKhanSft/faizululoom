import React from 'react'
import { Link } from 'react-router-dom';
import { Box,Typography,List,ListItem,ListItemText,IconButton,Grid,Button,Container,TextField } from '@mui/material';
import { Facebook,Twitter, YouTube, LinkedIn, Instagram, Phone, Place, Email, Language,ArrowForwardIos,LocationOn } from '@mui/icons-material';
import { imgConfig } from '../Asset/Images/img.confg';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/courses', label: 'Courses' },
  { path: '/contact', label: 'Contact' }
];

const socialLinks = [
  { url: 'https://facebook.com', icon: <Facebook /> },
  { url: 'https://twitter.com', icon: <Twitter /> },
  { url: 'https://instagram.com', icon: <Instagram /> },
  { url: 'https://youtube.com', icon: <YouTube /> },
  { url: 'https://linkedin.com', icon: <LinkedIn /> }
];
const sections = [
    {
      title: "ABOUT US",
      items: [
        { text: "Virtual Tour", link: "/contact" },
        { text: "Vision", link: "/vision" },
        { text: "Mission", link: "/mission" },
        { text: "Faculty", link: "/faculty" }
      ]
    },
    {
      title: "STUDENT",
      items: [
        { text: "Helpdesk", link: "/practice" },
        { text: "RegistrationDates", link: "#" },
        { text: "Registration Process", link: "#" }
      ]
    },
    {
      title: "ADMISSION",
      items: [
        { text: "Admission", link: "#" },
        { text: "Academin Calendar", link: "#" },
        { text: "RegiStudy Plans", link: "#" }
      ]
    },
  
    {
      title: "CONTACT US",
      items: [
        { text: "920022042", icon: <Phone /> },
        { text: "Google Map", icon: <Place /> },
        { text: "contact@iu.edu.sa", icon: <Email /> },
        { text: "Site Directory", icon: <Language /> }
      ]
    }
  ];
  const socialIcons = [
    { icon: <Facebook />, link: "https://www.facebook.com/p/Madarsa-faizul-uloom-seoni-100067210403046/" },
    { icon: <YouTube />, link: "https://www.youtube.com" },
    { icon: <LinkedIn />, link: "https://www.linkedin.com" },
    { icon: <Instagram />, link: "https://www.instagram.com" }
  ];
  
// const Footer = () => {
//   return (
//   <>
//   <Box sx={{ backgroundColor: '#005587', color: 'white', padding: '40px 20px' }}>
//         <Grid container spacing={4}>
//           {sections.map((section, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Typography variant="h6" sx={{ fontWeight: 'bold', borderBottom: '2px solid #fdbb1c', paddingBottom: '10px', marginBottom: '10px' }}>
//                 {section.title}
//               </Typography>
             
//               <List>
//                 {section.items.map((item, idx) => (
//                   <ListItem key={idx} sx={{ padding: '2px 0', color: 'white', textDecoration: 'none', textTransform: "none" }}>
//                     <Button component={Link} to={item.link} sx={{'&:hover':{color:'cyan'}}}>
//                       <ListItemText sx={{ color: 'white', textDecoration: 'none', textTransform: "none" }}>
//                         <Typography

//                             sx={{ color: 'white', '&:hover':{color:'cyan'}}}>

//                             {/* {item.icon && <span style={{ marginRight: '8px',color:'cyan'}}>{item.icon}</span>} */}
//                         {item.icon}  {item.text}
//                         </Typography >
//                       </ListItemText>
//                     </Button>
//                   </ListItem>
//                 ))}
//               </List>
//             </Grid>
//           ))}
//           <Grid item xs={12}>
//             <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//               {socialIcons.map((social, index) => (
//                 <IconButton href={social.link} key={index} sx={{ color: 'white', margin: '0 8px','&:hover':{color:'cyan'} }}>
//                   {social.icon}
//                 </IconButton>
//               ))}
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       <Box
//       sx={{
//         width: '100%',
//         backgroundColor: 'black',
//         color: 'white',
//         padding: '20px',
//         textAlign: 'center',
//         position: 'relative',
//         bottom: 0,
//       }}
//     >
//       <Grid container justifyContent="center">
//         <Grid item xs={12}>
//           <Typography variant="body1" sx={{color:'lightgrey'}}>
//             Copyright ©2024 - Madarsa Faiz-Ul-Uloom,Seoni.All Rights Reserved.
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   </>
//   )
// }

const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: '#0A192F',
      color: 'white',
      pt: 8,
      position: 'relative',
      borderTop: '3px solid',
      borderImage: 'linear-gradient(45deg, #005587, #00B4D8) 1'
    }}>
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ pb: 6 }}>
          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              <img 
                
                src={imgConfig.logo1} 
                alt="Madarsa Logo" 
                style={{ 
                  width: '120px', 
                  marginBottom: '24px',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ mr: 1, color: '#00B4D8' }} />
                <Typography variant="body2" component="address" sx={{ fontStyle: 'normal' }}>
                  123 Madarsa Road, Seoni
                  <br />
                  Madhya Pradesh, India
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ mr: 1, color: '#00B4D8' }} />
                <Typography variant="body2">
                  +91 12345 67890
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email sx={{ mr: 1, color: '#00B4D8' }} />
                <Typography variant="body2">
                  info@faizululoom.org
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ 
              mb: 3,
              fontWeight: 600,
              textAlign: { xs: 'center', md: 'left' },
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: { xs: '50%', md: 0 },
                transform: { xs: 'translateX(-50%)', md: 'none' },
                width: '50px',
                height: '2px',
                backgroundColor: '#00B4D8'
              }
            }}>
              Quick Links
            </Typography>
            <List dense sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              {quickLinks.map((link, index) => (
                <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                  <Button
                    component={Link}
                    to={link.path}
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      px: 1,
                      '&:hover': {
                        color: '#00B4D8',
                        transform: 'translateX(8px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <ArrowForwardIos sx={{ fontSize: '0.8rem', mr: 1 }} />
                    {link.label}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ 
              mb: 3,
              fontWeight: 600,
              textAlign: { xs: 'center', md: 'left' },
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: { xs: '50%', md: 0 },
                transform: { xs: 'translateX(-50%)', md: 'none' },
                width: '50px',
                height: '2px',
                backgroundColor: '#00B4D8'
              }
            }}>
              Updates
            </Typography>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Subscribe to our newsletter
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                size="small"
                sx={{
                  bgcolor: 'white',
                  borderRadius: '4px',
                  width: '80%',
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '4px'
                  }
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#00B4D8',
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#0088A7'
                  }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Social Links & Copyright */}
        <Box sx={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          pt: 4,
          pb: 2,
          textAlign: 'center'
        }}>
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            mb: 3
          }}>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                href={social.url}
                target="_blank"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#00B4D8',
                    transform: 'translateY(-3px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
          
          <Typography variant="body2" sx={{ 
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.75rem'
          }}>
            © {new Date().getFullYear()} Madarsa Faiz-Ul-Uloom. All rights reserved.
            <br />
            Developed with ❤️ by [ZK]
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer