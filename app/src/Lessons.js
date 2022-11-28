import './App.css';
import React from 'react';
import { Link, Paper, Typography } from '@mui/material';

import matrixExample from './Identification.png';
import matrixAddress from './Address.png';
import matrixAdd from './Addition.png';
import matrixSubtract from './Subtraction.png'
import matrixSimpleMultiply from './SimpleMultiplication.png'
import matrixComplexMultiply from './ComplexMultiplication.png'

//Lesson for matrix identification
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
    <br/>
    <Typography variant="p">"1" refers to the row that the number is located in, and "2" represents the column it is situated in. This is also called the matrix address.</Typography>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Warnings</Typography>
    <Typography variant="p">It is common to confuse matrices with other objects. Firstly, a matrix is NOT a list. Lists are simple, one-dimensional sets that are in the format of:</Typography>
    <br/><br/>
    <Typography variant="p">{`{x, y, z,...}`} (Note the curly brackets and comma-based progression.)</Typography>
    <br/><br/>
    <Typography variant="p">Matrices are also different from coordinates (Ex. (1,5)), although 2x1 matrices can be used to represent a position on a coordinate plane.</Typography>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Further Reading</Typography>
    <Link color='#fe1392' href='https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:mat-intro/a/intro-to-matrices'>Khan Academy - Intro to Matrices</Link>
    <br/>
    <Link color='#fe1392' href='https://byjus.com/jee/matrices/'>BYJU'S - Matrices Definition</Link>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Once You Are Ready...</Typography>
    <Typography variant="p">Do the <Link color='#fe1392' href='matrix-identification'>Matrix Identification Practice</Link> to test your skills!</Typography>
    </Paper>
    </div>
  );
}

//Lesson for matrix addition
export function Addition() {

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center", marginTop: 20}}>How to Add Matrices</Typography>

    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="h5" sx={{textAlign: "center"}}>Requirements</Typography>
    <Typography variant="p">To perform matrix addition, you will need at least 2 matrices of the same dimensions. For example, if you are adding matrix X and matrix Y, and matrix X has 2 rows and 2 colums, then matrix Y must also have 2 rows and 2 columns.</Typography>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Characteristics</Typography>
    <Typography variant="p">Matrix addition is commutative and associative. This means that matrices can be added in any order or priority and still result in the same answer.</Typography>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Process</Typography>
    <Typography variant="p">If you were to add matrices, each number in the first matrix would be increased by the corresponding number in the second matrix. For example:</Typography>
    <br/>
    <img src={matrixAdd} alt='logo' className='App-image'/>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Matrix Subtraction</Typography>
    <Typography variant="p">Subtracting matrices works similarly. However, it is not commutative, and the numbers are decreased. Here is an example:</Typography>
    <br/>
    <img src={matrixSubtract} alt='logo' className='App-image'/>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Further Reading</Typography>
    <Link color='#fe1392' href='https://testbook.com/learn/maths-addition-of-matrices/'>testbook - Matrix Addition: Definition, Types, Rules, Properties and More!</Link>
    <br/>
    <Link color='#fe1392' href='https://byjus.com/maths/matrix-addition/'>BYJU'S - Matrix Addition: Definition, Properties, Rules, and Examples</Link>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Once You Are Ready...</Typography>
    <Typography variant="p">Do the <Link color='#fe1392' href='matrix-addition'>Matrix Addition Practice</Link> to test your skills!</Typography>
    </Paper>
    </div>
  );
}

//Lesson for matrix-by-number multiplication
export function MultiplicationByNumber() {

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center", marginTop: 20}}>How to Multiply a Matrix by a Number</Typography>

    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="h5" sx={{textAlign: "center"}}>Requirements</Typography>
    <Typography variant="p">To perform matrix multiplication with a number, you will need 1 matrix and at least 1 number.</Typography>
    <br/><br/>
    <Typography variant="h5" sx={{textAlign: "center"}}>Characteristics</Typography>
    <Typography variant="p">Multiplying numbers by a matrix can be done in any order or priority and still return the same answer.</Typography>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Process</Typography>
    <Typography variant="p">If you were to multiply a matrix by a number, each element in the matrix would be multiplied by that number. For example:</Typography>
    <br/>
    <img src={matrixSimpleMultiply} alt='logo' className='App-image'/>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Further Reading</Typography>
    <Link color='#fe1392' href='https://testbook.com/learn/maths-addition-of-matrices/'>CCSS Math Answers - Multiplication of a Matrix by a Number</Link>
    <br/>
    <Link color='#fe1392' href='https://www.mathworksheetscenter.com/mathskills/matrices/MultiplyMatrixNumber/'>Math Worksheets Center - Multiply a Matrix by a Number</Link>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Once You Are Ready...</Typography>
    <Typography variant="p">Do the <Link color='#fe1392' href='matrix-multiplication-matrix-times-number'>Simple Matrix Multiplication Practice</Link> to test your skills!</Typography>
    </Paper>
    </div>
  );
}

//Lesson for matrix-by-matrix multiplication
export function MultiplicationByMatrix() {

  return (
    <div>
    <Typography variant="h4" sx={{textAlign: "center", marginTop: 20}}>Multiplying a Matrix by Another Matrix</Typography>

    <Paper sx={{ width: 750, p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
    <Typography variant="h5" sx={{textAlign: "center"}}>Requirements</Typography>
    <Typography variant="p">To perform matrix by matrix multiplication, you will need at least two matrices. Also, the first matrix must have the same number of colums as the second matrix's rows.</Typography>
    <br/><br/>
    <Typography variant="h5" sx={{textAlign: "center"}}>Characteristics</Typography>
    <Typography variant="p">Matrix by matrix multiplication is not commutative, meaning that the order they are placed in will change the resulting matrix.</Typography>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Process</Typography>
    <Typography variant="p">Multiplying a matrix by another matrix is more complicated than other operations. Each element in the product matrix is found through a row of the first matrix and a column of the second matrix. If you had X*Y=Z and wanted to find element (1,1) of Z, you could do so through [X(1,1)*Y(1,1)]+[X(1,2)*Y(2,1)]. Here is a visual to explain this further:</Typography>
    <br/>
    <img src={matrixComplexMultiply} alt='logo' className='App-image'/>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Further Reading</Typography>
    <Link color='#fe1392' href='https://byjus.com/maths/matrix-multiplication/'>BYJU'S - Matrix Multiplication</Link>
    <br/>
    <Link color='#fe1392' href='https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:multiplying-matrices-by-matrices/a/multiplying-matrices'>Khan Academy - Multiplying Matrices</Link>
    <br/><br/>

    <Typography variant="h5" sx={{textAlign: "center"}}>Once You Are Ready...</Typography>
    <Typography variant="p">Do the <Link color='#fe1392' href='matrix-multiplication-matrix-times-matrix'>Complex Matrix Multiplication Practice</Link> to test your skills!</Typography>
    </Paper>
    </div>
  );
}