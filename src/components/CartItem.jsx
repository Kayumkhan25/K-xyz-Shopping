import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
  
  const removeFromCartHandler = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  
  return (
    <div className="cart flex items-center p-2 justify-between mt-2 mb-2 border-b-2 border-gray-400">
      <div className="one_cart flex flex-col p-0 gap-5 items-center mt-1">
        <div className="w-[30%]">
          <img className="object-cover" src={item.image} alt={item.title} />
        </div>
        <div className="cart_description self-start space-y-5 w-[100%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h2 className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0,50).join(" ") + ("...")}</h2>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div  className="text-red-800 hover:text-red-200  bg-red-200 group hover:bg-red-600 text-xl transition-transform duration-300 cursor-pointer rounded-full p-2 mr-3"
             onClick={removeFromCartHandler}>
              <MdDelete />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CartItem