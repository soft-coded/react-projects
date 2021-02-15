import React, { useState, useEffect } from 'react'
import "./App.css"
import Block from "./block"

const url = 'https://randomuser.me/api/'

async function getUser(){
  const res=await fetch(url)
  const data=await res.json()
  return data.results[0]
}

function App() {
  const [person,setPerson]=useState(false)
  useEffect(()=>{
    (async ()=>{
      const data=await getUser()
      setPerson(data)
    })()
  },[])

  return <main>
    <div className="half black"></div>
    {person?<Block person={person} getUser={getUser} setPerson={setPerson}/>:<h1 className="load">Loading...</h1>}
    <div className="half white"></div>
  </main>
}

export default App