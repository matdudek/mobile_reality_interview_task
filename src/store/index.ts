import { configureStore } from "@reduxjs/toolkit"
import votesSlice from './votesSlice'

export const store = configureStore({
    reducer: {
        votes: votesSlice
    }
})