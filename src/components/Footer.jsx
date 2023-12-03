import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="flex">
                <div className="footer">
                    <div className="footer-items flex">
                        <div className="items social">
                            <div className="icons">
                            <b>Notion</b><br />
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="instagram" />
                                <img src="https://cdn-icons-png.flaticon.com/512/1400/1400829.png" alt="instagram" />
                                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111532.png " alt="instagram" />
                                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png" alt="instagram" />
                                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="instagram" />
                            </div>
                            <div><button>English</button></div>
                        </div>
                        <div className="items">
                            <ul>
                                <li><b>Product</b></li>
                                <li>Wikis</li>
                                <li>Projects</li>
                                <li>Docs</li>
                                <li>Notion AI</li>
                                <li>What's new</li>
                            </ul>
                        </div>
                        <div className="items">
                            <ul>
                                <li><b>Download</b></li>
                                <li>iOS & Android</li>
                                <li>Mac & Windows</li>
                                <li>Web Clipper</li>
                            </ul>
                        </div>
                        <div className="items">
                            <ul>
                                <li><b>Get started</b></li>
                                <li>Switch from Confluence</li>
                                <li>Switch from Asana</li>
                                <li>Switch from Evernote</li>
                                <li>Company vs Monday</li>
                                <li>Company vs Clickup</li>
                                <li>Company vs Jira</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-items">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer