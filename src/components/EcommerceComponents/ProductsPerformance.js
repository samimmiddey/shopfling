import { Box, Card, Divider, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext, useState } from 'react';
import CardHeader from '../UI/CardHeader';
import { productsPerformance } from '../../data/data';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { uiContext } from '../../context/ContextProvider';

const BestsellerPerformance = () => {
   const { currentColor, secondaryColor } = useContext(uiContext);
   const [filteredData, setFilteredData] = useState(productsPerformance);

   const theme = useTheme();
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));

   const colors = [currentColor, 'rgb(0, 194, 146)', secondaryColor, 'rgb(228, 106, 118)'];

   const handleDelete = (index) => {
      setFilteredData(filteredData.filter((data, i) => i !== index));
   }

   return (
      <Card
         elevation={0}
         className='card-padding'
      >
         <CardHeader text='Products Performance' />
         <Box
            sx={{
               overflowX: 'auto',
               "&::-webkit-scrollbar": {
                  width: 20,
                  height: 5
               },
               "&::-webkit-scrollbar-thumb": {
                  borderRadius: 2
               }
            }}
         >
            <Box
               sx={{
                  minWidth: 650
               }}
            >
               {filteredData.map((item, index) => (
                  <Box key={index}>
                     <Box
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'space-between'
                        }}
                     >
                        <Box
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              columnGap: '1rem',
                              paddingRight: '1rem'
                           }}
                        >
                           <img
                              src={item.image}
                              alt=''
                              style={{
                                 height: lgWidth ? '60px' : '70px',
                                 width: lgWidth ? '80px' : '90px',
                                 borderRadius: '10px'
                              }}
                           />
                           <Box>
                              <Typography
                                 sx={theme => ({
                                    color: 'text.primary',
                                    fontWeight: 500,
                                    [theme.breakpoints.down('sm')]: {
                                       fontSize: '14px'
                                    }
                                 })}
                              >
                                 {item.title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1) + ' ')}
                              </Typography>
                              <Typography
                                 sx={theme => ({
                                    color: 'text.disabled',
                                    fontSize: '14px',
                                    marginTop: '3px',
                                    [theme.breakpoints.down('sm')]: {
                                       fontSize: '13px'
                                    }
                                 })}
                              >
                                 {item.desc}
                              </Typography>
                           </Box>
                        </Box>
                        <Box
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              columnGap: '2rem'
                           }}
                        >
                           <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>
                              <Typography sx={{ fontSize: '13px' }}>{item.rating}</Typography>
                              <Box
                                 sx={{
                                    height: '4px',
                                    width: '75px',
                                    borderRadius: '10px',
                                    position: 'relative',
                                    background: 'rgb(90 114 123 / 11%)',
                                    '&::before': {
                                       position: 'absolute',
                                       content: '""',
                                       top: 0,
                                       left: 0,
                                       right: 0,
                                       bottom: 0,
                                       borderRadius: '10px',
                                       backgroundColor: colors[index],
                                       width: item.itemSold
                                    }
                                 }}
                              />
                              <Typography
                                 sx={{
                                    fontSize: '13px',
                                    color: 'text.secondary'
                                 }}
                              >
                                 {item.itemSold} sold
                              </Typography>
                           </Box>
                           <Box>
                              <Typography
                                 sx={{
                                    fontSize: '14px',
                                    color: 'text.secondary'
                                 }}
                              >
                                 Earnings
                              </Typography>
                              <Typography
                                 sx={theme => ({
                                    fontSize: '15px',
                                    color: 'text.primary',
                                    fontWeight: 500,
                                    [theme.breakpoints.down('sm')]: {
                                       fontSize: '13px'
                                    }
                                 })}
                              >
                                 {item.earningAmount}
                              </Typography>
                           </Box>
                           <Box sx={{ marginLeft: '2rem' }}>
                              <Tooltip title='Delete' placement='top'>
                                 <IconButton size='medium' onClick={() => handleDelete(index)}>
                                    <DeleteOutlineOutlinedIcon sx={{ color: 'text.disabled' }} />
                                 </IconButton>
                              </Tooltip>
                           </Box>
                        </Box>
                     </Box>
                     <Divider sx={{ margin: '1.05rem 0' }} />
                  </Box>
               ))}
            </Box>
         </Box>
      </Card>
   );
};

export default BestsellerPerformance;