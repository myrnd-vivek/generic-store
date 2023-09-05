import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/store',
    element: <Store />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App