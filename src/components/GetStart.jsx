import React from 'react'

const GetStart = () => {
    return (
        <>
            <div className="hero-container">
                <h1>Get started for free</h1>
                <p id='play'>Play around with it first. Pay and add your team later.</p>
                <div className='requstdemo flex'>
                    <div>
                        <button id='getnotion'>Try Notion free</button>
                    </div>
                    <div>
                        <span ><a href="#" id='requestdemo'>Request a demo →</a></span>
                    </div>
                </div>
                <img id='hero-image' src="https://www.notion.so/cdn-cgi/image/format=webp,width=750/front-static/pages/home/notion-parade.png" alt="heros" />
            </div>

        </>
    )
}

export default GetStart