import React, { useState, useEffect } from 'react'
import { data } from './Slider/constants'
import Card from './Card';
import { useParams } from 'react-router-dom';


function Search() {
    let API = "https://movieflix-api.onrender.com/api/search/";

    const text = useParams().text;
    const [result, setResult] = useState(null)
    const [count, setCount] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchApiData = async (url) => {
        try {
            setLoading(true)
            const res = await fetch(url);
            const data = await res.json();
            setResult(data.data);
            setCount(data.count)
            console.log(data.data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setCount(null)
        fetchApiData(`${API}${text}`);
    }, [text])

    return (
        < div className='w-full flex flex-wrap items-center px-4 justify-center'>

            {(count == 0) ? (<h1>No Movie Found</h1>) : (true)}
            {
                (!loading && result) ? (

                    result.map((element) => (

                        <Card data={element} key={element.id} />

                    ))

                ) : (<h1 className='text-[white]'> Loading</h1>)
            }
        </div >
    )
}

export default Search