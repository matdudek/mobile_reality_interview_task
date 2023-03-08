import { axiosInstance as axios } from "./axios"
import { endpoints } from "./endpoints"
import { ApiVote } from "../types"

export async function useFetchVoteList(): Promise<{ data: ApiVote[] }> {
  return axios.get(`${endpoints.VOTES}`, {
    headers: {
      'Content-Type': "application/json",
      'x-api-key': import.meta.env.VITE_API_KEY
    }
  })
}
