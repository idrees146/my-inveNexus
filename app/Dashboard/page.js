import React from 'react'
import Link from 'next/link'
import Sidebar from '../Components/Sidebar'
import { BarChart, Component } from '../Components/Barchart'

const page = () => {
    return (
        <>

            <Sidebar />

            <div className='w-full absolute text-gray-950  md:w-[79vw] md:h-[90vh]  top-12 left-0  md:left-[20vw]'>




                <h2 className='text-2xl font-bold mt-4 mx-4'>Dashboard</h2>
                <p className='mx-4'>Your own Tool for Inventory Management</p>

                <div className="main  text-white md:w-1/2 md:h-[38vh] flex flex-col md:flex-row my-4  md:my-1 justify-center gap-4 items-center  full">

                    <div className="box hover:shadow-2xl cursor-pointer border-2 bg-green-900 md:bg-gray-950 rounded-xl h-[200px] w-[80vw] md:h-[80%] md:w-[45%] ">
                        <div className='flex gap-4 p-2'>
                            <img src="/salee.svg" alt="" />
                            <p> Total Sales</p>

                        </div>
                        <h2 className='text-2xl font-bold text-center relative my-8'>PKR 120098</h2>

                        <hr className='w-3/4  mx-auto' />

                        <div className='flex cursor-pointer hover:underline gap-4 items-center'>
                            <p className='ml-4 mt-2'>View full Report</p>
                            <img src="/go.svg" alt="" />
                        </div>

                    </div>
                    <div className="box border-2 hover:shadow-2xl cursor-pointer bg-green-900 md:bg-gray-950 rounded-xl h-[200px] w-[80vw] md:h-[80%] md:w-[45%] ">

                        <div className='flex gap-4 p-2'>
                            <img src="/orde.svg" alt="" />
                            <p> Total Order</p>
                        </div>

                        <h2 className='text-2xl font-bold text-center relative my-8'>PKR 120098</h2>
                        <hr className='w-3/4 mx-auto' />

                        <div className='flex gap-4 cursor-pointer hover:underline items-center'>
                            <p className='ml-4 mt-2'>View full Report</p>
                            <img src="/go.svg" alt="" />
                        </div>
                    </div>
            
                </div>

                <div className="main  md:h-[40vh] gap-4 md:ml-4 flex flex-col md:flex-row items-center justify-center md:justify-between">

                    <div className="box2 md:h-[100%] w-[80vw] h-[240px] md:w-[48%] rounded-xl border-2 bg-white ">




                        <div class="relative overflow-scroll overflow-y-scroll h-[240px] md:h-[100%]  shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-scroll">
                                <thead class="text-xs    rounded uppercase bg-green-900 md:bg-gray-950 text-white ">
                                    <tr className='p-3 h-10 hover:underline cursor-pointer'>
                                        <th className='p-2' scope="col" class="px-6 py-3">
                                            Product name
                                        </th>

                                        <th scope="col" class="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Price
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple MacBook Pro 17&quot;
                                        </th>

                                        <td class="px-6 py-4">
                                            Laptop
                                        </td>
                                        <td class="px-6 py-4">
                                            $2999
                                        </td>

                                    </tr>
                                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Microsoft Surface Pro
                                        </th>

                                        <td class="px-6 py-4">
                                            Laptop PC
                                        </td>
                                        <td class="px-6 py-4">
                                            $1999
                                        </td>

                                    </tr>
                                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Magic Mouse 2
                                        </th>

                                        <td class="px-6 py-4">
                                            Accessories
                                        </td>
                                        <td class="px-6 py-4">
                                            $99
                                        </td>

                                    </tr>
                                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Google Pixel Phone
                                        </th>

                                        <td class="px-6 py-4">
                                            Phone
                                        </td>
                                        <td class="px-6 py-4">
                                            $799
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>




                    </div>
                    <div className="box2 md:absolute top-24 mb-10 md:mb-0 right-2  h-[200px] w-[80vw] md:w-[48%] rounded-xl">
                    <Component />
                    </div>
                </div>









            </div>


        </>
    )
}

export default page