import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';

const Product = ({post}) => {
 
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();
  
  function addItemHandler() {
    dispatch(add(post));
    toast.success("Item Added to cart");
  }
  function removeItemHandler() {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart")
  }
  
  return ( 
    <div className='flex flex-col justify-between items-center rounded-xl p-4 gap-3 mt-10 ml-5 border-2 border-gray-500 
    hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.5)_10px_20px_50px]
    '>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-500 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0, 10).join(" ") + ("...")}</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} className='h-full w-full'  alt={post.title.split(" ").slice(-4,-1).join("_")}/>
      </div>
      <div className='box_bottom flex justify-between gap-10 w-11/12 mt-5 items-center'>
        <div>
          <p className='text-green-700 font-semibold'>${post.price}</p>
        </div>
        {
          cart.some((present) => present.id === post.id) ? 
          (<button 
            className='btn_text bg-white text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-xs px-2 p-1 uppercase transition duration-200 ease-in
            hover:bg-gray-700 hover:text-white'
            onClick={removeItemHandler}>
            Remove Item
          </button>) :
          (<button 
            className='btn_text bg-white text-green-700 border-2 border-green-700 rounded-full font-semibold text-xs px-2 p-1 uppercase transition duration-200 ease-in
            hover:bg-green-700 hover:text-white'
            onClick={addItemHandler}>
            Add to Cart
          </button>)
        }
      </div>
    </div>
  );
}

export default Product