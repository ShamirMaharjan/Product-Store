import React from 'react'
import { Link } from 'react-router-dom'
import { CiCirclePlus } from "react-icons/ci";

const NavBar = () => {

    return (
        <>
            <div className='flex justify-between items-center px-4 py-3  bg-slate-900'>
                <Link to={"/"}>
                    <h1 className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-4xl font-bold'>Product Store</h1>
                </Link>
                <Link to={"/create"}>
                    <CiCirclePlus className='text-4xl pt-2 text-white ' />
                </Link>


            </div>
        </>
    )
}

export default NavBar