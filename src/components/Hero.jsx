import React from 'react';

const Hero = () => {
   
    return (
        <>
            <div className="hero-container">
                <h1>Write, plan, share. <br />
                    With AI at your side.</h1>
                <p>Notion is the connected workspace where better, faster work happens.</p>
                <img id='hero-image' src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png" alt="heros" />
                <button id='getnotion'>Get Notion free</button>
            </div>
        </>
    )
}

export default Hero