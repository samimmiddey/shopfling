import React, { Fragment } from 'react';
import { Box, Divider, ListItemButton, Typography } from '@mui/material';
import PrimaryButton from '../../UI/PrimaryButton';
import { useContext } from 'react';
import { uiContext } from '../../../context/ContextProvider';

const MailGridOne = ({ mailAppData }) => {
   const { currentColor, currentMailIndex, setCurrentMailIndex, setCurrentlySelectedMailIndex, toggleMailModal, darkMode } = useContext(uiContext);

   return (
      <Box
         sx={theme => ({
            borderRight: darkMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
            minWidth: '240px',
            [theme.breakpoints.down('md')]: {
               display: 'none'
            }
         })}
      >
         <Box
            onClick={() => toggleMailModal()}
            sx={{
               height: '75px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               padding: '0 1rem',
               borderBottom: darkMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)'
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
               height: '600px',
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
   );
};

export default MailGridOne;