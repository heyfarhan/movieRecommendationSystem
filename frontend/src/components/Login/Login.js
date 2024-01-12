import React, { useState } from 'react'
import { Link } from 'react-router-dom'



function Login() {

    const [user, setUser] = useState({
        Email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const loginUser = async () => {
        const res = await fetch("https://movieflix-api.onrender.com/api/userLogin",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })



    }

    return (
        <>


            <div className='grid grid-cols-1  h-[96vh] w-full'>
                <div className='flex flex-col justify-center'>
                    <div className='max-w-[400px] w-full mx-auto bg-gray-600 p-8 px-8 rounded-lg'>
                        <h2 className='text-4xl dark:text-white font-bold text-center py-8'>CinemaFlix</h2>
                        <div className=' flex flex-col text-gray-300 py-2'>
                            <label>Email</label>
                            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" name="Email" value={user.Email} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col text-gray-300 py-2 '>
                            <label>Password</label>
                            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" name="password" value={user.password} onChange={handleChange} />
                        </div>
                        <div>
                            <div className='flex justify-between text-gray-400 py-2'>
                                <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                                <p>Forgot Password</p>
                            </div>
                            <button onClick={loginUser} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/30 text-white font-semibold rounded-lg '>Sign In</button>
                            <div className='flex justify-center text-gray-300 py-2'>
                                <Link to='/sign-up'>
                                    <p className=' text-center cursor-pointer mt-8'>Not a member? Sign up now</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Login