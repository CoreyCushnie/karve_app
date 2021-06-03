import { useState } from "react";


export default async function UserData(){
    const [data, setData] = useState([])
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => setData(json))

    return data
}  
