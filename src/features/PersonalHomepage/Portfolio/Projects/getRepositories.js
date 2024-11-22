import axios from "axios";
import { apiURL } from "./apiUrl";


export const getRepositories = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

