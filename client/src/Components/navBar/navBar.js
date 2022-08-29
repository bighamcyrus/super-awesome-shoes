import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ShoppingCart from "../Cart/index"
import { Link } from 'react-router-dom';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { IconButton } from '@mui/material';
// import { amber } from '@mui/material/colors';





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fca311',
    textAlign: 'center',
    color: '#14213D',
    width: '100px',
    height: '20px',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    position: 'center',
    justifyContent: 'center'
}));

function FormRow() {
    return (
        <React.Fragment>
            <Grid item xs={1}>
                <Link to="/category/airforces">
                    <Item>Airforces</Item>
                </Link>
            </Grid>
            <Grid item xs={1}>
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
            <Box backgroundColor="black" sx={{ flexGrow: 6, height: '200px' }}>
                <Grid container rowSpacing={5} spacing={4}>
                    <Grid item justifyContent='flex-start'>
                    </Grid>
                    <h1 className="card-header bg-light text-light p-2" style={{ fontSize: "50px", color: 'white', display: 'center' }}>KnockItOff</h1>
                    <FormRow justifyContent="flex-end" />
                {/* <IconButton aria-label="Login" primary="ffc400"> <AccountCircleIcon /> </IconButton>
                <IconButton aria-label="SignUp" color="primary"> <ArrowForwardIcon /> </IconButton> */}
                </Grid>
            </Box>
        </>
    );
};