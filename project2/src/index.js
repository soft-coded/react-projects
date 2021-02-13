import React from "react"
import RD from "react-dom"
import App from "./App"
import "./App.css"


function Index(){
    return <main>
        <App/>
    </main>
}

RD.render(<Index/>,document.getElementById("root"))