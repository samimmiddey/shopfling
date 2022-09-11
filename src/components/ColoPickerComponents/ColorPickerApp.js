import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Box, Card, Typography } from '@mui/material';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const change = (args) => {
   document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};

const CustomColorPicker = ({ id, mode }) => {
   return (
      <ColorPickerComponent
         id={id}
         mode={mode}
         modeSwitcher={false}
         inline
         showButtons={false}
         change={change}
      />
   );
};

const ColorPickerApp = () => {
   const { currentColor } = useContext(uiContext);

   const style = {
      background: "transparent url('https://ej2.syncfusion.com/react/demos/src/color-picker/images/pen.png') no-repeat",
      display: 'inline-block',
      height: '80px',
      margin: '10px 0',
      maxWidth: '600px',
      width: '100%',
      backgroundColor: currentColor
   }

   return (
      <Card
         elevation={0}
         className='card-padding'
         sx={theme => ({
            backgroundColor: 'white',
            [theme.breakpoints.down('sm')]: {
               padding: '1rem'
            }
         })}
      >
         <Box sx={{ overflow: 'hidden' }}>
            <Box sx={{ textAlign: 'center' }}>
               <Box id="preview" sx={style} />
               <Box
                  sx={theme => ({
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     columnGap: '5rem',
                     margin: '1rem 0',
                     [theme.breakpoints.down('lg')]: {
                        columnGap: '2rem'
                     },
                     [theme.breakpoints.down('md')]: {
                        columnGap: 0,
                        flexDirection: 'column',
                        rowGap: '1rem',
                        marginTop: 0
                     }
                  })}
               >
                  <Box>
                     <Typography
                        sx={{
                           color: 'text.primary',
                           fontWeight: 500,
                           marginBottom: '10px'
                        }}
                     >
                        Inline Pallete
                     </Typography>
                     <CustomColorPicker id="inline-palette" mode="Palette" />
                  </Box>
                  <Box>
                     <Typography
                        sx={{
                           color: 'text.primary',
                           fontWeight: 500,
                           marginBottom: '10px'
                        }}
                     >
                        Inline Picker
                     </Typography>
                     <CustomColorPicker id="inline-picker" mode="Picker" />
                  </Box>
               </Box>
            </Box>
         </Box>
      </Card>
   );
};

export default ColorPickerApp;