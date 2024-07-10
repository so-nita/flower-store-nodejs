/** @format */
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import clsx from 'clsx';
import logo from "../images/logo.png";
import { BsHandbag } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

export default function Navbar() {
    const [isSideMenuOpen, setMenu] = useState(false);

    const navlinks = [
        { label: "HOME", link: "#" },
        { label: "PAGE", link: "#" },
        { label: "SHOP", link: "#" },
        { label: "PORTFOLIO", link: "#" },
        { label: "NEWS", link: "#" },
        { label: "CONTACT", link: "#" }
    ];

    return (
        <main>
            <nav className="flex justify-between px-4 lg:px-10 items-center py-6">
                <section className="lg:flex items-center hidden gap-4">
                    {/* Logo */}
                    <a href="/" className="text-4xl font-mono">
                        <img src={logo} alt="Fiama Logo" className="h-8" />
                    </a>
                </section>
                <section className="w-full flex justify-center flex-wrap items-center gap-4 lg:hidden">
                    <div className='flex justify-center w-full'>
                        {/* Logo */}
                        <a href="/" className="text-4xl font-mono">
                            <img src={logo} alt="Fiama Logo" className="h-8" />
                        </a>
                    </div>
                    <div className='w-full flex gap-5 items-center justify-center'>
                        {/* Cart Section */}
                        <section className="items-center gap-8 flex lg:hidden">
                            <div className="relative">
                                <BsHandbag className="text-3xl" />
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-primary rounded-full transform translate-x-1/2 -translate-y-1/2">
                                    2
                                </span>
                            </div>
                            {/* Cart Button */}
                            <div className="block">
                                <button className="text-left">
                                    YOUR CART<br /><span className="text-primary">$89.25</span>
                                </button>
                            </div>
                        </section>
                        {/* Menu */}
                        <FiMenu
                            onClick={() => setMenu(true)}
                            className="text-3xl cursor-pointer lg:hidden"
                        />
                    </div>
                </section>
                <div className="hidden lg:flex items-center gap-8">
                    {navlinks.map((d, i) => (
                        <a
                            key={i}
                            className="text-black hover:text-primary"
                            href={d.link}
                        >
                            {d.label}
                        </a>
                    ))}
                </div>
                {/* Sidebar mobile menu */}
                <div className={clsx("fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",isSideMenuOpen && "translate-x-0")}>
                    <section className="text-black bg-white text-left flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-80 flex">
                       <div className='flex justify-between items-center mb-10'>
                           <section className="lg:hidden items-center flex ">
                                {/* Logo */}
                                <a href="/" className="text-4xl font-mono">
                                    <img src={logo} alt="Fiama Logo"/>
                                </a>
                            </section>
                            <IoCloseOutline onClick={() => setMenu(false)} className="text-3xl cursor-pointer"/>
                       </div>
                       <div className='flex gap-3 items-center px-2 py-2.5 border border-primary'>
                            <input type="text" className='w-full border-none focus:outline-none'/>
                            <IoMdSearch className='text-2xl'/>
                       </div>
                        {navlinks.map((d, i) => (
                            <a key={i} className="font-semibold hover:text-primary duration-300" href={d.link}>
                                {d.label}
                            </a>
                        ))}
                    </section>
                </div>

                {/* Cart Section */}
                <section className="items-center gap-5 hidden lg:flex">
                    <div className="relative">
                        <BsHandbag className="text-3xl" />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-primary rounded-full transform translate-x-1/2 -translate-y-1/2">
                            2
                        </span>
                    </div>
                    {/* Cart Button */}
                    <div className="hidden lg:block">
                        <button className="text-left">
                            YOUR CART<br /><span className="text-primary">$89.25</span>
                        </button>
                    </div>
                </section>
            </nav>
            <hr />
        </main>
    );
}
