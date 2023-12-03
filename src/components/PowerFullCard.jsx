import React from 'react'
import eye from "../utils/icons/eye.png"
import rahim from "../utils/icons/rahim.png"
import colorpalette from "../utils/icons/paint-palette.png"

const PowerFullCard = () => {
    return (
        <>
            <div className='PowerFullCards'>
                <div className="left_card PCard">
                    <img src={eye} alt="blueicon" className='blueicon' />
                    <h3>Customize the info you track</h3>
                    <p>Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.</p>
                    <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/customize-info.png" alt="core-product" className='PCardImage' />
                </div>
                <div className="right_card PCard">
                    <img src={colorpalette} alt="eye-icon" className='blueicon' />
                    <h3>Customize the info you track</h3>
                    <p>Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.</p>
                    <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/build-any-page-communicate-any-idea.png" alt="project-data" className='PCardImage' />
                </div>
            </div>
            <div id='tagline-div'>

            <h2 id='powerfull-tagline'>"Notion adapts to your needs. It’s as minimal or as powerful as <br /> you need it to be."</h2>
            <img src={rahim} alt="rahim" id='rahim'/>
            </div>
        </>
    )
}

export default PowerFullCard