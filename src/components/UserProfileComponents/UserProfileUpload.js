import React from 'react';
import { Box, Card, Divider, useMediaQuery, useTheme, Button, Typography } from '@mui/material';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CustomizedTextfield from '../UI/CustomizedTextfield';

const buttons = [
   {
      icon: VideocamOutlinedIcon,
      text: 'Live Video',
      color: 'rgb(228, 106, 118)'
   },
   {
      icon: PhotoCameraOutlinedIcon,
      text: 'Photo/Video',
      color: 'rgb(0, 194, 146)'
   },
   {
      icon: DescriptionOutlinedIcon,
      text: 'Article/Post',
      color: 'rgb(3, 201, 215)'
   }
];

const UserProfileUpload = ({ userData, currentColor }) => {
   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Card className='card-padding' elevation={0}>
         <Box
            sx={theme => ({
               display: 'flex',
               alignItems: 'center',
               columnGap: '1.5rem',
               [theme.breakpoints.down('sm')]: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  rowGap: '1rem'
               }
            })}
         >
            <img
               src={userData.img}
               alt=""
               style={{
                  height: '50px',
                  width: '50px',
                  objectFit: 'cover',
                  borderRadius: '50%'
               }}
            />
            <CustomizedTextfield
               size={smWidth ? 'small' : 'medium'}
               label="What would you like to post?"
               color={currentColor}
               width='100%'
            />
         </Box>
         <Divider sx={{ margin: '2rem 0 1.5rem 0' }} />
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-around'
            }}
         >
            {buttons.map((item, index) => (
               <Button
                  key={index}
                  sx={{
                     textTransform: 'none',
                     '&:hover': {
                        backgroundColor: 'transparent'
                     },
                     '&& .MuiTouchRipple-child': {
                        backgroundColor: item.color
                     }
                  }}
               >
                  <item.icon sx={{ fontSize: '1.5rem', color: item.color }} />
                  <Typography
                     sx={theme => ({
                        fontWeight: 500,
                        color: 'text.primary',
                        fontSize: '14px',
                        marginLeft: '6px',
                        [theme.breakpoints.down('sm')]: {
                           display: 'none'
                        }
                     })}
                  >
                     {item.text}
                  </Typography>
               </Button>
            ))}
         </Box>
      </Card >
   );
};

export default UserProfileUpload;