import React from 'react'
import ReactDom from 'react-dom/client'
import Header from './components/HeaderUpdated/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Search from './components/Search'

import Movie from './components/Movie'
import Login from './components/Login/Login'
import SignUp from './components/Login/SignUp'
const root = ReactDom.createRoot(document.getElementById('root'))

const AppLayout = () => {
    return (
        <>
            <div className='bg-[#111111]  min-h-[96vh] overflow-hidden'>
                <Header />
                <div className='p-4'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/search/:text',
                element: <Search />
            },
            {
                path: '/search/',
                element: <Search />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/movie/:id',
                element: <Movie />
            },
        ]
    }
])

root.render(<RouterProvider router={Routes} />)