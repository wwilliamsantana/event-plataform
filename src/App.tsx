import { useEffect } from "react"
import { client } from "./lib/apollo"
import { gql, useQuery } from "@apollo/client"


const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title
    }
  }
`
interface Lessson {
  id: string
  title: string
}

export function App() {

  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then(res => {
  //     console.log(res.data)
  //   })
  // }, [])

  const { data } = useQuery<{ lessons: Lessson[] }>(GET_LESSONS_QUERY)

  console.log(data)

  return (
    <ul>
      {data?.lessons.map(item => {
        return <li>{item.title}</li>
      })}
    </ul>
  )
}


