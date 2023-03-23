import { CategoryInterface } from "interfaces/category";

import Headset from "images/category-headset.svg";
import Speaker from "images/category-speaker.svg";
import Earphone from "images/category-earphone.svg";

import Categories from "./Categories";

const CategoriesSection = () => {
  const categories: CategoryInterface[] = [
    {
      id: 1,
      title: "HEADPHONES",
      image: Headset,
    },
    {
      id: 2,
      title: "SPEAKERS",
      image: Speaker,
    },
    {
      id: 3,
      title: "EARPHONES",
      image: Earphone,
    },
  ];

  return (
    <section className="categories-section py-32 mt-20">
      <div className="max-w-6xl mx-auto">
        <Categories categories={categories} />
      </div>
    </section>
  );
};

export default CategoriesSection;
