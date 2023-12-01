import React from 'react'
import logo from "../utils/icons/favicon.png"
// import './Cards.css'

const Card = () => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-heading-div">
                        <div>
                            <img src={logo} alt="card-icon" />
                            <h2 id='card-heading'>AI</h2>
                        </div>
                    </div>
                    <div className="card-content-div">
                        <p id='card-content'>Lorem ipsum dolor sit amet.!</p>
                        <a href="#">learn more</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-heading-div">
                        <div>
                            <img src={logo} alt="card-icon" />
                            <h2 id='card-heading'>Wikis</h2>
                        </div>
                    </div>
                    <div className="card-content-div">
                        <p id='card-content'>Lorem ipsum dolor sit amet.!</p>
                        <a href="#">learn more</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-heading-div">
                        <div>
                            <img src={logo} alt="card-icon" />
                            <h2 id='card-heading'>Projects</h2>
                        </div>
                    </div>
                    <div className="card-content-div">
                        <p id='card-content'>Lorem ipsum dolor sit amet.!</p>
                        <a href="#">learn more</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-heading-div">
                        <div>
                            <img src={logo} alt="card-icon" />
                            <h2 id='card-heading'>Docs</h2>
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