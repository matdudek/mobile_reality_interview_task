import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useDeleteVote, useGetVote } from "../api"
import { deleteVote } from "../store/votesSlice"
import { ApiVote } from "../types"



export function VotesDetails () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const [vote, setVote] = useState<ApiVote>()

    
    useEffect(() => {
        const getVote = async () => {
            if (typeof id === "undefined") {
                navigate('/votes')
                return
            }

            
            try {
                const { data } = await useGetVote(+id!)
                setVote(data)
            }
            catch(e) {
                navigate('/votes')
            }
          }
      
        getVote()
    }, [id])

    const onVoteDelete = async () => {
        async function removeVote() {
            try {
              await useDeleteVote(vote!.id)
              dispatch(deleteVote(vote))
              navigate("/votes")
            } catch (error) {
              console.log(error)
            }
          }
      
          removeVote()
    }

    return (
        <>
        <Link to="/votes"><button className="text-4xl mt-4 absolute left-4 p-4">Back</button></Link>
            {
                !vote
                    ? <p className="text-2xl"> Loading... </p>
                    : <div className="flex flex-col items-center text-2xl">
                        <p>ID: {vote?.id}</p>
                        <p>Created At: {dayjs(vote?.created_at).format("HH:mm DD-MM-YYYY")}</p>
                        <p>Image id: {vote?.image_id}</p>
                       { vote.image ? <img src={vote?.image.url} alt={vote?.image.id} /> : undefined }

                        <button onClick={onVoteDelete} className="border-2 rounded border-red-400 text-red-600 text-2xl p-4 mt-4" >Delete</button>
                    </div>
            }
        </>
    )
}
