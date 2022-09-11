import { Box, Button, Card, Divider, IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { uiContext } from '../../context/ContextProvider';
import postImg from '../../data/postImg.jpg';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import TagFacesOutlinedIcon from '@mui/icons-material/TagFacesOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CustomIconButton from '../UI/CustomIconButton';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const UserProfileFeed = ({ userData, currentColor }) => {
   const { toggleAction } = useContext(uiContext);

   const icons = [
      {
         icon: ThumbUpOutlinedIcon,
         iconBg: 'rgb(251, 150, 120)'
      },
      {
         icon: TagFacesOutlinedIcon,
         iconBg: 'rgb(254, 201, 15)'
      },
      {
         icon: FavoriteBorderOutlinedIcon,
         iconBg: 'rgb(228, 106, 118)'
      }
   ];

   const reactIcons = [
      {
         icon: ThumbUpOutlinedIcon,
         text: 'React'
      },
      {
         icon: ChatBubbleOutlineOutlinedIcon,
         text: 'Comment'
      },
      {
         icon: ShareOutlinedIcon,
         text: 'Share'
      }
   ];

   const feedData = [
      {
         time: '35 minutes ago',
         postText: <Typography sx={{ color: 'text.secondary', fontSize: '14px' }}>Check out some kick ass web projects to get some insights and try building your own <span style={{ color: currentColor }}>#web development trends#web trends</span> check out - https://samimmiddey.netlify.app</Typography>,
         postImg: postImg
      },
      {
         time: '38 minutes ago',
         postText: <Typography sx={{ color: 'text.secondary', fontSize: '14px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sapiente earum, facere soluta ducimus reiciendis eaque veniam sequi nam hic corrupti impedit reprehenderit nihil maiores saepe quos eos sunt exercitationem dolor quod consequuntur unde neque totam. Fugit animi quo quia laboriosam a corporis, dolor qui illo aliquam ab nulla nam!</Typography>,
      }
   ];

   return (
      <Box>
         {feedData.map((item, index) => (
            <Card
               key={index}
               elevation={0}
               sx={theme => ({
                  marginTop: '28px',
                  [theme.breakpoints.down('sm')]: {
                     marginTop: '24px'
                  }
               })}
            >
               <Box className='card-padding'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.5rem' }}
               >
                  <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
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
                     <Box>
                        <Typography
                           sx={theme => ({
                              color: 'text.primary',
                              fontSize: '1rem',
                              fontWeight: 500,
                              [theme.breakpoints.down('sm')]: {
                                 fontSize: '14px'
                              }
                           })}
                        >
                           {userData.name}
                        </Typography>
                        <Typography sx={{ fontSize: '13px', color: 'text.secondary' }}>
                           25 minutes ago
                        </Typography>
                     </Box>
                  </Box>
                  <Tooltip title='Action' placement='bottom'>
                     <IconButton size='medium' onClick={event => toggleAction(event.currentTarget)}>
                        <BsThreeDots style={{ color: '#868395' }} />
                     </IconButton>
                  </Tooltip>
               </Box>
               <Box>
                  <Box
                     className='card-padding'
                     sx={{ paddingTop: 0, paddingBottom: index === 1 ? 0 : '2rem' }}
                  >
                     {item.postText}
                  </Box>
                  <img
                     src={item.postImg}
                     alt=""
                     style={{
                        maxHeight: '375px',
                        width: '100%',
                        objectFit: 'cover'
                     }}
                  />
                  <Box
                     className='card-padding'
                     sx={theme => ({
                        paddingTop: index === 1 ? 0 : '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        [theme.breakpoints.down(350)]: {
                           flexDirection: 'column',
                           alignItems: 'flex-start',
                           rowGap: '1rem'
                        }
                     })}
                  >
                     <Box>
                        {icons.map((icon, index) => (
                           <CustomIconButton
                              key={index}
                              text={<icon.icon sx={{ fontSize: '1rem' }} />}
                              iconColor='white'
                              bgColor={icon.iconBg}
                              padding='10px'
                              margin={index !== 0 && '0 0 0 -8px'}
                           />
                        ))}
                     </Box>
                     <Typography sx={{ fontSize: '13px', color: 'text.primary', fontWeight: 600 }}>
                        6 Comments <span style={{ marginLeft: '5px' }}>2 Shares</span>
                     </Typography>
                  </Box>
               </Box>
               <Divider
                  sx={theme => ({
                     margin: '0 30px 0 30px',
                     [theme.breakpoints.down('sm')]: {
                        margin: '0 25px 0 25px'
                     }
                  })}
               />
               <Box
                  className='card-padding'
                  sx={theme => ({
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                     paddingTop: '1.5rem',
                     paddingBottom: '1.5rem',
                     [theme.breakpoints.down('sm')]: {
                        paddingTop: '1rem',
                        paddingBottom: '1rem'
                     }
                  })}
               >
                  {reactIcons.map((item, index) => (
                     <Button
                        key={index}
                        sx={{
                           textTransform: 'none',
                           '&:hover': {
                              backgroundColor: 'transparent'
                           },
                           '&& .MuiTouchRipple-child': {
                              backgroundColor: currentColor
                           }
                        }}
                     >
                        <item.icon sx={{ fontSize: '1.35rem', color: 'text.secondary' }} />
                        <Typography
                           sx={theme => ({
                              fontWeight: 500,
                              color: 'text.secondary',
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
            </Card>
         ))}
      </Box>
   );
};

export default UserProfileFeed;