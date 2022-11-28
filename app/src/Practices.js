import './App.css';
import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';

//Practice for matrix identification
export function IdentificationPractice() {

  //State-based system to show answers; this variable and function will be called when the button is pressed
  const [answers, setAnswers] = useState(false);

  function RevealAnswers() {
    setAnswers(true);
  }

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center", marginTop: 20}}>Practice - Matrix Identification</Typography>

    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="p">1. Is {'{2, 5, 6}'} a matrix?</Typography>
    <br/>
    <Typography variant="p">2. Is [2 1] a matrix?</Typography>
    <br/>
    <Typography variant="p">3. Is 1 a matrix?</Typography>
    <br/>
    <Typography variant="p">4. Is (2, 6) a matrix?</Typography>
    <br/><br/>

    <Button onClick={() => RevealAnswers()}><Typography>Reveal Answers</Typography></Button>

    {answers && <div>
    <br/>
    <Typography variant="p">1. No</Typography>
    <br/>
    <Typography variant="p">2. Yes</Typography>
    <br/>
    <Typography variant="p">3. No</Typography>
    <br/>
    <Typography variant="p">4. No</Typography>
    </div>}

    </Paper>
    </div>
  );
}

//Practice for matrix addition
export function AdditionPractice() {
  const [answers, setAnswers] = useState(false);

  function RevealAnswers() {
    setAnswers(true);
  }

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center", marginTop: 20}}>Practice - Matrix Addition</Typography>

    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="p">1. Matrix X and Y are two 2x2 matrices. X(1,1) = 1; X(1,2) = 2; X(2,1) = 3; X(2,2) = 4; Y(1,1) = 5; Y(1,2) = 6; Y(2,1) = 7; Y(2,2) = 8. What is X + Y?</Typography>
    <br/><br/>
    <Typography variant="p">2. Matrix X and Y are two 2x2 matrices. X(1,1) = 5; X(1,2) = 6; X(2,1) = 7; X(2,2) = 8; Y(1,1) = 1; Y(1,2) = 2; Y(2,1) = 3; Y(2,2) = 4. What is X + Y?</Typography>
    <br/><br/>
    <Typography variant="p">3. Matrix X and Y are two 1x2 matrices. X(1,1) = 1; X(2,1) = 2; Y(1,1) = 5; Y(2,1) = 6. What is X + Y?</Typography>
    <br/><br/>
    <Typography variant="p">4. Matrix X and Y are two 2x1 matrices. X(1,1) = 1; X(1,2) = 2; Y(1,1) = 5; Y(1,2) = 6. What is X + Y?</Typography>
    <br/><br/>

    <Button onClick={() => RevealAnswers()}><Typography>Reveal Answers</Typography></Button>

    {answers && <div>
    <br/>
    <Typography variant="p">1. (X + Y)(1,1) = 6; (X + Y)(1,2) = 8; (X + Y)(2,1) = 10; (X + Y)(2,2) = 12</Typography>
    <br/>
    <Typography variant="p">2. (X + Y)(1,1) = 6; (X + Y)(1,2) = 8; (X + Y)(2,1) = 10; (X + Y)(2,2) = 12</Typography>
    <br/>
    <Typography variant="p">3. (X + Y)(1,1) = 6; (X + Y)(2,1) = 8</Typography>
    <br/>
    <Typography variant="p">4. (X + Y)(1,1) = 6; (X + Y)(2,1) = 8</Typography>
    </div>}

    </Paper>
    </div>
  );
}

