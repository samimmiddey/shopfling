import { Box, Typography } from '@mui/material';
import React from 'react';
import ChatComponents from '../components/ChatComponents/ChatComponents';
import ChatDrawer from '../components/ChatComponents/ChatDrawer';

const Chat = () => {
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
            Chat App
         </Typography>
         <ChatComponents />
         <ChatDrawer />
      </Box>
   );
};

export default Chat;