import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const { id } = useParams();
  const [product, setproduct] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",
  });
  // const [image, setImage] = useState("");
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [price, setPrice] = useState("");
  // const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  // console.log(product);
  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      product.image.trim().length < 5 ||
      product.title.trim().length < 3 ||
      product.category.trim().length < 3 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Each and every field must have 4 characters");
      return;
    }

    const pi = products.findIndex((p) => p.id == id);
    const copyData = [...products];
    copyData[pi] = { ...products[pi], ...product };

    console.log(copyData);

    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate("/");
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="w-screen h-screen p-[5%] mt-20 flex flex-col items-center"
    >
      <h1 className="text-4xl font-black w-1/2">Edit Product</h1>
      <input
        type="url"
        placeholder="Image Link"
        className="rounded-md bg-zinc-100 text-4xl px-5 w-[50%] py-2 mt-4 outline-none "
        onChange={changeHandler}
        name="image"
        value={product.image}
      />
      <input
        type="text"
        placeholder="Title"
        className="rounded-md bg-zinc-100 text-4xl px-5 py-2 outline-none mt-3 w-[50%] "
        onChange={changeHandler}
        name="title"
        value={product.title}
      />
      <div className="flex w-[50%] justify-between">
        <input
          type="text"
          placeholder="Category"
          className="rounded-md bg-zinc-100 text-4xl px-5 py-2 outline-none mt-3 w-[47%] "
          onChange={changeHandler}
          value={product.category}
          name="category"
        />
        <input
          type="number"
          placeholder="Price"
          className="rounded-md bg-zinc-100 text-4xl px-5 py-2 outline-none mt-3 w-[40%] "
          onChange={changeHandler}
          value={product.price}
          name="price"
        />
      </div>
      <textarea
        placeholder="Enter Product Discription here"
        className="rounded-md bg-zinc-100 text-4xl px-5 py-2 outline-none mt-3 w-[50%]"
        rows="6"
        onChange={changeHandler}
        value={product.description}
        name="description"
      ></textarea>
      <button className="rounded-md bg-blue-300 text-white px-5 py-2 outline-none mt-3 w-[50%]">
        Save
      </button>
    </form>
  );
};

export default Edit;
