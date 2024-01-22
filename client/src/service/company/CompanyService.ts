import axios from "axios";
import apiClient from "../ApiClient.ts";

export const getCompany = async (companyId:string) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await apiClient.get(
      `/company/${companyId}`,
      {headers}
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};
export const getAllCompanyPackages = async () => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await apiClient.get(
      `/company-package`,
      {headers}
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.msg;
  }
};
export const createCompany = async (formData: any) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.post(
      `/company`,
      formData,
      {headers}
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};
