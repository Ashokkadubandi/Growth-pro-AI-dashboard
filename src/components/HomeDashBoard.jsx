import React, { useState } from 'react'
import InputForm from './Input'
import Dashboard from './Dashboard'

const HomeDashBoard = () => {
    const [Data,setData] = useState({})
    const [apiState,setApiState] = useState('')

    const getData = (ProductData) => {
        setApiState(false)
        setData(ProductData)
    }


  return (
    <div className='p-5'>
      <h1 className='text-5xl font-medium'>Mini Local Business SEO Dashboard</h1>
      <div className='pt-5 sm:flex sm:pt-15'>
        <InputForm getData={getData} callApi={setApiState}/>
        <Dashboard sendData={Data} apiState={apiState}/>
      </div>
      
    </div>
  )
}

export default HomeDashBoard
