import { Route, Routes } from "react-router-dom"
import { AddVote } from "./pages/AddVote"
import { Home } from "./pages/Home"
import { VotesDetails } from "./pages/VoteDetails"
import { Votes } from "./pages/Votes"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/votes" element={<Votes/>}/>
      <Route path="/votes/:id" element={<VotesDetails/>}/>
      <Route path="/add-vote/" element={<AddVote/>}/>
    </Routes>
  )
}

export default App
