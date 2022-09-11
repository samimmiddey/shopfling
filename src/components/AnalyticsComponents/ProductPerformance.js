import { Avatar, Button, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';
import img1 from '../../data/img1.jpg';
import img2 from '../../data/img2.jpg';
import img3 from '../../data/avatar2.jpg';
import img4 from '../../data/img4.jpg';
import img5 from '../../data/img5.jpg';
import Paper from '@mui/material/Paper';
import CardHeader from '../UI/CardHeader';

const data = [
   {
      image: img1,
      name: 'George Costanza',
      position: 'Elite Admin',
      priority: 'Low',
      budget: '$3.9k',
      buttonColor: 'rgb(3, 201, 215)'
   },
   {
      image: img2,
      name: 'Gail Cunningham',
      position: 'Real Homes WP Theme',
      priority: 'Medium',
      budget: '$24.5k',
      buttonColor: 'rgb(251, 150, 120)'
   },
   {
      image: img3,
      name: 'Elaine Benes',
      position: 'MedicalPro WP Theme',
      priority: 'High',
      budget: '$12.8k',
      buttonColor: 'rgb(254, 201, 15)'
   },
   {
      image: img4,
      name: 'Jerry Seinfeld',
      position: 'Hosting Press HTML',
      priority: 'Critical',
      budget: '$2.4k',
      buttonColor: 'rgb(228, 106, 118)'
   },
   {
      image: img5,
      name: 'Cosmo Kramer',
      position: 'Helping Hands Theme',
      priority: 'Moderate',
      budget: '$9.3k',
      buttonColor: 'rgb(0, 194, 146)'
   }
];

const ProductPerformance = () => {
   const { currentColor, secondaryColor } = useContext(uiContext);

   const tableHeaderColor = {
      color: 'text.disabled'
   }

   return (
      <Card
         elevation={0}
         className='card-padding'
         sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
         }}
      >
         <CardHeader text='Product Performance' selectMenu={true} />
         <TableContainer
            component={Paper}
            elevation={0}
            sx={{
               "&::-webkit-scrollbar": {
                  width: 20,
                  height: 5
               },
               "&::-webkit-scrollbar-thumb": {
                  borderRadius: 2
               }
            }}
         >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell sx={{ ...tableHeaderColor, paddingLeft: 0 }}>Assigned</TableCell>
                     <TableCell sx={tableHeaderColor} align="left">Name</TableCell>
                     <TableCell sx={tableHeaderColor} align="left">Priority</TableCell>
                     <TableCell sx={tableHeaderColor} align="right">Budget</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {data.map((item, index) => (
                     <TableRow
                        key={index}
                        sx={{
                           // '&:last-child td, &:last-child th':
                           //    { border: 0 },
                           height: '70px'
                        }}
                     >
                        <TableCell
                           component="th"
                           scope="row"
                           sx={{
                              paddingLeft: 0,
                              color: 'text.primary',
                              fontWeight: 600,
                              display: 'flex',
                              alignItems: 'center',
                              columnGap: '1rem'
                           }}
                        >
                           <Avatar src={item.image} alt='' />
                           {item.name}
                        </TableCell>
                        <TableCell
                           sx={{
                              color: 'text.secondary'
                           }}
                           align="left"
                        >
                           {item.position}
                        </TableCell>
                        <TableCell
                           align="left"
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
                                 backgroundColor: index === 0 ? currentColor : index === 1 ? secondaryColor : data[index].buttonColor,
                                 '&:hover': {
                                    backgroundColor: index === 0 ? currentColor : index === 1 ? secondaryColor : data[index].buttonColor
                                 }
                              }}
                           >
                              {item.priority}
                           </Button>
                        </TableCell>
                        <TableCell
                           sx={{
                              color: 'text.secondary',
                              fontWeight: 500
                           }}
                           align="right">
                           {item.budget}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Card>
   );
};

export default ProductPerformance;