import React, { useState, useContext, useRef } from 'react';
import { Avatar, Box, Card, IconButton, ListItemButton, TextField, Typography } from '@mui/material';
import { chatAppData } from '../../data/data';
import CustomizedTextfield from '../UI/CustomizedTextfield';
import { uiContext } from '../../context/ContextProvider';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const ChatComponents = () => {
   const { currentColor, toggleChatMenu, currentChatIndex, setCurrentChatIndex, darkMode } = useContext(uiContext);
   const [chatData, setChatData] = useState([...chatAppData]);
   const [chatDrawer, setChatDrawer] = useState(chatAppData);
   const [activeBtn, setActiveBtn] = useState(false);
   const inputRef = useRef();

   const borderProperty = darkMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)';
   const gridPadding = '1.25rem 1rem';
   const chatBox = {
      padding: '1rem',
      borderRadius: '8px',
      maxWidth: '450px'
   }

   const handleChange = e => {
      setChatDrawer(chatAppData.filter(item => item.name.includes(e.target.value)));
   }

   const handleSubmit = e => {
      e.preventDefault();

      if (inputRef.current.value.trim().length >= 1) {
         setChatData(chatData.map((item, index) => {
            if (index === currentChatIndex) {
               return {
                  ...item,
                  message: item.message.concat({
                     messageTo: [inputRef.current.value]
                  })
               }
            }
            return {
               ...item
            }
         }));
      }

   };

   return (
      <Card elevation={0}>
         <Box
            sx={theme => ({
               display: 'grid',
               gridTemplateColumns: '3fr 9fr',
               [theme.breakpoints.down('lg')]: {
                  gridTemplateColumns: 'none'
               }
            })}
         >
            {/* First Grid */}
            <Box
               sx={theme => ({
                  borderRight: borderProperty,
                  minWidth: '250px',
                  [theme.breakpoints.down('lg')]: {
                     display: 'none'
                  }
               })}
            >
               <Box sx={{ padding: gridPadding, borderBottom: borderProperty }}>
                  <CustomizedTextfield
                     size='small'
                     label='Search Contacts'
                     width='100%'
                     handleChange={handleChange}
                  />
               </Box>
               <Box
                  sx={{
                     padding: '1rem 8px',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     justifyContent: 'flex-start',
                     rowGap: '8px',
                     height: '580px',
                     overflowY: 'hidden',
                     '&:hover': {
                        overflowY: 'auto'
                     }
                  }}
               >
                  {chatDrawer.map((item, index) => (
                     <ListItemButton
                        key={index}
                        disableRipple
                        onClick={() => setCurrentChatIndex(index)}
                        sx={{
                           borderRadius: '8px',
                           px: 2.5,
                           py: 1.75,
                           maxHeight: 70,
                           transition: '300ms ease',
                           display: 'flex',
                           alignItems: 'center',
                           columnGap: '1rem',
                           width: '100%',
                           backgroundColor: index === currentChatIndex ? `${currentColor}25` : '',
                           '&:hover': {
                              backgroundColor: index === currentChatIndex ? `${currentColor}25` : ''
                           }
                        }}
                     >
                        <Avatar src={item.img} />
                        <Box>
                           <Typography
                              sx={{
                                 color: index === currentChatIndex && darkMode === 'dark' ? 'white' : 'text.primary',
                                 fontSize: '15px',
                                 fontWeight: 500
                              }}
                           >
                              {item.name}
                           </Typography>
                           <Typography
                              sx={{
                                 color: index === currentChatIndex && darkMode === 'dark' ? 'white' : 'text.disabled',
                                 fontSize: '13px'
                              }}>
                              {item.position}
                           </Typography>
                        </Box>
                     </ListItemButton>
                  ))}
               </Box>
            </Box>
            {/* Second Grid */}
            <Box>
               <Box
                  sx={{
                     padding: gridPadding,
                     borderBottom: borderProperty,
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '1rem'
                  }}
               >
                  <Box
                     sx={theme => ({
                        marginRight: '-8px',
                        [theme.breakpoints.up('lg')]: {
                           display: 'none'
                        }
                     })}
                  >
                     <IconButton size='medium' onClick={() => toggleChatMenu()}>
                        <MenuOutlinedIcon sx={{ color: 'text.secondary' }} />
                     </IconButton>
                  </Box>
                  <Avatar src={chatAppData[currentChatIndex].img} alt='' />
                  <Box>
                     <Typography sx={{ color: 'text.primary', fontSize: '14px', fontWeight: 500 }}>
                        {chatAppData[currentChatIndex].name}
                     </Typography>
                     <Typography sx={{ color: 'text.disabled', fontSize: '12px' }}>
                        {chatAppData[currentChatIndex].status}
                     </Typography>
                  </Box>
               </Box>
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     rowGap: '8px',
                     padding: gridPadding,
                     height: '500px',
                     overflowY: 'hidden',
                     borderBottom: borderProperty,
                     '&:hover': {
                        overflowY: 'auto'
                     }
                  }}
               >
                  {chatData[currentChatIndex].message.map((chat, index) => (
                     <Box
                        key={index}
                        sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           rowGap: '8px'
                        }}
                     >
                        {
                           chat.messageFor ? (
                              chat.messageFor.map((item, index) => (
                                 <Box
                                    key={index}
                                    sx={{
                                       display: 'flex',
                                       alignItems: 'flex-start',
                                       columnGap: '10px'
                                    }}
                                 >
                                    {
                                       index === 0 &&
                                       <Avatar src={chatAppData[currentChatIndex].img} alt='' />
                                    }
                                    <Box
                                       sx={{
                                          ...chatBox,
                                          backgroundColor: `${currentColor}25`,
                                          alignSelf: 'flex-start',
                                          marginLeft: index !== 0 && '50px'
                                       }}
                                    >
                                       <Typography
                                          sx={{
                                             color: darkMode === 'dark' ? 'white' : 'text.primary',
                                             fontSize: '15px'
                                          }}
                                       >
                                          {item}
                                       </Typography>
                                    </Box>
                                 </Box>
                              ))
                           ) : (
                              chat.messageTo.map((item, index) => (
                                 <Box
                                    key={index}
                                    sx={{
                                       ...chatBox,
                                       backgroundColor: `${currentColor}25`,
                                       alignSelf: 'flex-end'
                                    }}
                                 >
                                    <Typography
                                       sx={{
                                          color: darkMode === 'dark' ? 'white' : 'text.primary',
                                          fontSize: '15px',
                                          textAlign: 'right'
                                       }}
                                    >
                                       {item}
                                    </Typography>
                                 </Box>
                              ))
                           )
                        }
                     </Box>
                  ))}
               </Box>
               <form
                  style={{
                     padding: gridPadding,
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '10px'
                  }}
                  onSubmit={e => handleSubmit(e)}
               >
                  <TextField
                     size='small'
                     label='Type a message'
                     variant="outlined"
                     color='primary'
                     InputLabelProps={{ style: { fontSize: '14px' } }}
                     sx={{ width: '100%' }}
                     inputRef={inputRef}
                     onChange={e => {
                        if (e.target.value) {
                           setActiveBtn(true);
                        } else {
                           setActiveBtn(false);
                        }
                     }}
                  />
                  <SendOutlinedIcon
                     sx={{
                        color: activeBtn ? currentColor : 'text.secondary',
                        cursor: 'pointer'
                     }}
                     onClick={handleSubmit}
                  />
               </form>
            </Box>
         </Box>
      </Card>
   );
};

export default ChatComponents;