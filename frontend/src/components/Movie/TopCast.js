import React, { useEffect, useState } from 'react'


function TopCast({ id }) {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w780';

    const [result, setResult] = useState(null)
    const [crew, setCrew] = useState(null)
    const [director, setDirector] = useState(null)
    const [loading, setLoading] = useState(false)

    const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzQyOTUyNzE3ZTYwYWI3YWU4M2M3MWJhMzkyOGU0NiIsInN1YiI6IjY1NDIzZmViOWNjNjdiMDExY2VkNGQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T7ynWHNjvB-AegPZn1ZZBB5NccJfhv6d5Uype1yoSgc'
        }
    };

    function getDirector(casts) {
        for (let cast of casts) {
            if (cast.known_for_department == 'Directing') {
                setDirector(cast)
                break
            }

        }

    }
    const fetchApiData = async (url) => {
        try {
            setLoading(true)
            const res = await fetch(url, options);
            const data = await res.json();
            setResult(data.cast);
            setCrew(data.crew);
            getDirector(data.crew)
            // console.log(data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchApiData(url)

    }, [])

    return (
        <div className='p-8 '>
            <p className='text-lg text-white font-semibold'>Top Cast</p>
            < div className='h-auto w-full   flex  flex-wrap'>

                {
                    (!loading && director) ? (
                        <div className=' mx-4 my-4 ' key={director.id}>
                            <div className='h-[150px] w-[150px] '>
                                <img className='h-full w-full rounded-full' src={`${imageBaseUrl}${director.profile_path}`} />
                            </div>
                            <div className=' w-[110px] mt-2 '>
                                <p className='text-white text-xs text-center '>{director.name}</p>
                                <p className='text-lg font-normal text-[yellow] text-center  '>Director</p>
                            </div>
                        </div>
                    ) : (<h1 className='text-[white]'> Loading</h1>)
                }
                {
                    (!loading && result) ? (

                        result.slice(0, 6).map((element, key) => (
                            <div className=' mx-4 my-4 ' key={element.id}>
                                <div className='h-[150px] w-[155px] '>
                                    <img className='h-full w-full rounded-full' src={`${imageBaseUrl}${element.profile_path}`} />
                                </div>
                                <div className=' w-[110px] mt-2 '>
                                    <p className='text-white text-xs text-center '>{element.name}</p>
                                    <p className='text-[10px] font-normal text-white text-center  '>{element.character}</p>
                                </div>
                            </div>

                        ))


                    ) : (<h1 className='text-[white]'> Loading</h1>)
                }
            </div>
        </div >
    )
}

export default TopCast