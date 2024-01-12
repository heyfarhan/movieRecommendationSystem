import React from 'react'
import Trending from './Trending'
import Carousel from "./Carousel"
import ImageSlider from '../Slider/ImageSlider'


function Home() {
    return (
        <div className="">
            <span className='text-2xl px-2 font-bold'>Trending</span>
            <Carousel />
            <Trending key='Action' name='Action' id='28' />
            <Trending key='Romance' name='Romance' id='10749' />
            <Trending key='Comedy' name='Comedy' id='35' />
            <Trending key='Adventure' name='Adventure' id='12' />
            <Trending key='Horror' name='Horror' id='27' />
            <Trending key='Animation' name='Animation' id='16' />
            <Trending key='Science Fiction' name='Science Fiction' id='878' />
            <Trending key='Crime' name='Crime' id='80' />
            <Trending key='Thriller' name='Thriller' id='53' />
            <Trending key='Documentry' name='Documentry' id='99' />
            <Trending key='History' name='History' id='36' />
            <Trending key='Drama' name='Drama' id='18' />
            <Trending key='Family' name='Family' id='10751' />
            <Trending key='Fantasy' name='Fantasy' id='14' />
            <Trending key='Mystery' name='Mystery' id='9648' />


        </div>
    )
}

export default Home