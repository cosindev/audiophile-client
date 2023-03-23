export interface CategoryInterface {
  id: number;
  title: string;
  image: string;
}

export interface CategoriesProps {
  categories: CategoryInterface[];
}

export interface CategoryProps {
  category: CategoryInterface;
}
