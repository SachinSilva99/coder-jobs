import axios from "axios";
import {BASE_URL} from "../../util/BASE_URL.ts";

export const createVacancy = async (formData: any, token: any) => {
  const headers = {
    "Content-Type": "application/json",
    "authorization": token
  };
  try {
    const response = await axios.post(
      `${BASE_URL}/vacancy`,
      formData,
      {headers}
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};
export const updateVacancy = async (formData: any, token: any, id:string) => {
  const headers = {
    "Content-Type": "application/json",
    "authorization": token
  };
  try {
    const response = await axios.put(
      `${BASE_URL}/vacancy/${id}`,
      formData,
      {headers}
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};
