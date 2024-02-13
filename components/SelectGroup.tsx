import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getGroups } from '@/actions/getGroups'

export function SelectGroup({ value, updateValue }: {
    value: string
    , updateValue: (value: string) => void
}) {

    const [groups, setGroups] = useState<string[]>([])


    useEffect(() => {

        async function getData() {
            const data = await getGroups()

            if (data.success) {
                const groups = data.success.map(({ title }) => title)
                setGroups(groups)
            }

        }

        getData()

    }, [])



    return (
        <Select onValueChange={updateValue} value={value} >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Group" />
            </SelectTrigger>
            <SelectContent>
                {
                    groups.map((group: string) => (

                        <SelectItem key={group} value={group} >{group}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>

    )
}
