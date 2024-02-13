import { auth, currentUser } from "@clerk/nextjs"
import prisma from '@/lib/prisma'
import { CodeBlock } from "@/components/CodeBlock"


// create if not present primary group for user 

// in the primary group create snippet and code block


async function createGroup(userId: string) {

  await prisma.group.upsert({
    where: {
      "userId_title": {
        userId,
        title: "primary",
      }
    }
    ,
    create: {
      title: "primary",
      userId
    },
    update: {}
  })

}




export default async function Home() {


  const { userId } = auth()
  if (userId) {
    await createGroup(userId)
  }

  return (
    <div>
      Somethine
    </div>
  )
}
