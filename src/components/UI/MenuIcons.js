import React, { useContext } from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Badge from "@mui/material/Badge";
import Tooltip from '@mui/material/Tooltip';
import { uiContext } from "../../context/ContextProvider";

export default function MenuIcons() {
   const { currentColor, secondaryColor, toggleCart, toggleChat, toggleNotification } = useContext(uiContext);

   const icons = [
      {
         icon:
            <ShoppingCartOutlinedIcon
               sx={theme => ({
                  color: currentColor,
                  [theme.breakpoints.down('xs')]: {
                     fontSize: '1.4rem'
                  }
               })}
            />,
         text: 'Cart'
      },
      {
         icon:
            <ChatBubbleOutlineOutlinedIcon
               sx={theme => ({
                  color: currentColor,
                  [theme.breakpoints.down('xs')]: {
                     fontSize: '1.4rem'
                  }
               })}
            />,
         text: 'Chat'
      },
      {
         icon:
            <NotificationsOutlinedIcon
               sx={theme => ({
                  color: currentColor,
                  [theme.breakpoints.down('xs')]: {
                     fontSize: '1.4rem'
                  }
               })}
            />,
         text: 'Notification'
      }
   ];

   const handleMenuItems = (event, index) => {
      if (index === 0) {
         toggleCart();
      }

      if (index === 1) {
         toggleChat(event.currentTarget);
      }

      if (index === 2) {
         toggleNotification(event.currentTarget);
      }

      return;
   };

   return (
      <Box>
         <Box
            sx={theme => ({
               display: "flex",
               alignItems: 'center',
               columnGap: '10px',
               [theme.breakpoints.down('sm')]: {
                  columnGap: '5px'
               }
            })}
         >
            {icons.map((icon, index) => (
               <Tooltip key={index} title={icon.text} placement='bottom' arrow>
                  <IconButton
                     size='medium'
                     onClick={(event) => {
                        handleMenuItems(event, index);
                     }}
                  >
                     {index === 0 ? (
                        icon.icon
                     ) : (
                        <Badge
                           variant="dot"
                           sx={{
                              "& .MuiBadge-badge": {
                                 backgroundColor: index === 1 ? currentColor : secondaryColor
                              }
                           }}
                        >
                           {icon.icon}
                        </Badge>
                     )}
                  </IconButton>
               </Tooltip>
            ))}
         </Box>
      </Box>
   );
}