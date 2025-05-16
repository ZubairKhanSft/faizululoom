import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
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

// function Header() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const { i18n } = useTranslation();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleLanguageChange = (event) => {
//     const newLanguage = event.target.value;
//     i18n.changeLanguage(newLanguage);
//     localStorage.setItem('language', newLanguage);
//   };

//   // Mobile menu drawer
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <List>
//         {pages.map((item, index) => (
//           <ListItem key={index} component="a" href={item.path} sx={{ color: 'lightsalmon' }}>
//             <ListItemText primary={item.name} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <AppBar position="sticky" sx={{ backgroundColor: 'lightsalmon', height: isMobile ? '4rem' : '5rem' }}>
//         <Toolbar>
//           <Grid container alignItems="center" spacing={2}>
            
//             {/* Mobile Menu Icon */}
//             {isMobile && (
//               <Grid item xs={4}>
//                 <IconButton
//                   color="inherit"
//                   aria-label="open drawer"
//                   edge="start"
//                   onClick={handleDrawerToggle}
//                   sx={{ mr: 2 }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </Grid>
//             )}

//             {/* Logo Section */}
//             <Grid item xs={isMobile ? 4 : 3} container justifyContent="center">
//               <img 
//                 src={imgConfig.logo1} 
//                 alt="Logo" 
//                 style={{ 
//                   width: isMobile ? '70px' : '90px', 
//                   padding: '7px',
//                   maxHeight: isMobile ? '50px' : '80px'
//                 }} 
//               />
//             </Grid>

//             {/* Desktop Menu */}
//             {!isMobile && (
//               <Grid item sm={6}>
//                 <Grid container justifyContent="center" spacing={2}>
//                   {pages.map((menu, index) => (
//                     <Grid item key={index}>
//                       <Button
//                         component="a"
//                         href={menu.path}
//                         sx={{ 
//                           color: 'white', 
//                           textTransform: 'none', 
//                           fontWeight: 'bold', 
//                           fontSize: '1rem',
//                           '&:hover': { 
//                             color: 'cyan',
//                             backgroundColor: 'rgba(255,255,255,0.1)' 
//                           } 
//                         }}
//                       >
//                         {menu.name}
//                       </Button>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Grid>
//             )}

//             {/* Language Dropdown */}
//             <Grid item xs={isMobile ? 4 : 3} container justifyContent="flex-end">
//               <Select
//                 sx={{ 
//                   color: 'white',
//                   border: '1px solid white',
//                   borderRadius: '4px',
//                   padding: '0 8px',
//                   width: isMobile ? '100%' : '120px',
//                   fontSize: isMobile ? '0.75rem' : '1rem',
//                   '& .MuiSelect-icon': {
//                     color: 'white'
//                   }
//                 }}
//                 variant="outlined"
//                 value={i18n.language}
//                 onChange={handleLanguageChange}
//               >
//                 <MenuItem value="en" sx={{ fontSize: '0.9rem' }}>English</MenuItem>
//                 <MenuItem value="ar" sx={{ fontSize: '0.9rem' }}>Arabic</MenuItem>
//                 <MenuItem value="ur" sx={{ fontSize: '0.9rem' }}>Urdu</MenuItem>
//                 <MenuItem value="hi" sx={{ fontSize: '0.9rem' }}>Hindi</MenuItem>
//               </Select>
//             </Grid>
//           </Grid>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//         sx={{
//           '& .MuiDrawer-paper': { 
//             boxSizing: 'border-box',
//             width: 240 
//           }
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </>
//   );
// }

// function Header() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const { i18n } = useTranslation();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleLanguageChange = (event) => {
//     const newLanguage = event.target.value;
//     i18n.changeLanguage(newLanguage);
//     localStorage.setItem('language', newLanguage);
//   };

//   // Mobile menu drawer
//   const drawer = (
//     <Box sx={{ width: 250, height: '100%', backgroundColor: 'background.paper' }}>
//       <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
//         <img 
//           src={imgConfig.logo1} 
//           alt="Logo" 
//           style={{ 
//             width: '80px',
//             height: 'auto',
//             margin: '0 auto',
//             display: 'block'
//           }} 
//         />
//       </Box>
//       <List sx={{ py: 2 }}>
//         {pages.map((item, index) => (
//           <ListItem 
//             key={index} 
//             component="a" 
//             href={item.path}
//             onClick={handleDrawerToggle}
//             sx={{ 
//               py: 1.5,
//               '&:hover': {
//                 backgroundColor: 'action.hover',
//               }
//             }}
//           >
//             <ListItemText 
//               primary={item.name} 
//               primaryTypographyProps={{ 
//                 variant: 'body1',
//                 color: 'text.primary',
//                 fontWeight: 500 
//               }}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <AppBar 
//         position="sticky" 
//         sx={{ 
//           backgroundColor: 'background.paper',
//           color: 'text.primary',
//           boxShadow: theme.shadows[2],
//           height: isMobile ? '64px' : '80px'
//         }}
//       >
//         <Toolbar>
//           <Grid container alignItems="center" spacing={2}>
//             {/* Mobile Menu Icon */}
//             <Grid item xs={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
//               <IconButton
//                 edge="start"
//                 onClick={handleDrawerToggle}
//                 sx={{ color: 'primary.main' }}
//                 aria-label="open menu"
//               >
//                 <MenuIcon />
//               </IconButton>
//             </Grid>

