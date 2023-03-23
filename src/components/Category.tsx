import { CategoryProps } from "interfaces/category";
import ArrowRight from "images/arrow-right.svg";
import Image from "next/image";

const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div className="flex flex-col justify-between items-center category flex-1 pb-8">
      <Image
        src={category.image}
        alt="Headphone Category"
        className="in-air-effect -mt-20 mb-10"
      />
      <h1 className="mb-5 text-lg font-bold tracking-wide">{category.title}</h1>
      <button className="flex justify-between items-center font-bold text-sm tracking-wide text-gray-500">
        <p className="mr-3">SHOP</p>
        <Image src={ArrowRight} alt="Arrow Right" />
      </button>
    </div>
  );
};

export default Category;
