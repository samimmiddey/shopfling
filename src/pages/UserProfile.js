import React from 'react';
import { Box, Typography } from '@mui/material';
import UserProfileComponent from '../components/UserProfileComponents/UserProfileComponent';
import img from '../data/avatar.jpg';

const userData = {
   name: 'Michael Roberts',
   occupation: 'Project Manager',
   img: img
};

const UserProfile = () => {
   return (
      <Box className='container'>
         <Typography
            sx={theme => ({
               fontSize: '2rem',
               fontWeight: 600,
               marginBottom: '2rem',
               color: 'text.primary',
               [theme.breakpoints.down('lg')]: {
                  fontSize: '1.75rem'
               },
               [theme.breakpoints.down('sm')]: {
                  fontSize: '1.5rem',
                  marginBottom: '1.5rem'
               }
            })}
         >
            User Profile
         </Typography>
         <UserProfileComponent userData={userData} />
      </Box>
   );
};

export default UserProfile;