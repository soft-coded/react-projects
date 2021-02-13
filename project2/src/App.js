import React, {useState, useEffect} from 'react'
import Tour from "./Tour"

const url="https://course-api.com/react-tours-project"


function App() {
    const [places,setPlaces]=useState([])
    const [load,setLoad]=useState(true)
    const [error,setError]=useState("")

    function changePlace(id){
        setPlaces(places.filter((place)=>place.id!==id))
    }

    useEffect(()=>{
        fetch(url)
            .then(res=>{
                if(res.status>199 && res.status<301)
                    return res.json()
                else{
                    setError(`${res.status}: ${res.statusText}`)
                    return null
                }
            })
            .then(data=>{
                setLoad(false)
                setPlaces(data)
            })
            .catch(err=>{
                setError(err)
            })
    },[])

    return <>
        <h1 className="heading">Our Tours</h1>
        {load && <Loading/>}
        {error && <Error msg={error}/>}
        <Tour places={places} changePlace={changePlace}/>
    </>
}

function Loading(){
    return <h1>Loading...</h1>
}

function Error({msg}){
    return <h1>{msg}</h1>
}

export default App

