import axios from "axios";
import apiClient from "../ApiClient.ts";

export const getAllVacancyOfLoggedInCompany = async () => {
  try {
    const response = await apiClient.get(
      `/vacancy?page=1&szie=10`,
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};export const getAllApplicationsOfLoggedInCompany = async () => {

  try {
    const response = await apiClient.get(
      `/application/logged-by-company`,
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};


export const createVacancy = async (formData: any) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await apiClient.post(
      `/vacancy`,
      formData,
      {headers}
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};
export const getVacanciesOfLoggedInCompany = async () => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await apiClient.get(
      `/vacancy/logged-in/company?page=1&size=10`,
      {headers}
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};
export const updateVacancy = async (formData: any, id: string) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await apiClient.put(
      `/vacancy/${id}`,
      formData,
      {headers}
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};

