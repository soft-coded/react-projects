import React from 'react'

function Desc({data, id}){
    const newarr=data.filter((user)=>user.id===id)
    return <> 
        {
            newarr.map((data)=>{
                return <section key={0} className="desc">
                    <h2>{data.title}</h2>
                    <span>{data.company}</span>
                    <div>{data.dates}</div>
                    {
                        data.duties.map((duty,ind)=>{
                            return <footer key={ind}>
                                <button>&gt;&gt;</button>
                                <p>{duty}</p>
                            </footer>
                        })
                    }
                </section>
            })
        }
    </>
}

export default Desc
