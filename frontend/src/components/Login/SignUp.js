import React from 'react'
import SignUpDetails from './SignUpDetails'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='grid grid-cols-1 w-full py-5 md:py-24'>
      <div className=' flex flex-col '>
        <div className=" py-2 px-2 md:px-12">
          <div className='max-w-[400px] w-full mx-auto bg-gray-600 p-4 px-4 md:px-8 rounded-lg' >

            <SignUpDetails />
            <Link to='/login'>
              <p className=' text-center cursor-pointer mt-8'>Already a member? Login now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SignUp