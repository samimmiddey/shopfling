import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, useMediaQuery, useTheme } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcons from '../UI/MenuIcons';
import SearchModal from '../UI/SearchModal';
import { Box } from '@mui/system';
import img from '../../data/avatar.jpg';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Tooltip from '@mui/material/Tooltip';
import { BsSearch } from 'react-icons/bs';
import { uiContext } from '../../context/ContextProvider';

const drawerWidth = 284;

const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
   zIndex: theme.zIndex.drawer + 1,
   transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
   }),
   backgroundColor: '#fff',
   color: theme.palette.text.secondary,
   ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen
      }),
   }),
   ...(!open && {
      width: `calc(100% - 81px)`,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen
      }),
   }),
   [theme.breakpoints.down('lg')]: {
      marginLeft: '0px',
      width: '100%'
   },
   [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1)
   }
}));

// Styled Navbar Icon Div
const MainNav = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '100%'
});

// Icon Div
const IconDiv = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   columnGap: '30px',
   [theme.breakpoints.down('md')]: {
      columnGap: '20px'
   }
}));

const Navbar = () => {
   const { showSearchModal, setShowSearchModal, menu, setMenu, currentColor, toggleUserProfile, darkMode } = useContext(uiContext);
   
   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   return (
      <>
         <AppBar
            position="fixed"
            open={menu}
            elevation={0}
            sx={{
               backgroundColor: darkMode === 'dark' ? '#16181d' : '#fafbfb',
               zIndex: 100
            }}
         >
            <Box
               sx={theme => ({
                  height: '70px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 2rem',
                  [theme.breakpoints.down('sm')]: {
                     height: '64px',
                     padding: '0 1.5rem 0 1rem'
                  }
               })}
            >
               <Tooltip title='Menu' placement='bottom' arrow>
                  <IconButton
                     color="inherit"
                     onClick={() => menu ? setMenu(false) : setMenu(true)}
                     edge="start"
                     sx={theme => ({
                        marginRight: 1.5,
                        [theme.breakpoints.down('lg')]: {
                           marginRight: 1
                        }
                     })}
                  >
                     <MenuIcon sx={{ color: currentColor }} />
                  </IconButton>
               </Tooltip>
               <MainNav>
                  {/* Search Icon */}
                  <Tooltip title='Search' placement='bottom' arrow>
                     <IconButton size='large' onClick={() => setShowSearchModal(true)}>
                        <BsSearch style={{ fontSize: '1.1rem', color: currentColor }} />
                     </IconButton>
                  </Tooltip>
                  {/* Navbar Icons */}
                  <Box
                     sx={theme => ({
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                        [theme.breakpoints.down('sm')]: {
                           columnGap: '0px',
                        }
                     })}>
                     <IconDiv>
                        <MenuIcons />
                        <Tooltip title='Profile' placement='bottom' arrow>
                           <Box
                              sx={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 columnGap: '10px',
                                 cursor: 'pointer'
                              }}
                              onClick={event => toggleUserProfile(event.currentTarget)}
                           >
                              <Avatar alt="Fiona Smith" src={img} sx={{ width: 36, height: 36 }} />
                              {!mdWidth &&
                                 <Box
                                    sx={{
                                       display: 'flex',
                                       alignItems: 'center',
                                       columnGap: '5px'
                                    }}
                                 >
                                    <Typography sx={{ color: 'text.secondary', fontSize: '15px' }}>
                                       Hi, <span style={{ fontWeight: '700' }}>Michael</span>
                                    </Typography>
                                    <KeyboardArrowDownOutlinedIcon sx={{ color: currentColor }} />
                                 </Box>
                              }
                           </Box>
                        </Tooltip>
                     </IconDiv>
                  </Box>
               </MainNav>
            </Box>
         </AppBar >
         {/* <SearchModal /> */}
         {showSearchModal && <SearchModal />}
      </>
   );
};

export default Navbar;