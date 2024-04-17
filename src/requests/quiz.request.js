import { rootAxios } from "../utils/axios";

export const getAllQuiz= (query)=>{
    console.log(`/api.php?${query}`)
    const response= rootAxios.get(`/api.php?${query}`)
    // console.log(response)
    return response
}