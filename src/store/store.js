import { create } from "zustand";

export const useStore= create((set)=>(
    {
        allQuizDetails:[],
        updateAllQuizDetails:(newAllQuizDetails)=> set({allQuizDetails:newAllQuizDetails})
    }
))