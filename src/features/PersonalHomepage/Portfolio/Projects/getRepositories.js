import axios from "axios";

export const getRepositories = async () => {
  try {
    const response = await axios.get("https://api.github.com/users/WiktoriaNizielska/repos");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

