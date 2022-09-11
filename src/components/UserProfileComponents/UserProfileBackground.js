import React from 'react';
import { Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material';
import profilebg from '../../data/profile-bg.jpg';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import CustomIconButton from '../UI/CustomIconButton';
import PrimaryButton from '../UI/PrimaryButton';

const socialData = [
   {
      icon: <TextSnippetOutlinedIcon sx={{ fontSize: '1.5rem' }} />,
      number: 768,
      title: 'Posts'
   },
   {
      icon: <PersonAddAltOutlinedIcon sx={{ fontSize: '1.5rem' }} />,
      number: 4536,
      title: 'Followers'
   },
   {
      icon: <GroupOutlinedIcon sx={{ fontSize: '1.5rem' }} />,
      number: 1756,
      title: 'Following'
   },
];

const social = [
   {
      icon: <FiFacebook style={{ fontSize: '1.2rem', color: 'white' }} />,
      bgColor: 'rgb(55, 98, 210)'
   },
   {
      icon: <FiTwitter style={{ fontSize: '1.2rem', color: 'white' }} />,
      bgColor: 'rgb(26, 187, 255)'
   },
   {
      icon: <FiInstagram style={{ fontSize: '1.2rem', color: 'white' }} />,
      bgColor: 'rgb(247, 70, 140)'
   },
   {
      icon: <FiLinkedin style={{ fontSize: '1.2rem', color: 'white' }} />,
      bgColor: 'rgb(25, 139, 254)'
   },
   {
      text: 'Following'
   }
];

const UserProfileBackground = ({ userData, currentColor }) => {
   const theme = useTheme();
   const xlWidth = useMediaQuery(theme.breakpoints.down('xl'));
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Card elevation={0}>
         <Box sx={{ position: 'relative' }}>
            <img
               src={profilebg}
               alt=""
               style={{
                  maxHeight: xlWidth && !lgWidth && !mdWidth && !smWidth ? '300px' :
                     xlWidth && lgWidth && !mdWidth && !smWidth ? '200px' :
                        xlWidth && lgWidth && mdWidth && !smWidth ? '150px' :
                           xlWidth && lgWidth && mdWidth && smWidth ? '100px' : '365px',
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover'
               }}
            />
            <Box
               sx={theme => ({
                  position: 'absolute',
                  bottom: '-98px',
                  padding: '3px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  [theme.breakpoints.down('lg')]: {
                     bottom: '-93px'
                  },
                  [theme.breakpoints.down('lg')]: {
                     bottom: '-88px'
                  }
               })}
            >
               <Box
                  sx={theme => ({
                     height: '110px',
                     width: '110px',
                     borderRadius: '50%',
                     padding: '3px',
                     backgroundColor: 'white',
                     [theme.breakpoints.down('lg')]: {
                        height: '100px',
                        width: '100px'
                     },
                     [theme.breakpoints.down('sm')]: {
                        height: '90px',
                        width: '90px'
                     }
                  })}
               >
                  <Box
                     sx={{
                        height: '100%',
                        width: '100%',
                        padding: '3px',
                        backgroundColor: currentColor,
                        borderRadius: '50%'
                     }}
                  >
                     <Box
                        sx={{
                           height: '100%',
                           width: '100%',
                           padding: '3px',
                           backgroundColor: 'white',
                           borderRadius: '50%'
                        }}
                     >
                        <img
                           src={userData.img}
                           alt=""
                           style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '50%' }}
                        />
                     </Box>
                  </Box>
               </Box>
               <Box sx={{ textAlign: 'center', marginTop: '5px' }}>
                  <Typography sx={{ fontWeight: 600 }}>{userData.name}</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '13px' }}>{userData.occupation}</Typography>
               </Box>
            </Box>
         </Box>
         <Box
            sx={theme => ({
               padding: '3rem 2rem 2rem 2rem',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               [theme.breakpoints.down('lg')]: {
                  flexDirection: 'column',
                  marginTop: '3.5rem'
               },
               [theme.breakpoints.down('sm')]: {
                  padding: '3rem 1rem 2rem 1rem'
               }
            })}
         >
            <Box
               sx={theme => ({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  width: '35%',
                  [theme.breakpoints.down('lg')]: {
                     width: '100%'
                  }
               })}
            >
               {socialData.map((data, index) => (
                  <Box
                     key={index}
                     sx={{
                        color: 'text.secondary',
                        textAlign: 'center'
                     }}
                  >
                     <span>{data.icon}</span>
                     <Typography
                        sx={{
                           fontWeight: 600,
                           color: 'text.primary',
                           fontSize: '15px'
                        }}
                     >
                        {data.number}
                     </Typography>
                     <Typography sx={{ fontSize: '14px' }}>{data.title}</Typography>
                  </Box>
               ))}
            </Box>
            <Box
               sx={theme => ({
                  display: 'flex',
                  columnGap: '10px',
                  [theme.breakpoints.down('lg')]: {
                     marginTop: '1.5rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                     flexWrap: 'wrap',
                     rowGap: '10px',
                     justifyContent: 'center',
                     marginTop: '1rem'
                  }
               })}
            >
               {social.map((icon, index) => (
                  <Box key={index}>
                     {index === social.length - 1 ?
                        <PrimaryButton
                           text={icon.text}
                           padding='0 20px'
                           height={smWidth ? '35.2px' : '39.19px'}
                           color={currentColor}
                        /> :
                        <CustomIconButton
                           text={icon.icon}
                           padding={smWidth ? '8px' : '10px'}
                           borderRadius='5px'
                           bgColor={icon.bgColor}
                        />
                     }
                  </Box>
               ))}
            </Box>
         </Box>
      </Card>
   );
};

export default UserProfileBackground;