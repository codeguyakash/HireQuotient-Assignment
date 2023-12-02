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
                    <div id='readmore'><a href="#" id='readmore'>Read costomer stories ➡</a></div>
                    <div className="client-logos">
                        {
                            items.map(logo =>
                                <Clients key={logo.id} logos={logo} />
                            )
                        }
                    </div>
                </div>
                <div className='m-client'>
                    <h2>Consolidate tools. <br /> Cut costs.</h2>
                    <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/pages/home/giant-pencil-illustration.png" alt="pencil-man" id='pencil-man' />

                    <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=128/front-static/pages/home/pencil-peek-illustration-V2.png" alt="pencil-man" id='pencil-man2' />

                    <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-strikethrough-V2.png" alt="line" id='line' />

                    <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-before-notion-V2.png" alt="c-logo" id='c-logo' />
                </div>
            </div>
        </>
    )
}

export default Partners