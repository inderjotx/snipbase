import React from 'react'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
    return (
        <div className='w-full flex items-center px-4 justify-between sticky top-0 h-16 drop-shadow-lg'>
            <div className='inline text-lg'>
                SnipBase
            </div>
            <div><ThemeToggle /></div>
        </div>
    )
}
