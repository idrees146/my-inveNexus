import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
    return (




        <>

            <div className='flex '>
                <div className="sidebar relative -left-[400px] md:left-0  md:w-[25vw] cursor-pointer bg-green-950 md:bg-gray-950 md:flex flex-col    text-white h-[100vh]">

                    <div className="logo ml-4 flex items-center my-7 gap-4">
                        <img width={50} src="/logo.png" alt="" />
                        <h1 className='text-2xl font-bold'>InveNexus</h1>

                    </div>

                    <p className='ml-4 my-10'>Menu</p>

                    <div className="dashboard flex items-center ml-4 gap-4 px-4 w-52 cursor-pointer mt-3 hover:bg-gray-900 rounded p-1">
                        <img width={30} src="/dash.svg" alt="" />
                        <p>Dashboard</p>
                    </div>
                    <div className="dashboard flex items-center ml-4 gap-4 px-4 w-52 cursor-pointer my-2 hover:bg-gray-900 rounded p-1">
                        <img width={30} src="/products.svg" alt="" />
                        <p>Products</p>
                    </div>
                    <div className="dashboard flex items-center ml-4 gap-4 px-4 w-52 cursor-pointer my-2 hover:bg-gray-900 rounded p-1">
                        <img width={30} src="/orders.svg" alt="" />
                        <p>our orders</p>
                    </div>
                    <div className="dashboard flex items-center ml-4 gap-4 px-4 w-52 cursor-pointer my-2 hover:bg-gray-900 rounded p-1">
                        <img width={30} src="/forecast.svg" alt="" />
                        <p>AI Forecasting</p>
                    </div>

                    <div className="dashboard flex items-center ml-4 gap-4 px-4 w-52 cursor-pointer my-2 hover:bg-gray-900 rounded p-1">
                        <img width={30} src="/orders.svg" alt="" />
                        <p>About Developer</p>
                    </div>
                    <div className="dashboard flex items-center ml-4 gap-4 px-4 w-52 cursor-pointer my-2 hover:bg-gray-900 rounded p-1">
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

                <div className="nav w-full bg-green-900 md:bg-gray-950 flex absolute md:relative  justify-between text-white h-14 items-center">
                    <div className=" sm:flex gap-4 hidden  ">
                        <img src="/search.svg" alt="" />
                        <input type="text" className='rounded p-1 text-black px-2' placeholder='Search product' /></div>
                    <ul className='flex gap-4  hover:bg-gray-950 rounded cursor-pointer'>

                        <div className="block sm:hidden mx-4">
                            <img src="/ham.svg" width={27} alt="" />
                        </div>


                    </ul>

                    <div className='flex items-center  justify-center  mr-4 gap-2 my-14 py-2 px-1  cursor-pointer rounded-xl'>

                        <div className="profile ">
                            <img src="/me.jpeg" width={28} className='   rounded-full' alt="" />
                        </div>

                        <div className="details ">
                            <p className='text-sm'>Muhammad Idrees</p>
                            <p className='text-sm hidden sm:block'>muhammadidr1122@gmail.com</p>
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}

export default Sidebar