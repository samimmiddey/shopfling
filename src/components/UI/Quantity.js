import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { styled } from '@mui/material';

const QuantityButton = styled(Button)({
   minHeight: 0,
   minWidth: 0,
   padding: '8px'
});

export default function VariantButtonGroup() {
   const [amount, setAmount] = useState(1);

   return (
      <ButtonGroup variant="outlined" size='small' color='primary'>
         <QuantityButton
            onClick={() => {
               amount > 1 && setAmount(amount => amount - 1)
            }}
         >
            <RemoveOutlinedIcon sx={{ fontSize: '16px' }} />
         </QuantityButton>
         <QuantityButton>{amount}</QuantityButton>
         <QuantityButton
            onClick={() => setAmount(amount => amount + 1)}
         >
            <AddOutlinedIcon sx={{ fontSize: '16px' }} />
         </QuantityButton>
      </ButtonGroup >
   );
}