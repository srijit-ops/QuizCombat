import axios from "axios";

export const rootAxios= axios.create({
    baseURL:"https://opentdb.com"
})