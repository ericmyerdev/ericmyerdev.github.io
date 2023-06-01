import React from 'react'
import { Outlet } from 'react-router-dom'
import style from './root.module.scss'

const root = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default root