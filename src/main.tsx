
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes/routes.tsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/authContext/AuthContext.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ToastContainer/>
  </QueryClientProvider>
  </AuthProvider>
)
