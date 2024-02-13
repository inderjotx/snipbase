'use client'
import React, { useState } from 'react'
import { Textarea } from './ui/textarea';
import { CodeBlock } from './CodeBlock';


export function SnippetCreate() {


    const [code, setCode] = useState<string>("")

    // mutiple file upload 
    // each file name 


    // create a state object
    // key -> name of the file 
    // data -> code in the file 


    // create file button add new key 

    // check button chnages the contect in the file to something else 



    return (

        <div className='rounded-md  w-full p-4 border '>
            {/* <Editor height="100%" theme='nightOwl'
                defaultLanguage="python"
                defaultValue="" /> */}
            <Textarea value={code} onChange={(e) => setCode(e.target.value)} className='w-full h-1/2'></Textarea>
            <CodeBlock className='' code={code} />
        </div>
    )
}

