import axios from "axios";
import {BASE_URL} from "../../util/BASE_URL.ts";

export const getAllVacancies = async (page: number, size: number) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/vacancy?page=${page}&szie=${size}`,
      {headers}
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
}
