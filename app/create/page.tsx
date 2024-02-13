'use client'
import { SnippetCreate } from '@/components/Editor'
import { SelectGroup } from '@/components/SelectGroup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

export default function Page() {

    const [group, setGroup] = useState<string>("")
    const [newFileName, updateNewFileName] = useState<string>("")
    const [activeFile, setActiveFile] = useState<string>("")
    const [data, setData] = useState<{ [fileName: string]: string }>({})


    function handleFileCreation() {

        if (newFileName != "") {
            setData((prev) => ({ ...prev, newFileName: "" }))
            setActiveFile((prev) => newFileName)
        }

    }

    return (
        <div className='flex h-full px-8'>

            <div className='flex flex-col gap-10  w-1/3 '>
                <div className='flex flex-col justify-start gap-2 '>
                    <Label className='ml-2'>Group</Label>
                    <SelectGroup value={group} updateValue={setGroup} />
                </div>
                <div className='flex flex-col justify-start gap-2 '>
                    <Label className='ml-2'>Files</Label>
                    <div className='flex gap-2 '>
                        <Input className='w-[180px]' value={newFileName} onChange={(e) => updateNewFileName(e.target.value)} ></Input>
                        <Button variant={"ghost"} size={"icon"} onClick={handleFileCreation} >
                            <CheckCircledIcon className='h-6 w-6'></CheckCircledIcon>
                        </Button>
                    </div>
                </div>
            </div>

            <div className='flex h-2/3  w-2/3  '>

                <SnippetCreate />
            </div>

        </div>
    )
}
