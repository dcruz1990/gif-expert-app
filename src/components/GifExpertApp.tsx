import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);

  const handleAdd = (value: string) => {
    setCategories([value, ...categories]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={handleAdd} />

      <ol>
        {categories.map((item) => (
          <GifGrid category={item} key={item} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
