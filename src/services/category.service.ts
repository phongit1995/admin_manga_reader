import type { IApiResponse } from "src/types";

import { api } from "@api/api";
import { API_PATH_CONFIG } from "@config/api-path.config";
import { ICategoryModel, ICreateCategoryRequest } from "@src/types/category.type";

export class CategoryService {
    static getListCategory = async () => {
        const response = await api.get<IApiResponse<ICategoryModel[]>>(API_PATH_CONFIG.CATEGORY);
        return response.data;
    }

    static createCategory = async (body:ICreateCategoryRequest) => {
        const response = await api.post<IApiResponse<ICategoryModel>>(API_PATH_CONFIG.CATEGORY, body);
        return response.data;
    }

    static deleteCategory = async (id: string) => {
        const response = await api.delete(API_PATH_CONFIG.CATEGORY + "/" + id);
        return response.data;
    }

}

