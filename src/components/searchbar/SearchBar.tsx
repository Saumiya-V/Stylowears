import { Search } from 'lucide-react'
import { useTheme } from '../../context/themeContext/ThemeProvider'



const SearchBar = ({query,setQuery}:{query:string,setQuery:(query:string)=>void}) => {
    const {theme} = useTheme()
    const isDark = theme === 'dark'

  return (
     <>
      <div className={isDark?"flex items-center  justify-between border border-white w-64 p-1 rounded-full px-2":"flex items-center  justify-between border border-black w-64 p-1 rounded-full px-2"}>
      <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search" className="ml-1 outline-none" />
      <button className='cursor-pointer'><Search className="w-4 h-4" /></button>
     </div>     
     </>
     
  )
}

export default SearchBar