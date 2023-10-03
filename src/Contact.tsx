import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Contact.css'

const ContactDiv = styled('div')({
  backgroundColor: '#282c34',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
});

function Contact() {
  return (
    <ContactDiv id='contact' className='Contact'>
      <div className='Border-white'>
        <Typography
          variant='h5'
          fontFamily='Montserrat-Bold'
          textAlign='left'
          mt={3}>
          Contact
        </Typography>
      </div>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: 'center' }}>
        <Link href='mailto:kodamanbou0424@gmail.com' color='inherit' mt={3} mb={3}>
          <Avatar sx={{ backgroundColor: '#fb4436' }}>
            <MailIcon />
          </Avatar>
        </Link>
        <Link href='https://twitter.com/kodamanbou0424' color='inherit' mt={3} mb={3} mr={3} ml={3}>
          <Avatar sx={{ backgroundColor: '#00acee' }}>
            <TwitterIcon />
          </Avatar>
        </Link>
        <Link href='https://github.com/kodamanbou' color='inherit' mt={3} mb={3}>
          <Avatar sx={{ backgroundColor: '#171515' }}>
            <GitHubIcon />
          </Avatar>
        </Link>
      </Box>
    </ContactDiv>
  )
}

export default Contact;
