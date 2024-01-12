import React, { useState } from 'react'

function SignUpDetails() {

    const [user, setUser] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const signUpUser = async () => {
        const res = await fetch("https://movieflix-api.onrender.com/api/userSignUp",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })


        console.log(res)

    }

    return (
        <>

            <h2 className='text-4xl dark:text-white font-bold text-center py-4'>CinemaFlix</h2>
            <p className=' text-white text-center'>Create your new account   </p>
            <div className=' flex flex-col text-gray-300 mt-2 gap-2'>
                <input type="text" name="fullname" value={user.fullname} onChange={handleChange} placeholder="Full Name" className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' />
                <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' />
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' />
                <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' />
            </div>
            <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                    <a href="#" className='text-gray-100'>I accept the</a> <a href="#" className="text-teal-500 font-semibold">Terms of Use</a><a href="#" className='text-gray-100'> &</a> <a href="#" className="text-teal-500 shadow-lgfont-semibold">Privacy Policy</a>
                </span>
            </div>
            <button onClick={signUpUser} className='w-full mt-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/30 text-white font-semibold rounded-lg '>Sign Up</button>

        </>
    )
}

export default SignUpDetails