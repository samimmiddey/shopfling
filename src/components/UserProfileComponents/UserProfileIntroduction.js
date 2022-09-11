import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import CardHeader from '../UI/CardHeader';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const data = [
   {
      icon: <ImportContactsOutlinedIcon sx={{ fontSize: '1.5rem', color: 'text.secondary' }} />,
      text: <Typography sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '15px' }}>
         Studied at <span style={{ color: '#333' }}>Seacom Engineering College</span>
      </Typography>
   },
   {
      icon: <LanguageOutlinedIcon sx={{ fontSize: '1.5rem', color: 'text.secondary' }} />,
      text: <Typography sx={{ color: 'text.primary', fontWeight: 500, fontSize: '15px' }}>
         shopfling.netlify.app
      </Typography>
   },
   {
      icon: <PlaceOutlinedIcon sx={{ fontSize: '1.5rem', color: 'text.secondary' }} />,
      text: <Typography sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '15px' }}>
         From <span style={{ color: '#333' }}>India</span>
      </Typography>
   },
];

const UserProfileIntroduction = ({ userData }) => {
   return (
      <Card elevation={0} className='card-padding'>
         <CardHeader text='Introduction' />
         <Box sx={{ marginTop: '-1rem' }}>
            <Typography sx={{ fontSize: '15px', color: 'text.secondary' }}>
               Hello, I'm {userData.name}. I love making websites and graphics. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, deserunt.
            </Typography>
            <Box
               sx={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '1rem'
               }}
            >
               {data.map((item, index) => (
                  <Box
                     key={index}
                     sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        columnGap: '10px'
                     }}
                  >
                     {item.icon}
                     {item.text}
                  </Box>
               ))}
            </Box>
         </Box>
      </Card>
   );
};

export default UserProfileIntroduction;