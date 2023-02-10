import axios from "axios";

export const APIFetcher = async (url) => {
  try {
    const response = await axios.get(`https://reqres.in/api/${url}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const APIPusher = async (url, data) => {
  try {
    const response = await axios.post(`https://reqres.in/api/${url}`, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
