import React from 'react'

const Clients = ({ logos }) => {
    console.log(logos)
    return (
        <>
            <div className="clients">
                <img src={logos.src} alt={logos.altText} width={logos.width} />
            </div>
        </>
    )
}

export default Clients