'use client'
import React from 'react'
import Editor from '@monaco-editor/react';


export function SnippetCreate() {

    return (
        <div className='h-full rounded-md w-full'>
            <Editor height="100%" theme='vs-dark'
                defaultLanguage="javascript"
                className='bg-black'
                defaultValue="This is " />;
        </div>
    )
}

