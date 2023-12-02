import React from 'react'
import Clients from './Clients'

const Partners = ({ items }) => {

    return (
        <>
            <div className="partners-container">
                <div className='client-content'>
                    <div className="client-heading">
                        <h2>Millions run on Notion every day</h2>
                    </div>
                    <div className="client-paragraph">
                        <p>Powering the world’s best teams, from next-generation startups to established enterprises.</p>
                    </div>
                    <div><a href="#">Read costomer stories</a></div>
                    <div className="client-logos">
                        {
                            items.map(logo =>
                                <Clients key={logo.id} logos={logo} />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners