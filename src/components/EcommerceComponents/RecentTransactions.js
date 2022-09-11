import { Card, Box, Typography, Divider } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';
import { recentTransactions } from '../../data/data';
import CardHeader from '../UI/CardHeader';
import CustomIconButton from '../UI/CustomIconButton';
import PrimaryButton from '../UI/PrimaryButton';

const RecentTransactions = () => {
   const { currentColor } = useContext(uiContext);

   return (
      <Card elevation={0} className='card-padding'>
         <CardHeader text='Recent Transactions' />
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               rowGap: '1.5rem'
            }}
         >
            {recentTransactions.map((item, index) => (
               <Box
                  key={index}
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center'
                  }}
               >
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '1rem'
                     }}
                  >
                     <CustomIconButton
                        text={item.icon}
                        iconColor={item.iconColor}
                        bgColor={item.iconBg}
                        padding='12px'
                        borderRadius='10px'
                     />
                     <Box>
                        <Typography
                           sx={theme => ({
                              color: 'text.primary',
                              fontWeight: 500,
                              [theme.breakpoints.down('sm')]: {
                                 fontSize: '14px'
                              }
                           })}
                        >
                           {item.title}
                        </Typography>
                        <Typography
                           sx={theme => ({
                              fontSize: '14px',
                              color: 'text.secondary',
                              marginTop: '2px',
                              [theme.breakpoints.down('sm')]: {
                                 fontSize: '13px'
                              }
                           })}
                        >
                           {item.desc}
                        </Typography>
                     </Box>
                  </Box>
                  <Typography
                     sx={theme => ({
                        fontSize: '14px',
                        color: item.pcColor,
                        [theme.breakpoints.down('sm')]: {
                           fontSize: '13px'
                        }
                     })}
                  >
                     {item.amount}
                  </Typography>
               </Box>
            ))}
         </Box>
         <Divider sx={{ margin: '1.5rem 0' }} />
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between'
            }}
         >
            <PrimaryButton text='Add' padding='6px 20px' color={currentColor} />
            <Typography
               sx={{
                  color: 'text.secondary',
                  fontSize: '13px'
               }}>
               36 Recent Transactions
            </Typography>
         </Box>
      </Card>
   );
};

export default RecentTransactions;