
import apiClient from "./ApiClient.ts";

export const loginUser = async (formData: any) => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await apiClient.post(
      `/auth/login`,
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
    const response = await apiClient.get(
      `/category`,
      {headers}
    );

    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};
export const loginWithGoogle = async (formData: any) => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await apiClient.post(
      `/auth/login/google`,
      formData,
      {headers}
    );

    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
}
;export const signWithGoogle = async (formData: any) => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await apiClient.post(
      `/auth/signup/google`,
      formData,
      {headers}
    );

    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};
