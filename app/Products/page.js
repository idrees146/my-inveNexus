"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const dynamic = 'force-dynamic';

const Page = () => {


   


    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [message, setMessage] = useState("");

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [refresh, setRefresh] = useState(false);

    const [show, setShow] = useState("hidden");
    const [deleteModal, setDeleteModal] = useState("hidden");

    // Fetch products


    useEffect(() => {

        async function fetchProducts() {
            setLoading(true);  // Show loading spinner during fetch

            const res = await fetch("/api/getProducts");
            const data = await res.json();
            setProducts(data.data);
            setLoading(false);

        };

        fetchProducts()

    }, [refresh]);



    if (error) return <p style={{ color: "red" }}>{error}</p>;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await fetch("/api/addProduct", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ product, price, category, quantity }),
            });

            const data = await res.json();
            if (data.success) {
                setMessage("Product has been added successfully!");
                setProduct("");
                setPrice("");
                setCategory("");
                setQuantity(0);

                // Trigger refresh to re-fetch products
                setRefresh(prev => !prev);  // Toggle the refresh state to re-fetch
            } else {
                setMessage(data.error || "Something went wrong");
            }
        } catch (err) {
            setMessage("Error adding product data to the database");
        }
    };

    const toggleProduct = () => {
        setShow(show === "hidden" ? "" : "hidden");
    };

    const toggleDelete = () => {
        setDeleteModal(deleteModal === "hidden" ? "" : "hidden");
    };

    const closeProduct = () => {
        setShow("hidden");
        setDeleteModal("hidden");
    };

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
    };

    const handleDeleteProduct = async (id) => {
        try {
            // Make the DELETE request to the backend
            const response = await fetch(`/api/deleteProduct/${id}`, {
                method: 'DELETE', // HTTP DELETE method
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {
                alert('Product deleted successfully.');
                // Optionally, update the state/UI to remove the deleted product
            } else {
                alert(data.message || 'An error occurred while deleting the product.');
            }
        } catch (error) {
            console.error('Error in delete operation:', error);
            alert('An error occurred while deleting the product.');
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

            <div className="w-full overflow-scroll absolute md:w-[79vw]  md:h-[90vh] top-12 left-0 md:left-[20vw]">



                <button onClick={toggleProduct} className='text-white bg-green-950 md:bg-gray-950 p-1 px-2 rounded mt-7 ml-3 hover:bg-green-900 md:hover:bg-gray-900'>
                    New Product
                </button>

                {/* Table for displaying products */}
                <div className="   relative shadow-md sm:rounded-lg mt-5">
                    <table className="w-full  text-sm text-left text-black dark:text-gray-400">


                        <thead className="text-xs text-white uppercase bg-green-950 md:bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">Product</th>
                                <th scope="col" className="py-3 px-6">Price</th>
                                <th scope="col" className="py-3 px-6">Category</th>
                                <th scope="col" className="py-3 px-6">Quantity</th>
                                <th scope="col" className="py-3 px-6">Actions</th>
                            </tr>


                        </thead>
                        <tbody>

                            {products.map((product) => (
                                <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="py-4 px-6">{product.product}</td>
                                    <td className="py-4 px-6">RS {product.price}</td>
                                    <td className="py-4 px-6">{product.category}</td>
                                    <td className="py-4 px-6">{product.quantity}</td>
                                    <td className="py-4 px-6">
                                        <button
                                            onClick={() => handleDeleteProduct(product._id)}
                                            className="text-white bg-red-600 p-2 rounded hover:bg-red-800"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                    {loading &&
                        <div className='flex justify-center w-[100%] my-44'>

                            <img className='' width={70} src="/newanim.gif" alt="" />


                        </div>}
                </div>

                {/* Product creation form */}
                <form onSubmit={handleSubmit}>
                    <div id="crud-modal" tabIndex="-1" aria-hidden="true" className={`${show} transition-all duration-300 overflow-y-auto overflow-x-hidden backdrop-blur-[2px] fixed z-20 items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                        <div className="relative p-4 mx-auto w-full max-w-md max-h-full">
                            <div className="relative bg-white transition-transform transform duration-300 rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Create New Product
                                    </h3>
                                    <button onClick={toggleProduct} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div className="p-4 md:p-5">
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                value={product}
                                                onChange={(e) => setProduct(e.target.value)}
                                                id="name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                            <input
                                                type="number"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                name="price"
                                                id="price"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="$2999"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                            <select
                                                id="category"
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            >
                                                <option value="">Select category</option>
                                                <option value="TV">TV/Monitors</option>
                                                <option value="PC">PC</option>
                                                <option value="GAMING">Gaming/Console</option>
                                                <option value="PHONES">Phones</option>
                                            </select>
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                                            <input
                                                type='number'
                                                id="quantity"
                                                value={quantity}
                                                onChange={(e) => setQuantity(e.target.value)}

                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Enter Quantity"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        onClick={createProduct}
                                        className="w-full sm:w-auto bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Add Product
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Page;
