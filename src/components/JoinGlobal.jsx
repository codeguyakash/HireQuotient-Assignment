import React from 'react'

const JoinGlobal = () => {
    return (
        <>
            <div className="join-container">

                <div className="client-heading">
                    <h2>Join a global movement. <br /> Unleash your creativity.</h2>
                </div>
                <div className="client-paragraph">
                    <p>Our vibrant community produces content, teaches courses, and leads events all over <br /> the world.</p>
                </div>
                <div id='learnmore'><a href="#" id='learnmore'>Learn more →</a></div>
            </div>
            <div className='member-image'>
                <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/avatars.png" alt="members" />
            </div>
            <div className="counter flex">
                <div className="community members">
                    <span>1M+</span>
                    <h4>community members</h4>
                </div>
                <div className="community groups">

                    <span>150+</span>
                    <h4>community groups</h4>
                </div>
                <div className="community countries">
                    <span>50+</span>
                    <h4>countries represented</h4>

                </div>
            </div>
            <div className='flex'>
                <div className='PCard'>
                    <h3>An always-on support network</h3>
                    <p>Swap setups and share tips in over 149 online communities.</p>
                    <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=384/front-static/pages/home/community-icons-V2.png" alt="social icons" />
                </div>
                <div className='PCard'>
                    <h3>Choose your language</h3>
                    <p>Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!</p>
                    <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/welcome-to-notion.png" alt="welcome-notion" />
                </div>
            </div>


        </>
    )
}

export default JoinGlobal