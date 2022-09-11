import React from 'react';
import { Box, styled, useMediaQuery, useTheme } from '@mui/material';
import { EcommerceCards, BestsellerPerformance, Earnings, YearlySales, RecentTransactions, ProductsPerformance, DailyActivities } from '../components/EcommerceComponents';
import { MedicalproBranding, WeeklyStats } from '../components/AnalyticsComponents';
import ActionDropdown from '../components/UI/ActionDropdown';

const MyGrid = styled(Box)(({ theme }) => ({
   display: 'grid',
   marginTop: '28px',
   gap: '28px',
   [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: 'none'
   },
   [theme.breakpoints.down('sm')]: {
      gap: '24px',
      marginTop: '24px'
   }
}));

const Ecommerce = () => {
   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   const colors = ['rgb(252, 241, 237)', 'rgb(251, 150, 120)', 'rgb(254, 201, 15)', 'rgb(228, 106, 118)']

   return (
      <>
         <Box className='container'>
            <EcommerceCards />
            <MyGrid sx={{ gridTemplateColumns: '8fr 4fr' }}>
               <BestsellerPerformance height={smWidth ? '350px' : '400px'} width='100%' />
               <MyGrid
                  sx={theme => ({
                     marginTop: 0,
                     gridTemplateRows: '1fr 1fr',
                     [theme.breakpoints.down('lg')]: {
                        gridTemplateRows: 'none',
                        gridTemplateColumns: '1fr 1fr'
                     },
                     [theme.breakpoints.down('md')]: {
                        marginTop: 0,
                        gridTemplateColumns: 'none'
                     }
                  })}
               >
                  <Earnings />
                  <YearlySales />
               </MyGrid>
            </MyGrid>
            <MyGrid sx={{ gridTemplateColumns: '4fr 8fr' }}>
               <RecentTransactions />
               <ProductsPerformance />
            </MyGrid>
            <MyGrid sx={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
               <WeeklyStats height='175px' width='100%' />
               <MedicalproBranding colors={colors} />
               <DailyActivities />
            </MyGrid>
         </Box>
         <ActionDropdown />
      </>
   );
};

export default Ecommerce;