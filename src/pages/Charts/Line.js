import React from 'react'
import LineChart from '../../components/Charts/LineChart'
import ChartPage from '../../components/UI/ChartPage'

const Line = () => {
   return (
      <ChartPage
         title='Line Chart'
         marginBottom='1rem'
         Chart={LineChart}
      />
   )
}

export default Line