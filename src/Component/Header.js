import React,{useState} from 'react'
import { AppBar,Toolbar,Grid,Typography,Button,MenuItem,Select,useMediaQuery,useTheme,List,ListItem,ListItemText,IconButton,Drawer,Box } from '@mui/material'
import { imgConfig } from '../Asset/Images/img.confg';
import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
const pages = [
    { name: 'Home', path: '/' },
    { name: 'AboutUs', path: '/about' },
    { name: 'Donate', path: '/donate' },
    { name: 'ContactUs', path: '/contact' },
    { name: 'Gallery', path: '/gallery' }
  ];
// function Header() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const { i18n } = useTranslation(); // Get i18n object

//   const handleLanguageChange = (event) => {
//       const newLanguage = event.target.value;
//       i18n.changeLanguage(newLanguage);
//       localStorage.setItem('language',newLanguage); // store language in localStorage
//   };
//   return (
//     <>
//     {/* //39aecf */}
    
   

//     <AppBar position="sticky" sx={{ backgroundColor: 'lightsalmon', height: isMobile ? '4rem' : '5rem' }}>
//       <Toolbar>
//         <Grid container alignItems="center" spacing={isMobile ? 1 : 2}>
          
//           {/* Logo Section */}
//           <Grid item xs={6} sm={3} container justifyContent={isMobile ? 'center' : 'flex-start'}>
//             <Typography variant="h6" component="div">
//               <img src={imgConfig.logo1} alt="Logo" style={{ width: isMobile ? '80px' : '90px', padding: '7px' }} />
//             </Typography>
//           </Grid>

//           {/* Menu Section */}
//           {!isMobile && (
//             <Grid item sm={6}>
//               <Grid container justifyContent="center" spacing={2}>
//                 {pages.map((menu, index) => (
//                   <Grid item key={index}>
//                     <Button
//                       component="a"
//                       href={menu.path}
//                       sx={{ 
//                         color: 'white', 
//                         textTransform: 'none', 
//                         fontWeight: 'bold', 
//                         fontSize: '1rem', 
//                         '&:hover': { color: 'cyan' } 
//                       }}
//                     >
//                       {menu.name}
//                     </Button>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Grid>
//           )}

//           {/* Language Dropdown Section */}
//           <Grid item xs={6} sm={3} container justifyContent="flex-end">
//             <Select
//               sx={{ 
//                 color: 'white', 
//                 border: '1px solid white', 
//                 borderRadius: '4px', 
//                 padding: '0 8px',
//                 width: isMobile ? '100%' : 'auto',
//                 fontSize: isMobile ? '0.8rem' : '1rem',
//               }}
//               variant="outlined"
//               defaultValue="en"
//               IconComponent={LanguageIcon}
//               value={i18n.language}
//               onChange={handleLanguageChange}
//             >
//               <MenuItem value="en">English</MenuItem>
//               <MenuItem value="ar">Arabic</MenuItem>
//               <MenuItem value="ur">Urdu</MenuItem>
//               <MenuItem value="hi">Hindi</MenuItem>
//             </Select>
//           </Grid>
//         </Grid>
//       </Toolbar>
//     </AppBar>
//     </>
//   )
// }

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Mobile menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {pages.map((item, index) => (
          <ListItem key={index} component="a" href={item.path} sx={{ color: 'lightsalmon' }}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: 'lightsalmon', height: isMobile ? '4rem' : '5rem' }}>
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            
            {/* Mobile Menu Icon */}
            {isMobile && (
              <Grid item xs={4}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            )}

            {/* Logo Section */}
            <Grid item xs={isMobile ? 4 : 3} container justifyContent="center">
              <img 
                src={imgConfig.logo1} 
                alt="Logo" 
                style={{ 
                  width: isMobile ? '70px' : '90px', 
                  padding: '7px',
                  maxHeight: isMobile ? '50px' : '80px'
                }} 
              />
            </Grid>

            {/* Desktop Menu */}
            {!isMobile && (
              <Grid item sm={6}>
                <Grid container justifyContent="center" spacing={2}>
                  {pages.map((menu, index) => (
                    <Grid item key={index}>
                      <Button
                        component="a"
                        href={menu.path}
                        sx={{ 
                          color: 'white', 
                          textTransform: 'none', 
                          fontWeight: 'bold', 
                          fontSize: '1rem',
                          '&:hover': { 
                            color: 'cyan',
                            backgroundColor: 'rgba(255,255,255,0.1)' 
                          } 
                        }}
                      >
                        {menu.name}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )}

            {/* Language Dropdown */}
            <Grid item xs={isMobile ? 4 : 3} container justifyContent="flex-end">
              <Select
                sx={{ 
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '4px',
                  padding: '0 8px',
                  width: isMobile ? '100%' : '120px',
                  fontSize: isMobile ? '0.75rem' : '1rem',
                  '& .MuiSelect-icon': {
                    color: 'white'
                  }
                }}
                variant="outlined"
                value={i18n.language}
                onChange={handleLanguageChange}
              >
                <MenuItem value="en" sx={{ fontSize: '0.9rem' }}>English</MenuItem>
                <MenuItem value="ar" sx={{ fontSize: '0.9rem' }}>Arabic</MenuItem>
                <MenuItem value="ur" sx={{ fontSize: '0.9rem' }}>Urdu</MenuItem>
                <MenuItem value="hi" sx={{ fontSize: '0.9rem' }}>Hindi</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            width: 240 
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Header