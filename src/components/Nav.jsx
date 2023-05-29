import React from 'react'
import LOGO from '../Assets/logo.png'

const Nav = () => {
  return (
    <div className=' border-b-4 border-black cursor-pointer w-[199vh] h-[80px] flex justify-between items-center px-4 bg-gray-100 text-gray-300 m-5 rounded-full'>
      <div>
        <img src={LOGO} style={{ width: "100px" }} />
      </div>

      {/* Navbar */}
      <div className=' text-black font-bold text-2xl'>
        <ul className='flex'>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>

  )
}

export default Nav