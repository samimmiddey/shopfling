import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import ProductCardTabData from './ProductCardTabsData';

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   };
}

const ProductCardTabs = ({ product }) => {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   const details = [
      {
         title: 'Product Name',
         data: product.name
      },
      {
         title: 'Product ID',
         data: Math.round(Math.random(999999))
      },
      {
         title: 'Active Status',
         data: 'Active'
      },
      {
         title: 'Stock Available',
         data: 'Available'
      },
      {
         title: 'Sold Out',
         data: 'False'
      },
      {
         title: 'Physical Delivery',
         data: 'Available'
      },
      {
         title: 'Categories',
         data: 'Shopping'
      },
      {
         title: 'Has Thumbnail',
         data: 'True'
      },
      {
         title: 'Price',
         data: product.price
      }
   ];

   return (
      <Box
         sx={theme => ({
            width: '100%',
            padding: '0 1rem',
            [theme.breakpoints.down('sm')]: {
               padding: 0
            }
         })}
      >
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
               <Tab sx={{ textTransform: 'none' }} label="Specification" {...a11yProps(0)} />
               <Tab sx={{ textTransform: 'none' }} label="Description" {...a11yProps(1)} />
            </Tabs>
         </Box>
         <TabPanel value={value} index={0} >
            <Grid spacing={2} sx={{ marginTop: '0px' }} component='span' container>
               <Grid component='span' item sx={{ width: '40%' }} x={12} md={6}>
                  <ProductCardTabData
                     details={details}
                  />
               </Grid>
               <Grid component='span' item sx={{ width: '40%' }} x={12} md={6}>
                  <ProductCardTabData
                     details={details}
                  />
               </Grid>
            </Grid>
         </TabPanel>
         <TabPanel value={value} index={1}>
            <Grid sx={{ marginTop: '16px' }} component='span' container>
               <Grid component='span' item sx={{ width: '40%' }} x={12} md={6}>
                  <span style={{ fontSize: '14px' }}>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium neque totam quisquam velit dignissimos beatae, ad quasi officia. Velit, nesciunt.
                  </span>
               </Grid>
            </Grid>
         </TabPanel>
      </Box >
   );
}

export default ProductCardTabs;