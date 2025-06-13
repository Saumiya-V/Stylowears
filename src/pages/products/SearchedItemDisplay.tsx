import { Button } from "@/components/ui/button"
import { Card,CardTitle,CardHeader,CardFooter,CardContent } from "@/components/ui/card"
import { useSearchItem } from "@/hooks/useSearch"
import { addToCart } from "@/redux/cartSlice"
import {type AppDispatch } from "@/redux/store"
import type { Item } from "@/types/type"
import { formatter } from "@/utils/currencyFormatter"
import { useDispatch } from "react-redux"


const SearchedItemDisplay = ({query}:{query:string}) => {
   const {data,isLoading} = useSearchItem({query})
   const dispatch = useDispatch<AppDispatch>()

   console.log(data)

    const handleAddClick=(item:Item)=>{
      dispatch(addToCart(item))
   }
  
  return (
    <>
      {isLoading && <p>Loading...</p>}
    <div>
        {   
             data.map((item:Item)=>{
             return <Card key={item.id} className='w-58'>
         <img src={item.image} alt="Cloth" className='h-40'/>
         <CardHeader> <CardTitle>{item.name}</CardTitle></CardHeader>
         <CardContent>
            <p>{item.category}</p>
         <p>{formatter.format(item.price)}</p>
         </CardContent>
         <CardFooter>
             <Button onClick={()=>handleAddClick(item)} className='cursor-pointer'>Add to cart</Button>
         </CardFooter>
        </Card>
            })
        }
    </div>
    </>
  )
}

export default SearchedItemDisplay


