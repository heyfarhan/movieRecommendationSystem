import React from "react";

const Footer = () => {
    return (

        <footer className="bg-black">
            <div className="w-full  h-10 lg:h-12 flex items-center justify-center">
                <span className="text-sm lg:text-lg sm:text-center text-white">
                    This Website Made By Farhan Ahmed, Priyanshu Priyadarshi, Gaurav Kumar & Ayush Yadav as a Minor Project || Student of MJPRU, Bareilly.
                </span>
            </div>
            <div className="w-full  h-10 flex items-center justify-center">
                <span className="text-sm sm:text-center text-white">© 2023 <a href="/" className="hover:underline">Terms & Conditions</a>. All Rights Reserved.
                </span>
            </div>
        </footer>

    )
}

export default Footer