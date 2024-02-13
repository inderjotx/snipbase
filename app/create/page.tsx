'use client'
import { Editor } from '@monaco-editor/react'
import React from 'react'

export default function page() {
    return (
        <div className='flex h-full'>

            <div className='w-1/3'>

            </div>

            <div className=' flex w-2/3 h-screen'>
                <Editor />
            </div>
        </div>
    )
}
