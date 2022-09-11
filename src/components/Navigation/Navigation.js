import React from 'react';
import Box from '@mui/material/Box';
import Drawer from './Drawer';
import ThemeBar from './ThemeBar';
import { styled } from '@mui/material/styles';
import Cart from '../Cart';
import Chat from '../Chat';
import Notification from '../Notification';
import UserProfile from '../UserProfile';

const DrawerHeader = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   padding: theme.spacing(0, 1),
   paddingLeft: 25,
   ...theme.mixins.toolbar,
}));

const BoxComponent = styled(Box)(({ theme }) => ({
   [theme.breakpoints.down('xl')]: {
      margin: '0'
   }
}));

export default function Navigation(props) {
   return (
      <>
         <Box display={{ lg: 'flex' }}>
            <Drawer />
            <BoxComponent component="main" sx={{ flexGrow: 1, p: 3 }}>
               <DrawerHeader />
               {props.children}
            </BoxComponent>
         </Box>
         <Cart />
         <ThemeBar />
         <Chat />
         <Notification />
         <UserProfile />
      </>
   );
}