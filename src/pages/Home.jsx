import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import { products } from "../data";

const Home = () => {
  // const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  
  function productData() {
    setLoading(true);
    try{
      setPosts(products); 
    }
    catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
    
  }

  
  // async function fetchProductData() {
  //   setLoading(true);
    
  //   try{
  //     const res = await fetch(API_URL);
  //     const data = await res.json();
  //     setPosts(data);
  //   }
  //   catch(error) {
  //     console.log("error=", error);
  //     setPosts([]);
  //   }
  //   setLoading(false);
  // }
  
  useEffect(() => {
    productData();
  }, [])
  
  return (
    <div>
     {
      loading ? <Spinner /> : 
      posts.length > 0 ? 
      (<div className="product grid grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {
          posts.map((post) => (
            <Product post={post} key={post.id} />
          ))
        }
      </div>) :
      <div className="flex justify-center items-center bg-red-600 rounded-xl">
        <p>No Data Found</p>
      </div>
     }
    </div>
  );
};

export default Home;
