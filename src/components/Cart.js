import React, { Fragment, useContext } from 'react';
import { IconButton, Box, Typography, Divider, useMediaQuery, ListItemButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { uiContext } from '../context/ContextProvider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { cartData } from '../data/data';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@emotion/react';
import PrimaryButton from './UI/PrimaryButton';

const names = ['Ice Cream', 'Fresh Tomato', 'Candies'];

const Cart = () => {
   const { cart, currentColor, toggleCart } = useContext(uiContext);

   const theme = useTheme();
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   const textStyle = {
      fontSize: lgWidth ? '13px' : '14px',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: 'text.primary'
   }

   return (
      <Box>
         <Drawer
            anchor={'right'}
            open={cart}
            sx={{
               zIndex: 999999,
               "& .MuiDrawer-paper": {
                  borderWidth: 0,
                  boxShadow: '0 0 50px rgba(0, 0, 0, 0.075)'
               }
            }}
            onClose={() => toggleCart()}
         >
            <List
               sx={theme => ({
                  width: '350px',
                  // backgroundColor: 'white',
                  [theme.breakpoints.down('sm')]: {
                     width: '284px'
                  }
               })}
            >
               <Box
                  sx={theme => ({
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                     padding: '7px 1rem 7px 26px',
                     [theme.breakpoints.down('sm')]: {
                        padding: '4px 1rem 4px 20px'
                     }
                  })}
               >
                  <Typography
                     sx={theme => ({
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'text.primary',
                        [theme.breakpoints.down('lg')]: {
                           fontSize: '1.1rem'
                        }
                     })}
                  >
                     Shopping Cart
                  </Typography>
                  <IconButton
                     size='medium'
                     onClick={() => toggleCart()}
                  >
                     <ChevronRightIcon
                        sx={{ color: currentColor }}
                     />
                  </IconButton>
               </Box>
               {cartData.map((item, index) => (
                  <Fragment key={index}>
                     <ListItemButton disableRipple>
                        <Box
                           sx={theme => ({
                              padding: '0 10px',
                              margin: '1rem 0',
                              display: 'flex',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              columnGap: '10px',
                              [theme.breakpoints.down('lg')]: {
                                 margin: '12px 0'
                              },
                              [theme.breakpoints.down('sm')]: {
                                 margin: '8px 0',
                                 padding: '0 4px'
                              }
                           })}
                        >
                           <img
                              src={item.image}
                              style={{
                                 height: lgWidth && !smWidth ? '60px' : lgWidth && smWidth ? '50px' : '70px',
                                 width: lgWidth && !smWidth ? '70px' : lgWidth && smWidth ? '60px' : '80px',
                                 borderRadius: '10px',
                                 marginTop: '5px'
                              }}
                              alt=""
                           />
                           <Box>
                              <Box>
                                 <Typography
                                    sx={theme => ({
                                       color: 'text.primary',
                                       fontSize: '16px',
                                       fontWeight: 500,
                                       [theme.breakpoints.down('lg')]: {
                                          fontSize: '15px'
                                       },
                                       [theme.breakpoints.down('sm')]: {
                                          fontSize: '14px'
                                       }
                                    })}
                                 >
                                    {names[index]}
                                 </Typography>
                                 <Typography
                                    sx={theme => ({
                                       color: 'text.disabled',
                                       fontSize: '12px',
                                       fontWeight: 500,
                                       marginTop: '2px',
                                       [theme.breakpoints.down('sm')]: {
                                          fontSize: '11px'
                                       }
                                    })}
                                 >
                                    {item.category.toUpperCase()}
                                 </Typography>
                              </Box>
                              <Box sx={{ marginTop: '8px', display: 'flex', alignItems: 'center', columnGap: '12px' }}>
                                 <Typography
                                    sx={theme => ({
                                       color: 'text.primary',
                                       fontSize: '17px',
                                       fontWeight: 500,
                                       [theme.breakpoints.down('lg')]: {
                                          fontSize: '15px'
                                       },
                                       [theme.breakpoints.down('sm')]: {
                                          fontSize: '14px'
                                       }
                                    })}
                                 >
                                    {item.price}
                                 </Typography>
                                 <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '5px' }}>
                                    <IconButton size='small' variant='text'>
                                       <RemoveIcon sx={{ fontSize: '1rem', color: 'text.disabled' }} />
                                    </IconButton>
                                    <Typography
                                       sx={theme => ({
                                          fontWeight: 500,
                                          height: '30px',
                                          width: '35px',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          border: '1px solid #ccc',
                                          borderRadius: '5px',
                                          color: 'text.disabled',
                                          fontSize: '14px',
                                          [theme.breakpoints.down('lg')]: {
                                             fontSize: '13px',
                                             height: '28px',
                                             width: '33px'
                                          },
                                          [theme.breakpoints.down('sm')]: {
                                             fontSize: '12px',
                                             height: '25px',
                                             width: '30px'
                                          }
                                       })}
                                    >
                                       1
                                    </Typography>
                                    <IconButton size='small' variant='text'>
                                       <AddIcon sx={{ fontSize: '1rem', color: 'text.disabled' }} />
                                    </IconButton>
                                 </Box>
                              </Box>
                           </Box>
                        </Box>
                     </ListItemButton>
                     <Divider
                        sx={theme => ({
                           margin: '0 26px',
                           color: 'text.secondary',
                           [theme.breakpoints.down('sm')]: {
                              margin: '0 20px'
                           }
                        })}
                     />
                  </Fragment>
               ))}
               <Box
                  sx={theme => ({
                     padding: '8px 26px',
                     margin: '16px 0',
                     [theme.breakpoints.down('lg')]: {
                        margin: '12px 0'
                     },
                     [theme.breakpoints.down('sm')]: {
                        margin: '8px 0',
                        padding: '8px 20px'
                     }
                  })}
               >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <Typography sx={textStyle}>
                        Sub Total
                     </Typography>
                     <Typography sx={textStyle}>
                        $890
                     </Typography>
                  </Box>
                  <Box sx={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <Typography sx={textStyle}>
                        Total
                     </Typography>
                     <Typography sx={textStyle}>
                        $890
                     </Typography>
                  </Box>
               </Box>
               <Box
                  sx={theme => ({
                     margin: '0 26px',
                     [theme.breakpoints.down('sm')]: {
                        margin: '0 20px'
                     }
                  })}
               >
                  <PrimaryButton text='Place Order' width='100%' color={currentColor} />
               </Box>
            </List>
         </Drawer>
      </Box >
   );
}

export default Cart;