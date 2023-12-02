import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Cards from './Cards';
import Hero from './Hero';
import Image from './Image';
import ImagesData from '../data';
import { Carousel } from 'react-responsive-carousel';
import Partners from './Partners';
import PowerFullCard from './PowerFullCard';
import crossarrow from "../utils/icons/shuffle-arrows.png"

const Home = () => {
    const Images = ImagesData;
    const [data, setData] = useState([])
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const CUSTOMERS_API = "https://www.notion.so/_next/data/k4zbIKoALoyJo2u6dG2lp/en-us/customers.json";
                const USERS_API = "https://reqres.in/api/users/";

                const customerResponse = await fetch(CUSTOMERS_API, { mode: 'cors' });
                const userResponse = await fetch(USERS_API);

                const customersData = await customerResponse.json();
                const userData = await userResponse.json();

                setData(userData.data);
                setCustomers(customersData.pageProps.logoGroup.logos);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            <Navbar />
            <Hero />
            <Cards items={data} />
            <div className='carouser-div'>
                <Carousel className='ccc' autoPlay={true}
                    centerMode={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    stopOnHover={false}
                    dynamicHeight={false}
                    interval={2500}
                >
                    {
                        Images.map((img) =>
                            <Image key={img.id} items={img} />
                        )
                    }
                </Carousel>
            </div>
            <Partners items={customers} />
            <h2 className='powerful-heading'>Powerful building blocks</h2>
            <div className='powerful'>
                <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekI.png" alt="let-see" id='let-see' />
                <img src={crossarrow} alt="cross-arrow" className='blueicon' />
                <h3>Visualize, filter & sort any way you want</h3>
                <p>Show only tasks assigned to you, or items marked as urgent. <br /> Break down any project in the way that’s most helpful to you.</p>
                <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/list.png" alt="products" />
                <div className='powerful-btn-div'>
                    <button>Board</button>
                    <button>Table</button>
                    <button>Timeline</button>
                    <button>Calendar</button>
                    <button>Gallery</button>
                    <button>List</button>
                </div>
            </div>
            <PowerFullCard />

        </>
    )
}

export default Home