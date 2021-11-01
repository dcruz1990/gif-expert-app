import React, { useState } from "react";

type categoryProps = {
  setCategories: Function;
};

export const AddCategory = ({ setCategories }: categoryProps) => {
  const [inputvalue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputvalue.length === 0) {
      return false;
    } else {
      setCategories(inputvalue);
      setInputValue("");
    }
  };

  return (
    <>
      <h2>Add Category</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={inputvalue}
          id="category"
          type="text"
          onChange={handleInputChange}
        />
        <button disabled={inputvalue.length === 0} type="submit">
          Add Category
        </button>
      </form>
    </>
  );
};
