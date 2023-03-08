import { ApiVote } from "../types"
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useFetchVoteList } from "../api"
import { loadVotes } from "../store/votesSlice"
import { VoteComponent } from "../components/VoteComponent"
import { Link } from "react-router-dom"

export function Votes () {
    const votes = useSelector<{votes: ApiVote[]}>(state => state.votes) as {votes: ApiVote[]}
    const dispatch = useDispatch()
    const [status, setStatus] = useState<null | string>("Loading...")

    useEffect(() => {
        const fetchVotes = async () => {
            const { data } = await useFetchVoteList()
            setStatus(null)
            dispatch(loadVotes(data))
          }
        fetchVotes()
    }, [])

    return (
        <>
        <Link to="/"><button className="text-4xl mt-4 absolute left-4 p-4">Back</button></Link>
        <Link to="/add-vote"><button className="text-4xl my-4 p-4">Add Vote</button></Link>
        <div className="grid grid-cols-10">
            { 
                status
                ?  <p>Loading...</p>
                : votes.votes.map(item => <VoteComponent key={item.id} vote={item}/> )
            }
        </div>
        </>
    )
}