import axios from "axios"
import React, {useEffect, useState}from "react"

const UseRequestData = (url, initialState) =>{
const [data, setData] = useState(initialState)

useEffect(() =>{
    axios.get(url)
    .then((res) =>{
        setData(res.data.results)
    })

    .catch((err) =>{
        console.log(err)
    })
},[])

return (data)
}

export default UseRequestData