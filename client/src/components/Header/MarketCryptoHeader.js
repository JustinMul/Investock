import { Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material'
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

const MarketCryptoHeader = (props) => {
  return (
      <TableHead >
         <TableCell align="left"  sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: "rgb(200, 200, 200)", borderLeft: '2px solid #295A24',borderTop: '2px solid #295A24',borderBottom: '2px solid #295A24'}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>Symbol</TableCell>
          <TableCell align="left" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: "rgb(200, 200, 200)",borderTop: '2px solid #295A24',borderBottom: '2px solid #295A24'}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>Currency</TableCell>
          <TableCell align="left" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: "rgb(200, 200, 200)", borderTop: '2px solid #295A24',borderBottom: '2px solid #295A24'}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>Current Price</TableCell>
          <TableCell align="left" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: "rgb(200, 200, 200)", borderTop: '2px solid #295A24',borderBottom: '2px solid #295A24'}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>Change</TableCell>
          <TableCell align="left" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: "rgb(200, 200, 200)", borderTop: '2px solid #295A24',borderBottom: '2px solid #295A24'}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>Last Updated</TableCell>
          <TableCell align="left" sx= {(props.mode === 'light') ? 
        {fontWeight: "bold", backgroundColor: "rgb(200, 200, 200)", borderTop: '2px solid #295A24',borderBottom: '2px solid #295A24',borderRight: '2px solid #295A24'}:{fontWeight: "bold", backgroundColor: "rgb(35, 35, 35)"}
      }>{(props.dashboard === 'market')? "Add to Watch List" : "Remove"}</TableCell>
        </TableHead>

 
  )
}

export default MarketCryptoHeader