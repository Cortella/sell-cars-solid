import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoryRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log("implementar metodo name = ", name);
    return null;
  }
  list(): Category[] {
    console.log("implementar metodo");
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log("implementar metodo");
    return null;
  }
}
