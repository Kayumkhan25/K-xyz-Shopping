import { HiMiniShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart} = useSelector((state) => state);
  
  return (
    <div className="">
      <nav className="flex justify-between h-[72px] items-center max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5 mb-2">
            <img src="Kxyz.png" alt="logo" width="180px"/>
          </div>
        </NavLink>
        <div className="flex items-center font-medium mr-5 text-slate-100 space-x-6">
          <NavLink to="/">
            <p className="text-lg hover:font-semibold hover:text-green-600 transition duration-400 ease-linear">Home</p>
          </NavLink>
          <NavLink to="/Cart">
          <div className="relative text-lg hover:font-semibold hover:text-green-600 transition duration-400 ease-linear">
            <HiMiniShoppingCart className="text-xl"/>
            {
              cart.length > 0 &&
              <span 
              className="absolute -right-[8px] -top-[10px] bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            
            }
          </div>
            
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;