import React from 'react'
import StockSelector from './StockSelector'
import StockTable from './StockTable'
import StockChart from './StockChart'

const Dashboard = () => {
  return (
    <>
      <StockSelector/>
      <StockTable/>
      <StockChart/>
    </>
  )
}

export default Dashboard