//Practice for matrix-by-number multiplication
export function MultiplicationByNumberPractice() {
  const [answers, setAnswers] = useState(false);

  function RevealAnswers() {
    setAnswers(true);
  }

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center", marginTop: 20}}>Practice - Matrix by Number</Typography>

    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="p">1. Matrix X is a 2x2 matrix. X(1,1) = 1; X(1,2) = 2; X(2,1) = 3; X(2,2) = 4. What is X * 2?</Typography>
    <br/><br/>
    <Typography variant="p">2. Matrix X is a 2x2 matrix. X(1,1) = 5; X(1,2) = 6; X(2,1) = 7; X(2,2) = 8. What is X * 3?</Typography>
    <br/><br/>
    <Typography variant="p">3. Matrix X is a 1x2 matrix. X(1,1) = 1; X(2,1) = 2. What is X * 4?</Typography>
    <br/><br/>
    <Typography variant="p">4. Matrix X is a 2x1 matrix. X(1,1) = 1; X(1,2) = 2. What is X * 4?</Typography>
    <br/><br/>

    <Button onClick={() => RevealAnswers()}><Typography>Reveal Answers</Typography></Button>

    {answers && <div>
      <br/>
    <Typography variant="p">1. (X * 2)(1,1) = 2; (X * 2)(1,2) = 4; (X * 2)(2,1) = 6; (X * 2)(2,2) = 8</Typography>
    <br/>
    <Typography variant="p">2. (X * 2)(1,1) = 15; (X * 2)(1,2) = 18; (X * 2)(2,1) = 21; (X * 2)(2,2) = 24</Typography>
    <br/>
    <Typography variant="p">3. (X * 2)(1,1) = 4; (X * 2)(2,1) = 8</Typography>
    <br/>
    <Typography variant="p">4. (X * 2)(1,1) = 4; (X * 2)(2,1) = 8</Typography>
    </div>}

    </Paper>
    </div>
  );
}

//Practice for matrix-by-matrix multiplication
export function MultiplicationByMatrixPractice() {
  const [answers, setAnswers] = useState(false);

  function RevealAnswers() {
    setAnswers(true);
  }

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center", marginTop: 20}}>Practice - Matrix by Matrix</Typography>
    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="p">1. Matrix X and Y are two 2x2 matrices. X(1,1) = 1; X(1,2) = 2; X(2,1) = 3; X(2,2) = 4; Y(1,1) = 5; Y(1,2) = 6; Y(2,1) = 7; Y(2,2) = 8. What is X * Y?</Typography>
    <br/><br/>
    <Typography variant="p">2. Matrix X and Y are two 2x2 matrices. X(1,1) = 5; X(1,2) = 6; X(2,1) = 7; X(2,2) = 8; Y(1,1) = 1; Y(1,2) = 2; Y(2,1) = 3; Y(2,2) = 4. What is X * Y?</Typography>
    <br/><br/>
    <Typography variant="p">3. Matrix X is a 2x2 matrix and matrix Y is a 2x1 matrix. X(1,1) = 1; X(1,2) = 2; X(2,1) = 3; X(2,2) = 4; Y(1,1) = 5; Y(2,1) = 6. What is X * Y?</Typography>
    <br/><br/>
    <Typography variant="p">4. Matrix X is a 2x2 matrix and matrix Y is a 2x1 matrix. X(1,1) = 5; X(1,2) = 6; X(2,1) = 7; X(2,2) = 8; Y(1,1) = 1; Y(1,2) = 0. What is X * Y?</Typography>
    <br/><br/>

    <Button onClick={() => RevealAnswers()}><Typography>Reveal Answers</Typography></Button>

    {answers && <div>
    <br/>
    <Typography variant="p">1. (X * Y)(1,1) = 19; (X * Y)(1,2) = 22; (X * Y)(2,1) = 26; (X * Y)(2,2) = 34</Typography>
    <br/>
    <Typography variant="p">2. (X * Y)(1,1) = 23; (X * Y)(1,2) = 34; (X * Y)(2,1) = 31; (X * Y)(2,2) = 46</Typography>
    <br/>
    <Typography variant="p">3. (X * Y)(1,1) = 17; (X * Y)(2,1) = 39</Typography>
    <br/>
    <Typography variant="p">4. (X * Y)(1,1) = 5; (X * Y)(2,1) = 7</Typography>
    </div>}

    </Paper>
    </div>
  );
}