import apiClient from "../ApiClient.ts";

export const getAllRequests = async (page: number, size: number) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await apiClient.get(
      `/request/logged-by-company?page=${page}&szie=${size}`,
      {headers}
    );

    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
}
export const createRequest = async (data:any) => {

  try {
    const response = await apiClient.post(
      `/request`,
      data
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
}
