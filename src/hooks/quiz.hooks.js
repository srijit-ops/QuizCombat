import { useQuery } from "@tanstack/react-query";
import { getAllQuiz } from "../requests/quiz.request";

export const useQuizDetails= (query)=>{
    return useQuery({
        queryKey:["allQuiz", query],
        queryFn: async()=>{
            const response= await getAllQuiz(query)
            // console.log(response.data.results)
            return response.data.results
        }
    })
}