import { useParams } from "react-router-dom"

export default function Book() {
    const {id} =useParams()
  return (
    <div>
        <h1>book{id}</h1>
    </div>
  )
}
