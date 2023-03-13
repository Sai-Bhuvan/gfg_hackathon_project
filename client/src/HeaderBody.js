import { useState } from "react"

export default function HomeBody() {
    const [photo, setPhoto] = useState('./images/logo.png');

    const onClickClassNames = "border-b-2 border-gray-500 text-black font-bold bg-gray-200 rounded-2xl text-2xl py-1 px-2"

    function handleClick(photo) {
        setPhoto("./images/"+photo);
    }

    return (
        <>
        <div className="mx-8 px-2 mt-4">
            <h2 className="text-2xl font-bold">About our website</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
            <div className="flex justify-between mx-8 my-4 bg-gray-50  px-2">
                <button className={photo === "./images/logo.png"? onClickClassNames: "text-xl text-gray-500" } onClick={()=>handleClick("logo.png")}>AAAAAAA</button>
                <button className={photo === "./images/download.png"? onClickClassNames: "text-xl text-gray-600"} onClick={()=>handleClick("download.png")}>BBBBBBB</button>
                <button className={photo === "./images/download.png"? onClickClassNames: "text-xl text-gray-600"} onClick={()=>handleClick("download.png")}>CCCCCCC</button>
                <button className={photo === "./images/download.png"? onClickClassNames: "text-xl text-gray-600"} onClick={()=>handleClick("download.png")}>DDDDDDD</button>
                <button className={photo === "./images/download.png"? onClickClassNames: "text-xl text-gray-600"} onClick={()=>handleClick("download.png")}>EEEEEEEEEE</button>
            </div>
            <div className="mx-auto items-center mt-8"> 
                <img src={require(""+photo)} className="h-64 w-1/2 h-1/ rounded-2xl mx-auto" alt="photo"/>
            </div>
        </>
        
    )
}