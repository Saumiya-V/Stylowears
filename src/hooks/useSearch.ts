
import { fetchProduct } from '@/utils/fetchData'
import { useQuery } from '@tanstack/react-query'


export const useSearchItem = ({query}:{query:string})=>{
    
    const {data=[],isLoading} = useQuery({
      queryKey:["products",query],
      queryFn:()=>fetchProduct(query),
      enabled: query.length > 0
    })

    return {
        data,isLoading
    }

}