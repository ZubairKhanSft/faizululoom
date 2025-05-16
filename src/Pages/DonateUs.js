import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Box,Grid,Typography ,Container,Paper,List,ListItem,Button,Avatar} from '@mui/material'
import { imgConfig } from '../Asset/Images/img.confg'
import { useTheme } from '@mui/material/styles';
// const DonateUs = () => {
//   return (
//     <>
//    <Header/>
//     <Grid  md={12} xs={12} >
//                   <Box  sx={{
//                               width: '100%',
//                               height: '40vh',
//                               background: 'linear-gradient(to right, #99aab5, #3f51a5)', // Adjust gradient colors as needed
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                               color: 'white',
//                           }}>

//                       <Typography variant='h3'>DonateUs </Typography>
//                       <Typography>Your support makes a difference</Typography>
//                   </Box>
//               </Grid>
    

//           <Grid item xs={12} md={12} sx={{backgroundColor:'#F1F9F5'}}>
//             <Box sx={{ paddingLeft: '20px' ,textAlign:'center' }}>
//               {/* <Typography variant='h2' sx={{fontWeight:'bold',color:'#d4982c',textAlign:'center',padding:'1rem'}}>Small Actions Lead To Big Changes </Typography> */}
//               {/* <Typography variant='h2' sx={{fontWeight:'bold' ,color:'#d4982c'}}>To Big Changes</Typography> */}
//               <Typography variant='h3' sx={{fontWeight:'bold',color:'#d4982c',textAlign:'center',padding:'1rem'}}>Support Madarsa Faizul Uloom</Typography>
//               <Typography variant='p' sx={{padding:'2px', textAlign:'center', color:'darkgreen'}}>Madarsa Faizul Uloom, located in Seoni, Madhya Pradesh, has been a beacon of knowledge since 1965. We provide a balanced education combining Islamic teachings with modern subjects. Your donations help us offer quality education, maintain infrastructure, provide vocational training, and support scholarships for underprivileged students.</Typography>
//               <Typography variant='h4' sx={{paddingTop:'1.5rem', textAlign:'center',color:'#d4982c',fontWeight:'bold'}}>How You Can Help</Typography>
//               <Typography variant='p' sx={{padding:'2px', textAlign:'center'}}>Your contributions make a significant difference. Consider a monthly or one-time donation to support our mission.</Typography>
//               <Typography variant='h4' sx={{paddingTop:'1.5rem', textAlign:'center', color:'#d4982c',fontWeight:'bold'}}>Bank Details:</Typography>
             
