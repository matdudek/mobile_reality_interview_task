import { axiosInstance as axios } from "./axios"
import { endpoints } from "./endpoints"

export async function useDeleteVote(uuid: number): Promise<void> {
  return axios.delete(`${endpoints.VOTES}/${uuid}`, {
    headers: {
      'Content-Type': "application/json",
      'x-api-key': import.meta.env.VITE_API_KEY
    }
  })
}
