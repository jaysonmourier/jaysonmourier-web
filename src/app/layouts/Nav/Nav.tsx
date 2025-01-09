"use client";

import { useState } from 'react';
import NavTextLink from '@/app/components/TextLinks/NavTextLink';

const Nav = () => {
    const [showMenu, setShowMenu] = useState(true);

    const _handleDropdown = () => {
        setShowMenu( !showMenu );
    }

    return (        
    <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap">Jayson</span>
            </a>
            <button onClick={_handleDropdown} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Ouvrir le menu principal</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className={`${showMenu ? 'hidden' : 'absolute top-16 left-0 w-full px-4'} md:static md:block md:w-auto`} id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                    <li>
                        <NavTextLink 
                            text='Projets'
                            href='#'
                        />
                    </li>
                    <li>
                        <NavTextLink
                            text='Articles'
                            href='#'
                            externalLink
                        />
                    </li>
                    <li>
                        <NavTextLink
                            text='Contact'
                            href='mailto:jayson.mourier@proton.me'
                            externalLink
                        />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Nav;