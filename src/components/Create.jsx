import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [products, setProducts] = useContext(ProductContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      image.trim().length < 5 ||
      title.trim().length < 3 ||
      category.trim().length < 3 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each and every field must have 4 characters");
      return;
    }

    const product = {
      image,
      title,
      category,
      price,
      description,
      id: nanoid(),
    };
    console.log(product);
    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");
  };
  console.log(products);

  return (
    <form
      onSubmit={addProductHandler}
      className="w-screen h-screen p-[5%] mt-20 flex flex-col items-center"
    >
      <h1 className="text-4xl font-black w-1/2">Add New Product</h1>
      <input
        type="url"
        placeholder="Image Link"
        className="rounded-md bg-zinc-100 text-4xl px-5 w-[50%] py-2 mt-4 outline-none "
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="rounded-md bg-zinc-100 text-4xl px-5 py-2 outline-none mt-3 w-[50%] "
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="flex w-[50%] justify-between">
        <input
          type="text"
          placeholder="Category"
          className="rounded-md bg-zinc-100 text-4xl px-5 py-2 outline-none mt-3 w-[47%] "
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="rounded-md bg-zinc-100 text-4xl px-5 py-2 outline-none mt-3 w-[40%] "
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        placeholder="Enter Product Discription here"
        className="rounded-md bg-zinc-100 text-4xl px-5 py-2 outline-none mt-3 w-[50%]"
        rows="6"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="rounded-md bg-blue-300 text-white px-5 py-2 outline-none mt-3 w-[50%]">
        Add
      </button>
    </form>
  );
};

export default Create;
