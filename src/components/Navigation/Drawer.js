import React, { Fragment, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Backdrop, Divider, Tooltip } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { uiContext } from '../../context/ContextProvider';
import { links } from '../../data/data';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Navbar from './Navbar';
import { SiShopware } from 'react-icons/si';

const drawerWidth = 284;

const openedMixin = (theme) => ({
   width: drawerWidth,
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
   }),
   overflowX: 'hidden',
   [theme.breakpoints.down('lg')]: {
      width: 256
   }
});

const closedMixin = (theme) => ({
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
   }),
   overflowX: 'hidden',
   width: `calc(${theme.spacing(8)} + 1px)`,
   [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(10)} + 1px)`
   },
   [theme.breakpoints.down('lg')]: {
      width: 0
   }
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
   ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
         ...openedMixin(theme),
         '& .MuiDrawer-paper': openedMixin(theme)
      }),
      ...(!open && {
         ...closedMixin(theme),
         '& .MuiDrawer-paper': closedMixin(theme)
      })
   })
);

export default function Navigation() {
   const { menu, setMenu, currentColor, productID, customerID, darkMode } = useContext(uiContext);

   const theme = useTheme();
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   const { pathname } = useLocation();

   const sidebarHandler = () => {
      if (!lgWidth) {
         return;
      }
      setMenu(false);
   }

   return (
      <>
         <Backdrop
            onClick={() => setMenu(false)}
            open={menu}
            sx={theme => ({
               display:
                  { x: 'block', lg: 'none' },
               zIndex: 99,
               [theme.breakpoints.down('lg')]: {
                  zIndex: 99999999
               }
            })}
         />
         <Box sx={{ display: 'flex' }}>
            <Navbar />
            <Drawer
               variant="permanent"
               open={menu}
               sx={theme => ({
                  "& .MuiDrawer-paper": {
                     borderWidth: 0,
                     boxShadow: '0 0 50px rgba(0, 0, 0, 0.075)'
                  },
                  [theme.breakpoints.down('lg')]: {
                     zIndex: 99999999
                  }
               })}
            >
               <List
                  sx={theme => ({
                     overflowY: 'hidden',
                     '&:hover': {
                        overflowY: 'auto'
                     },
                     paddingBottom: '2rem',
                     overflowX: 'hidden',
                     [theme.breakpoints.down('lg')]: {
                        overflowY: 'auto'
                     }
                  })}
               >
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 1rem 0 2rem',
                        height: smWidth ? '48px' : '54px',
                        marginBottom: !menu && !lgWidth ? '70px' : '1.5rem',
                     }}
                  >
                     <Link to='/'>
                        <Box
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              columnGap: '10px'
                           }}
                        >
                           <SiShopware style={{ fontSize: '1.35rem', color: darkMode === 'dark' ? '#bcbac4' : '#333' }} />
                           <Typography
                              sx={{
                                 fontSize: '1.25rem',
                                 fontWeight: 700,
                                 color: 'text.primary',
                                 display: (menu && !lgWidth) || (!menu && lgWidth) || (menu && lgWidth) ? 'block' : 'none'
                              }}
                           >
                              Shopfling
                           </Typography>
                        </Box>
                     </Link>
                     <Tooltip title='Back' placement='bottom' arrow>
                        <IconButton onClick={() => setMenu(false)}>
                           <ChevronLeftIcon
                              sx={{
                                 color: currentColor,
                                 display: (menu && !lgWidth) || (!menu && lgWidth) || (menu && lgWidth) ? 'block' : 'none'
                              }}
                           />
                        </IconButton>
                     </Tooltip>
                  </Box>
                  {links.map((item, index) => (
                     <Fragment key={index}>
                        <Typography
                           sx={theme => ({
                              opacity: menu ? 1 : 0,
                              display: ((menu && !lgWidth) || lgWidth) ? 'block' : 'none',
                              fontSize: '14px',
                              fontWeight: 600,
                              color: 'text.disabled',
                              padding: '10px 0 10px 2rem',
                              [theme.breakpoints.down('sm')]: {
                                 paddingLeft: '1.5rem'
                              }
                           })}
                        >
                           {item.title.toUpperCase()}
                        </Typography>
                        {
                           (!menu && !lgWidth && index !== 0) &&
                           <Box
                              sx={{
                                 height: '41px',
                                 width: '100%',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 margin: '5px auto'
                              }}
                           >
                              <Divider
                                 sx={{
                                    color: 'text.secondary',
                                    width: '60px'
                                 }}
                              />
                           </Box>
                        }
                        {item.links.map((link) => (
                           <NavLink
                              to={link.name === 'analytics' ? '/' : link.name === 'user profile' ? '/userprofile' : `/${link.name}`}
                              key={link.name}
                           >
                              <ListItemButton
                                 onClick={sidebarHandler}
                                 disableRipple
                                 sx={theme => ({
                                    margin: menu ? '5px 10px 5px 24px' : '5px 8px 5px 8px',
                                    borderRadius: '8px',
                                    minHeight: 48,
                                    justifyContent: menu ? 'initial' : 'center',
                                    backgroundColor: pathname === (link.name === 'analytics' ? '/' : link.name === 'user profile' ? '/userprofile' : `/${link.name}`) ? currentColor : pathname === `/products/${productID}` && link.name === 'products' ? currentColor :
                                       pathname === `/customers/${customerID}` && link.name === 'customers' ? currentColor : '',
                                    px: 3,
                                    transition: '300ms ease',
                                    [theme.breakpoints.down('lg')]: {
                                       justifyContent: 'initial'
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                       px: 2
                                    },
                                    '&:hover': {
                                       backgroundColor: pathname === (link.name === 'analytics' ? '/' : link.name === 'user profile' ? '/userprofile' : `/${link.name}`) ? currentColor : pathname === `/products/${productID}` && link.name === 'products' ? currentColor :
                                          pathname === `/customers/${customerID}` && link.name === 'customers' ? currentColor : '',
                                       opacity: pathname === (link.name === 'analytics' ? '/' : link.name === 'user profile' ? 'userprofile' : `/${link.name}`) ? 0.8 : pathname === `/products/${productID}` && link.name === 'products' ? 0.8 :
                                          pathname === `/customers/${customerID}` && link.name === 'customers' ? 0.8 : ''
                                    }
                                 })}
                              >
                                 <ListItemIcon
                                    sx={{
                                       minWidth: 0,
                                       mr: menu ? 3 : 'auto',
                                       justifyContent: 'center',
                                       color: pathname === (link.name === 'analytics' ? '/' : link.name === 'user profile' ? '/userprofile' : `/${link.name}`) ? 'white' : pathname === `/products/${productID}` && link.name === 'products' ? 'white' :
                                          pathname === `/customers/${customerID}` && link.name === 'customers' ? 'white' : 'text.secondary'
                                    }}
                                 >
                                    {link.icon}
                                 </ListItemIcon>
                                 <ListItemText
                                    primary={
                                       <Typography style={{ fontSize: '15px', fontWeight: 500 }}>
                                          {link.name.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')}
                                       </Typography>
                                    }
                                    sx={{
                                       opacity: menu ? 1 : 0,
                                       color: pathname === (link.name === 'analytics' ? '/' : link.name === 'user profile' ? '/userprofile' : `/${link.name}`) ? 'white' : pathname === `/products/${productID}` && link.name === 'products' ? 'white' :
                                          pathname === `/customers/${customerID}` && link.name === 'customers' ? 'white' : 'text.secondary'
                                    }}
                                 />
                              </ListItemButton>
                           </NavLink>
                        ))}
                     </Fragment>
                  ))}
               </List>
            </Drawer>
         </Box >
      </>
   );
}