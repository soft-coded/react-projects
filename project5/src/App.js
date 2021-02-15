import React,{useState,useEffect} from 'react'
import Article from "./article"
import "./App.css"

function getTheme(){
  let theme="dark-theme"
  if(localStorage.getItem("theme"))
    theme=localStorage.getItem("theme")
  return theme
}

function App() {
  const [theme,setTheme]=useState(getTheme())
  useEffect(()=>{
    document.documentElement.classList=theme
    localStorage.setItem("theme",theme)
  },[theme])
  function themer(){
    if(theme=="dark-theme")
      setTheme("light-theme")
    else setTheme("dark-theme")
  }
  return <main>
    <nav>
      <h1>Overreacted</h1>
      <button onClick={themer}>Toggle</button>
    </nav>
    <section>
      <Article/>
    </section>
  </main>
}

export default App
