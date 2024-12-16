"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
// import { useSession, signOut } from 'next-auth/react'
//import { useRouter } from 'next/navigation'

const Sidebar = () => {

    //const { data: session } = useSession();

    // const router = useRouter();

    // if (!session) {
    //     router.push("/")
    // }


    const [sideBar, setsideBar] = useState('-left-[400px]')

    const toggleSidebar = () => {

        if (sideBar == '-left-[400px]') {
            setsideBar("left-0");
        } else {
            setsideBar("-left-[400px]");
        }

    }


    const close = () => {
        setsideBar('-left-[400px]')
    }


    return (




        <>

            <div className='flex '>
                <div className={`sidebar relative ${sideBar} z-20 transition-all md:left-0  md:w-[25vw] cursor-pointer bg-green-950 md:bg-gray-950 md:flex flex-col    text-white h-[100vh]`}>

                    <img src="/cross.svg" onClick={close} className='sm:hidden absolute right-4 top-4' width={27} alt="" />

                    <div className="logo ml-4 flex items-center md:my-7 my-14 gap-4">
                        <img width={50} src="/icon.png" alt="" />
                        <h1 className='text-2xl font-bold'>InveNexus</h1>

                    </div>

                    <p className='ml-4 my-10'>Menu</p>

                    <Link href="/Dashboard">   <div className="dashboard flex items-center ml-4 gap-4 px-4 w-52 cursor-pointer mt-3 hover:bg-green-800 md:hover:bg-gray-900 rounded p-1">
                        <img width={30} src="/dash.svg" alt="" />
                        <p>Dashboard</p>
                    </div></Link>

                    <Link href="/Products">  <div className="dashboard flex items-center ml-4 gap-4 px-4 w-52 cursor-pointer md:my-2 my-4 hover:bg-green-800 md:hover:bg-gray-900 rounded p-1">
                        <img width={30} src="/products.svg" alt="" />
                        <p>Products</p>
                    </div></Link>

                    <Link href="/Orders">  <div className="dashboard flex items-center ml-4 gap-4 px-4 w-52 cursor-pointer md:my-2 my-4 hover:bg-green-800 md:hover:bg-gray-900 rounded p-1">
                        <img width={30} src="/orders.svg" alt="" />
                        <p>our orders</p>
                    </div></Link>


                    <Link href="/Forecasting"><div className="dashboard flex items-center ml-4 gap-4 px-4 w-52 cursor-pointer md:my-2 my-4 hover:bg-green-800 md:hover:bg-gray-900 rounded p-1">
                        <img width={30} src="/forecast.svg" alt="" />
                        <p>AI Forecasting</p>
                    </div></Link>

                    <Link href="/About"><div className="dashboard flex items-center ml-4 gap-4 px-4 w-52 cursor-pointer md:my-2 my-4 hover:bg-green-800 md:hover:bg-gray-900 rounded p-1">
                        <img width={30} src="/orders.svg" alt="" />
                        <p>About Developer</p>
                    </div></Link>
                    {/* onClick={signOut}  */}
                    <div className="dashboard flex items-center ml-4 gap-4 px-4 w-52 cursor-pointer md:my-2 my-4 hover:bg-green-800 md:hover:bg-gray-900 rounded p-1">
                        <img width={30} src="/logout.svg" alt="" />
                        <p>Sign out</p>
                    </div>


                    {/* <div className='flex items-center  justify-center  gap-2 my-14 py-2 px-1 hover:bg-gray-800 cursor-pointer rounded-xl'>

                        <div className="profile ">
                            <img src="/me.jpeg" width={28} className='   rounded-full' alt="" />
                        </div>

                        <div className="details ">
                            <p className='text-sm'>Muhammad Idrees</p>
                            <p className='text-sm'>muhammadidr1122@gmail.com</p>
                        </div>

                    </div>  */}
                </div>

                <div className="nav    w-full bg-green-900 md:bg-gray-950 flex absolute md:relative  justify-between text-white h-14 items-center">
                    <div className=" sm:flex gap-4 hidden  ">
                        <img src="/search.svg" alt="" />
                        <input type="text" className='rounded p-1 text-black px-2' placeholder='Search product' /></div>
                    <ul className='flex gap-4  hover:bg-gray-950 rounded cursor-pointer'>

                        <div className="block   sm:hidden mx-4">
                            <img className='' onClick={toggleSidebar} src="/ham.svg" width={27} alt="" />
                        </div>


                    </ul>


                    {/* {session &&
                        <div className='flex items-center  justify-center  mr-4 gap-2 my-14 py-2 px-1  cursor-pointer rounded-xl'>

                            <div className="profile ">
                                <img src={session.user.image} width={28} className='   rounded-full' alt="" />
                            </div>

                            <div className="details ">
                                <p className='text-sm'>{session.user.name}</p>
                                <p className='text-sm hidden sm:block'>{session.user.email}</p>
                            </div>

                        </div>} */}


                </div>

            </div>
        </>
    )
}

export default Sidebar