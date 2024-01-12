import React from 'react'
import RadialProgressBar from '../Radial'


function Moviedata({ data }) {
    return (
        <>
            <div className='flex flex-col justify-between w-[70vw] md:w-[40vw] gap-4 '>
                <div>
                    <p className='text-3xl'>{data.title}</p>
                    <p className='text-sm'>{data.tagline}</p>
                </div>
                <div className='flex gap-2 '>
                    {
                        data.genres.map((e) => (
                            <span key={e.name} className=' bg-pink-500 text-sm rounded-[2px] flex justify-center px-3 py-1.5'>
                                {e.name}
                            </span>
                        )
                        )}
                </div>
                <div className='flex gap-2 '>
                    <span className=' bg-red-600 text-sm rounded-[2px] flex justify-center px-3 py-1.5'>
                        {data.original_language}
                    </span>
                </div>

                <div className='flex gap-14'>
                    <div className='flex items-center gap-2'>
                        <p >Ratings : <span></span></p>
                        <RadialProgressBar value={data.vote_average.toFixed(1)} />
                    </div>
                    <p>watch later</p>
                </div>
                <div>
                    <p className='text-lg'>Overview</p>
                    <p className='text-sm '>{data.overview}</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-4  '>
                    <section className='text-sm'>Status : <span className='text-sm'>{data.status}</span></section>
                    <section className='text-sm'>Release Date : <span className='text-sm'>{data.release_date}</span></section>
                    <section className='text-sm'>Runtime : <span className='text-sm'>{data.runtime}</span></section>
                </div>

            </div>
        </>
    )
}

export default Moviedata