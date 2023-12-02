import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const Test = () => {
    return (
        <>
            <Carousel autoPlay={true}
                centerMode={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}

            >
                <div>
                    <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/https://images.ctfassets.net/spoqsaf9291f/546F1MvF9KlFXBOO41AKLx/605f38de934bb47bcd89e6335eee1242/projects.png" />
                </div>
                <div>
                    <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/https://images.ctfassets.net/spoqsaf9291f/1h9O767GwXx8lwWKS55G6o/aa28560fbd35d34a414522259fde3517/meeting-notes.png" />
                </div>
                <div>
                    <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1200/front-static/pages/home/building-blocks/kanban.png" />
                </div>
            </Carousel>
        </>
    )
}

export default Test