import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('I9 13900k', 159, 6.0, 24, 4.0),
  createData('GTX 750 TI', 237, 9.0, 37, 4.3),
  createData('SSD 1TB', 262, 16.0, 24, 5.0),
  createData('M.2 1TB', 305, 10, 67, 4.3),
  createData('RTX 4090 TI', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} className='basic'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>المنتجات (100g serving)</TableCell>
            <TableCell align="right">العدد المتوفر من المنتج</TableCell>
            <TableCell align="right">عدد المبيعات&nbsp;(g)</TableCell>
            <TableCell align="right">سعر المنتجات&nbsp;(g)</TableCell>
            <TableCell align="right">التقييم&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}