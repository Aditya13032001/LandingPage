import React from 'react'
import IMG from '../Assets/img.jpg'
const Main = () => {
    return (
        <div className='  h-[60vh] w-[188vh] mt-8 ml-32 rounded-xl ' >
            <div className=" grid grid-cols-2 gap-3">
                {/* Grid 1 */}
                <div className='justify-center items-center'>
                    <img src={IMG} style={{ width: "70vh" }} className='rounded-xl shadow-xl shadow-black hover:scale-90 duration-300' />
                    <div>
                        <input type="text" placeholder='Name' className='bg-gray-300 m-3 block w-[60vh] p-2.5 rounded-lg placeholder:text-black font-extrabold' />
                    </div>
                    <div>
                        <input type="tel" placeholder='Phone' className=' bg-gray-300 m-3 block w-[60vh] p-2.5 rounded-lg placeholder:text-black font-extrabold' />
                    </div>
                    <div>
                        <button type="button" className='text-gray-300 m-3 border-white border-2 block w-[30vh] h-[7vh] p-2.5 rounded-lg  text-3xl font-bold  hover:bg-black hover:border-white hover:duration-300'>Click Me</button>
                    </div>


                </div>
                {/* Grid 2 */}
                <div className='mt-12 h-[60vh] w-full text-white justify-center items-center pl-24 shadow-xl shadow-black hover:scale-90 duration-300'>
                    <p className=' text-8xl font-black'>
                        It's your <br /> Creativity
                    </p><br />
                    <p className='text-5xl  border-b-4 inline border-black' >
                        We Make It Happen
                    </p><br />
                    <br />
                    <p>
                        At <span className='font-semibold border-red-800 border-b-2 inline'> V-Design</span> we make astonishing Graphics Design.
                    </p>

                </div>


            </div>
        </div>
    )
}

export default Main