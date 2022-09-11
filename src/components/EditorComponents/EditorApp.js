import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../../data/data';
import { Box, Card } from '@mui/material';

const EditorApp = () => {
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
         <Box
            sx={{
               overflow: 'auto'
            }}
         >
            <RichTextEditorComponent style={{ maxHeight: '650px' }}>
               <EditorData />
               <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
            </RichTextEditorComponent>
         </Box>
      </Card>
   );
};

export default EditorApp;