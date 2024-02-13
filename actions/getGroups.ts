'use server'


import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import prisma from '@/lib/prisma'

export async function getGroups() {
    const { userId } = auth()

    if (!userId) {
        // return NextResponse.json({ failure: "No User Id" }, { status: 400 })
        return { failure: "No user id " }
    }

    const groups = await prisma.group.findMany({
        where: {
            userId
        }
    })

    return { success: groups }
}