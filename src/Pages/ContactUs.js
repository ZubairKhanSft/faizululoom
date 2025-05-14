import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Typography,Grid,Box,TextField,FormControl,Button,Select,InputLabel,MenuItem,Paper,Container,Card,CardContent } from '@mui/material'
import { PhoneAndroid } from '@mui/icons-material'
import { EmailRounded } from '@mui/icons-material'
import { AccessTime } from '@mui/icons-material'
import { LocationOn } from '@mui/icons-material'
const contactDetails = [
    {
        icon: <PhoneAndroid sx={{ fontSize: 50, color: 'white' }} />,
        title: 'Call Us',
        details: ['(7770) 123 4567', '(7770) 123 4567'],
    },
    {
        icon: <EmailRounded sx={{ fontSize: 50, color: 'white' }} />,
        title: 'Mail Us',
        details: ['madarsafaizululoomseoni@gmail.com'],
    },
    {
        icon: <AccessTime sx={{ fontSize: 50, color: 'white' }} />,
        title: 'Opening Hours',
        details: ['Mon - Fri : 10am to 4pm', 'Sat - Sun : Closed'],
    },
    {
        icon: <LocationOn sx={{ fontSize: 50, color: 'white' }} />,
        title: 'Address',
        details: ['Janta Nagar, Dorli Chatarpur,', 'Seoni, Bordai, Madhya Pradesh 480661'],
    },
];

