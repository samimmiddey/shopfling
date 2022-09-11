import React from 'react';
import { modernData } from '../../data/data';
import welcome from '../../data/welcome-bg.svg';
import { Box, Card, Typography, CardMedia } from '@mui/material';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import PrimaryButton from '../UI/PrimaryButton';
import CustomIconButton from '../UI/CustomIconButton';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const AnalyticsCards = () => {
   const { currentColor } = useContext(uiContext);

   return (
      <Box
         sx={theme => ({
            display: 'grid',
            gridTemplateColumns: '4.6fr 7fr',
            gap: '28px',
            [theme.breakpoints.down('lg')]: {
               gridTemplateColumns: '4fr 8fr'
            },
            [theme.breakpoints.down('md')]: {
               gridTemplateColumns: 'none'
            },
            [theme.breakpoints.down('sm')]: {
               gap: '24px'
            }
         })}
      >
         <Card elevation={0} sx={{ position: 'relative', minHeight: '200px' }}>
            <CardMedia
               component="img"
               image={welcome}
               sx={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover'
               }}
            />
            <Box
               className='card-padding'
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  minHeight: '200px'
               }}
            >
               <Typography
                  sx={theme => ({
                     fontSize: '1.1rem',
                     fontWeight: 500,
                     color: 'text.primary',
                     zIndex: 99,
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '1rem'
                     }
                  })}
               >
                  Congratulation, Michael
               </Typography>
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '1rem'
                  }}
               >
                  <Typography
                     sx={theme => ({
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: 'text.primary',
                        zIndex: 99,
                        [theme.breakpoints.down('sm')]: {
                           fontSize: '1.35rem'
                        }
                     })}
                  >
                     $39,358
                  </Typography>
                  <Typography
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '14px',
                        fontWeight: 500,
                        zIndex: 99
                     }}
                  >
                     <NorthWestIcon sx={{ fontSize: '16px', zIndex: 99 }} /> +9%
                  </Typography>
               </Box>
               <PrimaryButton
                  text='Download'
                  padding='8px 20px'
                  color={currentColor}
               />
            </Box>
         </Card>
         <Box
            sx={theme => ({
               display: 'grid',
               gridTemplateColumns: '3fr 4fr',
               gap: '28px',
               [theme.breakpoints.down('lg')]: {
                  gridTemplateColumns: '4fr 4fr'
               },
               [theme.breakpoints.down('sm')]: {
                  gridTemplateColumns: 'none',
                  gap: '24px'
               }
            })}
         >
            {modernData.map((item, index) => (
               <Card key={index} elevation={0} sx={{ minHeight: '200px' }}>
                  <Box
                     className='card-padding'
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '200px'
                     }}
                  >
                     <Box
                        sx={{
                           display: 'flex',
                           alignItems: 'flex-start',
                           justifyContent: 'space-between'
                        }}
                     >
                        <Typography
                           sx={theme => ({
                              fontSize: '1.1rem',
                              fontWeight: 500,
                              color: 'text.primary',
                              zIndex: 99,
                              [theme.breakpoints.down('lg')]: {
                                 fontSize: '1rem'
                              }
                           })}
                        >
                           {item.heading}
                        </Typography>
                        <CustomIconButton
                           text={item.icon}
                           index={index}
                           iconColor={item.iconColor}
                           padding='12px'
                        />
                     </Box>
                     <Box>
                        <Box
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              columnGap: '10px'
                           }}
                        >
                           <Typography
                              sx={theme => ({
                                 fontSize: '1.75rem',
                                 fontWeight: 500,
                                 color: 'text.primary',
                                 zIndex: 99,
                                 [theme.breakpoints.down('sm')]: {
                                    fontSize: '1.5rem'
                                 }
                              })}
                           >
                              {item.amount}
                           </Typography>
                           <Typography sx={{ fontSize: '13px', color: item.pcColor }}>{item.percentage}</Typography>
                        </Box>
                        <Typography sx={{ color: 'text.secondary', fontSize: '14px' }}>{item.title}</Typography>
                     </Box>
                  </Box>
               </Card>
            ))}
         </Box>
      </Box>
   );
};

export default AnalyticsCards;