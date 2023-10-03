import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import './Profile.css';

const ProfDiv = styled('div')({
  backgroundColor: '#fcfcfc',
  backgroundSize: 'cover',
  minHeight: '100vh',
  minWidth: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
});

function Profile() {
  return (
    <ProfDiv id='profile' className='Profile'>
      <Avatar
        alt='Hideo Kodama'
        src='/images/profile.jpg'
        sx={{ width: 200, height: 200, marginTop: 8 }}
      />

      <Typography
        variant='h3'
        color='#2c2c2c'
        fontFamily='Montserrat-Regular'
        mt={2}>
        Hideo Kodama
      </Typography>

      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', width: '50%', marginTop: '5vh' }}>
        <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Typography
              variant='h4'
              color='#2c2c2c'
              fontFamily='Montserrat-Regular'
              align='left'
              sx={{ textDecorationLine: 'underline', textDecorationColor: '#2dc6b5' }}>
              Languages
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant='h6'
              color='#2c2c2c'
              fontFamily='Montserrat-Regular'
              align='left'
              mt={1}>
              Java, Python, C++, C#, TypeScript(React)
            </Typography>
            <Typography
              variant='subtitle1'
              color='#2c2c2c'
              fontFamily='Montserrat-Regular'
              align='left'
              mt={2}>
              I mainly focus on implementing machine learning applications using Python and TensorFlow.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant='h4'
              color='#2c2c2c'
              fontFamily='Montserrat-Regular'
              align='left'
              sx={{ textDecorationLine: 'underline', textDecorationColor: '#2dc6b5' }}>
              Interests
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant='h6'
              color='#2c2c2c'
              fontFamily='Montserrat-Regular'
              align='left'
              mt={1}>
              Deep learning, Generative models, Voice conversion, Bio signal processing
            </Typography>
            <Typography
              variant='subtitle1'
              color='#2c2c2c'
              fontFamily='Montserrat-Regular'
              align='left'
              mt={2}>
              Optimization with ML models is my passion.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant='h4'
              color='#2c2c2c'
              fontFamily='Montserrat-Regular'
              align='left'
              sx={{ textDecorationLine: 'underline', textDecorationColor: '#2dc6b5' }}>
              I am a ...
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant='h6'
              color='#2c2c2c'
              fontFamily='Montserrat-Regular'
              align='left'
              mt={1}>
              Kaggle Competitions Contributor, Member of "LOCAL Students"
            </Typography>
            <Typography
              variant='subtitle1'
              color='#2c2c2c'
              fontFamily='Montserrat-Regular'
              align='left'
              mt={2}>
              I am a student studying at NIT Asahikawa college.<br />
              I love to create something brand new by combining existing technologies.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </ProfDiv>
  )
}

export default Profile;
