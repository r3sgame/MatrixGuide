import './App.css';
import React from 'react';
import { Paper, Typography } from '@mui/material';

import matrixExample from './Identification.png';
import matrixAddress from './Address.png';

export function Identification() {

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center", marginTop: 20}}>What is a Matrix?</Typography>

    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="h5" sx={{textAlign: "center"}}>Definition</Typography>
    <Typography variant="p">A matrix is a two-dimensional array of numbers used extensively in linear algebra and programming (2D Arrays). They are often assigned to single-lettered captialized variables (E.g. A, B, X).</Typography>
    <br/><br/>
    <Typography variant="p">Example of a matrix:</Typography>
    <br/>
    <img src={matrixExample} alt='logo' className='App-image'/>
    <br/>
    <Typography variant="p">Note the object's grid-like structure with a number in each slot.</Typography>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Characteristics</Typography>
    <Typography variant="p">Matrices generally have two defining traits: rows and columns. Take matrix X from earlier, for example:</Typography>
    <br/>
    <img src={matrixExample} alt='logo' className='App-image'/>
    <br/>
    <Typography variant="p">This would have two rows and two columns (or in other words, a 2x2 matrix) because there are two number slots extending to the right (columns) and two number slots extending down (rows).</Typography>
    <br/><br/>
    <Typography variant="p">If you wanted to refer to a specific element in the matrix (Ex. 0), you would need to reference the row, then the column in this notation:</Typography>
    <br/>
    <img src={matrixAddress} alt='logo' className='App-image'/>
    </Paper>
    </div>
  );
}

export function Addition() {

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center"}}>Practice Menu</Typography>

    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="p">Do you think you've mastered a topic? Test out your skills here! MatrixQuest will automatically generate matrices to keep questions fresh.</Typography>
    </Paper>
    </div>
  );
}

export function MultiplicationByNumber() {

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center"}}>Practice Menu</Typography>

    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="p">Do you think you've mastered a topic? Test out your skills here! MatrixQuest will automatically generate matrices to keep questions fresh.</Typography>
    </Paper>
    </div>
  );
}

export function MultiplicationByMatrix() {

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center"}}>Practice Menu</Typography>

    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="p">Do you think you've mastered a topic? Test out your skills here! MatrixQuest will automatically generate matrices to keep questions fresh.</Typography>
    </Paper>
    </div>
  );
}