//             {/* Logo Section */}
//             <Grid item xs={8} md={3} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
//               <Box sx={{
//                 transition: 'transform 0.3s ease',
//                 '&:hover': { transform: 'scale(1.05)' }
//               }}>
//                 <img 
//                   src={imgConfig.logo1} 
//                   alt="Logo" 
//                   style={{ 
//                     width: isMobile ? '70px' : '90px',
//                     height: 'auto',
//                     maxHeight: '80px'
//                   }} 
//                 />
//               </Box>
//             </Grid>

//             {/* Desktop Menu */}
//             <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'center',
//                 gap: 4
//               }}>
//                 {pages.map((menu, index) => (
//                   <Button
//                     key={index}
//                     component="a"
//                     href={menu.path}
//                     sx={{ 
//                       color: 'text.primary',
//                       textTransform: 'none',
//                       fontWeight: 500,
//                       fontSize: '1rem',
//                       position: 'relative',
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         bottom: 0,
//                         left: 0,
//                         width: 0,
//                         height: '2px',
//                         backgroundColor: 'primary.main',
//                         transition: 'width 0.3s ease',
//                       },
//                       '&:hover::after': {
//                         width: '100%',
//                       }
//                     }}
//                   >
//                     {menu.name}
//                   </Button>
//                 ))}
//               </Box>
//             </Grid>

//             {/* Language Dropdown */}
//             <Grid item xs={2} md={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//               <Select
//                 value={i18n.language}
//                 onChange={handleLanguageChange}
//                 variant="outlined"
//                 size="small"
//                 sx={{ 
//                   width: isMobile ? '100%' : 120,
//                   '& .MuiOutlinedInput-notchedOutline': {
//                     borderColor: 'divider'
//                   },
//                   '&:hover .MuiOutlinedInput-notchedOutline': {
//                     borderColor: 'primary.main'
//                   }
//                 }}
//               >
//                 <MenuItem value="en" sx={{ typography: 'body2' }}>English</MenuItem>
//                 <MenuItem value="ar" sx={{ typography: 'body2' }}>العربية</MenuItem>
//                 <MenuItem value="ur" sx={{ typography: 'body2' }}>اردو</MenuItem>
//                 <MenuItem value="hi" sx={{ typography: 'body2' }}>हिन्दी</MenuItem>
//               </Select>
//             </Grid>
//           </Grid>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//         sx={{
//           '& .MuiDrawer-paper': { 
//             boxSizing: 'border-box',
//             width: 250,
//             boxShadow: theme.shadows[16]
//           }
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </>
//   );
// }

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { i18n } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Check if path matches current location
  const isActive = (path) => location.pathname === path;

  // Mobile menu drawer
  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ p: 3, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <img 
          src={imgConfig.logo1} 
          alt="Logo" 
          style={{ 
            width: '100px',
            height: 'auto',
            margin: '0 auto',
            display: 'block'
          }} 
        />
      </Box>
      <List sx={{ py: 2 }}>
        {pages.map((item, index) => (
          <ListItem 
            key={index} 
            component="a" 
            href={item.path}
            onClick={handleDrawerToggle}
            sx={{ 
              py: 1.5,
              borderLeft: isActive(item.path) ? `4px solid ${theme.palette.primary.main}` : 'none',
              bgcolor: isActive(item.path) ? 'action.selected' : 'transparent',
              '&:hover': {
                bgcolor: 'action.hover',
              }
            }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{ 
                variant: 'body1',
                color: isActive(item.path) ? 'primary.main' : 'text.primary',
                fontWeight: isActive(item.path) ? 600 : 500
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          bgcolor: 'background.paper',
          color: 'text.primary',
          borderBottom: `1px solid ${theme.palette.divider}`,
          height: isMobile ? '64px' : '88px'
        }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            {/* Mobile Menu Icon */}
            <Grid item xs={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: 'text.primary' }}
                aria-label="open menu"
              >
                <MenuIcon />
              </IconButton>
            </Grid>

            {/* Logo Section */}
            <Grid item xs={8} md={3} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Box sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <img 
                  src={imgConfig.logo1} 
                  alt="Logo" 
                  style={{ 
                    width: isMobile ? '70px' : '100px',
                    height: 'auto',
                    maxHeight: '80px'
                  }} 
                />
              </Box>
            </Grid>

            {/* Desktop Menu */}
            <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                gap: 4
              }}>
                {pages.map((menu, index) => (
                  <Button
                    key={index}
                    component="a"
                    href={menu.path}
                    sx={{ 
                      color: isActive(menu.path) ? 'primary.main' : 'text.primary',
                      textTransform: 'none',
                      fontWeight: isActive(menu.path) ? 600 : 500,
                      fontSize: '1rem',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: isActive(menu.path) ? '100%' : 0,
                        height: '2px',
                        bgcolor: 'primary.main',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '100%',
                      }
                    }}
                  >
                    {menu.name}
                  </Button>
                ))}
              </Box>
            </Grid>

            {/* Language Dropdown */}
            <Grid item xs={2} md={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Select
                value={i18n.language}
                onChange={handleLanguageChange}
                variant="outlined"
                size="small"
                sx={{ 
                  width: isMobile ? '100%' : 120,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'divider'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main'
                  },
                  '& .MuiSelect-select': {
                    py: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }
                }}
              >
                <MenuItem value="en" sx={{ typography: 'body2' }}>🇺🇸 English</MenuItem>
                <MenuItem value="ar" sx={{ typography: 'body2' }}>🇸🇦 العربية</MenuItem>
                <MenuItem value="ur" sx={{ typography: 'body2' }}>🇵🇰 اردو</MenuItem>
                <MenuItem value="hi" sx={{ typography: 'body2' }}>🇮🇳 हिन्दी</MenuItem>
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
            width: 280,
            boxShadow: theme.shadows[16]
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
export default Header