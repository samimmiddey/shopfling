import { Avatar, Box, Card, Typography } from '@mui/material'
import React from 'react'
import PrimaryButton from '../UI/PrimaryButton'

const CustomerGridOne = ({ customer }) => {
   return (
      <Card elevation={0} className='card-padding'>
         <Avatar
            src={customer.img}
            alt=''
            sx={theme => ({
               height: '100px',
               width: '100px',
               [theme.breakpoints.down('lg')]: {
                  height: '90px',
                  width: '90px'
               },
               [theme.breakpoints.down('sm')]: {
                  height: '80px',
                  width: '80px'
               }
            })}
         />
         <Box sx={{ marginTop: '12px', display: 'flex', flexDirection: 'column', rowGap: '1.3rem', alignItems: 'flex-start' }}>
            <Box>
               <Typography
                  sx={theme => ({
                     color: 'text.primary',
                     fontSize: '1.5rem',
                     fontWeight: 600,
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '1.25rem'
                     },
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '1.1rem'
                     }
                  })}
               >
                  {customer.name}
               </Typography>
               <Typography sx={{ color: 'text.secondary', fontSize: '13px' }}>
                  {customer.occupation}
               </Typography>
            </Box>
            <Box>
               <Typography sx={{ color: 'text.primary', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                  Address
               </Typography>
               <Typography sx={{ color: 'text.secondary', fontSize: '13px' }}>
                  11th Boulevard Avenue, Near Washington St., Opposite of Apex Tower, New York, USA
               </Typography>
            </Box>
            <PrimaryButton
               text='Delete Account'
               padding='6px 20px'
               color='#e46a76'
            />
         </Box>
      </Card>
   )
}

export default CustomerGridOne