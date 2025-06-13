import { Button } from "@/components/ui/button"
import {
  Card
} from "@/components/ui/card"
import { formatter } from "@/utils/currencyFormatter"
import { useDispatch, useSelector } from "react-redux"
import {type AppDispatch, type RootState } from "@/redux/store"
import {  decrementCartItem, incrementCartItem, removeFromCart } from "@/redux/cartSlice"
import { toast } from "react-toastify"



const Cart = () => {
  const cart = useSelector((state:RootState)=>state.cart)
  const dispatch = useDispatch<AppDispatch>()

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id))
    toast.success("Removed from cart")
  }

   const handleIncrement = (id:number)=>{
    dispatch(incrementCartItem({ id }))
   }

   const handleDecrement = (id:number)=>{
    dispatch(decrementCartItem({ id }))
   }

  const total = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  }, 0)

  return (
    <div className="p-10 " >
        <h3 className="text-center font-semibold  mb-4 text-3xl">Your Cart</h3> 
        <Card  >
        {
          cart.map((item,i)=>{
            return  <div key={i} className="flex items-center justify-between p-4">
        <div className="flex items-center gap-10">
        <img className="w-40" src={item.image} alt="" />
        <div>
        <h2 className="font-bold mb-5">{item.name}</h2>
        <Button onClick={()=>handleRemove(item.id)}>Remove</Button>
       </div>
    </div>
       <div>
        <p>{formatter.format(item.price)}</p>
       </div>
       <div className="flex">
        <Button onClick={()=>handleIncrement(item.id)} className="p-3 rounded-full">+</Button>
        <p className="px-4 py-1">{item.quantity}</p>
        <Button onClick={()=>handleDecrement(item.id)} className=" p-4 rounded-full">-</Button>
       </div>
       <div>
            <p>{formatter.format(item.price * item.quantity)}</p>
       </div>
       </div>
          })
        }
      </Card>
      <div className="border-b flex items-center justify-between mt-5 w-md translate-x-250">
        <p className="text-xl font-semibold">Grand Total :</p>
        <p className="font-bold">{formatter.format(total)}</p>
      </div>
    </div>
  )
}

export default Cart