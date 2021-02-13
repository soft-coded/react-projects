import React,{useState} from 'react'
import data from "./data"

function People() {
    const [people,setPeople]=useState(data)
    return <>
        {
            people.map((person,i)=>{
                return <div key={i} className="inner">
                    <img src={person.url} alt={person.name}/>
                    <div>
                        <div>{person.name}</div>
                        <div>{person.age}</div>
                    </div>
                </div>
            })
        }
        <button className="btn" onClick={()=>setPeople([])}>Clear All</button>
    </>
}

export default People
