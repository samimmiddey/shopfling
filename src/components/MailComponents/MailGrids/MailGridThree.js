import React, { useContext } from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { uiContext } from '../../../context/ContextProvider';
import PrimaryButton from '../../UI/PrimaryButton';

const MailGridThree = ({ mailAppData, categoryButtonBg }) => {
   const { currentMailIndex, currentlySelectedMailIndex, currentColor, darkMode } = useContext(uiContext);

   const border = darkMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)';

   const selectedMail = mailAppData[currentMailIndex].mails[currentlySelectedMailIndex];

   return (
      <Box
         sx={theme => ({
            padding: '1.5rem',
            maxHeight: '675px',
            overflowY: 'hidden',
            '&:hover': {
               overflowY: 'auto'
            },
            [theme.breakpoints.down('md')]: {
               display: 'none'
            }
         })}
      >
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               paddingBottom: '1rem',
               borderBottom: border
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
               borderBottom: border
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
   );
};

export default MailGridThree;