import  { useState, useEffect } from "react"
import axios from "axios"

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

function ApiService()  {
    const [data, setData] = useState([])
    const getPost = async () => {
      try {
          const res = await axios.get(BASE_URL)
          setData(res.data)
      } catch (error) { 
            
      }
      }
    useEffect(() => {
        getPost()
    }, [])

    return { data }
}

export default ApiService

