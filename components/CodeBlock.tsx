'use client'
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const styleMap = new Map()

styleMap.set("dark", nightOwl)
styleMap.set("light", atomOneLight)





export function CodeBlock({ code }: { code: string }) {


    const [show, setShow] = useState<boolean>(false)
    const [isMounter, setIsMounted] = useState<boolean>(false)
    const { theme } = useTheme()


    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounter) {
        return <></>
    }


    const copyCode = () => {
        setShow(true)
        console.log("clicked")
        window.navigator.clipboard.writeText(code)
        setTimeout(() => { setShow(false) }, 500)
    }



    return (
        <div className='flex  w-full justify-center'>
            <div className="w-4/5 rounded-md relative" >
                <SyntaxHighlighter className="h-40 w-full" language="javascript" showLineNumbers style={styleMap.get(theme)} >
                    {code}
                </SyntaxHighlighter>
                <div className='h-4  absolute top-3 z-10 right-3 '>
                    <Button type='button' onClick={() => copyCode()} variant={"ghost"} size={"icon"} >
                        <CopyIcon className={cn('transition-all hover:scale-105 focus:hidden  ', show && "hidden")} />
                        <CheckIcon className={cn('transition-all hover:scale-105 hidden focus:block ', show && "block")}  ></CheckIcon>
                    </Button>
                </div>
            </div>

        </div >
    )
}
