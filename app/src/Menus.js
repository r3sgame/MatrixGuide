import './App.css';
import React from 'react';
import { Button, Paper, Typography } from '@mui/material';

export function LearnMenu() {

  return (
<div>
<Typography variant="h4" sx={{textAlign: "center", marginTop: 10}}>Learn Menu</Typography>

<Typography align="center">
<Button disabled='true' variant="contained" color='secondary' sx={{width: 790, p: 2.5, marginTop: 1}}>
<Typography variant="p">Get started with your matrix education by clicking on the topic that you want to learn.</Typography>
</Button>
</Typography>

<Typography align="center">
<Button variant="contained" color='secondary' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">What is a Matrix?</Typography></Button>
<Button variant="contained" color='secondary' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">How to Add Matrices</Typography></Button>
<Button variant="contained" color='secondary' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">Multiplying a Matrix by a Number</Typography></Button>
<Button variant="contained" color='secondary' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">Multiplying a Matrix by Another Matrix</Typography></Button>
</Typography>
</div>
  );
}

export function PracticeMenu() {

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center", marginTop: 10}}>Practice Menu</Typography>
    
    <Typography align="center">
    <Button disabled='true' variant="contained" color='secondary' sx={{width: 790, p: 2.5, marginTop: 1}}>
    <Typography variant="p">Do you think you've mastered a topic? Test out your skills here! MatrixQuest will automatically generate matrices to keep questions fresh.</Typography>
    </Button>
    </Typography>

    <Typography align="center">
    <Button variant="contained" color='secondary' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">Matrix Identification</Typography></Button>
    <Button variant="contained" color='secondary' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">Matrix Addition</Typography></Button>
    <Button variant="contained" color='secondary' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">Matrix Multiplication - Matrix Times Number</Typography></Button>
    <Button variant="contained" color='secondary' sx={{width: 790, p: 2.5, marginTop: 1}}><Typography variant="p">Matrix Multiplication - Matrix Times Matrix</Typography></Button>
    </Typography>
    </div>
  );
}