import React from "react";
import logo from '../assets/990.jpg'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="shadow-md ">
            <nav className="h-[6rem] flex mx-auto  items-center justify-between px-6 w-[80%]">
                <div className="flex items-center">
                    <img src={logo} alt="" className="w-[6rem]" />
                    <p className="font-bold  text-xl text-pink-400">DReal cocktail</p>

                </div>

                <ul className="flex gap-[5rem] text-xl font-bold text-pink-400 ">
                    <li className="hover:bg-pink-400 hover:text-black hover:px-4 hover:py-2 rounded-lg">
                        <Link to="/" >
                            Home
                        </Link>
                    </li>
                     <li className=" hover:bg-pink-400 hover:text-black hover:px-4 hover:py-2 rounded-lg">
                        <Link to="about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>


        </header>
    )
}
export default Header