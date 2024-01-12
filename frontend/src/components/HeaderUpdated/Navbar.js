import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {


  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" }
  ];

  return (
    <div>
      <ul className="hidden w-[30vw] md:flex ml-5">

        {
          Links.map((e) => (
            <li key={e.name} className="md:mr-[2vw] font-semibold">
              <Link to={e.link}>
                <span > {e.name}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Navbar