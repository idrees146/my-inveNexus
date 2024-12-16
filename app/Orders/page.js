"use client"
import React from 'react'
import Sidebar from '../Components/Sidebar'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';









export default function Page() {

    const [show, setshow] = useState("hidden")

    const toggleOrder = () => {
        if (show == "hidden") {
            setshow("block")
        } else {
            setshow("hidden")
        }
    }

    const close = () => {
        if (show == "block") {
            setshow("hidden")
        }
    }



    const [product, setProduct] = useState("")
    const [price, setPrice] = useState("")
    const [date, setDate] = useState(null)


    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [refreshOrders, setRefreshOrders] = useState(false);  


    useEffect(() => {
        async function fetchOrders() {
            setLoading(true);
            try {
                const response = await fetch("/api/getOrders");
                const data = await response.json();
                if (data.success) {
                    setOrders(data.data);
                } else {
                    console.log("Error while fetching orders");
                }
            } catch (error) {
                console.log("Could not fetch the orders");
            } finally {
                setLoading(false);
            }
        }

        fetchOrders();
    }, [refreshOrders]); // Re-fetch when `refreshOrders` state changes

    // Handle Order Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form input
        if (!product || !price || !date) {
            setMessage("Please fill in all fields.");
            return;
        }

        setMessage(""); // Clear previous message
        try {
            const res = await fetch("/api/addOrder", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ product, price, date }),
            });

            const data = await res.json();
            if (data.success) {
                setProduct("");
                setPrice("");
                setDate(null);
                setMessage("Order added successfully!");

                // Trigger re-fetch of orders by updating the `refreshOrders` state
                setRefreshOrders(prev => !prev);
               // Close the modal after successful order submission
            } else {
                setMessage(data.error || "Something went wrong");
            }
        } catch (err) {
            console.log("Error occurred while adding the order");
            setMessage("Error occurred while adding the order.");
        }
    };















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

            <div className="   absolute     md:w-[79vw] md:h-[90vh]  top-12  left-[10vw]   md:left-[20vw] ">
                {/* onClick={toggleProduct} */}
                <button onClick={toggleOrder} className='text-white bg-green-950 md:bg-gray-950 p-1 px-2 rounded mt-7 float-right mr-3 hover:bg-green-900 md:hover:bg-gray-900' >New Orders

                </button>







                <div
                    class={` ${show} fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]`}>
                    <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
                        <div class="flex items-center">
                            <h3 class="text-blue-600 text-xl font-bold flex-1">New transaction</h3>
                            <svg onClick={close} xmlns="http://www.w3.org/2000/svg" class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                                viewBox="0 0 320.591 320.591">
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"></path>
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"></path>
                            </svg>
                        </div>

                        <form onSubmit={handleSubmit} class="space-y-4 mt-8">
                            <div>
                                <labe class="text-gray-800 text-sm mb-2 block">Name of the product</labe>
                                <input value={product} onChange={(e) => setProduct(e.target.value)} type="text" placeholder="Enter product name"
                                    class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg" />
                            </div>
                            <div>
                                <labe class="text-gray-800 text-sm mb-2 block">Selling price</labe>
                                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Enter price"
                                    class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg" />
                            </div>

                            <div>
                                <labe class="text-gray-800 text-sm mb-2 block">Purchase Date</labe>
                                <input value={date} onChange={(e) => setDate(e.target.value)} type="date" placeholder="Choose Date"
                                    class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg" />
                            </div>



                            <div class="flex justify-end gap-4 !mt-8">
                                <button onClick={close} type="button"
                                    class="px-6 py-3 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300">Cancel</button>
                                <button type="submit"
                                    class="px-6 py-3 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>




                <div class=" ">

                    <div class="mx-auto mt-8 max-w-screen-lg px-2">
                        <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
                            <p class="flex-1 text-base font-bold text-green-900 md:text-gray-900 ">Orders History</p>

                            <div class="mt-4 sm:mt-0">
                                <div class="flex items-center justify-start sm:justify-end">
                             </div>
                            </div>
                        </div>

                        <div class="mt-6 overflow-hidden flex justify-center w-[80vw] md:w-full rounded-xl border shadow">
                            <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                                <thead class="hidden border-b lg:table-header-group">
                                    <tr class="">
                                        <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Product</td>

                                        <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</td>

                                        <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Amount</td>

                                    </tr>
                                </thead>

                                <tbody class="lg:border-gray-300">


                                    {orders.map((orders) => (
                                        <tr key={orders._id} class="">


                                            <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                {orders.product}
                                                <div class="mt-1 lg:hidden">
                                                    <p class="font-normal text-gray-500"> {new Date(orders.date).toISOString().split("T")[0]}</p>
                                                </div>
                                            </td>

                                            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell"> {new Date(orders.date).toISOString().split("T")[0]}</td>

                                            <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                               RS {orders.price}

                                            </td>

                                        </tr>))}




                                </tbody>
                            </table>

                         
                        </div>
                        {loading &&
                                <div className='flex justify-center w-[100%] my-20'>

                                    <img className='' width={70} src="/newanim.gif" alt="" />


                                </div>}
                    </div>

                </div>









            </div>
        </>
    )
}

