import { createSlice } from "@reduxjs/toolkit"
import { ApiVote } from "../types"

type State = {
    votes: ApiVote[]
}

const initialState: State = {
    votes: []
}

export const votesReducer = createSlice({
    name: "votes",
    initialState,
    reducers: {
        loadVotes: (state, action) => {
            state.votes = action.payload
        },
        addVote: (state, action) => {
            state.votes = [...state.votes, action.payload]
        },
        deleteVote: (state, action) => {
            state.votes = state.votes.filter(vote => vote.id !== action.payload.id)
        }
    }
})

export const { addVote, deleteVote, loadVotes } = votesReducer.actions
export default votesReducer.reducer