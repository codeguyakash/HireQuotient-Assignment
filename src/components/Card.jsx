import React from 'react'
import logo from "../utils/icons/favicon.png"
// import './Cards.css'

const Card = ({items}) => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-heading-div">
                        <div>
                            <img src={logo} alt="card-icon" />
                            <h2 id='card-heading'>{items.first_name}</h2>
                        </div>
                    </div>
                    <div className="card-content-div">
                        <p id='card-content'>Lorem ipsum dolor sit amet.!</p>
                        <a href="#">learn more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card