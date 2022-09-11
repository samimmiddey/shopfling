import React, { useContext } from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import welcome from '../../data/welcome-bg.svg';
import PrimaryButton from '../UI/PrimaryButton';
import CustomIconButton from '../UI/CustomIconButton';
import { FiDollarSign } from 'react-icons/fi';
import { earningData } from '../../data/data';
import { uiContext } from '../../context/ContextProvider';

const EcommerceCards = () => {
   const { currentColor, darkMode } = useContext(uiContext);

   return (
      <Box
         sx={theme => ({
            display: 'grid',
            gridTemplateColumns: '3.5fr 8.5fr',
            gap: '28px',
            [theme.breakpoints.down('lg')]: {
               gridTemplateColumns: 'none'
            },
            [theme.breakpoints.down('sm')]: {
               gap: '24px'
            }
         })}
      >
         <Card elevation={0} sx={{ position: 'relative', minHeight: '185px' }}>
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
                  justifyContent: 'space-between',
                  minHeight: '185px',
               }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     justifyContent: 'space-between',
                     zIndex: 99,
                  }}
               >
                  <Box>
                     <Typography
                        sx={theme => ({
                           fontSize: '1.1rem',
                           fontWeight: 500,
                           color: 'text.disabled',
                           [theme.breakpoints.down('lg')]: {
                              fontSize: '1rem'
                           }
                        })}
                     >
                        Earnings
                     </Typography>
                     <Typography
                        sx={theme => ({
                           fontSize: '1.3rem',
                           fontWeight: 500,
                           color: 'text.primary',
                           marginTop: '2px',
                           [theme.breakpoints.down('sm')]: {
                              fontSize: '1.1rem'
                           }
                        })}
                     >
                        $69,456.78
                     </Typography>
                  </Box>
                  <PrimaryButton text='Download' padding='8px 20px' color={currentColor} />
               </Box>
               <Box>
                  <CustomIconButton
                     text={<FiDollarSign style={{ fontSize: '1.5rem' }} />}
                     index={1}
                     iconColor='white'
                     padding='12px'
                  />
               </Box>
            </Box>
         </Card >
         <Card
            elevation={0}
            sx={theme => ({
               display: 'grid',
               gridTemplateColumns: 'repeat(4, 1fr)',
               [theme.breakpoints.down('md')]: {
                  gridTemplateColumns: 'repeat(2, 1fr)'
               },
               [theme.breakpoints.down('xs')]: {
                  gridTemplateColumns: 'none'
               }
            })}
         >
            {earningData.map((item, index) => (
               <Box
                  key={index}
                  elevation={0}
                  className='card-padding'
                  sx={theme => ({
                     borderRight: ((index !== earningData.length - 1 && darkMode !== 'dark') && '1px solid rgba(0, 0, 0, 0.12)') ||
                        ((index !== earningData.length - 1 && darkMode === 'dark') && '1px solid rgba(255, 255, 255, 0.12)'),
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'space-between',
                     alignItems: 'flex-start',
                     paddingBottom: '30px',
                     overflowX: 'hidden',
                     minHeight: '185px',
                     [theme.breakpoints.down('md')]: {
                        borderRight: 'none'
                     },
                     [theme.breakpoints.down('xs')]: {
                        borderRight: 'none',
                        borderBottom: ((index !== earningData.length - 1 && darkMode !== 'dark') && '1px solid rgba(0, 0, 0, 0.12)') ||
                           ((index !== earningData.length - 1 && darkMode === 'dark') && '1px solid rgba(255, 255, 255, 0.12)')
                     }
                  })}
               >
                  <CustomIconButton
                     text={item.icon}
                     iconColor={index === 0 ? currentColor : item.iconColor}
                     bgColor={item.iconBg}
                     padding='16px'

                  />
                  <Box>
                     <Box sx={{ display: 'flex', columnGap: '8px', alignItems: 'center' }}>
                        <Typography sx={{ color: 'text.primary', fontSize: '1.25rem', fontWeight: 500 }}>{item.amount}</Typography>
                        <Typography sx={{ color: item.pcColor, fontSize: '11px' }}>{item.percentage}</Typography>
                     </Box>
                     <Typography sx={{ fontSize: '13px', color: 'text.disabled' }}>{item.title}</Typography>
                  </Box>
               </Box>
            ))
            }
         </Card >
      </Box >
   );
};

export default EcommerceCards;