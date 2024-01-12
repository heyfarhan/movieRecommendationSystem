import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import ImageSlider from '../Slider/ImageSlider';

function Trending({ name, id }) {

    const responsive = {
        1: {
            breakpoint: { max: 3000, min: 1500 },
            items: 8
        },
        2: {
            breakpoint: { max: 1500, min: 1300 },
            items: 7
        },
        3: {
            breakpoint: { max: 1300, min: 1100 },
            items: 6
        },
        4: {
            breakpoint: { max: 1100, min: 900 },
            items: 5
        },
        5: {
            breakpoint: { max: 900, min: 700 },
            items: 4
        },
        6: {
            breakpoint: { max: 700, min: 400 },
            items: 3
        },
        7: {
            breakpoint: { max: 400, min: 280 },
            items: 2
        },
        8: {
            breakpoint: { max: 280, min: 0 },
            items: 1
        }
    };

    return (
        <>


            <div className='mt-8'>
                <p className='my-3 pl-2 text-lg font-bold text-white'>{name}</p>
                <ImageSlider url={`https://api.themoviedb.org/3/discover/movie?certification_country=IN&include_adult=false&include_video=false&language=en-IN&page=1&region=IN&sort_by=popularity.desc&watch_region=IN&with_genres=${id}&with_origin_country=IN&api_key=e342952717e60ab7ae83c71ba3928e46`} />

            </div>


        </>
    )
}

export default Trending