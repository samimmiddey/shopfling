import React from 'react';
import { Card } from '@mui/material';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../../data/data';

const CalendarApp = () => {
   const onDragStart = (arg) => {
      arg.navigation.enable = true;
   };

   return (
      <Card elevation={0}
         className='card-padding'
         sx={theme => ({
            backgroundColor: 'white',
            [theme.breakpoints.down('sm')]: {
               padding: '1rem'
            }
         })}
      >
         <ScheduleComponent
            height="650px"
            selectedDate={new Date(2021, 0, 10)}
            eventSettings={{ dataSource: scheduleData }}
            dragStart={onDragStart}
         >
            <ViewsDirective>
               {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
         </ScheduleComponent>
      </Card>
   );
};

export default CalendarApp;