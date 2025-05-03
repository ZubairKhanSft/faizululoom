import React from 'react'
import { Grid,Box,Typography } from '@mui/material'
export const timep = () => {
  return (
    <>
<Grid
      container
      spacing={2}
      sx={{
        width: '80%',
        margin: 'auto',
        background: '#fafafa',
        scrollBehavior: 'smooth',
        visibility: isVisible ? 'visible' : 'hidden', // Hide initially
        opacity: isVisible ? 1 : 0, // Fade in when visible
        transition: 'opacity 0.5s ease-in-out', // Smooth fade-in transition
      }}
      ref={sectionRef} // Attach ref for intersection observer
    >
      {/* Left Image Box */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          animation: isVisible
            ? 'slideInFromLeft 1s ease-out'
            : 'none', // Apply animation when visible
          '@keyframes slideInFromLeft': {
            '0%': {
              opacity: 0,
              transform: 'translateX(-100px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateX(0)',
            },
          },
        }}
      >
        <img
          src={imgConfig.img8}
          alt="Student with laptop"
          style={{ width: '98%', height: '100%' }}
        />
      </Grid>

      {/* Right Content Box */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          animation: isVisible
            ? 'slideInFromRight 1s ease-out'
            : 'none', // Apply animation when visible
          '@keyframes slideInFromRight': {
            '0%': {
              opacity: 0,
              transform: 'translateX(100px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateX(0)',
            },
          },
        }}
      >
        <Box sx={{ paddingLeft: '20px' }}>
          {/* Heading animation from top to bottom */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              marginBottom: '10px',
              paddingTop: '15px',
              fontWeight: 'bold',
              color: '#005587',
              animation: isVisible
                ? 'slideInFromTop 1.2s ease-out'
                : 'none', // Apply animation when visible
              '@keyframes slideInFromTop': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(-50px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            We strive for the highest standards of personal integrity, honesty and responsibility as Muslims first.
          </Typography>

          {/* Descriptions animation from bottom to top */}
          {[
            { title: 'Authenticity', text: 'Our curriculum is based on correct and authentic knowledge based on the Quran and Sunnah.' },
            { title: 'Affordability', text: 'Fees are comparatively low and affordable for a degree program.' },
            { title: 'Accessibility', text: 'You can study online from anywhere in the world.' },
            { title: 'Community', text: 'You can be part of a global community of Muslim students from over 200 countries.' },
          ].map(({ title, text }, index) => (
            <React.Fragment key={index}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: '5px',
                  color: '#005587',
                  animation: isVisible
                    ? 'slideInFromBottom 1.3s ease-out'
                    : 'none', // Apply animation when visible
                  '@keyframes slideInFromBottom': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateY(50px)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                }}
              >
                {title}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                {text}
              </Typography>
            </React.Fragment>
          ))}
        </Box>
      </Grid>
    </Grid>

    </>
  )
}
