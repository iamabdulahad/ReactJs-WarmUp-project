import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };

  let unique_products =
    products &&
    products.reduce(
      (accumulater, currentValue) => [...accumulater, currentValue.category],
      []
    );

  unique_products = [...new Set(unique_products)];

  return (
    <nav className="h-full w-[20%] bg-slate-300 flex flex-col items-center pt-10">
      <a className="border px-7 border-blue-500 text-blue-500 py-3" href="">
        Add New Product
      </a>
      <hr className="mt-5 w-[80%]" />
      <h1 className="text-xl font-semibold pt-5">Category Filter</h1>
      <div className='mt-5 className="bg-red-200 mt-3" w-[80%]'>
        {unique_products.map((product, index) => {
          return (
            <Link
              key={index}
              to={`/?category=${product}`}
              className="mt-3 flex items-center gap-2"
            >
              <span
                style={{ backgroundColor: color() }}
                className="w-[1vw] h-[1vw] bg-blue-300 inline-block rounded-full"
              ></span>
              {product}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
