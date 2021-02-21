import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

interface IProps {
  defaultCategories: string[];
}

export const GiftExpertApp = ({ defaultCategories = [] }: IProps) => {
  const [categories, setCategories] = useState(defaultCategories);
  // "Samurai X",
  // "Dragon Ball",

  //   const handleAdd = () => {
  //     setCategories([...categories, "HunterXHunter"]);
  //   };

  return (
    <Fragment>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((cat) => {
          return <GifGrid category={cat} key={cat} />;
        })}
      </ol>
    </Fragment>
  );
};
