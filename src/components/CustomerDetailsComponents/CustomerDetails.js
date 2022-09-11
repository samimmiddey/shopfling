import { Grid, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { uiContext } from '../../context/ContextProvider';
import { customersData } from '../../data/data';
import CustomerGridOne from './CustomerGridOne';
import CustomerGridTwo from './CustomerGridTwo';

const CustomerDetails = ({ id }) => {
   const { currentColor, setCustomerID } = useContext(uiContext);

   const [loading, setLoading] = useState(true);
   const [customer, setCustomer] = useState(null);

   const navigate = useNavigate();

   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   const { customerID } = useParams();

   let mainID = id;
   if (!id) {
      mainID = parseInt(customerID);
   }

   useEffect(() => {
      if (mainID) {
         if (!customersData.find(customer => customer.id === mainID)) {
            navigate('/');
         }
         setCustomer(customersData.find(customer => customer.id === mainID));
         setCustomerID(mainID);
         setLoading(false);
      }
   }, [navigate, customer, mainID, setCustomerID]);

   return (
      <>
         {
            !loading &&
            <Grid container spacing={smWidth ? 2.5 : 3}>
               <Grid item x={12} lg={4}>
                  <CustomerGridOne customer={customer} />
               </Grid>
               <Grid item x={12} lg={8}>
                  <CustomerGridTwo customer={customer} currentColor={currentColor} />
               </Grid>
            </Grid>
         }
      </>
   );
};

export default CustomerDetails;