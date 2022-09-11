import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { uiContext } from '../../context/ContextProvider';
import SelectMenu from './SelectMenu';

const CardHeader = ({ text, selectMenu, actionMenu }) => {
   const { toggleAction } = useContext(uiContext);

   const list = ['March 2022', 'April 2022', 'May 2022'];

   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: (text !== 'Revenue Updates' && text !== 'Product Performance') && '2rem'
         }}
      >
         <Typography
            sx={theme => ({
               color: 'text.primary',
               fontSize: '1.25rem',
               fontWeight: 500,
               [theme.breakpoints.down('lg')]: {
                  fontSize: '1.15rem'
               },
               [theme.breakpoints.down('sm')]: {
                  fontSize: '1rem'
               }
            })}
         >
            {text}
         </Typography>
         {
            actionMenu &&
            <Tooltip title='Action' placement='bottom'>
               <IconButton size='medium' onClick={event => toggleAction(event.currentTarget)}>
                  <BsThreeDots style={{ color: '#868395' }} />
               </IconButton>
            </Tooltip>
         }
         {
            selectMenu &&
            <SelectMenu list={list} />
         }
      </Box>
   );
};

export default CardHeader;