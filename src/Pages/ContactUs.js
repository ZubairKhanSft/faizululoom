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
    
   
    
    <Grid container justifyContent="center">
         
        
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
           
       
        
        
        {/* <Container sx={{ mt: 5 ,backgroundColor:'white'}}>
            <Grid container spacing={4}>
                {contactDetails.map((contact, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper 
                            sx={{ 
                                p: 4, 
                                width:'100%',
                                textAlign: 'center', 
                                height: '100%',
                                backgroundColor: '#f7f7f7', 
                                borderRadius: 2,
                                '&:hover': {
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                }
                            }}
                            elevation={3}
                        >
                            <div 
                                style={{
                                    backgroundColor: '#f44336', 
                                    borderRadius: '50%', 
                                    padding: 15, 
                                    display: 'inline-block',
                                    marginBottom: 20
                                }}
                            >
                                {contact.icon}
                            </div>
                            <Typography variant="h6" gutterBottom>
                                {contact.title}
                            </Typography>
                            
                            {
                            
                            contact.details.map((detail, idx) => (
                               
                                <Typography key={idx} variant="body2" color="textSecondary">
                                    {detail}
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container> */}
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
                            {/* Icon and Title Section */}
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

                            {/* Contact Details */}
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
                
                {/* More Information Section */}
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
        

       
    </Grid>
   
  
    
    </>
  )
}

export default ContactUs