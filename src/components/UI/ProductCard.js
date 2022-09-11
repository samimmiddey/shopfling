import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from './Rating';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const ProductCard = ({ product, path }) => {
   const { currentColor } = useContext(uiContext);

   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Link to={path}>
         <Card
            elevation={0}
            sx={{
               maxWidth: 415,
               position: 'relative',
               borderRadius: '10px'
            }}
         >
            <CardMedia
               component="img"
               alt="Image"
               height={smWidth ? '175' : '200'}
               image={product.img}
            />
            <CardContent sx={{ paddingBottom: 0 }}>
               <Typography
                  gutterBottom
                  variant="h6"
                  sx={{
                     color: 'text.primary',
                     fontWeight: 600,
                     padding: smWidth ? '3px 0' : '6px 0',
                     fontSize: smWidth ? '16px' : '18px'
                  }}
               >
                  {product.name}
               </Typography>
               <Typography
                  className='text-wrap'
                  variant="body2"
                  color="text.secondary"
               >
                  Lorem ipsum dolor sit amet adipisicing elit optio ab dolorem in laboriosam ducimus dolor vitae animi rem ut reiciendis
               </Typography>
            </CardContent>
            <CardContent
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '10px',
                  padding: '10px 16px'
               }}
            >
               <Rating />
               <Typography
                  variant='h6'
                  sx={theme => ({
                     fontSize: '13px',
                     color: 'text.secondary',
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '12px'
                     }
                  })}
               >
                  {product.ratingDetails}
               </Typography>
            </CardContent>
            <CardContent
               sx={theme => ({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '4px 16px 24px 16px',
                  [theme.breakpoints.down('sm')]: {
                     padding: '4px 16px 20px 16px'
                  }
               })}
            >
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                     width: '100%'
                  }}
               >
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '8px'
                     }}
                  >
                     <Typography
                        sx={{
                           fontSize: smWidth ? '15px' : '18px',
                           fontWeight: 600,
                           color: 'text.disabled'
                        }}>
                        {product.price}
                     </Typography>
                     <Typography
                        sx={theme => ({
                           color: 'text.secondary',
                           fontSize: '13px',
                           textDecoration: 'line-through',
                           [theme.breakpoints.down('sm')]: {
                              fontSize: '12px'
                           }
                        })}
                     >
                        {product.discount}
                     </Typography>
                  </Box>
                  <Button
                     size="small"
                     variant='contained'
                     disableElevation
                     sx={{
                        textTransform: 'none',
                        minHeight: 0,
                        minWidth: 0,
                        textAlign: 'center',
                        height: smWidth ? '30px' : '35px',
                        width: smWidth ? '40px' : '50px',
                        backgroundColor: currentColor,
                        color: 'white',
                        '&:hover': {
                           backgroundColor: currentColor
                        }
                     }}
                  >
                     <AddShoppingCartIcon
                        sx={theme => ({
                           fontSize: '1.5rem',
                           [theme.breakpoints.down('sm')]: {
                              fontSize: '1.35rem'
                           }
                        })}
                     />
                  </Button>
               </Box>
            </CardContent>
            <Button
               variant='contained'
               disableElevation
               sx={theme => ({
                  backgroundColor: '#fff',
                  color: 'rgba(0, 0, 0, 0.15)',
                  minHeight: 0,
                  minWidth: 0,
                  padding: '4px',
                  position: 'absolute',
                  top: '15px',
                  right: '17px',
                  '&:hover': {
                     backgroundColor: '#fff'
                  },
                  [theme.breakpoints.down('sm')]: {
                     top: '13px',
                     right: '13px',
                     padding: '3px'
                  }
               })}
            >
               <FavoriteIcon
                  sx={theme => ({
                     fontSize: '1.5rem',
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '1.35rem'
                     }
                  })}
               />
            </Button>
         </Card>
      </Link>
   )
}

export default ProductCard;