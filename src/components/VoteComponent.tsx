import { ApiVote } from "../types"
import { Link } from "react-router-dom"
import { useDeleteVote } from "../api"
import { useDispatch } from "react-redux"
import { deleteVote } from "../store/votesSlice"

export function VoteComponent ({vote}: {vote: ApiVote}) {
    const dispatch = useDispatch()

    const onVoteDelete = async () => {
        async function removeVote() {
            try {
              await useDeleteVote(vote!.id)
              dispatch(deleteVote(vote))
            } catch (error) {
              console.log(error)
            }
          }
      
          removeVote()
    }

    return (
        <>
        <Link to={'/votes/'+vote.id}>
            <button className="p-4 border border-indigo mx-2 text-2xl my-1 hover:bg-gray-300">
                {vote.id}
            </button>
        </Link>
        <button className="text-red-800 font-black" onClick={onVoteDelete}> X </button>
        </>
    )
}