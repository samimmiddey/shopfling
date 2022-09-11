import React, { useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { uiContext } from '../context/ContextProvider';
import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { userProfileData } from '../data/data';
import avatar from '../data/avatar.jpg';
import PrimaryButton from './UI/PrimaryButton';

const UserProfile = () => {
   const { toggleUserProfile, userProfileAnchorEl, currentColor } = useContext(uiContext);

   const open = Boolean(userProfileAnchorEl);

   const theme = useTheme();
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));
   const mobileWidth = useMediaQuery(theme.breakpoints.down(450));

   const handleClose = () => {
      toggleUserProfile(null);
   };

   return (
      <Menu
         anchorEl={userProfileAnchorEl}
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
               },
            },
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
               User Profile
            </Typography>
            <IconButton
               size='medium'
               onClick={handleClose}
            >
               <CloseOutlinedIcon
                  sx={{ color: currentColor }}
               />
            </IconButton>
         </Box>
         <Box
            sx={theme => ({
               display: 'flex',
               alignItems: 'center',
               columnGap: '16px',
               padding: '14px 1rem 1.5rem 1rem',
               [theme.breakpoints.down('lg')]: {
                  columnGap: '14px',
                  padding: '10px 1rem 1.25rem 1rem'
               },
               [theme.breakpoints.down('sm')]: {
                  columnGap: '14px',
                  padding: '6px 1rem 1rem 1rem'
               }
            })}
         >
            <img
               src={avatar}
               alt=""
               style={{
                  height: '80px',
                  width: '80px',
                  objectFit: 'cover',
                  borderRadius: '50%'
               }}
            />
            <Box>
               <Typography
                  sx={theme => ({
                     fontSize: '1.1rem',
                     fontWeight: 600,
                     color: 'text.primary',
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '1rem'
                     },
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '15px'
                     }
                  })}
               >
                  Michael Roberts
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
                  Administrator
               </Typography>
               <Typography
                  sx={theme => ({
                     color: 'text.disabled',
                     fontSize: '14px',
                     fontWeight: 500,
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '13px'
                     }
                  })}
               >
                  info@shopfling.com
               </Typography>
            </Box>
         </Box>
         {userProfileData.map((item, index) => (
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
                           <Button
                              variant='contained'
                              disableElevation
                              sx={{
                                 minWidth: 0,
                                 minHeight: 0,
                                 padding: '14px',
                                 borderRadius: '10px',
                                 backgroundColor: item.iconBg,
                                 color: item.iconColor,
                                 '&:hover': {
                                    backgroundColor: item.iconBg,
                                    opacity: 0.8
                                 }
                              }}
                           >
                              {item.icon}
                           </Button>
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
                                 {item.title}
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
                           </Box>
                        </Box>
                     </MenuItem>
                  </Box>
                  {index !== userProfileData.length - 1 && <Divider sx={{ margin: '0' }} />}
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
            <PrimaryButton text='Logout' width='100%' color={currentColor} />
         </Box>
      </Menu>
   );
}

export default UserProfile;