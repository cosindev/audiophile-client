import Category from "components/Category";
import { CategoriesProps } from "interfaces/category";

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className="flex-between-center gap-7">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
