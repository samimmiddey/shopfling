import React from 'react';
import { Box, Card, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import PrimaryButton from '../UI/PrimaryButton';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const CustomerGridTwo = ({ customer, currentColor }) => {
   const { darkMode } = useContext(uiContext);

   const fields = [
      {
         field: 'Name',
         text: customer.name
      },
      {
         field: 'Email',
         text: customer.email
      },
      {
         field: 'Occupation',
         text: customer.occupation
      },
      {
         field: 'Project Description',
         text: "This project is all about finding problems in existing websites and fixing them properly with the help of efficient technologies that have been used to build them in the first place. These problems are not major, just small glitches that are occurring from time to time."
      },
      {
         field: 'Week',
         text: customer.weeks
      },
      {
         field: 'Budget',
         text: customer.budget
      }
   ];

   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Card elevation={0} className='card-padding'>
         <Typography sx={{ fontSize: '14px', color: 'text.primary', fontWeight: 600, marginBottom: '1.5rem' }}>
            Edit Details
         </Typography>
         <Box
            sx={theme => ({
               display: 'flex',
               flexDirection: 'column',
               rowGap: '2rem',
               marginBottom: '1.5rem',
               [theme.breakpoints.down('lg')]: {
                  rowGap: '1.5rem'
               },
               [theme.breakpoints.down('sm')]: {
                  rowGap: '1rem'
               }
            })}
         >
            {fields.map((item, index) => (
               <Box key={index}>
                  <Typography sx={{ fontSize: '14px', color: 'text.primary', fontWeight: 500, marginBottom: '5px' }}>
                     {item.field}
                  </Typography>
                  <TextField
                     size='small'
                     multiline={index === 3 ? true : false}
                     rows={index === 3 ? 4 : ''}
                     defaultValue={item.text}
                     InputProps={{
                        'aria-label': 'description',
                        style: {
                           fontSize: smWidth ? '14px' : '15px',
                           height: index === 3 ? '' : index !== 3 && smWidth ? '40px' : '45px'
                        }
                     }}
                     sx={{
                        width: '100%',
                        '& label.Mui-focused': {
                           color: currentColor
                        },
                        '& .MuiInput-underline:after': {
                           borderBottomColor: currentColor
                        },
                        '& .MuiOutlinedInput-root': {
                           '& fieldset': {
                              borderColor: darkMode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'
                           },
                           '&:hover fieldset': {
                              borderColor: currentColor
                           },
                           '&.Mui-focused fieldset': {
                              borderColor: currentColor
                           }
                        }
                     }}
                  />
               </Box>
            ))}
         </Box>
         <PrimaryButton
            text='Update'
            padding='6px 20px'
            color={currentColor}
         />
      </Card>
   );
};

export default CustomerGridTwo;