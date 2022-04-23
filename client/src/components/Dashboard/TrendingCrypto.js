import React from 'react'
import { Link } from 'react-router-dom';
import urlSpaceReplacer from '../../helpers/urlSpaceReplacer';
import { Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {dateConvert} from '../../helpers/dateConvert';
import { display } from '@mui/system';
import '../../index.css'
import nameslice from '../../helpers/nameslice';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});

function TrendingCrypto(props) {
  console.log('this is being passed to trending props', props)
  let cleanedUrl = urlSpaceReplacer(props.id)
  return (
        
    <div>
      <Grid   style={{flex: "wrap"}} p={1}>
         <Paper
      sx={{
        p: 1,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)',
      }}>
    
   
      <Grid container sx={{ width: 250, height: 100 }} >
        <Grid item>
          <ButtonBase sx={{ width: 80, height: 100 }}>
          <Link to={`/crypto/${cleanedUrl}`}><img src={props.image} alt={props.name} width="50"/>  </Link>
          </ButtonBase>
        </Grid>
        <Grid item xs={15} sm container >
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               {nameslice(props.name)}
              </Typography>
              <Typography variant="body2" gutterBottom>
              ${(props.current_price).toFixed(2)}
              </Typography>
            <Typography variant="body2" gutterBottom>
              {dateConvert(props.last_updated)}
              </Typography>
            </Grid>
          </Grid>

          <Grid item sx={{direction: "row", justifyContent: "center"}} >
            
            
            <Typography variant="subtitle1" component="div" style={{color: "green"}} >
            {Math.round(props.price_change_percentage_24h)}%  
             </Typography>


          </Grid>
          <FileUploadIcon style={{color: "green", mt:4}}/>
        </Grid>
      </Grid>
    
    </Paper>
      </Grid>
    </div>
  )
}

export default TrendingCrypto
