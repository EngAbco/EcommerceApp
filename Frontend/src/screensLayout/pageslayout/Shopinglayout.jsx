import Navigation from '@/screens/pagesScreens/Navigation'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Shopinglayout = () => {
  return (
    <div className='flex flex-col bg-slate-200 overflow-x-hidden '>
      <Navigation />
      <main className='flex flex-col w-full'>
    <Outlet />
      </main>
    </div>
  )
}

export default Shopinglayout