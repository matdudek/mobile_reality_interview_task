import { ApiCreateVote, SuccessStatus } from "../types"
import { axiosInstance as axios } from "./axios"
import { endpoints } from "./endpoints"

export async function useAddVote(vote: ApiCreateVote): Promise<{ data: SuccessStatus }> {
  return axios.post(`${endpoints.VOTES}`, vote,
  {
    headers: {
      'Content-Type': "application/json",
      'x-api-key': import.meta.env.VITE_API_KEY
    },
  })
}