function ContactUs() {
  return (
    <>
    
    <Grid container justifyContent="center" sx={{ backgroundColor: '#f8fafc' }}>
  {/* Contact Header */}
  <Box sx={{
    width: '100%',
    py: 8,
    background: 'linear-gradient(135deg, #005587 0%, #003d5f 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center'
  }}>
    <Typography variant="h3" sx={{ 
      fontWeight: 700,
      fontSize: { xs: '2rem', md: '2.75rem' },
      mb: 2
    }}>
      Contact Us
    </Typography>
    <Typography variant="h6" sx={{ 
      fontWeight: 400,
      color: 'rgba(255,255,255,0.9)'
    }}>
      Get in touch for more information and support
    </Typography>
  </Box>

  {/* Contact Cards */}
  <Container sx={{ py: 8 }}>
    <Grid container spacing={4}>
      {contactDetails.map((contact, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ 
            p: 3,
            height: '100%',
            textAlign: 'center',
            borderRadius: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: 3
            }
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 2
            }}>
              <Box sx={{
                bgcolor: '#005587',
                color: 'white',
                p: 2,
                borderRadius: '50%',
                mb: 2,
                width: 60,
                height: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {contact.icon}
              </Box>
              <Typography variant="h6" sx={{ 
                fontWeight: 600,
                color: '#1a365d',
                mb: 1
              }}>
                {contact.title}
              </Typography>
            </Box>
            <CardContent>
              {contact.details.map((detail, idx) => (
                <Typography 
                  key={idx} 
                  variant="body2" 
                  sx={{
                    color: '#4a5568',
                    lineHeight: 1.6,
                    mb: 1,
                    wordBreak: 'break-word', // Fix for email wrapping
                    overflowWrap: 'break-word',
                    maxWidth: '100%'
                  }}
                >
                  {detail}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>

  {/* Map & Form Section */}
    

  
  
  <Grid container sx={{ width: '100%', py: 8 }}>
    {/* Map Section */}
    <Grid item xs={12} md={6} sx={{ 
      height: { xs: '400px', md: '600px' },
      order: { xs: 2, md: 1 } // Map comes after form on mobile
    }}>
      <Box sx={{ 
        height: '100%',
        width: '100%',
        p: { xs: 2, md: 0 },
        '& iframe': {
          height: '100%',
          width: '100%',
          border: 0,
          borderRadius: 2,
          minHeight: 400
        }
      }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.6811996087454!2d79.55862197391036!3d22.061787351501174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2aba9d9c8cbb15%3A0x1b72271c3339fba0!2sMadarsa%20Faiz-ul-Uloom!5e0!3m2!1sen!2sin!4v1722679907778!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Madarsa Location Map"
        />
      </Box>
    </Grid>

    {/* Contact Form */}
    <Grid item xs={10} md={6} sx={{ 
      p: { xs: 3, md: 6 },
      backgroundColor: 'white',
      order: { xs: 1, md: 2 } // Form comes first on mobile
    }}>
      <Typography variant="h4" sx={{ 
        fontWeight: 700,
        color: '#005587',
        mb: 3,
        fontSize: { xs: '1.75rem', md: '2.25rem' }
      }}>
        Contact Form
      </Typography>
      <Typography variant="body1" sx={{ 
        color: '#4a5568',
        mb: 4,
        fontSize: { xs: '1rem', md: '1.1rem' }
      }}>
        Have questions? Reach out to us directly
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Full Name"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 1
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email Address"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 1
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Phone Number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Subject</InputLabel>
            <Select
              label="Subject"
              sx={{ borderRadius: 1 }}
            >
              <MenuItem value="General Inquiry">General Inquiry</MenuItem>
              <MenuItem value="Admissions">Admissions</MenuItem>
              <MenuItem value="Support">Support</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Your Message"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 1
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#005587',
              color: 'white',
              py: 2,
              borderRadius: 1,
              fontSize: { xs: '1rem', md: '1.1rem' },
              '&:hover': {
                bgcolor: '#003d5f',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>
    
    {/* <Grid container justifyContent="center">
         
        
            <Box  sx={{
                        width: '100%',
                        height: '20vh',
                        background: 'linear-gradient(to right, #99aab5, #3f51b5)', // Adjust gradient colors as needed
                       backgroundColor:'white', 
                       display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                       // color:'#005587'
                    }}>

                <Typography variant='h3' sx={{}}>ContactUs </Typography>
                <Typography>Get in touch,for more help</Typography>
            </Box>
           
       
        
        
       
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={4}>
                {contactDetails.map((contact, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card 
                            sx={{ 
                                p: 3, 
                                textAlign: 'center', 
                                height: '90%',
                                backgroundColor: '#f7f7f7', 
                                borderRadius: 2,
                                '&:hover': {
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                },
                            }}
                            elevation={3}
                        >
                           
                            <Box 
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 2
                                }}
                            >
                                <Box 
                                    sx={{
                                        backgroundColor: '#f44336', 
                                        borderRadius: '50%', 
                                        padding: 1, 
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginBottom: 2,
                                    }}
                                >
                                    {contact.icon}
                                </Box>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    {contact.title}
                                </Typography>
                            </Box>

                           
                            <CardContent>
                                {contact.details.map((detail, idx) => (
                                    <Typography 
                                        key={idx} 
                                        variant="body2" 
                                        color="textSecondary" 
                                        sx={{
                                            wordWrap: 'break-word',
                                            fontSize: '0.9rem', 
                                            textAlign: 'center',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {detail}
                                    </Typography>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
       
            <Grid container  sx={{width:'80%',height:'21%',marginTop:'2rem',marginBottom:'1rem'}}>
                <Grid item xs={12} md={6}  sx={{backgroundColor:'#f7f7f7'}}>
                    
                    <Box sx={{ }}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.6811996087454!2d79.55862197391036!3d22.061787351501174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2aba9d9c8cbb15%3A0x1b72271c3339fba0!2sMadarsa%20Faiz-ul-Uloom!5e0!3m2!1sen!2sin!4v1722679907778!5m2!1sen!2sin" 
                            width="100%" 
                            height="500" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </Box>
                
                
                </Grid>
                
              
                <Grid item xs={12} md={6}  sx={{backgroundColor:'#f7f7f7',padding:'20px'}}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 ,color:'#0077B6'}}>
                    More Information
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2,color:'#00B4D8' }}>
                    Please fill out the quick form and we will be in touch with lightning speed.
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Name"
                        required
                        sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Phone"
                        required
                        sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#fff', borderRadius: 1 }}>
                        <InputLabel>Academic</InputLabel>
                        <Select
                        label="Academic"
                        required
                        >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Option 1</MenuItem>
                        <MenuItem value={20}>Option 2</MenuItem>
                        <MenuItem value={30}>Option 3</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Email"
                        required
                        sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Message"
                        required
                        multiline
                        rows={4}
                        sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    />
                    </Grid>
                </Grid>
                <Button variant="contained" fullWidth sx={{ backgroundColor: '#E07A5F', color: '#fff', marginTop: 2 }}>
                    SUBMIT NOW
                </Button>
                </Grid>
            </Grid>
        

       
    </Grid> */}
   
  
    
    </>
  )
}

export default ContactUs