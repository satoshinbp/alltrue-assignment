import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Confirmation from './components/Confirmation'
import Form from './components/Form'
import store from './stores/form'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Form />,
    },
    {
      path: '/confirmation',
      element: <Confirmation />,
    },
  ])

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
