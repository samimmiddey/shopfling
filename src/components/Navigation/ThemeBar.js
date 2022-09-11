import React, { useContext } from 'react';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { IconButton, Tooltip, Box, Typography, Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { uiContext } from '../../context/ContextProvider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { themeColors } from '../../data/data';
import DoneIcon from '@mui/icons-material/Done';
import LightenDarkenColor from '../../Hooks/LightenDarkenColor';
import { useState } from 'react';

const ThemeBar = () => {
   const { showThemebar, toggleThemebar, currentColor, setCurrentColor, setSecondaryColor, toggleDarkMode, darkMode } = useContext(uiContext);
   const [active, setActive] = useState(darkMode);

   const hoverBg = LightenDarkenColor(currentColor, 15);

   const handleChange = e => {
      if (e.target.value === 'dark') {
         setActive(e.target.value);
         toggleDarkMode(e.target.value);
         localStorage.setItem('darkMode', e.target.value);
      } else {
         setActive(e.target.value);
         toggleDarkMode(e.target.value);
         localStorage.removeItem('darkMode');
      }
   }

   return (
      <Box>
         <Box
            sx={theme => ({
               position: 'fixed',
               bottom: '37px',
               right: '35px',
               zIndex: 999,
               [theme.breakpoints.down('xl')]: {
                  right: '30px'
               },
               [theme.breakpoints.down('lg')]: {
                  right: '24px'
               },
               [theme.breakpoints.down('md')]: {
                  right: '18px'
               },
               [theme.breakpoints.down('sm')]: {
                  bottom: '25px',
                  right: '15px'
               }
            })}
            onClick={() => toggleThemebar()}
         >
            <Tooltip title='Theme' placement='left-start' arrow>
               <Button
                  variant='contained'
                  sx={{
                     minWidth: 0,
                     minHeght: 0,
                     padding: '12px',
                     borderRadius: '50%',
                     backgroundColor: currentColor,
                     color: 'white',
                     transition: '300ms ease',
                     '&:hover': {
                        backgroundColor: hoverBg
                     }
                  }}
               >
                  <ColorLensOutlinedIcon />
               </Button>
            </Tooltip>
         </Box>
         <Drawer
            anchor={'right'}
            open={showThemebar}
            onClose={() => toggleThemebar()}
            sx={{
               zIndex: 999999,
               "& .MuiDrawer-paper": {
                  borderWidth: 0,
                  boxShadow: '0 0 50px rgba(0, 0, 0, 0.075)'
               }
            }}
         >
            <List
               sx={theme => ({
                  width: '300px',
                  [theme.breakpoints.down('sm')]: {
                     width: '256px'
                  }
               })}
            >
               <Box
                  sx={theme => ({
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                     padding: '7px 1rem 7px 1.5rem',
                     [theme.breakpoints.down('sm')]: {
                        padding: '4px 1rem 4px 1.5rem'
                     }
                  })}
               >
                  <Typography
                     sx={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'text.primary'
                     }}
                  >
                     Theme
                  </Typography>
                  <IconButton size='medium' onClick={() => toggleThemebar()}>
                     <ChevronRightIcon sx={{ color: currentColor }} />
                  </IconButton>
               </Box>
               <Divider sx={{ margin: '1.25rem 1.5rem' }} />
               <Box
                  sx={{
                     padding: '4px 1rem 4px 1.5rem'
                  }}>
                  <Typography
                     sx={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: 'text.disabled'
                     }}
                  >
                     Theme Options
                  </Typography>
                  <FormControl sx={{ margin: '10px 8px' }}>
                     <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={active}
                     >
                        {['light', 'dark'].map((value, index) => (
                           <FormControlLabel
                              key={index}
                              value={value}
                              onChange={handleChange}
                              control={
                                 <Radio
                                    size="small"
                                    sx={{
                                       '&, &.Mui-checked': {
                                          color: currentColor
                                       }
                                    }}
                                 />
                              }
                              label={
                                 <Typography
                                    sx={{ color: 'text.secondary', fontSize: '14px' }}
                                 >
                                    {value.charAt(0).toUpperCase() + value.slice(1)}
                                 </Typography>
                              }
                           />
                        ))}
                     </RadioGroup>
                  </FormControl>
               </Box>
               <Divider sx={{ margin: '1rem 1.5rem' }} />
               <Box
                  sx={{
                     padding: '4px 1rem 4px 1.5rem'
                  }}
               >
                  <Typography
                     sx={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: 'text.disabled'
                     }}
                  >
                     Theme Colors
                  </Typography>
                  <Box
                     sx={{
                        display: 'flex',
                        columnGap: '10px',
                        marginTop: '1rem'
                     }}
                  >
                     {themeColors.map((item, index) => (
                        <Tooltip key={index} title={item.name} placement='bottom'>
                           <Box
                           >
                              <IconButton
                                 disableRipple
                                 sx={theme => ({
                                    backgroundColor: item.color,
                                    color: 'white',
                                    height: '32px',
                                    width: '32px',
                                    [theme.breakpoints.down('sm')]: {
                                       height: '26px',
                                       width: '26px'
                                    }
                                 })}
                                 onClick={() => {
                                    setCurrentColor(item.color);
                                    setSecondaryColor(item.secondary);
                                    localStorage.setItem('currentColor', item.color);
                                    localStorage.setItem('secondaryColor', item.secondary);
                                 }}
                              >
                                 <DoneIcon
                                    sx={theme => ({
                                       display: item.color === currentColor ? 'block' : 'none',
                                       [theme.breakpoints.down('sm')]: {
                                          fontSize: '1.2rem'
                                       }
                                    })}
                                 />
                              </IconButton>
                           </Box>
                        </Tooltip>
                     ))}
                  </Box>
               </Box>
            </List>
         </Drawer>
      </Box >
   );
}

export default ThemeBar;