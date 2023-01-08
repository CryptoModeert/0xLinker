import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Options'
import { ChakraProvider } from '@chakra-ui/react'
import { createHashRouter, redirect, RouterProvider } from 'react-router-dom'
import Links from './views/Links'
import Groups from './views/Groups'
import Configuration from './views/Configuration'
import About from './views/About'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Links />,
        index: true,
      },
      {
        path: '/links',
        element: <Links />,
      },
      {
        path: '/groups',
        element: <Groups />,
      },
      {
        path: '/configuration',
        element: <Configuration />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
