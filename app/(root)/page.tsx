import React from "react"
import NavBar from "@/components/home/navbar"
import Products from "@/app/notes/page"


export default function Home(){
    return(
        <>
        
            <NavBar></NavBar>

            <div className="text-white bg-blue-900 absolute w-full h-full">
                <div className="grid grid-cols-2 gap-2 sm:grid sm:grid-cols-4 sm:gap-4">
                    <Products></Products>
                </div>
            </div>
        </>
    )
}