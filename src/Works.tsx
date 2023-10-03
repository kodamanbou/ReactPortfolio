import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import './Works.css';
import imgNetwork from './images/network.png';
import sndSource from './media/source.wav';
import sndTarget from './media/target.wav';
import sndGenerated from './media/generated.wav';

const WorksDiv = styled('div')({
  backgroundColor: '#fcfcfc',
  backgroundSize: 'cover',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
  paddingTop: '4vh',
});

function Works() {
  return (
    <WorksDiv id='works' className='Works'>
      <div className='Section-border-bottom'>
        <Typography
          variant='h5'
          color='#2c2c2c'
          fontFamily='Montserrat-Bold'
          textAlign='left'>
          Works
        </Typography>
      </div>
      <Box sx={{ width: '50%', marginTop: 4, marginBottom: 3 }}>
        <Link
          target='_blank'
          href='https://github.com/kodamanbou/Voice-Conversion-with-TF2.0'
          variant='h4'
          color='#2c2c2c'
          fontFamily='Montserrat-Regular'>
          CycleGAN-VC2
        </Link>
        <Typography
          variant='subtitle1'
          color='#2c2c2c'
          fontFamily='Montserrat-Regular'
          textAlign='left'
          mt={2}
          mb={3}>
          Implementation of CycleGAN-VC2 with Tensorflow 2. This is a model that applies CycleGAN, commonly used in the field of image translation, to voice conversion. The neural network utilized 1D gated convolution neural network (Gated CNN) for generator, and 2D Gated CNN for discriminator. The model takes Mel-cepstral coefficients as input for voice conversions.
        </Typography>
        <img src={`${imgNetwork}`} width='100%' />
      </Box>

      <div className='Section-border-top' />

      <Box sx={{ width: '50%', marginTop: 5 }}>
        <Link
          target='_blank'
          href='https://github.com/kodamanbou/RelGAN-VM-TF2.0'
          variant='h4'
          color='#2c2c2c'
          fontFamily='Montserrat-Regular'>
          RelGAN Voice Morphing
        </Link>
        <Typography
          variant='subtitle1'
          color='#2c2c2c'
          fontFamily='Montserrat-Regular'
          textAlign='left'
          mt={2}
          mb={2}>
          RelGAN Voice Conversion with Tensorflow 2. In addition to implementing the paper, we applied Spectral Normalization to ensure stable training of the GAN. This made the loss function on the discriminator side smoother.<br />
          I used <a href='https://sites.google.com/site/shinnosuketakamichi/publication/jsut' target='_blank'>JSUT</a> dataset and my own voices for training.<br />
          Below is a sample conversion by this model.
        </Typography>
        <Grid container alignItems='center' mt={5}>
          <Grid item xs={4}>
            <Typography
              variant='subtitle1'
              color='#2c2c2c'
              fontFamily='Montserrat-Regular'>
              Source
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant='subtitle1'
              color='#2c2c2c'
              fontFamily='Montserrat-Regular'>
              Target
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant='subtitle1'
              color='#2c2c2c'
              fontFamily='Montserrat-Regular'>
              Generated
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className='Border-grey' />
          </Grid>
          <Grid item xs={4}>
            <audio controls src={sndSource}>
              <a href={sndSource}>Download audio.</a>
            </audio>
          </Grid>
          <Grid item xs={4}>
            <audio controls src={sndTarget}>
              <a href={sndTarget}>Download audio.</a>
            </audio>
          </Grid>
          <Grid item xs={4}>
            <audio controls src={sndGenerated}>
              <a href={sndGenerated}>Download audio.</a>
            </audio>
          </Grid>
        </Grid>
      </Box>
    </WorksDiv>
  )
}

export default Works;
