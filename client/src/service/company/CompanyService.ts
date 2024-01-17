import axios from "axios";
import {BASE_URL} from "../../util/BASE_URL.ts";

export const getCompany = async (companyId:string) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/company/${companyId}`,
      {headers}
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};
