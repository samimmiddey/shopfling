import React from 'react';
import { Box, useMediaQuery, useTheme, styled } from '@mui/material';
import { AnalyticsCards, Customers, DailyActivities, MedicalproBranding, MonthlyEarnings, ProductPerformance, RevenueUpdates, SalesOverview, SuperAwesomeCard, TotalSales, WeeklyStats } from '../components/AnalyticsComponents';
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

const Analytics = () => {
   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <>
         <Box className='container'>
            {/* First Section */}
            <AnalyticsCards />
            {/* Second Section */}
            <MyGrid sx={{ gridTemplateColumns: '8fr 4fr' }}>
               <RevenueUpdates height={smWidth ? '350px' : '400px'} width='100%' />
               <MyGrid
                  sx={theme => ({
                     marginTop: 0,
                     gridTemplateRows: '1fr 1fr',
                     [theme.breakpoints.down('lg')]: {
                        gridTemplateRows: 'none'
                     },
                     [theme.breakpoints.down('sm')]: {
                        marginTop: 0
                     }
                  })}
               >
                  <MonthlyEarnings height='225px' width='100%' index='0' />
                  <Customers height='225px' width='100%' />
               </MyGrid>
            </MyGrid>
            {/* Third Section */}
            <MyGrid sx={{ gridTemplateColumns: '4fr 8fr' }}>
               <TotalSales />
               <ProductPerformance />
            </MyGrid>
            {/* Fourth Section */}
            <MyGrid sx={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
               <DailyActivities />
               <SalesOverview />
            </MyGrid>
            {/* Fifth Section */}
            <MyGrid sx={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
               <SuperAwesomeCard />
               <WeeklyStats height='175px' width='100%' />
               <MedicalproBranding />
            </MyGrid>
         </Box>
         <ActionDropdown />
      </>
   );
};

export default Analytics;