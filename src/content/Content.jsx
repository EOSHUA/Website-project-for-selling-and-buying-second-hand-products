import React from "react";
import Items from "../items/Items";
import SubCategories from "../subCategories/SubCategories";
import Categories from "../categories/Categories";
import ItemInfo from "../itemInfo/ItemInfo";

export default function Content() {
  return (
    <div>
      Content
      <Items />
      <ItemInfo />
      <SubCategories />
      <Categories />
    </div>
  );
}
