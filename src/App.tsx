import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase'
import Link from '@mui/material/Link';

import './App.css';
import Profile from './Profile';
import Works from './Works';
import Contact from './Contact';

const images = [
  {
    id: 'profile',
    url: '/images/profile.jpg',
    title: 'About',
    width: '30%',
    bgPath: '/images/waveform_profile.png'
  },
  {
    id: 'works',
    url: '/images/work.png',
    title: 'Works',
    width: '30%',
    bgPath: '/images/waveform_works.png'
  },
  {
    id: 'contact',
    url: '/images/contact.png',
    title: 'Contact',
    width: '30%',
    bgPath: '/images/waveform_contacts.png'
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    // '& .MuiTypography-root': {
    //   border: '4px solid currentColor',
    // },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const AppHeader = styled('header')({
  backgroundColor: '#282c34',
  backgroundImage: 'url(/images/waveform_welcome.png)',
  backgroundSize: 'cover',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
});

function App() {
  const [bgPath, setBGPath] = React.useState('/images/waveform_welcome.png');
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App" id='pagetop'>
      <AppHeader style={{
        backgroundImage: `url(${bgPath})`,
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-in'
      }}>
        <Typography
          variant='h1'
          fontFamily='Montserrat-Thin'
          mt='10vh'
          mb='50vh'
        >
          Hideo's Portfolio
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: 'center' }}>
          {images.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
                marginRight: 10,
                marginLeft: 10,
              }}
              onMouseEnter={() => {
                setBGPath(image.bgPath);
              }}
              onMouseLeave={() => {
                setBGPath('/images/waveform_welcome.png');
              }}
              onClick={() => {
                handleClick(image.id);
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component='span'
                  variant='subtitle1'
                  color='inherit'
                  sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
      </AppHeader>

      <Profile />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
