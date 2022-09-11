import { Box, Card } from '@mui/material';
import React from 'react';
import CardHeader from '../UI/CardHeader';
import img1 from '../../data/img1.jpg';
import img2 from '../../data/img2.jpg';
import img3 from '../../data/img3.jpg';
import img4 from '../../data/img4.jpg';
import img5 from '../../data/img5.jpg';
import img6 from '../../data/img5.jpg';
import img7 from '../../data/avatar2.jpg';
import img8 from '../../data/avatar3.png';
import img9 from '../../data/avatar4.jpg';

const UserProfilePhotos = () => {
   return (
      <Card
         className='card-padding'
         elevation={0}
         sx={theme => ({
            marginTop: '28px',
            [theme.breakpoints.down('sm')]: {
               marginTop: '24px'
            }
         })}
      >
         <CardHeader text='Photos' />
         <Box
            sx={{
               display: 'grid',
               gridTemplateColumns: 'repeat(3, 1fr)',
               gap: '1.5rem',
               gridAutoRows: '1fr'
            }}
         >
            {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map((img, index) => (
               <Box
                  key={index}
                  sx={{
                     height: '100%',
                     width: '100%',
                     borderRadius: '10px'
                  }}
               >
                  <img
                     src={img}
                     alt=''
                     style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px'
                     }}
                  />
               </Box>
            ))}
         </Box>
      </Card>
   );
};

export default UserProfilePhotos;