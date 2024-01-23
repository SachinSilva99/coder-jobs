import apiClient from "../ApiClient.ts";

export const createJobSeeker = async (formData: any) => {
  try {
    const response = await apiClient.post(
      `/job-seeker`,
      formData
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getAllJobSeeker = async () => {
  try {
    const response = await apiClient.get(
      `/job-seeker`,
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};
