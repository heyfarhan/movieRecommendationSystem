import React from 'react'
import Brand from './Brand'
import Navbar from './Navbar.js'
import Searchbar from './SearchBar.js'
import LoginSignUpBtn from './LoginSignUpBtn.js'

function Header() {
  return (
    <div className='bg-black md:flex w-[100vw] text-white items-center py-3 px-3 '>
      <Brand />
      <Navbar />
      <div className='md:flex gap-4 items-center justify-center ml-auto mr-2 lg:mr-12'>
        <Searchbar />

        {/* <LoginSignUpBtn /> */}
      </div>
    </div>
  )
}

export default Header