import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"

const ToggleTheme = () => {
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
    const pageClasses = document.documentElement.classList

    const toggle = () => {
        pageClasses.toggle('dark')
    }
    
    useEffect(() => {
        systemPreference && pageClasses.add("dark")
    })

    return <div className="hidden sm:block">
        <MoonIcon className="h-8 text-gray-100 cursor-pointer block dark:hidden" onClick={toggle} />
        <SunIcon className="h-8 text-gray-100 cursor-pointer hidden  dark:block" onClick={toggle} />
    </div>
}

export default ToggleTheme
