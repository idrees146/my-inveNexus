import React from 'react'
import Sidebar from '../Components/Sidebar'

const page = () => {
    return (
        <>
            <Sidebar />

            <div className="about w-full absolute text-gray-950  md:w-[79vw] md:h-[90vh]   top-14 left-2  md:left-[20vw]">


                <h1 className='text-2xl font-bold text-green-950 my-6 md:ml-4 md:text-left'>A little about My Story</h1>

                <p className='md:w-2/3 md:ml-4 my-4 px-2'>This is <strong> Muhammad Idrees</strong>, a passionate Web Developer, always busy in creating some fun and interesting projects. My story begins the day when I started studying Software Engineering from Comsats Universty Islamabad. </p>

                <div className="me hidden md:block">
                    <img src="/me.jpeg" className='absolute  bottom-4  md:top-4 md:left-[75%] rounded-xl md:mt-0  mt-[200%] ' width={200} alt="" />
                    

                    <div className="contact flex absolute  md:top-72  mb-2 md:left-[81%] justify-center  gap-4">
                      <a target='_blank' href="https://wa.me/923179619344?text=I%20want%20to%20know%20something%20about..">  <img src="/whatsapp.png" className='hover:scale-105 transiton cursor-pointer' width={30} alt="" /></a>

                     <a target='_blank' href="mailto: muhammadidr1122@gmail.com">  <img src="/gmail.png" className='hover:scale-105 transiton cursor-pointer' width={30} alt="" /></a> 
                    </div>
                </div>

                <p className='md:w-2/3 md:ml-4 my-4 px-2' >That Day was a deciding one to pave a way for my aspirations that where I want to see myself in the next 10 years. Web Development is something that used to make me really immersed in my creations, building attractive layouts and adding functionalities was more than a fun for me.</p>

                <h1 className='text-2xl font-bold text-green-950 my-6 md:ml-4 md:text-left'>About InveNexus</h1>
                <p className='md:w-[74vw] md:ml-4 my-4 px-2'>InveNexus was basically our Semester project for our course, Software Engineering Concepts, but I wanted to take it to a next level and make it more than a course project. The project is build entirely in <strong>Next Js</strong> Framework, along with additional tools such as <strong>Tailwind CSS</strong>, <strong>Chart JS</strong> for attractive charts, <strong>Next Auth</strong> for user Authentication and <strong>MongoDB </strong>as a Database.</p>

                <p className='md:w-[74vw] md:ml-4 my-4 px-2'>The use of AI forecasting is another amazing feature that informs the user about stocks and make inventory management much convenient in real time</p>
                <p className='md:w-[74vw] md:ml-4 my-4 px-2 '> If You are a store owner, a manager in a mart, or someone working in a Software house, you can get in touch through the given email or whatsapp and I can give this project to you who  to Benefit from it. </p>


                <div className="me md:hidden flex flex-col items-center  gap-4 ">
                    <img src="/me.jpeg" className='  bottom-4   rounded-xl  ' width={200} alt="" />

                    <p className='text-center font-bold text-xl text-green-950'>Muhammad Idrees Khan</p>

                    <div className="contact flex     mb-10 justify-center  gap-7">
                      <a target='_blank' href="https://wa.me/923179619344?text=I%20want%20to%20know%20something%20about..">  <img src="/whatsapp.png" className='hover:scale-105 transiton cursor-pointer' width={40} alt="" /></a>

                     <a target='_blank' href="mailto: muhammadidr1122@gmail.com">  <img src="/gmail.png" className='hover:scale-105 transiton cursor-pointer' width={40} alt="" /></a> 
                    </div>
                </div>



            </div>

        </>
    )
}

export default page