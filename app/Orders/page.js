"use client"
import React from 'react'
import Sidebar from '../Components/Sidebar'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Page = () => {


    const [Show, setShow] = useState("hidden")
    const [Delete, setDelete] = useState("hidden")

    const toggleDelete = () => {
        if (Delete == 'hidden') {
            setDelete('')
        } else {
            setDelete('hidden')
        }
    }


    

    const toggleProduct = () => {

        if (Show == 'hidden') {
            setShow('')
        } else {
            setShow('hidden')
        }
    }


    const closeProduct = () => {
        setShow("hidden")
        setDelete("hidden")
    }



    //Logic for Creation of new Product in the Database

    const createProduct = () => {

        toast('Your Product is added to the Database!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });

        //Remaining logic will be added later
    }


    //Delete product from the Database
    const deleteProduct = () => {
      
        toast('Product Deleted Successfully from Database!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",


    })
    
    }
    return (
        <>
            <Sidebar />


            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />

            <div className=" w-full absolute     md:w-[79vw] md:h-[90vh]  top-12 left-0  md:left-[20vw] ">

                <button onClick={toggleProduct} className='text-white bg-green-950 md:bg-gray-950 p-1 px-2 rounded mt-7 ml-3 hover:bg-green-900 md:hover:bg-gray-900' >New Customer

                </button>







                <div id="crud-modal" tabindex="-1" aria-hidden="true" class={` ${Show} transition-all duration-300 overflow-y-auto overflow-x-hidden  backdrop-blur-[2px]  fixed    z-20  items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                    <div class=" relative p-4 mx-auto w-full max-w-md max-h-full">

                        <div class="relative bg-white   transition-transform transform duration-300 rounded-lg   shadow dark:bg-gray-700">

                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Create New Product
                                </h3>
                                <button onClick={toggleProduct}  type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div class="p-4 md:p-5">
                                <div class="grid gap-4 mb-4 grid-cols-2">
                                    <div class="col-span-2">
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                        <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                        <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option selected="">Select category</option>
                                            <option value="TV">TV/Monitors</option>
                                            <option value="PC">PC</option>
                                            <option value="GA">Gaming/Console</option>
                                            <option value="PH">Phones</option>
                                        </select>
                                    </div>
                                    <div class="col-span-2">
                                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                        <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>
                                    </div>
                                </div>
                                <button onClick={() => {
                                    createProduct();
                                    toggleProduct();
                                }} class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>




{/* Confirming the Delete Product */}

<div class={`${Delete} fixed z-10  inset-0 overflow-y-auto`}>
    <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div
            class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div class="sm:flex sm:items-start">
                <div
                    class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg class="h-6 w-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Delete Product
                    </h3>
                    <div class="mt-2">
                        <p class="text-sm leading-5 text-gray-500">
                           Are you sure you want to delete this product from the Database?
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button onClick={()=>{
                        closeProduct();
                        deleteProduct();

                    } } type="button"
                        class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                       Delete
                    </button>
                </span>
                <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button  onClick={
                        closeProduct} type="button"
                        class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                        Cancel
                    </button>
                </span>
            </div>
        </div>
    </div>
</div>




                <div class="flex  flex-col ml-2 mt-3">
                    <div class="overflow-x-auto shadow-md  sm:rounded-lg">
                        <div class="inline-block min-w-full  align-middle">
                            <div class="overflow-hidden ">
                                <table class="min-w-full divide-y divide-gray-200    ">
                                    <thead class="bg-green-900 md:bg-gray-900   text-white ">
                                        <tr>
                                            <th scope="col" class="p-4">

                                            </th>
                                            <th scope="col" class="py-3 md:px-6 px-3 text-xs font-medium tracking-wider text-left  uppercase dark:text-gray-400">
                                                Product Name
                                            </th>
                                            <th scope="col" class="py-3 md:px-6 px-3 text-xs font-medium tracking-wider text-left  uppercase dark:text-gray-400">
                                                Category
                                            </th>
                                            <th scope="col" class="py-3 md:px-6 px-3 text-xs font-medium tracking-wider text-left  uppercase dark:text-gray-400">
                                                Price
                                            </th>
                                            <th scope="col" class="p-4">
                                                <span class="sr-only">Delete</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td class="p-4 w-4">

                                            </td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Imac 27</td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Desktop PC</td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$1999</td>
                                            <td onClick={toggleDelete}  class="py-4 md:px-6 px-3 text-sm font-medium text-right whitespace-nowrap">
                                                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td class="p-4 w-4">

                                            </td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple MacBook Pro 17</td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Laptop</td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$2999</td>
                                            <td onClick={toggleDelete}  class="py-4 md:px-6 px-3 text-sm font-medium text-right whitespace-nowrap">
                                                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td class="p-4 w-4">

                                            </td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">iPhone 13 Pro</td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Phone</td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$999</td>
                                            <td onClick={toggleDelete}  class="py-4 md:px-6 px-3 text-sm font-medium text-right whitespace-nowrap">
                                                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td class="p-4 w-4">

                                            </td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Magic Mouse 2</td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Accessories</td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$99</td>
                                            <td onClick={toggleDelete}  class="py-4 md:px-6 px-3 text-sm font-medium text-right whitespace-nowrap">
                                                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td class="p-4 w-4">

                                            </td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Watch Series 7</td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Accessories</td>
                                            <td class="py-4 md:px-6 px-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$599</td>
                                            <td onClick={toggleDelete} class="py-4 md:px-6 px-3 text-sm font-medium text-right whitespace-nowrap">
                                                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}

export default Page