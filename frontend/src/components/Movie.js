import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Moviedata from './Movie/Moviedata';
import TopCast from './Movie/TopCast';
import Recommend from './Slider/Recommend'

function Movie() {
    // let API = "https://movieflix-api.onrender.com/api/movie/";
    let API = "https://api.themoviedb.org/3/movie/";

    const id = useParams().id;
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchApiData = async (url) => {
        try {
            setLoading(true)
            const res = await fetch(url);
            const data = await res.json();
            setResult(data);
            // console.log(data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApiData(`${API}${id}?&api_key=e342952717e60ab7ae83c71ba3928e46`);
    }, [id])

    return (
        < div className='w-full'>

            {
                (!loading && result) ? (
                    <div>

                        <div className='px-8'>
                            <div className='flex flex-col md:flex-row my-4 py-4  text-white  gap-12  justify-center '>
                                <img className='h-[250px] w-[200px] md:h-[500px] md:w-[420px] rounded-lg' src={`https://image.tmdb.org/t/p/w780${result.poster_path}`} />
                                <Moviedata data={result} />
                            </div>
                            <TopCast id={id} />
                            {/* <h1 className='text-[white]'> success </h1> */}
                        </div>
                        <Recommend id={id} />
                    </div>

                ) : (<h1 className='text-[white]'> Loading</h1>)
            }
        </div >
    )
}

export default Movie