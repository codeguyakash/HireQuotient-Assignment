import React from 'react'

const Image = ({ items }) => {
    return (
        <>
            <div className="image-container">
                <img src={items.imageUrl} alt="big-image" className='big image' />
            </div>
        </>
    )
}

export default Image