import React from 'react';
import { Box, Divider, Drawer, ListItemButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';
import PrimaryButton from '../UI/PrimaryButton';
import { Fragment } from 'react';

const MailDrawer = ({ mailAppData }) => {
   const { mailMenu, toggleMailMenu, setCurrentlySelectedMailIndex, setCurrentMailIndex, currentMailIndex, currentColor, toggleMailModal, darkMode } = useContext(uiContext);

   return (
      <Box>
         <Drawer
            anchor='left'
            open={mailMenu}
            onClose={() => toggleMailMenu()}
            sx={{
               zIndex: 101,
               "& .MuiDrawer-paper": {
                  borderWidth: 0,
                  boxShadow: '0 0 50px rgba(0, 0, 0, 0.075)'
               }
            }}
         >
            <Box sx={{ width: '250px' }}>
               <Box
                  onClick={() => {
                     toggleMailMenu();
                     toggleMailModal();
                  }}
                  sx={{
                     height: '75px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     padding: '0 1rem',
                     borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                  }}
               >
                  <PrimaryButton
                     text='Compose'
                     padding='7px 20px'
                     width='100%'
                     color='#e46a76'
                  />
               </Box>
               <Box
                  sx={{
                     padding: '8px',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     justifyContent: 'flex-start',
                     rowGap: '8px',
                     overflowY: 'hidden',
                     overflowX: 'hidden',
                     '&:hover': {
                        overflowY: 'auto'
                     }
                  }}
               >
                  {mailAppData.map((item, index) => (
                     <Fragment key={index}>
                        <ListItemButton
                           disableRipple
                           onClick={() => {
                              setCurrentlySelectedMailIndex(0);
                              setCurrentMailIndex(index);
                              toggleMailMenu();
                           }}
                           sx={{
                              borderRadius: '8px',
                              px: 2.5,
                              py: 1.75,
                              maxHeight: 70,
                              transition: '300ms ease',
                              display: 'flex',
                              alignItems: 'center',
                              columnGap: '1rem',
                              width: '100%',
                              backgroundColor: index === currentMailIndex ? `${currentColor}25` : '',
                              '&:hover': {
                                 backgroundColor: index === currentMailIndex ? `${currentColor}25` : ''
                              }
                           }}
                        >
                           <item.icon
                              sx={{
                                 color: index === currentMailIndex && darkMode === 'dark' ? 'white' : 'text.disabled',
                                 fontSize: '1.3rem'
                              }}
                           />
                           <Typography
                              sx={{
                                 color: index === currentMailIndex && darkMode === 'dark' ? 'white' : 'text.disabled',
                                 fontSize: '13px',
                                 fontWeight: 500
                              }}
                           >
                              {item.title}
                           </Typography>
                        </ListItemButton>
                        {
                           (index === 4 || index === 6) &&
                           <Divider
                              sx={{
                                 width: '110%',
                                 marginLeft: '-8px',
                              }}
                           />
                        }
                     </Fragment>
                  ))}
               </Box>
            </Box>
         </Drawer>
      </Box>
   );
};

export default MailDrawer;