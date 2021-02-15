import React, { useState } from 'react'
import {
    FaEnvelopeOpen,
    FaUser,
    FaCalendarTimes,
    FaMap,
    FaPhone,
    FaLock,
  } from 'react-icons/fa'

function Block({person, getUser, setPerson}) {
    const [hover,setHover]=useState({
        detail: `${person.name.first} ${person.name.last}`,
        info: "My name is"
    })
    function randomise(){
        (async ()=>{
            const data=await getUser()
            setPerson(data)
            setHover({
                detail: `${data.name.first} ${data.name.last}`,
                info: "My name is"
            })
        })()
    }
    return <section className="block">
    <img src={person.picture.large} alt=""/>
    <p>{hover.info}</p>
    <h2>{hover.detail}</h2>
    <footer>
        <FaUser className="icon" onMouseOver={()=>setHover({
            info:"My name is",
            detail:`${person.name.first} ${person.name.last}`
            })}/>
        <FaEnvelopeOpen className="icon" onMouseOver={()=>setHover({
            info:"My email is",
            detail:`${person.login.username}@example.com`
            })}/>
        <FaCalendarTimes className="icon" onMouseOver={()=>setHover({
            info:"My age is",
            detail: person.dob.age
            })}/>
        <FaMap className="icon" onMouseOver={()=>setHover({
            info:"I am at",
            detail:`${person.location.city}, ${person.location.state}, ${person.location.country}`
            })}/>
        <FaPhone className="icon" onMouseOver={()=>setHover({
            info:"My number is",
            detail: person.cell
            })}/>
        <FaLock className="icon" onMouseOver={()=>setHover({
            info:"My password is",
            detail: person.login.password
            })}/>
    </footer>
    <button className="randomise" onClick={randomise}>RANDOM</button>
    </section>
}

export default Block
