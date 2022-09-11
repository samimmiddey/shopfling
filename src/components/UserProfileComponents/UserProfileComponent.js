import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import UserProfileBackground from './UserProfileBackground';
import { uiContext } from '../../context/ContextProvider';
import UserProfileIntroduction from './UserProfileIntroduction';
import UserProfilePhotos from './UserProfilePhotos';
import UserProfileUpload from './UserProfileUpload';
import UserProfileFeed from './UserProfileFeed';
import ActionDropdown from '../UI/ActionDropdown';

const UserProfileComponent = ({ userData }) => {
   const { currentColor } = useContext(uiContext);

   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <>
         <Box>
            <UserProfileBackground
               userData={userData}
               currentColor={currentColor}
            />
            <Grid container spacing={smWidth ? 2.5 : 3} sx={{ paddingTop: '28px' }}>
               <Grid item x={12} lg={4}>
                  <UserProfileIntroduction userData={userData} />
                  <UserProfilePhotos />
               </Grid>
               <Grid item x={12} lg={8}>
                  <UserProfileUpload
                     userData={userData}
                     currentColor={currentColor}
                  />
                  <UserProfileFeed
                     userData={userData}
                     currentColor={currentColor}
                  />
               </Grid>
            </Grid>
         </Box>
         <ActionDropdown />
      </>
   );
};

export default UserProfileComponent;