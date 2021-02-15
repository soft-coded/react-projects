import React from 'react'
import data from "./data"

function Article() {
    return <>
        {
            data.map((article)=>{
                return <article key={article.id}>
                    <h2>{article.title}</h2>
                    <div>
                        <i>{article.date.toLocaleDateString()}</i>
                        <i> {article.length} min read</i>
                    </div>
                    <div>{article.snippet}</div>
                </article>
            })
        }
    </>
}

export default Article
