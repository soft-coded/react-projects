import React from "react"
import RD from "react-dom"
import "./App.css"
import Main from "./App"

function App(){
  return <Main/>
}

RD.render(<App/>,document.getElementById("root"))