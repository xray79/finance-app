import axios from "axios";
import {handleError} from "../Helpers/ErrorHandler.tsx";
import {UserProfileToken} from "../Models/User.ts";

const api = "http://localhost:5000/api";

export const loginAPI = async (username: string, password: string) =>
{
    try {
       const data = await axios.post<UserProfileToken>(api + "accounts/login", {
           username: username,
           password: password
       })
        return data;
    } catch (error) {
       handleError(error); 
    }
}

export const registerAPI = async (email: string, username: string, password: string) =>
{
    try {
        const data = await axios.post<UserProfileToken>(api + "accounts/register", {
            email: email,
            username: username,
            password: password
        })
        return data;
    } catch (error) {
        handleError(error);
    }
}






