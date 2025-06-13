import Header from "@/components/header/Header"
import { Outlet } from "@tanstack/react-router"

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout
