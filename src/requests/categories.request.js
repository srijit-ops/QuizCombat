import { rootAxios } from "../utils/axios";

export const getCategories=()=>{
    const response= rootAxios.get("/api_category.php")
    return response
}