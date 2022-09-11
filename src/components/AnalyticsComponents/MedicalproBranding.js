import React, { useContext } from 'react';
import { Avatar, Box, Button, Card, Divider, Typography } from '@mui/material';
import CardHeader from '../UI/CardHeader';
import { uiContext } from '../../context/ContextProvider';
import img1 from '../../data/img1.jpg';
import img5 from '../../data/img5.jpg';
import img3 from '../../data/avatar2.jpg';
import img4 from '../../data/img4.jpg';
import PrimaryButton from '../UI/PrimaryButton';

const data = [
   {
      title: 'Due Date',
      subtitle: 'Oct 23, 2021'
   },
   {
      title: 'Budget',
      subtitle: '$98,500'
   },
   {
      title: 'Expense',
      subtitle: '$63,000'
   }
];

const MedicalproBranding = ({ colors }) => {
   const { currentColor, secondaryColor } = useContext(uiContext);

   return (
      <Card elevation={0} className='card-padding'>
         <CardHeader text='MedicalPro Branding' actionMenu={true} />
         <Button
            disableElevation
            disableRipple
            sx={{
               textTransform: 'none',
               fontSize: '12px',
               borderRadius: '5px',
               minHeight: 0,
               minWidth: 0,
               padding: '3px 10px',
               color: colors ? colors[1] : currentColor,
               marginTop: '-1.5rem',
               backgroundColor: colors ? colors[0] : `${currentColor}15`,
               '&:hover': {
                  backgroundColor: `${currentColor}15`
               }
            }}
         >
            16 April, 2022
         </Button>
         <Box
            sx={{
               display: 'grid',
               gridTemplateColumns: 'repeat(3, 1fr)',
               marginTop: '1rem'
            }}
         >
            {data.map((item, index) => (
               <Box
                  key={index}
                  sx={{
                     padding: index !== 0 ? '0 0 16px 8px' : '0 0 16px 0',
                     borderRight: index !== 2 && '1px solid rgba(0, 0, 0, 0.12)',
                     borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                  }}
               >
                  <Typography
                     sx={{
                        fontSize: '14px',
                        color: 'text.secondary'
                     }}
                  >
                     {item.title}
                  </Typography>
                  <Typography
                     sx={{
                        fontSize: '14px',
                        color: 'text.primary'
                     }}
                  >
                     {item.subtitle}
                  </Typography>
               </Box>
            ))}
         </Box>
         <Box
            sx={{
               padding: '1rem 0 1.5rem 0'
            }}
         >
            <Typography sx={{ color: 'text.primary', fontWeight: 500 }}>Teams</Typography>
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '10px',
                  marginTop: '0.5rem'
               }}
            >
               {['Bootstrap', 'Angular'].map((text, index) => (
                  <Button
                     key={index}
                     disableElevation
                     disableRipple
                     sx={{
                        textTransform: 'none',
                        fontSize: '11px',
                        borderRadius: '5px',
                        minHeight: 0,
                        minWidth: 0,
                        padding: '2px 10px',
                        color: 'white',
                        backgroundColor: colors && index === 0 ? colors[2] : colors && index === 1 ? colors[3] : !colors && index === 0 ? currentColor : secondaryColor,
                        '&:hover': {
                           backgroundColor: colors && index === 0 ? colors[2] : colors && index === 1 ? colors[3] : !colors && index === 0 ? currentColor : secondaryColor
                        }
                     }}
                  >
                     {text}
                  </Button>
               ))}
            </Box>
         </Box>
         <Divider />
         <Box sx={{ padding: '1rem 0' }}>
            <Typography sx={{ color: 'text.primary', fontWeight: 500 }}>
               Leaders
            </Typography>
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '10px',
                  marginTop: '8px'
               }}
            >
               {[img1, img5, img3, img4].map((img, index) => (
                  <Avatar
                     key={index}
                     src={img}
                     alt=''
                     sx={{ height: '35px', width: '35px' }}
                  />
               ))}
            </Box>
         </Box>
         <Divider />
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               marginTop: '1rem'
            }}
         >
            <PrimaryButton
               text='Add'
               padding='6px 20px'
               color={currentColor}
            />
            <Typography
               sx={{
                  color: 'text.secondary',
                  fontSize: '13px'
               }}
            >
               36 Recent Transactions
            </Typography>
         </Box>
      </Card>
   );
};

export default MedicalproBranding;