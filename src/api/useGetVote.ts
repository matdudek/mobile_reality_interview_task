import { ApiVote } from "../types"
import { axiosInstance as axios } from "./axios"
import { endpoints } from "./endpoints"

export async function useGetVote(uuid: number): Promise<{ data: ApiVote }> {
  return axios.get(`${endpoints.VOTES}/${uuid}`, {
    headers: {
      'Content-Type': "application/json",
      'x-api-key': import.meta.env.VITE_API_KEY
    }
  })
}
