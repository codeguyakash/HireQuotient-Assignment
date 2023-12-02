import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Cards from './Cards';
import Hero from './Hero';
import Image from './Image';
import ImagesData from '../data';
import { Carousel } from 'react-responsive-carousel';
import Partners from './Partners';
import axios from 'axios';

const Home = () => {
    const Images = ImagesData;
    const [data, setData] = useState([])
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const CUSTOMERS_API = process.env.REACT_APP_CUSTOMERS;
                const USERS_API = process.env.REACT_APP_USERS;

                const customerResponse = await fetch(CUSTOMERS_API);
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
        </>
    )
}

export default Home