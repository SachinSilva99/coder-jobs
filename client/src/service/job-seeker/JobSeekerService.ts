import axios from "axios";
import {BASE_URL} from "../../util/BASE_URL.ts";

export const createJobSeeker = async ( formData: any) => {
  try {
    // @ts-ignore
    const response = await axios.post(
      `${BASE_URL}/job-seeker`,
      formData
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};
