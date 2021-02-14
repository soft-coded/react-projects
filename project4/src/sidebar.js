import React from 'react'

function Sidebar(props) {

    function clicked(id){
        props.setDesc(id)
        document.getElementsByClassName("active-btn")[0].classList.remove("active-btn")
        document.getElementById(id).classList.add("active-btn")
    }

    return <section className="sidebar">
        {
            props.names.map((name,i)=>{
                return <button id={name.id} key={name.id} onClick={()=>clicked(name.id)} className={!i?"active-btn":""}>{name.name}</button>
            })
        }
    </section>
}

export default Sidebar
