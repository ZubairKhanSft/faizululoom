import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Card,CardMedia,Typography,CardContent,Box,Grid} from '@mui/material'
import { imgConfig } from '../Asset/Images/img.confg'


// FacultyData.js
const facultyData = {
  principal: {
    name: "Prof. Abdul Wadood Khan",
    degree: "Fazil Alim,",
    teach: "Quran Tafseer,Principles of Hadeeth,Islamic Creed",
    image: imgConfig.madanisb, // from imgConfig or public/images
  },
  teachers: [
    {
      name: "Prof. Mohiuddin Madani",
      degree: "Fazil Alim",
      teach: "IslamicCreed, Principles Of Hadith, Arabic Literature, Fiqh",
      image: imgConfig.mfu,
    },
    {
      name: "Prof. Abdul Haq",
      degree: "Alim Fazil",
     teach: "IslamicCreed, Quran Translation, Arabic Literature, Fiqh,Hadees",

      image: "/images/teacher2.jpg",
    },
    {
      name: "Prof. Mohammad Mubeen",
     teach: "IslamicCreed, Quran Translation, Arabic Grammar, Fiqh,Hadees",
      degree: "Alim Fazil",
      image: imgConfig.Mubeen,
    },
    {
      name: "Prof. Mohammad Shakeel",
      teach: " Principles of Quran Translation, Arabic Grammar,Principles of Hadees",
      degree: "Alim Fazil",
      image: imgConfig.shakeel,
    },
    {
      name: "Prof. Iqbal Khan",
      teach: " Quran Translation,Arabic Grammar, Urdu Grammar",
      degree: "Alim Fazil",
      image: "/images/teacher3.jpg",
    },
    {
      name: "Prof. Zeeshan Qureshi",
      teach: " Quran,Urdu and Arabic Literature",
      degree: "Alim Fazil",
      image: imgConfig.Zeeshan,
    },
    {
      name: "Prof. Mohammad Shahid",
      teach: " Quran Hifz",
      degree: "Hafiz Alim Fazil",
      image: imgConfig.Shahid,
    },
    {
      name: "Prof. Mohammad Ahfaz",
      teach: " Quran Hifz",
      degree: "Hafiz Alim Fazil",
      image: "/images/teacher3.jpg",
    },
    {
      name: "Prof. Irfanul Haq Khan",
      teach: "Sociology",
      degree: "M.A(Sociology)",
      image: imgConfig.Irfanul,
    },
    {
      name: "Prof. Inam Ur Raheem",
      teach: "Sociology",
      degree: "M.A(Sociology)",
      image: imgConfig.Inam,
    },
    {
      name: "Prof. Irshad Ul Ghani",
      teach: "Sociology,Basic Computer Science",
      degree: "M.A(Sociology)",
      image: imgConfig.master,
    },
    {
      name: "Prof. Abdul Wahid Khan",
      teach: "Arabic Grammar and Literature",
      degree: "Alim Fazil",
      image: imgConfig.abwahid,
    },
  ],
};
const Faculty = () => {
    const { principal, teachers } = facultyData;
  return (
    <>
    <Header/>

    <Grid container justifyContent="center" >
         
         <Grid  md={12}  >
             <Box  sx={{
                         width: '100%',
                         height: '7vh',
                         backgroundColor:'white',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         color: 'white',
                         py:5
                     }}>
 
                 <Typography variant='h3' sx={{color:'#005587',fontWeight:'bold'}}>Faculty </Typography>
             </Box>
            
         </Grid>
        
          {/* <Grid container justifyContent="center" sx={{width:'100%',backgroundColor:'lightgrey'}} >
                <Grid md={12}>

                        

                    <Box sx={{margin:'auto'}}>
                        <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={imgConfig.img1}
                            // alt={`${name}'s photo`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                            hehe
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                            hehe
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', marginTop: '10px' }}>
                            hehe
                            </Typography>
                        </CardContent>
                        </Card>
                    </Box>
                </Grid>
          </Grid> */}

            {/* Principal Row */}
            <Grid container justifyContent="center" sx={{ mb: { xs: 4, md: 6 } }}>
                <Grid item xs={12} sm={10} md={6} lg={5}>
                <Card
                    sx={{
                    width: "80%",
                    boxShadow: 6,
                    borderRadius: 3,
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": { transform: "scale(1.02)", boxShadow: 10 }
                    }}
                >
                    <CardMedia component="img" height="340" image={principal.image} sx={{height: 340,objectFit: 'contain'}} alt={principal.name} />
                    <CardContent sx={{ textAlign: "center", py: 3 }}>
                    <Typography variant="h5" fontWeight="bold" color="primary">
                        {principal.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {principal.degree}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Subject Teaches : {principal.teach}
                    </Typography>
                    {principal.bio && (
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {principal.bio}
                        </Typography>
                    )}
                    </CardContent>
                </Card>
                </Grid>
            </Grid>

             {/* Teachers Grid */}
     <Grid 
  container 
  spacing={4} 
  justifyContent="center" 
  sx={{ 
    px: { xs: 2, sm: 4, md: 6 }, // left-right padding responsive
    py: { xs: 4, sm: 6, md: 8 }  // top-bottom padding responsive
  }}
>
  {teachers.map((t, idx) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
      <Card
        sx={{
          height: "100%", // ✅ sab cards same height
          maxWidth: 300,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: 4,
          borderRadius: 2,
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": { transform: "translateY(-5px) scale(1.03)", boxShadow: 8 }
        }}
      >
        <CardMedia
          component="img"
          image={t.image}
          alt={t.name}
          sx={{
            height: 220,
            objectFit: "contain",
            backgroundColor: "#f9f9f9"
          }}
        />
        <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
          <Typography variant="h6" fontWeight="600">
            {t.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t.degree}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Subject Teaches: {t.teach}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

        </Grid>
    <Footer/>
    </>
  )
}

export default Faculty