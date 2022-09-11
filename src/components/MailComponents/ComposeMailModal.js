import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';
import { TextField } from '@mui/material';
import PrimaryButton from '../UI/PrimaryButton';

const ComposeMailModal = () => {
   const { mailModal, toggleMailModal, currentColor } = useContext(uiContext);

   return (
      <Modal
         open={mailModal}
         onClose={() => toggleMailModal()}
      >
         <Box
            className='compose-mail-modal'
            sx={theme => ({
               position: 'absolute',
               top: '50%',
               left: '50%',
               maxWidth: '600px',
               width: '100%',
               bgcolor: 'background.paper',
               boxShadow: '0 0 50px rgba(0, 0, 0, 0.075)',
               padding: '1rem 1.5rem',
               borderRadius: '10px',
               [theme.breakpoints.down('sm')]: {
                  width: '90%'
               }
            })}
         >
            <Typography sx={{ color: 'text.primary', fontWeight: 500, marginBottom: '1.5rem' }}>
               Compose Mail
            </Typography>
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '1rem'
               }}
            >
               {['To', 'Subject', 'Message', 'Attachment'].map((item, index) => (
                  <Box key={index}>
                     <Typography
                        sx={{
                           fontSize: '14px',
                           color: 'text.disabled',
                           marginBottom: '6px'
                        }}
                     >
                        {item}
                     </Typography>
                     {
                        index !== 3 && <TextField
                           size='small'
                           sx={{ width: '100%' }}
                           multiline={index === 2 && true}
                           rows={4}
                        />
                     }
                     {
                        index === 3 &&
                        <TextField
                           size='small'
                           color="primary"
                           accept="image/*"
                           type="file"
                           sx={{
                              width: '100%'
                           }}
                        />
                     }
                  </Box>
               ))}
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'flex-end',
                     columnGap: '10px',
                     marginTop: '10px'
                  }}
               >
                  <Box onClick={() => toggleMailModal()}>
                     <PrimaryButton
                        text='Send'
                        color={currentColor}
                        padding='6px 20px'
                     />
                  </Box>
                  <Box onClick={() => toggleMailModal()}>
                     <PrimaryButton
                        text='Cancel'
                        variant='outlined'
                        padding='5px 20px'
                        textColor='#fb9678'
                        color='#fb9678'
                        borderColor='#fb9678'
                     />
                  </Box>
               </Box>
            </Box>
         </Box>
      </Modal>
   );
}

export default ComposeMailModal;