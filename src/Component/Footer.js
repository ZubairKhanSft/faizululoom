import React from 'react'
import { Link } from 'react-router-dom';
import { Box,Typography,List,ListItem,ListItemText,IconButton,Grid,Button } from '@mui/material';
import { Facebook, YouTube, LinkedIn, Instagram, Phone, Place, Email, Language } from '@mui/icons-material';

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
  
const Footer = () => {
  return (
  <>
  <Box sx={{ backgroundColor: '#005587', color: 'white', padding: '40px 20px' }}>
        <Grid container spacing={4}>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', borderBottom: '2px solid #fdbb1c', paddingBottom: '10px', marginBottom: '10px' }}>
                {section.title}
              </Typography>
             
              <List>
                {section.items.map((item, idx) => (
                  <ListItem key={idx} sx={{ padding: '2px 0', color: 'white', textDecoration: 'none', textTransform: "none" }}>
                    <Button component={Link} to={item.link} sx={{'&:hover':{color:'cyan'}}}>
                      <ListItemText sx={{ color: 'white', textDecoration: 'none', textTransform: "none" }}>
                        <Typography

                            sx={{ color: 'white', '&:hover':{color:'cyan'}}}>

                            {/* {item.icon && <span style={{ marginRight: '8px',color:'cyan'}}>{item.icon}</span>} */}
                        {item.icon}  {item.text}
                        </Typography >
                      </ListItemText>
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              {socialIcons.map((social, index) => (
                <IconButton href={social.link} key={index} sx={{ color: 'white', margin: '0 8px','&:hover':{color:'cyan'} }}>
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
      sx={{
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="body1" sx={{color:'lightgrey'}}>
            Copyright ©2024 - Madarsa Faiz-Ul-Uloom,Seoni.All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </>
  )
}

export default Footer