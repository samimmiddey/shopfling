import { Card } from '@mui/material';
import React, { useContext } from 'react';
import MailGridOne from './MailGrids/MailGridOne';
import MailGridThree from './MailGrids/MailGridThree';
import MailGridTwo from './MailGrids/MailGridTwo';
import { mailAppData } from '../../data/data';
import ActionDropdown from '../UI/ActionDropdown';
import { uiContext } from '../../context/ContextProvider';
import MailDrawer from './MailDrawer';
import MailViewDrawer from './MailViewDrawer';
import ComposeMailModal from './ComposeMailModal';

const MailComponents = () => {
   const { currentColor } = useContext(uiContext);

   const categoryButtonBg = [
      {
         category: 'Promotional',
         color: currentColor
      },
      {
         category: 'Social',
         color: 'rgb(228, 106, 118)'
      },
      {
         category: 'Health',
         color: 'rgb(0, 194, 146)'
      }
   ];

   return (
      <>
         <Card
            elevation={0}
            sx={theme => ({
               display: 'grid',
               gridTemplateColumns: '2.5fr 3fr 6.5fr',
               [theme.breakpoints.down('md')]: {
                  gridTemplateColumns: 'none'
               }
            })}
         >
            <MailGridOne mailAppData={mailAppData} />
            <MailGridTwo mailAppData={mailAppData} categoryButtonBg={categoryButtonBg} />
            <MailGridThree mailAppData={mailAppData} categoryButtonBg={categoryButtonBg} />
         </Card>
         <ActionDropdown options={['Inbox', 'Sent', 'Draft', 'Spam', 'Trash']} />
         <MailDrawer mailAppData={mailAppData} />
         <MailViewDrawer mailAppData={mailAppData} categoryButtonBg={categoryButtonBg} />
         <ComposeMailModal />
      </>
   );
};

export default MailComponents;