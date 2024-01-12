import React, { useState } from 'react'
import logo from './icons/movielogo.avif'
import menu from './icons/menu.png'
import cross from './icons/cross.png'
import LoginSignUpBtn from './LoginSignUpBtn'
import { Link } from "react-router-dom"


function Brand() {

    const [isOpen, setOpen] = useState(true);
    let Links = [
        { name: "Home", link: "/" },
        { name: "Service", link: "/" },
        { name: "About", link: "/" },
        { name: "Contact", link: "/" }
    ];

    return (
        <>

            <div className='flex justify-between'>
                <Link to='/'>
                    <div className=' flex gap-2 items-center'>
                        {/* <img className='h- 7 w-7 rounded-full' src={logo} /> */}
                        <div className='text-3xl' >🍿 </div>
                        <span className='font-semibold text-lg '>FlimyCinema</span>
                    </div>
                </Link>
                <div className='' onClick={() => setOpen(!isOpen)}>
                    <div className='md:hidden bg-white px-2 py-1.5 rounded-full'>

                        {
                            isOpen ?
                                <img className='h-5 w-5 bg-white  md:hidden' src={menu} />
                                :
                                <img className='h- 5 w-5 bg-white md:hidden' src={cross} />
                        }
                    </div>
                </div>
            </div>
            {

                isOpen ?
                    <div></div>
                    :
                    <div className='mt-[2vh] md:hidden '>
                        <ul className=" w-full text-white flex items-center flex-col bg-black">

                            {
                                Links.map((e) => (
                                    <li key={e.name} className="mt-[1vh] font-semibold">
                                        <Link to={e.link}>
                                            <span > {e.name}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='w-full mt-[1vh] flex flex-col justify-center items-center gap-2'>
                            <Link to='/login'>

                                <button className="bg-pink-600 rounded-sm px-3 py-2 text-white text-sm font-semibold">
                                    Login
                                </button>
                            </Link>
                            <Link to='/sign-up'>
                                <button className="bg-pink-800 rounded-sm px-3 py-2 text-white text-sm font-semibold">
                                    Register
                                </button>
                            </Link>
                        </div>

                    </div>
            }

        </>
    )
}

export default Brand