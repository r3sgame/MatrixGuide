import './App.css';
import React from 'react';
import { Link, Paper, Typography } from '@mui/material';

function Home() {

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center"}}>Welcome to [MatrixQuest]!</Typography>

    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="p">MatrixQuest is a website to help you learn about basic matrix structures and operations at your own pace. Read a tutorial, try out the practice, or visit the <Link color='#fe1392' href='https://github.com/r3sgame/MatrixQuest'>GitHub source code</Link>!</Typography>
    </Paper>

    <Paper sx={{ width: 750, p: 2.5, marginTop: 1, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="p">MatrixQuest uses small but comprehensive tutorials with images to properly communicate matrix concepts. Once you're ready, you can do the practice, which is an engine that generates random matrices to identify, add, subtract, and multiply.</Typography>
    </Paper>
    </div>
  );
}

export default Home;