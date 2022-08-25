import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={1}>
        <Item>Airforce</Item>
      </Grid>
      <Grid item xs={1}>
        <Item>Jordan</Item>
      </Grid>
      <Grid item xs={1}>
        <Item>Yeezy</Item>
      </Grid>
      <Grid item xs={1}>
        <Item>Designer</Item>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={4}>
          <FormRow />
        </Grid>
      
      </Grid>
    </Box>
  );
}