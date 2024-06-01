import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

export async function get(endpoint: string, params?: any): Promise<any> {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function post(endpoint: string, body: any): Promise<any> {
  try {
    const response = await apiClient.post(endpoint, body);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
}

export async function deleteRequest(endpoint: string): Promise<any> {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
}

export async function patch(endpoint: string, body: any): Promise<any> {
  try {
    const response = await apiClient.patch(endpoint, body);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}
