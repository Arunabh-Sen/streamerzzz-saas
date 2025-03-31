import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Line } from '@remixicon/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [hideTimeout, setHideTimeout] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos < prevScrollPos || currentScrollPos === 0) {
                // Show navbar when scrolling up or at the top
                setShowNavbar(true);
                if (hideTimeout) clearTimeout(hideTimeout);
            } else {
                // Wait before hiding when scrolling down
                const timeout = setTimeout(() => {
                    setShowNavbar(false);
                }, 35); // Delay in ms before hiding

                setHideTimeout(timeout);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (hideTimeout) clearTimeout(hideTimeout);
        };
    }, [prevScrollPos]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
            showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}>
            <div className='text-neutral-500 bg-black/60 backdrop-blur-lg max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800 mt-4'>
                {/* leftlogo */}
                <h1 className='text-white font-semibold text-lg'>STREAMERZZZ</h1>

                {/* centrelinksonpc */}
                <div className='hidden md:flex space-x-6'>
                    <a href="#works" className='hover:text-neutral-200 transition-all duration-200'>How it works</a>
                    <a href="#pricing" className='hover:text-neutral-200 transition-all duration-200'>Pricing</a>
                    <a href="#testimonials" className='hover:text-neutral-200 transition-all duration-200'>Testimonials</a>
                </div>

                {/* rightbuttonspc */}
                <div className='hidden md:flex space-x-4 items-center'>
                    <a href="#" className='hover:text-neutral-200 transition-all duration-200'>Login</a>
                    <a href="#" className='border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition duration-200'>Get a Demo</a>
                    <a href="#" className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-200'>Start Free Trial</a>
                </div>

                {/* hamburgerformobile */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none' aria-label={isOpen ? "Close Menu" : "Open Menu"}>
                        {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
                    </button>
                </div>
            </div>

            {/* mobilemenu */}
            {isOpen && (
                <div className='md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2'>
                    <div className='flex flex-col space-y-4'>
                        <a href="#" className='hover:text-neutral-200'>Product</a>
                        <a href="#" className='hover:text-neutral-200'>Pricing</a>
                        <a href="#" className='hover:text-neutral-200'>Resources</a>
                        <a href="#" className='hover:text-white'>Login</a>
                        <a href="#" className='border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition'>Get a Demo</a>
                        <a href="#" className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition'>Start Free Trial</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
