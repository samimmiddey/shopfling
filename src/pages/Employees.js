import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import EmployeesTable from '../components/EmployeesComponents.js/EmployeesTable';
import CustomizedTextfield from '../components/UI/CustomizedTextfield';
import { uiContext } from '../context/ContextProvider';
import { employeesData, employeesGrid } from '../data/data';

const Employees = () => {
   const [employeeData, setEmployeeData] = useState(employeesData);
   const { currentColor } = useContext(uiContext);

   const handleChange = (e) => {
      setEmployeeData(employeesData.filter(item => item.Name.includes(e.target.value)));
   }

   return (
      <Box className='container'>
         <Card elevation={0} className='card-padding'>
            <Box
               sx={theme => ({
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  [theme.breakpoints.down('sm')]: {
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     justifyContent: 'center'
                  }
               })}
            >
               <Typography
                  sx={theme => ({
                     fontSize: '2rem',
                     fontWeight: 600,
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '1.75rem'
                     },
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '1.5rem',
                        marginBottom: '1.5rem'
                     }
                  })}
               >
                  Employees
               </Typography>
               <Box
                  component="form"
                  sx={theme => ({
                     '& > :not(style)': { width: 200 },
                     [theme.breakpoints.down('sm')]: {
                        width: '100%',
                        '& > :not(style)': { width: '100%' }
                     }
                  })}
                  noValidate
                  autoComplete="off"
               >
                  <CustomizedTextfield
                     size='small'
                     label='Search'
                     color={currentColor}
                     handleChange={handleChange}
                  />
               </Box>
            </Box>
            <EmployeesTable
               employeeData={employeeData}
               employeesGrid={employeesGrid}
            />
         </Card>
      </Box>
   );
};

export default Employees;