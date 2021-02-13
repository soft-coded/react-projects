import React, {useState} from 'react'

function Tour({places, changePlace}) {
    const [moreInfo,setMoreInfo]=useState(false)

    return <>
        {
            places.map((place)=>{
                return <article key={place.id}>
                    <img src={place.image}/>
                    <footer>
                        <div className="price">
                            <h4>{place.name}</h4>
                            <h4 className="dollar">${place.price}</h4>
                        </div>
                        <div>
                            <p>{moreInfo?place.info:place.info.substring(0,201)+"..."} </p>
                            <button onClick={()=>setMoreInfo(!moreInfo)} className="show">{moreInfo?"Show less":"Show more"}</button>
                        </div>
                    </footer>
                    <button onClick={()=>changePlace(place.id)} className="not-int">Not Interested</button>
                </article>
            })
        }
    </>
}

export default Tour
