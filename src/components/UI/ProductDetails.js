import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { styled } from '@mui/system';
import { Divider } from '@mui/material';
import Quantity from '../UI/Quantity';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import { ProductCardData } from '../../data/data';
import BasicRating from '../UI/Rating';
import ProductCardTabs from './ProductCardTabs';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';
import LightenDarkenColor from '../../Hooks/LightenDarkenColor';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const ActionButton = styled(Button)({
   minHeight: 0,
   minWidth: 0,
   height: '45px',
   width: '100%',
   textTransform: 'none',
   color: 'white'
});

const CardElement = styled(CardContent)(({ theme }) => ({
   padding: '10px 16px',
   height: '100%',
   [theme.breakpoints.down('sm')]: {
      padding: '10px 0'
   }
}));

const ResponsiveCard = styled(CardContent)(({ theme }) => ({
   padding: '10px 16px',
   [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      rowGap: '5px',
      alignItems: 'flex-start',
      padding: '10px 0'
   }
}));

const ResponsiveDiv = styled(CardContent)(({ theme }) => ({
   padding: '10px 16px',
   columnGap: '5rem',
   display: 'flex',
   alignItems: 'center',
   [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      rowGap: '10px',
      alignItems: 'flex-start'
   },
   [theme.breakpoints.down('sm')]: {
      padding: '10px 0'
   }
}));

const ResponsiveActions = styled(CardActions)(({ theme }) => ({
   padding: '1.5rem 1rem',
   display: 'flex',
   columnGap: '5px',
   [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      rowGap: '10px',
      alignItems: 'flex-end'
   },
   [theme.breakpoints.down('sm')]: {
      padding: '1.5rem 0'
   }
}));

const ProductDetails = ({ id }) => {
   const { currentColor, secondaryColor, setProductID, darkMode } = useContext(uiContext);
   const [loading, setLoading] = useState(true);
   const [product, setProduct] = useState(null);
   const navigate = useNavigate();

   const { productID } = useParams();
   let mainID = id;

   const currentColorHoverBg = LightenDarkenColor(currentColor, 15);
   const secondaryColorHoverBg = LightenDarkenColor(secondaryColor, 15);

   if (!id) {
      mainID = productID;
   }


   useEffect(() => {
      if (mainID) {
         if (!ProductCardData.find(item => item.name.split(' ').join('').toLowerCase() === mainID)) {
            navigate('/');
         }
         setProduct(ProductCardData.find(item => item.name.split(' ').join('').toLowerCase() === mainID));
         setProductID(mainID);
         setLoading(false);
      }
   }, [navigate, product, mainID, setProductID]);

   return (
      <>
         {
            !loading &&
            <Card elevation={0} className='card-padding'>
               <Grid container>
                  <Grid item xs={12} sm={12} md={5}>
                     <CardElement>
                        <img
                           style={{
                              maxHeight: '600px',
                              height: '100%',
                              width: '100%',
                              objectFit: 'cover',
                              borderRadius: '10px'
                           }}
                           src={product.img}
                           alt="Product"
                        />
                     </CardElement>
                  </Grid>
                  <Grid item xs={12} sm={12} md={7}>
                     <Box>
                        <CardElement>
                           <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <Button
                                 sx={{
                                    fontSize: '10px',
                                    backgroundColor: darkMode === 'dark' ? '#cae8cc' : '#e8f5e9',
                                    color: '#66bb6a',
                                    marginBottom: '10px'
                                 }}
                              >
                                 In Stock
                              </Button>
                              <Button
                                 sx={theme => ({
                                    backgroundColor: '#eceff1',
                                    color: '#aaa',
                                    marginBottom: '10px',
                                    minHeight: 0,
                                    minWidth: 0,
                                    padding: '8px 10px',
                                    [theme.breakpoints.down('sm')]: {
                                       padding: '5px 7px'
                                    }
                                 })}
                              >
                                 <FavoriteIcon />
                              </Button>
                           </Box>
                           <Typography
                              gutterBottom
                              variant="h6"
                              sx={theme => ({
                                 fontWeight: 700,
                                 fontSize: '2rem',
                                 [theme.breakpoints.down('xl')]: {
                                    fontSize: '1.75rem',
                                 },
                                 [theme.breakpoints.down('lg')]: {
                                    fontSize: '1.5rem',
                                 },
                                 [theme.breakpoints.down('md')]: {
                                    fontSize: '1rem',
                                 }
                              })}
                           >
                              {product.name}
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem in nesciunt deleniti tenetur, nam repellat est quos eos fugit placeat!
                           </Typography>
                        </CardElement>
                        <CardElement sx={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                           <BasicRating />
                           <Typography sx={{ color: 'text.disabled', fontSize: '14px' }}>
                              {product.rating}
                           </Typography>
                        </CardElement>
                        <ResponsiveCard sx={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                           <Typography variant='h5' sx={{ fontWeight: '700', color: currentColor }}>
                              {product.price}
                           </Typography>
                           <Typography variant='h6' sx={{ color: 'text.disabled', fontSize: '16px', textDecoration: 'line-through' }}>
                              {product.discount}
                           </Typography>
                           <Typography variant='h6' sx={{ color: 'text.disabled', fontSize: '12px' }}>
                              (Inclusive all of all taxes)
                           </Typography>
                        </ResponsiveCard>
                        <Divider
                           sx={theme => ({
                              margin: '1.5rem 1rem',
                              [theme.breakpoints.down('sm')]: {
                                 margin: '1rem 0'
                              }
                           })}
                        />
                        <Box
                           sx={theme => ({
                              marginTop: '1.85rem',
                              [theme.breakpoints.down('md')]: {
                                 marginTop: '1rem'
                              }
                           })}
                        >
                           <ResponsiveDiv>
                              <Typography
                                 variant='h6'
                                 sx={theme => ({
                                    fontSize: '18px',
                                    color: 'text.primary',
                                    fontWeight: 700,
                                    [theme.breakpoints.down('md')]: {
                                       fontSize: '16px',
                                    }
                                 })}
                              >
                                 Quantity
                              </Typography>
                              <Quantity />
                           </ResponsiveDiv>
                        </Box>
                        <Divider
                           sx={theme => ({
                              margin: '1rem',
                              [theme.breakpoints.down('sm')]: {
                                 margin: '1rem 0'
                              }
                           })}
                        />
                        <ResponsiveActions>
                           <ActionButton
                              disableElevation
                              color='primary'
                              variant='contained'
                              sx={{
                                 '&:hover': {
                                    backgroundColor: currentColorHoverBg
                                 }
                              }}
                           >
                              <ShoppingCartOutlinedIcon sx={{ marginRight: '8px' }} />
                              Add To Cart
                           </ActionButton>
                           <ActionButton
                              disableElevation
                              variant='contained'
                              color='secondary'
                              sx={{
                                 '&:hover': {
                                    backgroundColor: secondaryColorHoverBg
                                 }
                              }}
                           >
                              <BoltIcon sx={{ marginRight: '8px' }} />
                              Buy Now
                           </ActionButton>
                        </ResponsiveActions>
                     </Box>
                  </Grid>
               </Grid>
               <ProductCardTabs
                  product={product}
               />
            </Card>
         }
      </>
   );
};

export default ProductDetails;