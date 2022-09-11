import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../../data/data';
import { Box, Card } from '@mui/material';

const KanbanApp = () => {
   return (
      <Card
         elevation={0}
         className='card-padding'
         sx={theme => ({
            backgroundColor: 'white',
            overflow: 'auto',
            "&::-webkit-scrollbar": {
               width: 20,
               height: 5
            },
            "&::-webkit-scrollbar-thumb": {
               borderRadius: 2
            },
            [theme.breakpoints.down('sm')]: {
               padding: '1rem 5px 5px 5px'
            }
         })}
      >
         <Box
            sx={theme => ({
               [theme.breakpoints.down('md')]: {
                  width: '750px'
               },
               [theme.breakpoints.down('sm')]: {
                  width: '650px'
               }
            })}
         >
            <KanbanComponent
               id="kanban"
               keyField="Status"
               dataSource={kanbanData}
               cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
               width='100%'
            >
               <ColumnsDirective>
                  {kanbanGrid.map((item, index) =>
                     <ColumnDirective key={index} {...item} />
                  )}
               </ColumnsDirective>
            </KanbanComponent>
         </Box>
      </Card>
   )
};

export default KanbanApp;