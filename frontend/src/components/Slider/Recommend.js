import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../Card';
function Recommend({ id }) {

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

    // let API = `https://api.themoviedb.org/3/movie/`;
    // const url = '872906/recommendations?language=en-US&page=1';
    let API = `https://movieflix-api.onrender.com/api`;

    const [result, setResult] = useState(false)

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // setResult(data.results);
            setResult(data.recommendations);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApiData(`${API}/recommend/${id}`);
    }, [])


    return (
        <>
            < div >
                <p className=' py-6 font-medium text-xl text-white'>
                    Recommend
                </p>
                <Carousel responsive={responsive} className=' items-center' >
                    {(result) ? (


                        result.map((element) => (

                            < Card data={element?.id} key={element?.id?.id} />
                            // < Card data={element} key={element?.id} />


                        ))

                    ) : (<h1 className='text-[white]'> Loading</h1>)}
                </Carousel>
            </div >

        </>

    )

}

export default Recommend