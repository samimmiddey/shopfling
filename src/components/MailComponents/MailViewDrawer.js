import React from 'react';
import { Avatar, Box, Button, Drawer, Typography } from '@mui/material';
import { uiContext } from '../../context/ContextProvider';
import { useContext } from 'react';
import PrimaryButton from '../UI/PrimaryButton';

const MailViewDrawer = ({ mailAppData, categoryButtonBg }) => {
   const { openSelectedMailDrawer, setOpenSelectedMailDrawer, currentMailIndex, currentlySelectedMailIndex, currentColor } = useContext(uiContext);

   const selectedMail = mailAppData[currentMailIndex].mails[currentlySelectedMailIndex];

   return (
      <Box>
         <Drawer
            anchor='right'
            open={openSelectedMailDrawer}
            onClose={() => setOpenSelectedMailDrawer()}
            sx={{
               zIndex: 101,
               "& .MuiDrawer-paper": {
                  borderWidth: 0,
                  boxShadow: '0 0 50px rgba(0, 0, 0, 0.075)'
               }
            }}
         >
            <Box
               sx={theme => ({
                  width: '500px',
                  [theme.breakpoints.down('sm')]: {
                     width: '425px'
                  },
                  [theme.breakpoints.down('xs')]: {
                     width: '325px'
                  },
                  [theme.breakpoints.down(350)]: {
                     width: '100%'
                  }
               })}
            >
               <Box
                  sx={{
                     padding: '1.5rem',
                     overflowY: 'hidden',
                     '&:hover': {
                        overflowY: 'auto'
                     }
                  }}
               >
                  <Box
                     onClick={() => setOpenSelectedMailDrawer()}
                     sx={{
                        paddingBottom: '1.5rem'
                     }}
                  >
                     <PrimaryButton
                        text='Back'
                        padding='5px 20px'
                        color={currentColor}
                        variant='outlined'
                        textColor={currentColor}
                     />
                  </Box>
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingBottom: '1rem',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                     }}
                  >
                     <Box
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           columnGap: '1rem'
                        }}
                     >
                        <Avatar>
                           {selectedMail.name.split(' ').join('').slice(0, 1)}
                        </Avatar>
                        <Box>
                           <Typography sx={{ color: 'text.primary', fontSize: '14px', fontWeight: 600 }}>{selectedMail.name}</Typography>
                           <Typography sx={{ color: 'text.disabled', fontSize: '12px' }}>{selectedMail.email}</Typography>
                        </Box>
                     </Box>
                     <Button
                        disableElevation
                        disableRipple
                        sx={{
                           textTransform: 'none',
                           fontSize: '10px',
                           borderRadius: '10px',
                           minHeight: 0,
                           minWidth: 0,
                           padding: '1px 10px',
                           color: 'white',
                           backgroundColor: `${categoryButtonBg.filter(bg => bg.category === selectedMail.category)[0].color}`,
                           '&:hover': {
                              backgroundColor: `${categoryButtonBg.filter(bg => bg.category === selectedMail.category)[0].color}`
                           }
                        }}
                     >
                        {selectedMail.category}
                     </Button>
                  </Box>
                  <Box
                     sx={{
                        padding: '1rem 0',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                     }}
                  >
                     <Typography sx={{ fontWeight: 600, color: 'text.primary' }}>{selectedMail.subject}</Typography>
                  </Box>
                  <Box sx={{ padding: '2rem 0' }}>
                     <Typography sx={{ fontSize: '15px', color: 'text.primary' }}>{selectedMail.message}</Typography>
                  </Box>
                  <PrimaryButton
                     text='Reply'
                     padding='5px 20px'
                     color={currentColor}
                     variant='outlined'
                     textColor={currentColor}
                  />
               </Box>
            </Box>
         </Drawer>
      </Box>
   );
};

export default MailViewDrawer;