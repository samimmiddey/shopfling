import React, { useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { uiContext } from '../context/ContextProvider';
import { chatData } from '../data/data';
import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PrimaryButton from './UI/PrimaryButton';

const Chat = () => {
   const { toggleChat, chatAnchorEl, currentColor } = useContext(uiContext);

   const open = Boolean(chatAnchorEl);

   const theme = useTheme();
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));
   const mobileWidth = useMediaQuery(theme.breakpoints.down(450));

   const handleClose = () => {
      toggleChat(null);
   };

   return (
      <Menu
         anchorEl={chatAnchorEl}
         id="account-menu"
         open={open}
         onClose={handleClose}
         PaperProps={{
            elevation: 0,
            sx: {
               overflow: 'visible',
               padding: lgWidth ? '10px 23px' : '12px 25px',
               filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.075))',
               mt: 1.5,
               '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
               },
               '&:before': {
                  content: '""',
                  display: mobileWidth ? 'none' : 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
               }
            }
         }}
         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between'
            }}
         >
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '16px'
               }}
            >
               <Typography
                  sx={theme => ({
                     fontSize: '1.1rem',
                     fontWeight: 600,
                     color: 'text.primary',
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '1rem'
                     }
                  })}
               >
                  Messages
               </Typography>
               <Button
                  variant='contained'
                  disableElevation
                  disableRipple
                  sx={{
                     minHeight: 0,
                     minWidth: 0,
                     padding: '0 10px',
                     backgroundColor: currentColor,
                     textTransform: 'none',
                     fontSize: '12px',
                     color: 'white',
                     '&:hover': {
                        backgroundColor: currentColor
                     }
                  }}
               >
                  5 new
               </Button>
            </Box>
            <IconButton
               size='medium'
               onClick={handleClose}
            >
               <CloseOutlinedIcon
                  sx={{ color: currentColor }}
               />
            </IconButton>
         </Box>
         {chatData.map((item, index) => (
            <Box key={index}>
               <>
                  <Box onClick={handleClose}>
                     <MenuItem
                        sx={theme => ({
                           width: '325px',
                           padding: '1rem',
                           [theme.breakpoints.down('lg')]: {
                              padding: '14px'
                           }
                        })}
                     >
                        <Box
                           sx={theme => ({
                              display: 'flex',
                              alignItems: 'center',
                              columnGap: '16px',
                              [theme.breakpoints.down('lg')]: {
                                 columnGap: '14px'
                              }
                           })}
                        >
                           <img
                              src={item.image}
                              alt=''
                              style={{
                                 height: '40px',
                                 width: '40px',
                                 borderRadius: '50%',
                                 objectFit: 'cover'
                              }}
                           />
                           <Box>
                              <Typography
                                 sx={theme => ({
                                    color: 'text.primary',
                                    fontWeight: 500,
                                    fontSize: '15px',
                                    [theme.breakpoints.down('sm')]: {
                                       fontSize: '14px'
                                    }
                                 })}
                              >
                                 {item.message}
                              </Typography>
                              <Typography
                                 sx={theme => ({
                                    color: 'text.secondary',
                                    fontSize: '14px',
                                    [theme.breakpoints.down('sm')]: {
                                       fontSize: '13px'
                                    }
                                 })}
                              >
                                 {item.desc}
                              </Typography>
                              <Typography
                                 sx={theme => ({
                                    color: 'text.disabled',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    [theme.breakpoints.down('sm')]: {
                                       fontSize: '11px'
                                    }
                                 })}
                              >
                                 {item.time}
                              </Typography>
                           </Box>
                        </Box>
                     </MenuItem>
                  </Box>
                  {index !== chatData.length - 1 && <Divider sx={{ margin: '0' }} />}
               </>
            </Box>
         ))}
         <Box
            sx={theme => ({
               margin: '14px 0 8px 0',
               [theme.breakpoints.down('lg')]: {
                  marginTop: '12px'
               }
            })}
         >
            <PrimaryButton text='See All Messages' width='100%' color={currentColor} />
         </Box>
      </Menu>
   );
}

export default Chat;