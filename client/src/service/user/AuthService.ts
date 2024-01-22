import apiClient from "../ApiClient.ts";

export const signUp = async (data: any) => {

  try {
    const response = await apiClient.post(
      `/auth`,
      {data}
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};
