import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import routes from './routes/route.tsx'
import Providers from './providers/Providers.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
          <RouterProvider router={routes}/>
    </Providers>
  </StrictMode>,
)
