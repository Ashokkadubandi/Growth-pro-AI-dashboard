import React, { useState } from 'react'

const initiaForm = {name:"",location:''}

const InputForm = (props) => {
    const {getData,callApi} = props
    const [formData,setFormData] = useState(initiaForm)

    const postData = async () => {
      try {
        callApi(true)
        const opt = {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData)
        }
        const response = await fetch('https://business-ai-4g2a.onrender.com/business-data',opt)
        const data = await response.json()
        console.log(data)
        getData(data)
      } catch (error) {
        console.log(error.message)
      }finally{
        callApi(false)
      }
    }


    const submitFormData = (event) => {
        event.preventDefault()
        postData()
        // getData(formData)
        // setFormData(initiaForm)
    }


  return (
    <form onSubmit={submitFormData} className='flex flex-col sm:items-center w-[100%] sm:w-[50%] sm:p-5'>
      <input value={formData.name} onChange={(e) => setFormData({...formData,name:e.target.value})} placeholder='Business Name' className='border-2 m-2 p-2 sm:p-5 rounded-sm w-[80%] outline-0' type='text'/>
      <br/>
      <input value={formData.location} onChange={(e) => setFormData({...formData,location:e.target.value})} placeholder='Location' className='border-2 m-2 p-2 sm:p-5 rounded-sm w-[80%] outline-0' type='text'/>
      <input className='bg-blue-700 text-xl p-2 text-white m-2 rounded-sm cursor-pointer w-[80%]' type='submit'/>
    </form>
  )
}

export default InputForm
