import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { ordersData, ordersGrid } from '../../data/data';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import CustomPagination from '../UI/CustomPagination';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const tableCell = {
   fontSize: '13px',
   color: 'text.secondary'
}

function stableSort(array, order, orderBy) {
   if (order === 'asc' && orderBy) {
      return array.sort((a, b) => a[orderBy] > b[orderBy] ? 1 : -1);
   } else if (order === 'desc' && orderBy) {
      return array.sort((a, b) => a[orderBy] < b[orderBy] ? 1 : -1);
   }

   return array;
}

function EnhancedTableHead(props) {
   const { order, orderBy, onRequestSort } = props;

   const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
   };

   return (
      <TableHead>
         <TableRow>
            {ordersGrid.map((headCell, index) => (
               <TableCell
                  key={index}
                  align='center'
                  sortDirection={orderBy === headCell.id ? order : false}
                  sx={{ width: headCell.width }}
               >
                  {headCell.id === 'image' ? headCell.headerText :
                     <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : 'asc'}
                        onClick={createSortHandler(headCell.id)}
                     >
                        {headCell.headerText}
                        {
                           orderBy === headCell.id ? (
                              <Box component="span" sx={visuallyHidden}>
                                 {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                              </Box>
                           ) : null
                        }
                     </TableSortLabel>
                  }
               </TableCell>
            ))}
         </TableRow>
      </TableHead>
   );
}

const OrderTable = () => {
   const [order, setOrder] = useState('asc');
   const [orderBy, setOrderBy] = useState('');
   const [page, setPage] = useState(1);

   const { darkMode } = useContext(uiContext);

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
   };

   const itemsPerPage = 8;
   const indexOfLastItem = page * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

   let pageNumbers = 0;

   for (let i = 1; i <= Math.ceil(ordersData.length / itemsPerPage); i++) {
      pageNumbers++;
   }

   const handleChangePage = (page) => {
      setPage(page);
   };

   return (
      <Box>
         <TableContainer
            component={Paper}
            elevation={0}
            sx={{
               border: darkMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
               "&::-webkit-scrollbar": {
                  width: 20,
                  height: 5
               },
               "&::-webkit-scrollbar-thumb": {
                  borderRadius: 2
               }
            }}
         >
            <Table sx={{ minWidth: '875px' }}>
               <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
               />
               <TableBody>
                  {stableSort(ordersData, order, orderBy)
                     .slice(indexOfFirstItem, indexOfLastItem)
                     .map((data, index) => {
                        return (
                           <TableRow
                              hover
                              key={index}
                           >
                              <TableCell
                                 component="th"
                                 scope="row"
                                 align='center'
                                 sx={{
                                    padding: '10px'
                                 }}
                              >
                                 <img
                                    src={data.ProductImage}
                                    alt=""
                                    style={{
                                       height: mdWidth ? '60px' : '80px',
                                       width: mdWidth ? '70px' : '90px',
                                       objectFit: 'cover',
                                       borderRadius: '10px'
                                    }}
                                 />
                              </TableCell>
                              <TableCell align="center" sx={tableCell}>{data.OrderItems}</TableCell>
                              <TableCell align="center" sx={tableCell}>{data.CustomerName}</TableCell>
                              <TableCell align="center" sx={tableCell}>{data.TotalAmount}</TableCell>
                              <TableCell align="center">
                                 <Button
                                    variant='contained'
                                    disableElevation
                                    disableRipple
                                    sx={{
                                       textTransform: 'none',
                                       fontSize: '11px',
                                       borderRadius: '5px',
                                       minHeight: 0,
                                       minWidth: 0,
                                       padding: '2px 10px',
                                       backgroundColor: data.StatusBg,
                                       color: 'white',
                                       '&:hover': {
                                          backgroundColor: data.StatusBg
                                       }
                                    }}
                                 >
                                    {data.Status}
                                 </Button>
                              </TableCell>
                              <TableCell align="center" sx={tableCell}>{data.OrderID}</TableCell>
                              <TableCell align="center" sx={tableCell}>{data.Location}</TableCell>
                           </TableRow>
                        );
                     })}
               </TableBody>
            </Table>
            <CustomPagination
               page={page}
               pageNumbers={pageNumbers}
               handleChangePage={handleChangePage}
               padding='1rem 10px'
            />
         </TableContainer>
      </Box>
   );
}

export default OrderTable;