//               <Typography variant='p' sx={{padding:'2px', textAlign:'center'}}>Account Name: Madarsa Faizul Uloom
//                   <Typography >Account Number: 1234567890</Typography>          
//                   <Typography>  Bank Name: ABC Bank</Typography>          
//                   <Typography>IFSC Code: ABCD0123456</Typography>          
//                   <Typography> Branch: Seoni, Madhya Pradesh</Typography>          
                          
                           
//                            </Typography>
//               <Typography variant='h4' sx={{padding:'2px',color:'#d4982c',fontWeight:'bold'}}>Donate Today</Typography>
//               <Typography variant='p' sx={{padding:'2px'}}>Your generosity ensures we continue to provide quality education and community support. Thank you for your support.</Typography>
           
            
//             </Box>
//           </Grid>
//         {/* </Grid> */}
//     <Footer/>
//     </>
//   )
// }
const DonateUs = () => {
  const theme = useTheme();
  return (
    <>
      <Header />

      {/* Banner Section */}
      {/* <Box
        sx={{
          width: '100%',
          height: { xs: '30vh', md: '40vh' },
          background: 'linear-gradient(to right, #99aab5, #3f51a5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          px: 2
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Donate Us</Typography>
        <Typography variant="subtitle1">Your support makes a difference</Typography>
      </Box> */}

      {/* Donation Info Section */}
      {/* <Box sx={{ backgroundColor: '#F1F9F5', py: 5 }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#d4982c', textAlign: 'center', mb: 2 }}>
            Support Madarsa Faizul Uloom
          </Typography>

          <Typography variant="body1" sx={{ textAlign: 'center', color: 'darkgreen', mb: 3 }}>
            Madarsa Faizul Uloom, located in Seoni, Madhya Pradesh, has been a beacon of knowledge since 1965.
            We provide a balanced education combining Islamic teachings with modern subjects.
            Your donations help us offer quality education, maintain infrastructure, provide vocational training,
            and support scholarships for underprivileged students.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#d4982c', textAlign: 'center', mt: 4 }}>
            How You Can Help
          </Typography>

          <Typography variant="body1" sx={{ textAlign: 'center', mb: 3 }}>
            Your contributions make a significant difference.
            Consider a monthly or one-time donation to support our mission.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#d4982c', textAlign: 'center', mt: 4 }}>
            Bank Details
          </Typography>

          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography>Account Name: <strong>Madarsa Faizul Uloom</strong></Typography>
            <Typography>Account Number: <strong>1234567890</strong></Typography>
            <Typography>Bank Name: <strong>ABC Bank</strong></Typography>
            <Typography>IFSC Code: <strong>ABCD0123456</strong></Typography>
            <Typography>Branch: <strong>Seoni, Madhya Pradesh</strong></Typography>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#d4982c', textAlign: 'center', mt: 4 }}>
            Donate Today
          </Typography>

          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Your generosity ensures we continue to provide quality education and community support. Thank you for your support.
          </Typography>
        </Container>
      </Box> */}

        {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'primary.dark', 
        py: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{
            fontWeight: 700,
            color: 'common.white',
            textAlign: 'center',
            mb: 2,
            fontSize: { xs: '2rem', md: '2.75rem' }
          }}>
            Support Our Educational Mission
          </Typography>
          <Typography variant="h6" sx={{
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}>
            Your contribution helps sustain traditional Islamic education combined with modern learning
          </Typography>
        </Container>
      </Box>

      {/* Donation Content */}
      <Box sx={{ 
        bgcolor: 'background.paper', 
        py: { xs: 6, md: 8 },
        position: 'relative'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Bank Details */}
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                height: '100%'
              }}>
                <Typography variant="h5" sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 3,
                  textAlign: 'center'
                }}>
                  Bank Transfer Information
                </Typography>
                
                <Box sx={{
                  '& .detail-item': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    py: 1.5,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    '&:last-child': { border: 0 }
                  }
                }}>
                  <div className="detail-item">
                    <Typography variant="body2">Account Name</Typography>
                    <Typography variant="body2" fontWeight="600">
                      Madarsa Faizul Uloom
                    </Typography>
                  </div>
                  <div className="detail-item">
                    <Typography variant="body2">Account Number</Typography>
                    <Typography variant="body2" fontFamily="monospace">
                      1234 5678 9012
                    </Typography>
                  </div>
                  <div className="detail-item">
                    <Typography variant="body2">Bank Name</Typography>
                    <Typography variant="body2">ABC Islamic Bank</Typography>
                  </div>
                  <div className="detail-item">
                    <Typography variant="body2">IFSC Code</Typography>
                    <Typography variant="body2" fontFamily="monospace">
                      ABCD0123456
                    </Typography>
                  </div>
                </Box>
              </Paper>
            </Grid>

            {/* QR Code Section */}
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                height: '100%',
                textAlign: 'center'
              }}>
                <Typography variant="h5" sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 3
                }}>
                  Instant UPI Payment
                </Typography>
                
                <Avatar
                  src="/qr-placeholder.jpg"
                  variant="rounded"
                  sx={{
                    width: 220,
                    height: 220,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'common.white',
                    padding: 2,
                    border: `1px solid ${theme.palette.divider}`
                  }}
                />

                <Typography variant="body2" sx={{
                  color: 'text.secondary',
                  mb: 3,
                  maxWidth: 300,
                  mx: 'auto'
                }}>
                  Scan using any UPI app: PhonePe, Google Pay, Paytm
                </Typography>

                <Button 
                  variant="contained" 
                  size="large"
                  sx={{
                    minWidth: 200,
                    borderRadius: 1,
                    textTransform: 'none',
                    fontWeight: 600,
                    boxShadow: theme.shadows[2],
                    '&:hover': {
                      boxShadow: theme.shadows[4]
                    }
                  }}
                >
                  Donate Now
                </Button>
              </Paper>
            </Grid>
          </Grid>

          {/* Impact Section */}
          <Box sx={{ 
            textAlign: 'center', 
            mt: { xs: 6, md: 8 },
            px: { xs: 2, md: 0 }
          }}>
            <Typography variant="h4" sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 3
            }}>
              Your Contribution Makes Difference
            </Typography>
            
            <Grid container spacing={3} justifyContent="center">
              {[
                { title: 'Students Educated', value: '500+' },
                { title: 'Years of Service', value: '55+' },
                { title: 'Courses Offered', value: '12' }
              ].map((item, index) => (
                <Grid item key={index} xs={6} md={4}>
                  <Paper sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: 'background.default'
                  }}>
                    <Typography variant="h4" sx={{ 
                      color: 'primary.main',
                      fontWeight: 700,
                      mb: 1
                    }}>
                      {item.value}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: 'text.secondary',
                      fontWeight: 500
                    }}>
                      {item.title}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default DonateUs