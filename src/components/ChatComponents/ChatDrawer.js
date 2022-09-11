import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CustomizedTextfield from '../UI/CustomizedTextfield';
import { chatAppData } from '../../data/data';
import { Avatar, ListItemButton, Typography } from '@mui/material';
import { uiContext } from '../../context/ContextProvider';

const ChatDarwer = () => {
   const { chatMenu, toggleChatMenu, currentChatIndex, setCurrentChatIndex, currentColor, darkMode } = useContext(uiContext);
   const [chatDrawer, setChatDrawer] = useState(chatAppData);

   const handleChange = e => {
      setChatDrawer(chatAppData.filter(item => item.name.includes(e.target.value)));
   }

   return (
      <Box>
         <Drawer
            anchor='left'
            open={chatMenu}
            onClose={() => toggleChatMenu()}
            sx={{
               zIndex: 99,
               "& .MuiDrawer-paper": {
                  borderWidth: 0,
                  boxShadow: '0 0 50px rgba(0, 0, 0, 0.075)'
               }
            }}
         >
            <Box
               sx={{
                  padding: '90px 1rem 1rem 1rem',
                  borderBottom: darkMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)'
               }}
            >
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
                              color: index === currentChatIndex && darkMode === 'dark' ? 'white' : 'text.secondary',
                              fontSize: '13px'
                           }}
                        >
                           {item.position}
                        </Typography>
                     </Box>
                  </ListItemButton>
               ))}
            </Box>
         </Drawer>
      </Box>
   );
}

export default ChatDarwer;