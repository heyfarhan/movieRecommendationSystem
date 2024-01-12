import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { data } from './constants';
import Card from '../Card';
function ImageSlider({ url = '/search/i' }) {

    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    // let API = `https://movieflix-api.onrender.com/api${url}`;
    let API = `${url}`;

    const [result, setResult] = useState(false)
    const [count, setCount] = useState(0)

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();

            if (data.data) {

                setResult(data.data);
                setCount(data.count)
            }
            else {
                setResult(data.results);

            }
            // console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApiData(API);
    }, [])


    return (
        <>
            < div >
                <Carousel responsive={responsive} className='px-4 items-center' >
                    {(result) ? (


                        result.map((element) => (

                            <Card data={element} key={element.id} />

                        ))

                    ) : (<h1 className='text-[white]'> Loading</h1>)}
                </Carousel>
            </div >

        </>

    )

}

export default ImageSlider