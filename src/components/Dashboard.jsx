import React, { useEffect, useState } from 'react'
import {ClipLoader}  from 'react-spinners'
import { FaStar } from "react-icons/fa";
import { FaLocationDot,FaComments } from "react-icons/fa6";

const Dashboard = (props) => {
    const {sendData,apiState} = props
    const [dashboardData,setDashBoardData] = useState({})
    const [regenStateApi,setRegenApi] = useState(false)
    const {name,location,decoded,cleanedHeadline,ratings,reviews} = dashboardData

    useEffect(() => {
      if(sendData){
        setDashBoardData(sendData)
      }
      
    },[sendData])

    const regenerateHeadline = async () => {
      setRegenApi(true)
      try {
              const opt = {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        }
      }
      const url = `https://business-ai-4g2a.onrender.com/generate-headline?name=${name}&location=${location}`
      const response = await fetch(url,opt)
      const data = await response.json()
      const {msg} = data
      console.log(data)
      setDashBoardData(msg)
      } catch (error) {
        alert(error.message)
      }finally{
        setRegenApi(false)
      }
    }


    const renderDashBoard = () => {
      return (
        <div className='p-2 sm:p-5 sm:pl-5'>
          <h2 className='text-3xl pb-5 font-bold'>
            {name}</h2>
          
          <div className='flex items-center'>
            <h2 className='font-bold text-xl'>
              {location}</h2>
            <FaLocationDot style={{color:'red', paddingLeft:'10px', fontSize:'25px'}}/>
          </div>

          <div className='flex items-center'>
            <h2 className='font-bold text-xl'>
              Ratings: {ratings}</h2>
            <FaStar style={{color:'yellow', paddingLeft:'10px', fontSize:'38px'}} />
          </div>
          
          <div className='flex items-center'>
              <h2 className='font-bold text-xl'>
                Reviews: {reviews}</h2>
              <FaComments style={{color:'grey', paddingLeft:'10px', fontSize:'38px'}}/>
          </div>
          <h1 className='text-blue-700 pt-5 text-xl font-bold'>
            {cleanedHeadline || decoded}</h1>
          <button onClick={regenerateHeadline} className='bg-green-400 text-white mt-5 rounded-xl p-2 cursor-pointer w-[25%]'>
            {regenStateApi ? <ClipLoader/> : 'Regenerate Headline'}</button>
        </div>
      )
    }


    const renderDashBoardData = () => {
      switch (apiState) {
        case true:
          return <ClipLoader/>
          break;
        case false:
          return renderDashBoard()
        default:
          return null;
      }
    }

  return (
    <div className='flex flex-col items-center justify-center'>
      {renderDashBoardData()}
    </div>
    
  )
}

export default Dashboard
