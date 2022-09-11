import React, { useContext, useRef } from 'react';
import { Box, Button, Card, IconButton, Typography } from '@mui/material';
import { uiContext } from '../../context/ContextProvider';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SplineAreaChart from '../Charts/SplineAreaChart';
import CardHeader from '../UI/CardHeader';
import ResizeHook from '../../Hooks/ResizeHook';

const data = [
   {
      icon: ShoppingCartOutlinedIcon,
      title: 'Top Sales',
      subtitle: 'Jonathan Doe',
      number: '68%'
   },
   {
      icon: StarBorderOutlinedIcon,
      title: 'Best Seller',
      subtitle: 'MaterialPro Admin',
      number: '76%'
   },
   {
      icon: ChatBubbleOutlineOutlinedIcon,
      title: 'Most Commented',
      subtitle: 'Ample Admin',
      number: '95%'
   }
];

const WeeklyStats = ({ height, width }) => {
   const { currentColor, secondaryColor, darkMode } = useContext(uiContext);

   const targetRef = useRef();
   const mainWidth = ResizeHook(targetRef);

   return (
      <Card
         elevation={0}
         sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
         }}
         ref={targetRef}
      >
         <Box className='card-padding'>
            <CardHeader text='Weekly Stats' actionMenu={true} />
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '1.5rem'
               }}
            >
               {data.map((item, index) => (
                  <Box
                     key={index}
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
                           columnGap: '1rem'
                        }}
                     >
                        <IconButton
                           size='medium'
                           disableRipple
                           sx={{
                              backgroundColor: index === 0 ? currentColor : index === 1 ? secondaryColor : 'rgb(0, 194, 146)',
                              color: 'white',
                              height: '40px',
                              width: '40px',
                              cursor: 'context-menu'
                           }}
                        >
                           {<item.icon sx={{ height: '22px', width: '22px' }} />}
                        </IconButton>
                        <Box>
                           <Typography
                              sx={{
                                 fontSize: '15px',
                                 color: 'text.primary',
                                 fontWeight: 600
                              }}
                           >
                              {item.title}
                           </Typography>
                           <Typography
                              sx={{
                                 fontSize: '13px',
                                 color: 'text.secondary',
                              }}
                           >
                              {item.subtitle}
                           </Typography>
                        </Box>
                     </Box>
                     <Box>
                        <Button
                           disableElevation
                           disableRipple
                           sx={{
                              textTransform: 'none',
                              fontSize: '11px',
                              borderRadius: '5px',
                              minHeight: 0,
                              minWidth: 0,
                              padding: '2px 10px',
                              color: 'text.disabled',
                              backgroundColor: darkMode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
                              cursor: 'context-menu',
                              '&:hover': {
                                 backgroundColor: '#ddd'
                              }
                           }}
                        >
                           {item.number}
                        </Button>
                     </Box>
                  </Box>
               ))}
            </Box>
         </Box>
         <Box className='spline-area'>
            <SplineAreaChart height='175px' width={`${mainWidth}`} />
         </Box>
      </Card>
   );
};

export default WeeklyStats;