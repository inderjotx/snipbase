import { create } from 'zustand'


interface useCreateSnippetProps {
    showDrawer: boolean,
    setShowDrawer: (state: boolean) => void
}


export const useCreateSnippet = create<useCreateSnippetProps>((set) => ({
    showDrawer: false,
    setShowDrawer: (state) => set({ showDrawer: state })
}))

