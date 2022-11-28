//Import necessary libraries
import './App.css';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';

import React from 'react';
import {
  Routes, Navigate, Route, BrowserRouter
} from 'react-router-dom';

import logo from './Logo.png';

import Home from './Home';
import { LearnMenu, PracticeMenu } from './Menus';
import { Identification, Addition, MultiplicationByNumber, MultiplicationByMatrix } from './Lessons';
import { IdentificationPractice, AdditionPractice, MultiplicationByNumberPractice, MultiplicationByMatrixPractice } from './Practices';

//Set website MUI theme
function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#fe1392',
      },
      secondary: {
        main: '#ffffff14',
      },
    },
    typography: {
      h4: {
        color: 'white',
        fontFamily: "'Sono', sans-serif;",
        marginBottom: 10
      },
      h6: {
        color: 'white',
        fontFamily: "'Sono', sans-serif;",
        marginBottom: 10,
      },
      h5: {
        color: 'white',
        fontFamily: "'Sono', sans-serif;",
        marginBottom: 10,
      },
      p: {
        color: 'white',
        fontFamily: "'Poppins', sans-serif;",
        marginBottom: 10,
        fontSize: 17.5
      },
    },
  });

//Set up website routing (specific links will take you to specific pages)
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
    <AppBar position="fixed">
        <Toolbar>
        <Link href='/'><img src={logo} alt='logo' className='App-logo'/></Link>
        <Grid container justifyContent="flex-end">
          <Button className='tab' color="inherit" href='/' sx={{marginLeft: 1}}><HomeTwoToneIcon sx={{marginRight: 0.5}}/><Typography variant="h6" sx={{marginTop: 1.5}}>Home</Typography></Button>
          <Button className='tab' color="inherit" href='/learn' sx={{marginLeft: 1}}><SchoolTwoToneIcon sx={{marginRight: 0.5}}/><Typography variant="h6" sx={{marginTop: 1.5}}>Learn</Typography></Button>
          <Button className='tab' color="inherit" href='/practice' sx={{marginLeft: 1}}><EditTwoToneIcon sx={{marginRight: 0.5}}/><Typography variant="h6" sx={{marginTop: 1.5}}>Practice</Typography></Button>
          </Grid>
        </Toolbar>
      </AppBar>

      <BrowserRouter>
    <Routes>

{/*Specify which routes lead to what content*/}
<Route path="/" exact element={<Home/>} />
<Route path="/learn" exact element={<LearnMenu/>} />
<Route path="/practice" exact element={<PracticeMenu/>} />

<Route path="/what-is-a-matrix" exact element={<Identification/>} />
<Route path="/how-to-add-matrices" exact element={<Addition/>} />
<Route path="/multiplying-a-matrix-by-a-number" exact element={<MultiplicationByNumber/>} />
<Route path="/multiplying-a-matrix-by-another-matrix" exact element={<MultiplicationByMatrix/>} />

<Route path="/matrix-identification" exact element={<IdentificationPractice/>} />
<Route path="/matrix-addition" exact element={<AdditionPractice/>} />
<Route path="/matrix-multiplication-matrix-times-number" exact element={<MultiplicationByNumberPractice/>} />
<Route path="/matrix-multiplication-matrix-times-matrix" exact element={<MultiplicationByMatrixPractice/>} />

<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</BrowserRouter>
</ThemeProvider>
    </div>
  );
}

export default App;
