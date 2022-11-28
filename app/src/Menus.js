import './App.css';
import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';

//Menu to select a lesson
export function LearnMenu() {

return (
<div>
<Typography variant="h4" sx={{textAlign: "center", marginTop: 10}}>Learn Menu</Typography>

<Grid container justifyContent="center">
    <Paper sx={{width: 750, p: 2.5, marginTop: 1}}>
    <Typography variant="p">Get started with your matrix education by clicking on the topic that you want to learn.</Typography>
    </Paper>
    </Grid>

<Typography align="center">
<Button variant="contained" color='secondary' href='/what-is-a-matrix' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">What is a Matrix?</Typography></Button>
<Button variant="contained" color='secondary' href='/how-to-add-matrices' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">How to Add Matrices</Typography></Button>
<Button variant="contained" color='secondary' href='/multiplying-a-matrix-by-a-number' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">Multiplying a Matrix by a Number</Typography></Button>
<Button variant="contained" color='secondary' href='/multiplying-a-matrix-by-another-matrix' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">Multiplying a Matrix by Another Matrix</Typography></Button>
</Typography>
</div>
  );
}

//Menu to select a practice
export function PracticeMenu() {

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center", marginTop: 10}}>Practice Menu</Typography>
    
    <Grid container justifyContent="center">
    <Paper sx={{width: 750, p: 2.5, marginTop: 1}}>
    <Typography variant="p">Do you think you've mastered a topic? Test out your skills here! MatrixQuest provides high-quality questions to answer.</Typography>
    </Paper>
    </Grid>

    <Typography align="center">
    <Button variant="contained" color='secondary' href='/matrix-identification' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">Matrix Identification</Typography></Button>
    <Button variant="contained" color='secondary' href='/matrix-addition' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">Matrix Addition</Typography></Button>
    <Button variant="contained" color='secondary' href='/matrix-multiplication-matrix-times-number' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">Matrix Multiplication - Matrix Times Number</Typography></Button>
    <Button variant="contained" color='secondary' href='/matrix-multiplication-matrix-times-matrix' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">Matrix Multiplication - Matrix Times Matrix</Typography></Button>
    </Typography>
    </div>
  );
}