import axios from "axios";
import {BASE_URL} from "../../util/BASE_URL.ts";

export const getAllVacancy = async (token: any) => {
  const headers = {
    "Content-Type": "application/json",
    "authorization": token
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/vacancy/logged-in/company?page=1&size=10`,
      {headers}
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};
