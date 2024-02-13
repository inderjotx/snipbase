'use client'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Butterfly_Kids } from 'next/font/google'
import { Button } from './ui/button'
import { useCreateSnippet } from '@/hooks/useCreateSnippet'
import { auth, useAuth } from '@clerk/nextjs'

export function Navbar() {

    const { userId } = useAuth()

    const setShowDrawer = useCreateSnippet((state) => state.setShowDrawer)

    return (
        <div className='w-full z-10 flex items-center px-4 justify-between sticky top-0 h-16 backdrop-blur-md'>
            <div className='inline text-lg'>
                SnipBase
            </div>
            <div className='flex gap-4'>
                {
                    userId &&
                    <Button onClick={() => setShowDrawer(true)}>Create</Button>
                }
                <ThemeToggle />
            </div>
        </div>
    )
}
