import React from 'react'

let ImagesList = (props) => {
    let result = props.images.map((img) => {
        return (
            <img
                className="card"
                src={img.urls.regular}
                key={img.id}
                alt={img.alt_description}
            />
        )        
    })
    return (
        <div className="card-columns">
            {result}
        </div>
    )
}

export default ImagesList 
//this.props.images
//[0].urls.regular