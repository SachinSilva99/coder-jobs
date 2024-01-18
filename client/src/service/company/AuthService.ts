import axios from "axios";
import {BASE_URL} from "../../util/BASE_URL.ts";

export const signUp = async ( data: any) => {
  /*  const headers = {
      "Content-Type": "application/json",
    };*/
  try {
    const response = await axios.post(
      `${BASE_URL}/auth`,
      {data}
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};
