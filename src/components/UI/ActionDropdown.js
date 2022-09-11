import React, { useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { uiContext } from '../../context/ContextProvider';

const menu = ['Action', 'Another Action', 'Something Else Here'];

const ActionDropdown = ({ options }) => {
   const { actionAnchorEl, toggleAction } = useContext(uiContext);
   const open = Boolean(actionAnchorEl);

   const actionMenu = options ? options : menu;

   const handleClose = () => {
      toggleAction(null);
   };

   return (
      <Menu
         anchorEl={actionAnchorEl}
         id="account-menu"
         open={open}
         onClose={handleClose}
         onClick={handleClose}
         PaperProps={{
            elevation: 0,
            sx: {
               overflow: 'visible',
               filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.075))',
               mt: 0.5,
               '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
               }
            }
         }}
         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
         {actionMenu.map((text, index) => (
            <MenuItem
               key={index}
               sx={{
                  fontSize: '14px',
                  color: 'text.primary'
               }}
            >
               {text}
            </MenuItem>
         ))}
      </Menu>
   );
}

export default ActionDropdown;