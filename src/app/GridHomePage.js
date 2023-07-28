import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AssessmentIcon from '@mui/icons-material/Assessment';
import './app.css';
import Button from '@mui/material/Button';

import CircularIntegration from './GetMoney';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    const [money , setMoney] = useState(1000);
    const handelmoney = () => {
        setTimeout(() => {
        setMoney(money === 1000 ? 0 : 100);
            
        }, 5000);
    }
    const productimage = 'https://cdn-icons-png.flaticon.com/512/4129/4129528.png';
    const moneyimage ='https://png.pngtree.com/png-clipart/20200225/original/pngtree-coin-money-icon-png-image_5278199.jpg';
    const eyeimage ='https://cdn.icon-icons.com/icons2/1993/PNG/512/eye_on_see_show_view_vision_watch_icon_123215.png';
    const image = "https://h5p.org/sites/default/files/styles/medium-logo/public/logos/chart-icon-color.png?itok=kpLTYHHJ";
  return (
    <>
    <center>
        <h1>
            معلومات موقعك
        </h1>
    </center>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Item className='item'>
            <img src={image} alt='' className='image'/>
            <br />
            <h1>
                9866 user
            </h1>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item className='item'>
            <img src={eyeimage} alt='' className='image'/>
            <br />
            <h1>
                10.598 view
            </h1>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item className='item'>
            <img src={moneyimage} alt='' className='image'/>
            <br />
            <h1>
                {`${money}$`}
            </h1>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item className='item'>
            <img src={productimage} alt='' className='image' />
            <br />
            <h1>
                9876 product
            </h1>
          </Item>
        </Grid>
      </Grid>
    </Box>

    <center>
        <div className='get'>
            <h1>
                سحب الاموال :
            </h1>
            <CircularIntegration/>
            <br />
            <Button variant="contained" onClick={handelmoney} disableElevation>
                سحب الان
            </Button>
        </div>
    </center>
   </>
  );
}