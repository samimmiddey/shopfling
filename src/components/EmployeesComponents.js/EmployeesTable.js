import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { uiContext } from '../../context/ContextProvider';
import CustomPagination from '../UI/CustomPagination';

const tableCell = {
   fontSize: '13px',
   color: 'text.secondary'
};

const EmployeesTable = ({ employeeData, employeesGrid }) => {
   const [page, setPage] = useState(1);

   const { darkMode } = useContext(uiContext);

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   const itemsPerPage = 12;
   const indexOfLastItem = page * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

   let pageNumbers = 0;

   for (let i = 1; i <= Math.ceil(employeeData.length / itemsPerPage); i++) {
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
               <TableHead>
                  <TableRow>
                     {employeesGrid.map((item, index) => (
                        <TableCell
                           key={index}
                           align='center'
                           sx={{ minWidth: `${item.width}px` }}
                        >
                           <Typography sx={{ fontSize: '14px', color: 'text.disabled' }}>{item.headerText}</Typography>
                        </TableCell>
                     ))}
                  </TableRow>
               </TableHead>
               <TableBody>
                  {employeeData
                     .slice(indexOfFirstItem, indexOfLastItem)
                     .map((item, index) => {
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
                                    padding: '10px 10px 10px 1.5rem'
                                 }}
                              >
                                 <Box
                                    sx={{
                                       display: 'flex',
                                       alignItems: 'center',
                                       columnGap: '10px',
                                       justifyContent: 'flex-start'
                                    }}
                                 >
                                    <img
                                       src={item.EmployeeImage}
                                       alt=""
                                       style={{
                                          height: mdWidth ? '35px' : '45px',
                                          width: mdWidth ? '35px' : '45px',
                                          objectFit: 'cover',
                                          borderRadius: '50%'
                                       }}
                                    />
                                    <Typography sx={{ fontSize: '13px', color: 'text.secondary' }}>{item.Name}</Typography>
                                 </Box>
                              </TableCell>
                              <TableCell align="center" sx={tableCell}>{item.Title}</TableCell>
                              <TableCell align="center" sx={tableCell}>{item.Country}</TableCell>
                              <TableCell align="center" sx={tableCell}>{item.HireDate}</TableCell>
                              <TableCell align="center" sx={tableCell}>{item.ReportsTo}</TableCell>
                              <TableCell align="center" sx={tableCell}>{item.EmployeeID}</TableCell>
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

export default EmployeesTable;