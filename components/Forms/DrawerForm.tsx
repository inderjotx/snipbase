'use client'
import { useCreateSnippet } from "@/hooks/useCreateSnippet"
import { Button } from "../ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { SnippetCreate } from "../Editor"


export const DrawerForm = () => {

    const { showDrawer, setShowDrawer } = useCreateSnippet()

    return (
        <Drawer open={showDrawer} onOpenChange={setShowDrawer}  >
            <DrawerContent className="h-5/6 flex flex-col gap-4" >

                <DrawerHeader>
                    <DrawerTitle>Create Snippet</DrawerTitle>
                    <DrawerDescription>Always keep track of important pieces</DrawerDescription>
                </DrawerHeader>
                <div className="w-full flex justify-center h-1/2">
                    <SnippetCreate />
                </div>
                <DrawerFooter className="sticky bottom-5">
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
} 