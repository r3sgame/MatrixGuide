import './App.css';
import React from 'react';
import { Paper, Typography } from '@mui/material';

export function IdentificationPractice() {

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center"}}>Learn Menu</Typography>

    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="p">Get started with your matrix education by clicking on the topic that you want to learn.</Typography>
    </Paper>
    </div>
  );
}

export function AdditionPractice() {

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center"}}>Practice Menu</Typography>

    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="p">Do you think you've mastered a topic? Test out your skills here! MatrixQuest will automatically generate matrices to keep questions fresh.</Typography>
    </Paper>
    </div>
  );
}