import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ShoppingCart from "../Cart/index"
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { IconButton } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FCA311',
    textAlign: 'center',
    color: '#14213D',
    width: '100px',
    height: '35px',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    position: 'center',
    justifyContent: 'center',
    fontFamily: 'Silkscreen, cursive',
    marginTop: '23px'
}));
function FormRow() {
    return (
        <React.Fragment>
            <Grid item xs={1}>
                <Link to="/category/airforces">
                    <Item>Airforces</Item>
                </Link>
            </Grid>
            <Grid item xs={1} >
                <Link to="/category/jordan">
                    <Item>Jordan</Item>
                </Link>
            </Grid>
            <Grid item xs={1}>
                <Link to="category/yeezy">
                    <Item>Yeezy</Item>
                </Link>
            </Grid>
            <Grid item xs={1}>
                <Link to="/category/designer">
                    <Item>Designer</Item>
                </Link>
            </Grid>
            {/* <Grid accent={amber}>
            <IconButton aria-label="Login" primary="ffc400"> <AccountCircleIcon /> </IconButton>
            </Grid>
            <Grid>
            <IconButton aria-label="SignUp" primary="ffc400"> <ArrowForwardIcon /> </IconButton>
            </Grid> */}
            <ShoppingCart />
        </React.Fragment>
    );
}
export default function NestedGrid() {
    return (
        <>
            <Box backgroundColor="black" sx={{ flexGrow: 6, height: '150px' }}>
                <Grid container rowSpacing={5} spacing={4}>
                    <Grid item justifyContent='flex-start'>
                    </Grid>
                    <h1 className="card-header bg-light text-light p-2" style={{ fontSize: "50px", color: 'white', display: 'center', marginLeft: '20px', marginTop: '50px',  fontFamily: 'Silkscreen, cursive' }}>KickItOff</h1>
                    <FormRow justifyContent="flex-end" />
                    <Link to="/login"><IconButton aria-label="SignUp" style={{color: '#FFB300', marginLeft: '110px', marginTop: '45px', fontSize: '30px', fontFamily: 'Silkscreen, cursive'}}> <ArrowForwardIcon style={{fontSize: '30px'}} />Login</IconButton></Link>
                    <Link to="/signup"><IconButton aria-label="Login" style={{color: '#FFB300', marginLeft: '35px', marginTop: '45px',fontSize: '30px', fontFamily: 'Silkscreen, cursive'}}> <AccountBoxIcon style={{fontSize: '28px'}} />Sign-Up</IconButton></Link>
                </Grid>
            </Box>
        </>
    );
};