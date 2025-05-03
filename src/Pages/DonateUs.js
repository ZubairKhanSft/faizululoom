import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Box,Grid,Typography } from '@mui/material'
import { imgConfig } from '../Asset/Images/img.confg'
const DonateUs = () => {
  return (
    <>
   
    <Grid  md={12} xs={12} >
                  <Box  sx={{
                              width: '100%',
                              height: '40vh',
                              background: 'linear-gradient(to right, #99aab5, #3f51a5)', // Adjust gradient colors as needed
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                          }}>

                      <Typography variant='h3'>DonateUs </Typography>
                      <Typography>Your support makes a difference</Typography>
                  </Box>
              </Grid>
    

          <Grid item xs={12} md={12} sx={{backgroundColor:'#F1F9F5'}}>
            <Box sx={{ paddingLeft: '20px' ,textAlign:'center' }}>
              {/* <Typography variant='h2' sx={{fontWeight:'bold',color:'#d4982c',textAlign:'center',padding:'1rem'}}>Small Actions Lead To Big Changes </Typography> */}
              {/* <Typography variant='h2' sx={{fontWeight:'bold' ,color:'#d4982c'}}>To Big Changes</Typography> */}
              <Typography variant='h3' sx={{fontWeight:'bold',color:'#d4982c',textAlign:'center',padding:'1rem'}}>Support Madarsa Faizul Uloom</Typography>
              <Typography variant='p' sx={{padding:'2px', textAlign:'center', color:'darkgreen'}}>Madarsa Faizul Uloom, located in Seoni, Madhya Pradesh, has been a beacon of knowledge since 1965. We provide a balanced education combining Islamic teachings with modern subjects. Your donations help us offer quality education, maintain infrastructure, provide vocational training, and support scholarships for underprivileged students.</Typography>
              <Typography variant='h4' sx={{paddingTop:'1.5rem', textAlign:'center',color:'#d4982c',fontWeight:'bold'}}>How You Can Help</Typography>
              <Typography variant='p' sx={{padding:'2px', textAlign:'center'}}>Your contributions make a significant difference. Consider a monthly or one-time donation to support our mission.</Typography>
              <Typography variant='h4' sx={{paddingTop:'1.5rem', textAlign:'center', color:'#d4982c',fontWeight:'bold'}}>Bank Details:</Typography>
             
              <Typography variant='p' sx={{padding:'2px', textAlign:'center'}}>Account Name: Madarsa Faizul Uloom
                  <Typography >Account Number: 1234567890</Typography>          
                  <Typography>  Bank Name: ABC Bank</Typography>          
                  <Typography>IFSC Code: ABCD0123456</Typography>          
                  <Typography> Branch: Seoni, Madhya Pradesh</Typography>          
                          
                           
                           </Typography>
              <Typography variant='h4' sx={{padding:'2px',color:'#d4982c',fontWeight:'bold'}}>Donate Today</Typography>
              <Typography variant='p' sx={{padding:'2px'}}>Your generosity ensures we continue to provide quality education and community support. Thank you for your support.</Typography>
           
            
            </Box>
          </Grid>
        {/* </Grid> */}
    {/* s<Footer/> */}
    </>
  )
}

export default DonateUs