import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { customersData } from '../../data/data';
import { Box, Button, styled, Typography } from '@mui/material';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';
import { Link } from 'react-router-dom';

const User = styled('div')({
   display: 'flex',
   alignItems: 'center',
   columnGap: '16px',
   justifyContent: 'flex-start'
});

const Img = styled('img')({
   height: '40px',
   width: '40px',
   borderRadius: '50%',
   objectFit: 'cover'
});

const statusColors = [
   {
      status: 'active',
      color: '#53c68c'
   },
   {
      status: 'pending',
      color: '#ffbb33'
   },
   {
      status: 'completed',
      color: '#ff8c1a'
   },
   {
      status: 'canceled',
      color: '#FF5C8E'
   }
];

const CustomersTable = () => {
   const { currentColor, setCustomerID } = useContext(uiContext);

   const columns = [
      {
         field: 'name',
         headerName: 'Users',
         sortable: false,
         width: 250,
         renderCell: (params) => {
            return (
               <User>
                  <Img src={params.row.img} alt="" />
                  <Box>
                     <Typography sx={{ fontSize: '13px', color: 'text.disabled' }}>{params.row.name}</Typography>
                     <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>{params.row.email}</Typography>
                  </Box>
               </User>
            )
         }
      },
      {
         field: 'occupation',
         headerName: 'Occupation',
         width: '250'
      },
      {
         field: 'status',
         headerName: 'Status',
         width: '150',
         headerAlign: 'center',
         align: 'center',
         renderCell: (params) => {
            return (
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
                     color: 'white',
                     backgroundColor: statusColors.filter(item => item.status === params.row.status.toLowerCase())[0].color,
                     '&:hover': {
                        backgroundColor: statusColors.filter(item => item.status === params.row.status.toLowerCase())[0].color
                     }
                  }}
               >
                  {params.row.status}
               </Button>
            )
         }
      },
      {
         field: 'weeks',
         headerName: 'Weeks',
         headerAlign: 'center',
         align: 'center',
         width: 120
      },
      {
         field: 'budget',
         headerName: 'Budget',
         headerAlign: 'center',
         align: 'center',
         width: 120
      },
      {
         field: 'id',
         headerName: 'Customer ID',
         headerAlign: 'center',
         align: 'center',
         width: 130
      },
      {
         field: 'view',
         headerName: 'View',
         width: 120,
         headerAlign: 'center',
         align: 'center',
         renderCell: (params) => {
            return (
               <Link
                  to={`/customers/${params.id}`}
                  onClick={() => setCustomerID(params.id)}
               >
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
                        color: 'white',
                        backgroundColor: currentColor,
                        '&:hover': {
                           backgroundColor: currentColor
                        }
                     }}
                  >
                     Edit
                  </Button>
               </Link>
            )
         }
      }
   ];

   return (
      <Box
         sx={{
            height: '90vh',
            width: '100%'
         }}
      >
         <Box sx={{ display: 'flex', height: '100%' }}>
            <DataGrid
               rows={customersData}
               columns={columns}
               pageSize={10}
               rowsPerPageOptions={[10]}
               checkboxSelection
               density='comfortable'
            />
         </Box>
      </Box>
   );
}

export default CustomersTable;