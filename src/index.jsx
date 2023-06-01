import React from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactRouter from 'react-router-dom'

import Root from './routes/root'
import AnimatedNavigation from './pages/animated-navigation'

const rtr = ReactRouter.createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: 'animated-navigation',
                element: <AnimatedNavigation />
            },
        ]
    }
])

createRoot(document.querySelector('#root')).render(<ReactRouter.RouterProvider router={rtr} /> )
