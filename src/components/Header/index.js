import React from 'react';
import Logo from 'images/logo.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="w-28">
              <Logo className="logo-style-1" />
            </div>
            <div className="w-auto">
              <ul className="flex items-center">
                <li className="">
                <Link legacyBehavior href="/home">
                <a className='px-9 text-light font-semibold text-gray-800 hover:text-emerald-300 font-sans'>Home</a>
                </Link>
                </li>
                <li className="">
                <Link legacyBehavior href="/service">
                <a className='px-9 text-light font-semibold text-gray-800 hover:text-emerald-300 font-sans'>Service</a>
                </Link>
                </li>
                <li className="">
                <Link legacyBehavior href="/about">
                <a className='px-9 text-light font-semibold text-gray-800 hover:text-emerald-300 font-sans'>About</a>
                </Link>
                </li>
                <li className="">
                <Link legacyBehavior href="/testimonial">
                <a className='px-9 text-light font-semibold text-gray-800 hover:text-emerald-300 font-sans'>Testimonial</a>
                </Link>
                </li>
                <li className="">
                <Link legacyBehavior href="/contact">
                <a className='px-9 text-light font-semibold text-gray-800 hover:text-emerald-300 font-sans'>Contact</a>
                </Link>
                </li>
                <li className="">
                <Link legacyBehavior href="/login">
                <a className='px-5 py-1 border text-light font-semibold border-emerald-400 rounded-lg mx-5 text-gray-800 hover:text-emerald-400 font-sans'>Login</a>
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
  )
}
