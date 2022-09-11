import React, { useContext } from 'react';
import { Avatar, Box, Button, Card, CardMedia, Divider, IconButton, Typography, Tooltip } from '@mui/material';
import product9 from '../../data/product9.jpg';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { uiContext } from '../../context/ContextProvider';
import img1 from '../../data/avatar.jpg';
import img3 from '../../data/avatar2.jpg';
import img4 from '../../data/avatar4.jpg';
import { BsChat } from 'react-icons/bs';

const SuperAwesomeCard = () => {
   const { currentColor, secondaryColor } = useContext(uiContext);

   return (
      <Card elevation={0}>
         <CardMedia
            component="img"
            height="205"
            image={product9}
            alt=""
         />
         <Box className='card-padding'>
            <Typography
               sx={{
                  fontSize: '14px',
                  color: 'text.secondary',
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '10px'
               }}
            >
               <AccessTimeOutlinedIcon /> 22 March, 2021
            </Typography>
            <Typography
               sx={{
                  color: 'text.primary',
                  fontWeight: 600,
                  marginTop: '1.5rem'
               }}
            >
               Super awesome, React 18 is coming soon!
            </Typography>
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '10px',
                  marginTop: '1rem'
               }}
            >
               {['Medium', 'Low'].map((text, index) => (
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
                        backgroundColor: index === 0 ? currentColor : secondaryColor,
                        '&:hover': {
                           backgroundColor: index === 0 ? currentColor : secondaryColor
                        }
                     }}
                  >
                     {text}
                  </Button>
               ))}
            </Box>
            <Divider sx={{ margin: '1.5rem 0' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
               <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                  {[img1, img3, img4].map((img, index) => (
                     <Avatar
                        key={index}
                        src={img}
                        alt=''
                     />
                  ))}
               </Box>
               <Tooltip title='Add Comment' placement='top' arrow>
                  <IconButton size='medium'>
                     <BsChat style={{height: '22px', width: '22px'}} />
                  </IconButton>
               </Tooltip>
            </Box>
         </Box>
      </Card>
   );
};

export default SuperAwesomeCard;