// router/router.ts
import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import KidsWear from '@/pages/products/KidsWear'
import MensWear from '@/pages/products/MensWear'
import WomensWear from '@/pages/products/WomensWear'
import Layout from '@/pages/layout/Layout'
import { ThemeProvider } from '@/context/themeContext/ThemeProvider'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import Cart from '@/pages/cart/Cart'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import ProductList from '@/pages/admin/Inventory'
import Form from '@/components/form/Form'
import ProtectedRoute from './ProtectedRoute'

const rootRoute = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <Layout/>
        </Provider> 
    </ThemeProvider>
  ),
   errorComponent: ({ error }) => (
    <div className="p-4 text-red-500">
      <h2>Something went wrong 💥</h2>
      <pre>{error.message}</pre>
    </div>
  )
})

const HomeRoute = createRoute({
  path:'/',
  getParentRoute:()=>rootRoute,
  component:()=><Home/>
})

const LoginRoute = createRoute({
  path:"/login",
  getParentRoute:()=>rootRoute,
  component:()=><Login/>
})

const MenRoute = createRoute({
  path: '/men',
  getParentRoute: () => rootRoute,
  component:()=>(<MensWear/>) ,
})

const WomenRoute = createRoute({
  path: '/women',
  getParentRoute: () => rootRoute,
  component: ()=>(<WomensWear/>),
})

const KidsRoute = createRoute({
  path: '/kids',
  getParentRoute: () => rootRoute,
  component: ()=>(<KidsWear/>),
})

const cartRoute = createRoute({
  path:'/cart',
  getParentRoute:()=>rootRoute,
  component:()=>(
    <ProtectedRoute>
      <Cart/>
    </ProtectedRoute>
  )
})

const DashbordRoute = createRoute({
  path:"/inventory",
  getParentRoute:()=>rootRoute,
  component:()=>(
 <ProtectedRoute>
   <ProductList/>
 </ProtectedRoute>
)
})

const formRoute = createRoute({
  path:"/form",
  getParentRoute:()=>rootRoute,
  component:()=>(<Form/>)
})

export const editItemRoute = createRoute({
  path: '/form/edit/$id', 
  getParentRoute: () => rootRoute,
  component: Form,
})


const routeTree = rootRoute.addChildren([HomeRoute,MenRoute, WomenRoute, KidsRoute,LoginRoute,cartRoute,DashbordRoute,formRoute,editItemRoute])

export const router = createRouter({ routeTree })
