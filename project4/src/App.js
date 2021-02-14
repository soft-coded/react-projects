import React, {useState,useEffect} from 'react'
import "./App.css"
import Sidebar from "./sidebar"
import Desc from "./desc"

const url = 'https://course-api.com/react-tabs-project'



function App(){
  const [data,setData]=useState(false)
  const [names,setNames]=useState([])
  const [desc,setDesc]=useState("")

  function setUsers(data){
    setNames(data.map((users)=>{
      return {name: users.company, id: users.id}
    }))
  }

  useEffect(()=>{
    fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setData(data)
        setUsers(data)
        setDesc(data[0].id)
      })
      .catch(err=>console.log(err))
  },[])

  return <main>
    <h1>Experience</h1>
    <hr/>
    { data?(
      <div className="main">
        <Sidebar names={names} setDesc={setDesc}/>
        <Desc data={data} id={desc}/>
      </div>):<h2>Loading...</h2>
    }
  </main>
}

export default App
