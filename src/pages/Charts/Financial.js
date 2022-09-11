import React from 'react';
import ChartPage from '../../components/UI/ChartPage';
import FinancialChart from '../../components/Charts/FinancialChart';

const Financial = () => {
   return (
      <ChartPage
         title='Financial Chart'
         marginBottom='3.5rem'
         Chart={FinancialChart}
      />
   );
};

export default Financial;