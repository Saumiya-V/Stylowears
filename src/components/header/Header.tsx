import NavMenu  from '../navmenu/NavMenu';
import SearchBar from '../searchbar/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ModeToggle } from '../mode-toggle/ModeToggle';
import { useTheme } from '../../context/themeContext/ThemeProvider';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import SearchedItemDisplay from '@/pages/products/SearchedItemDisplay';


const Header = () => {
    const {theme} = useTheme()
    const [query,setQuery]=useState("")
    const isDark = theme === 'dark'

  return (
 <>
  <div className="flex items-center justify-between px-6 py-4 h-20 border-b shadow-md w-full bg-white dark:bg-black relative z-50">
  {/* Logo */}
  <div className="flex-shrink-0">
    <Link to="/"><img
      src={isDark ? "/darklogo.png" : "/logo.png"}
      className="h-12 w-auto h-25 w-25"
      alt="Stylowears"
    /></Link>
  </div>

  {/* Nav + Search */}
  <div className="flex items-center gap-20 flex-grow justify-center">
    <NavMenu />
    <SearchBar query={query} setQuery={setQuery}/>
  </div>

  {/* Icons */}
  <div className="flex items-center gap-10">
    <Link to="/login"><FontAwesomeIcon icon={faUser} className="text-xl" /></Link>
    <FontAwesomeIcon icon={faHeart} className="text-xl" />
    <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} className="text-xl" /></Link>
    <ModeToggle />
  </div>
</div>
<div>
  <SearchedItemDisplay query={query}/>
</div>
 </>

  )
}

export default Header