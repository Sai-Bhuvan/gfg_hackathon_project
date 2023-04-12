import { Navigate } from "react-router-dom";
import Header from "./Header";
import HomeBody from "./HeaderBody";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
   
    
    if (window.localStorage.getItem('name')) {
        axios.post("http://localhost:4000/home/localId", {
            id: window.localStorage.getItem('id'),
        }).then(res =>{
            console.log(res);
        });
        return <Navigate to={"/home/"+window.localStorage.getItem('id')} />
    }
    return (
        <>
            <Header />
            <HomeBody />
        </>
    )
}