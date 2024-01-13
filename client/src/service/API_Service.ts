import axios from "axios";
import {BASE_URL} from "../util/BASE_URL.ts";

export const loginUser = async (formData: any) => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      formData,
      {headers}
    );

    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};

export const getAllCategories = async () => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.get(
      `${BASE_URL}/category`,
      {headers}
    );

    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};
