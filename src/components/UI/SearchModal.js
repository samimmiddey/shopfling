import React, { useContext } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Backdrop } from '@mui/material';
import { uiContext } from '../../context/ContextProvider';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const SearchModal = () => {
   const { showSearchModal, setShowSearchModal, currentColor, darkMode } = useContext(uiContext);

   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <>
         <Backdrop
            open={showSearchModal}
            onClick={() => setShowSearchModal(false)}
            sx={{ zIndex: 9999 }}
         />
         <Box
            sx={theme => ({
               position: 'fixed',
               height: '100px',
               top: '71px',
               left: '20%',
               right: '20%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               backgroundColor: darkMode === 'dark' ? '#282c34' : 'white',
               borderRadius: '5px',
               zIndex: 99999,
               [theme.breakpoints.down('lg')]: {
                  left: '3.5rem',
                  right: '3.5rem',
                  height: '90px'
               },
               [theme.breakpoints.down('sm')]: {
                  left: '1.5rem',
                  right: '1.5rem',
                  top: '65px',
                  height: '80px'
               }
            })}
         >
            <Box
               sx={theme => ({
                  position: 'relative',
                  height: '40px',
                  width: '90%',
                  [theme.breakpoints.down('lg')]: {
                     height: '38px'
                  },
                  [theme.breakpoints.down('sm')]: {
                     height: '35px'
                  }
               })}
            >
               <input
                  placeholder='Search'
                  style={{
                     position: 'absolute',
                     borderRadius: '5px',
                     height: '100%',
                     width: '100%',
                     padding: smWidth ? '0 1rem 0 4rem' : '0 1rem 0 4.5rem',
                     border: `1px solid ${currentColor}`,
                     outline: 'none',
                     backgroundColor: darkMode === 'dark' ? '#373d48' : 'white',
                     color: darkMode === 'dark' ? 'white' : '#aaa'
                  }}
               />
               <Box
                  sx={theme => ({
                     backgroundColor: currentColor,
                     position: 'absolute',
                     top: 0,
                     left: 0,
                     bottom: 0,
                     width: '56px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     color: 'white',
                     [theme.breakpoints.down('sm')]: {
                        width: '48px'
                     }
                  })}
               >
                  <SearchOutlinedIcon />
               </Box>
               <CloseOutlinedIcon
                  onClick={() => setShowSearchModal(false)}
                  sx={{
                     cursor: 'pointer',
                     position: 'absolute',
                     top: '50%',
                     transform: 'translateY(-50%)',
                     right: '16px',
                     color: currentColor
                  }}
               />
            </Box>
         </Box>
      </>
   );
}

export default SearchModal;