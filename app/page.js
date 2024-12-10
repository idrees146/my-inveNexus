import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
     <div className="bg-green-500 md:bg-gray-600   text-white h-screen">



<div className="flex justify-center">


  <div className=" flex rounded-2xl m-6 bg-green-950 md:bg-gray-950 shadow-2xl shadow-green-950 items-center w-[90vw] md:w-[65vw] justify-center  p-4">

    <div className="form p-6 rounded-xl">


      <div className="flex items-center   md:hidden justify-center gap-4">
        <img src="/logo.PNG" width={37} alt="" />
        <h2 className="font-bold md:hidden text-2xl text-center">InveNexus</h2> </div>

      <p className="my-4">Login to your dashboard</p>

      <div className="flex items-center  my-4 justify-center dark:bg-gray-800">


        <button  class="px-4 rounded-xl bg-white justify-center hover:scale-105 trasition-all  py-2 border flex gap-2 border-slate-200 dark:border-slate-700  text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition w-full duration-150">

          <img loading="lazy" alt="google logo" className="w-6 h-6" src="/google.svg" />

          <span className="text-center ">Login with Google</span>
        </button>


      </div>

      <form >

      <p className="text-center py-4">or sign in / sign up with Email</p>
      <p>Email</p>
      <input name="email" type="email" placeholder="Please Enter Your Email" className="email text-xl rounded-xl my-4   text-black md:w-[300px] px-2 py-2" />
      <p>Password</p>
      <input type="password"  placeholder="Please Enter Your Password" className=" rounded-xl text-xl my-4 text-black   md:w-[300px] p-2" />

      <br />

      <div className="flex justify-center ">
      <Link href='/Dashboard'> <button className="rounded-xl bg-blue-700 hover:scale-105 trasition-all transition w-28 md:w-[20vw]  p-2 my-3 text-white">Login</button></Link> 
      
      </div>
      </form>

    


    </div>

    <div className=" cover hidden md:block rounded-lg"><img className="rounded-xl  mt-2" width={450} src="system.jpg" alt="" />

      <p className="text-center font-bold text-2xl pt-2 ">InveNexus</p>
      <p className="text-center  ">Your Companion in Inventory Management</p></div>


  </div>

</div>

</div>
    
    </>
  );
}
