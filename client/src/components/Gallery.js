import React from 'react'

const Gallery = (props) => (
    <>
        <div className="container grid grid-cols-3 gap-2 mx-auto">
            {props.images.length > 0 ? (
                props.images.map((image, key) => (
                    <div className="w-full rounded">
                        <img src={image.image}
                            alt="sad" key={key}/>
                    </div>
                ))
            ) : (
                <span> There are no images</span>
            )}
        </div>
    </>
)

export default Gallery