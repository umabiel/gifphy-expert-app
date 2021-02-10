import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

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
          return <li key={cat}>{cat}</li>;
        })}
      </ol>
    </Fragment>
  );
};