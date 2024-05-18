import axios from "axios"
import { CompanySearch } from "./company"

interface SearchResponse {
    data: CompanySearch[]
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(`https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_API_KEY}`);

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(`Error Message: ${error.message}`)
            return error.message;
        } else {
            console.log(`An Unexpected Error has occurred: ${error}`);
            return "An Unexpected Error has occurred";
        }
        
    }
}