import React, { useEffect, useState } from "react";
import Nav from "./Nav"
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {

  const [products]= useContext(ProductContext);

  


  const {search,pathname} = useLocation();
  console.log(search,pathname);
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setFilterdProducts] = useState(null);





  //  const getFilteredProducts = async ()=> {
  //   try {
  //     const {data} = await axios.get(`/products/category/${category}`);
  //     setFilterdProducts(data); 
  //   } catch (error) {
  //     console.log(error);
  //   }
  //  }

   useEffect(() =>{
    if(!filteredProducts || category == 'undefined') setFilterdProducts(products);
   if (category != "undefined") 
  //  getFilteredProducts();
       setFilterdProducts(products.filter(p => p.category == category))
   },[category,products]);

 




  return products ? (
    <>
    <Nav />
    <div className="h-full w-[80%] p-10 pt-[5%] flex flex-wrap gap-8 overflow-x-hidden overflow-y-auto">





      {filteredProducts && filteredProducts.map((p,i)=> {
        return <Link key={p.id} to={`/details/${p.id}`}className="card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify center items-center">
        <div
          className="hover:scale-110 transition-transform mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${p.image})`,
          }}
        ></div>
        <h1>{p.title}</h1>
      </Link>
      })}
    </div>
    </>
    ) : ( <Loading /> );
  
};

export default Home;
