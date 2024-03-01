import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const Details = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <div className="w-[80%] flex items-center h-full  m-auto p-[10%] ">
      <img
        className="object-contain w-[20vw] mr-20"
        src={`${product.image}`}
        alt=""
      />
      <div className="content  text-center ml-[5%]">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <h3 className="opacity-55 mt-5">{product.category}</h3>
        <h2 className="italic font-black text-xl tracking-tighter mt-5">
          {product.price}$
        </h2>
        <p className="font-light mt-4 leading-8">{product.description}</p>
        <div className="flex items-center justify-center gap-4 mt-5">
          <Link className="px-3 py-2 rounded-lg bg-blue-300">Edit</Link>
          <Link className="px-3 py-2 rounded-lg bg-blue-300">Delete</Link>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;