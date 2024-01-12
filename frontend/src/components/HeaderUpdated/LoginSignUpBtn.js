import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex gap-4 mr-10">
      <Link to='/login'>

        <button className=" hidden md:flex bg-pink-600 rounded-sm px-3 py-2 text-white text-sm font-semibold">
          Login
        </button>
      </Link>
      <Link to='/sign-up'>
        <button className="hidden md:flex bg-pink-800 rounded-sm px-3 py-2 text-white text-sm font-semibold">
          Register
        </button>
      </Link>
    </div>
  )
}

export default Login

