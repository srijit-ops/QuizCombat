import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../requests/categories.request";

export const useCategories=()=>{
    return useQuery(
        {
            queryKey:["categories"],
            queryFn: async()=>{
                const data= await getCategories()
                return data.data
            }
        }
    )
}