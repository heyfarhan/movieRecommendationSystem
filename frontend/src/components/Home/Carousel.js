import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { data } from './Constants';
import { Link } from 'react-router-dom';
import RadialProgressBar from '../Radial';


function carousel() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w780';
    let API = `https://api.themoviedb.org/3/movie/now_playing?page=1&region=IN`;
    // let API = `https://movieflix-api.onrender.com/api${url}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzQyOTUyNzE3ZTYwYWI3YWU4M2M3MWJhMzkyOGU0NiIsInN1YiI6IjY1NDIzZmViOWNjNjdiMDExY2VkNGQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T7ynWHNjvB-AegPZn1ZZBB5NccJfhv6d5Uype1yoSgc'
        }
    };


    const [result, setResult] = useState(false)
    const [count, setCount] = useState(0)

    const fetchApiData = async (url, options) => {
        try {
            const res = await fetch(url, options);
            const data = await res.json();
            setResult(data.results);
            setCount(data.count)
            // console.log(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApiData(API, options);
    }, [])

    return (


        <div className='mt-4 mb-4 '>
            < div >
                <Carousel responsive={responsive} className='px-1 items-center' >
                    {(result) ? (


                        result.map((element) => (
                            // <Link to={'/movie/' + `${element.id}`} key={element.id}>

                            <div className='rounded-xl overflow-hidden mx-2 relative'>

                                <img className='  rounded-xl w-full ml-auto mr-auto z-0' src={`${imageBaseUrl}${element.backdrop_path}`} />
                                <div className='px-8 absolute z-50 bottom-0 left-0 text-2xl md:text-4xl font-medium bg-gradient-to-t to-[#0000] from-[#000] w-full text-white flex h-[30%] truncate items-end pb-4 lg:pb-10'>
                                    <span className='lg:pl-8 lg:pr-24 truncate mr-auto w-2/3' >{element.title}
                                    </span>

                                    <RadialProgressBar value={element.vote_average.toFixed(1)} />
                                </div>
                            </div>

                            // </Link>
                        ))

                    ) : (<h1 className='text-[white]'> Loading</h1>)}
                </Carousel>
            </div >

        </div>

    )
}

export default carousel
// import React, { useEffect, useState } from 'react'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { data } from './constants';
// import Card from '../Card';
// function ImageSlider({ url = '/search/i' }) {

//     const responsive = {
//         // superLargeDesktop: {
//         //     // the naming can be any, depends on you.%]
//         //     breakpoint: { max: 4000, min: 3000 },
//         //     items: 7
//         // },
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 7
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 4
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 3
//         }
//     };



//     return (
//         <>

//         </>

//     )

// }

// export default ImageSlider