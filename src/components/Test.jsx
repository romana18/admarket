import React from 'react'

function Test() {
  return (
    <>
   {/* <div className='grid sm:grid-cols-2 gap-4 m-4 grid-cols-2'>
        <div className='min-h-[100px] rounded-lg shadow bg-slate-600'></div>
        <div className='min-h-[100px] rounded-lg shadow bg-orange-600'></div>
    </div> */}

     {/* <div className='grid sm:grid-cols-4 gap-4 m-4'>
        <div className='min-h-[100px] rounded-lg shadow bg-teal-600'></div>
        <div className='min-h-[100px] rounded-lg shadow bg-orange-600'></div>
        <div className='min-h-[100px] rounded-lg shadow bg-red-600'></div>
        <div className='min-h-[100px] rounded-lg shadow bg-purple-600'></div>
    </div> */}

    <div className='grid sm:grid-cols-12 gap-4 m-4 grid-cols-1'>
        <div className='min-h-[100px] rounded-lg shadow sm:col-span-2 bg-teal-600'></div>
        <div className='min-h-[100px] rounded-lg shadow sm:col-span-10 bg-orange-600'></div>
    </div>

    <div className='grid gap-4 m-4 sm:grid-cols-12'>
        <div className='min-h-[100px] rounded-lg shadow sm:col-span-2 bg-teal-600 sm:block hidden'></div>
        <div className='min-h-[100px] rounded-lg shadow sm:col-span-8 bg-orange-600'></div>
        <div className='min-h-[100px] rounded-lg shadow sm:col-span-2 sm:block hidden bg-purple-600'></div>
    </div>

    </>
  )
}

export default Test

