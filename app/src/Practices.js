import './App.css';
import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';

export function IdentificationPractice() {
  const [answers, setAnswers] = useState(false);

  function RevealAnswers() {
    setAnswers(true);
  }

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center"}}>Practice - Matrix Identification</Typography>

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

export function AdditionPractice() {
  const [answers, setAnswers] = useState(false);

  function RevealAnswers() {
    setAnswers(true);
  }

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center"}}>Practice - Matrix Identification</Typography>

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

export function MultiplicationByNumberPractice() {
  const [answers, setAnswers] = useState(false);

  function RevealAnswers() {
    setAnswers(true);
  }

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center"}}>Practice - Matrix Identification</Typography>

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

export function MultiplicationByMatrixPractice() {
  const [answers, setAnswers] = useState(false);

  function RevealAnswers() {
    setAnswers(true);
  }

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center"}}>Practice - Matrix Identification</Typography>

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