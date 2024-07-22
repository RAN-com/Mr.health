import React from 'react'
import {useState} from 'react'
import  logo from '../../assets/mr 1.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="bg-green-600 p-10">
    <div className="container mx-auto  flex justify-between items-center">
      <div className="text-white font-bold text-lg"><img className="size-20" src={logo}/></div>
      <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Contact</a>
          <button className="bg-white text-green-400 font-bold py-2 px-4 rounded hover:bg-gray-200">
            Login
          </button>
        </div>
    
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </div>
    {isOpen && (
      <div className="md:hidden">
        <a href="#" className="block text-white py-2">Home</a>
        <a href="#" className="block text-white py-2">About</a>
        <a href="#" className="block text-white py-2">Services</a>
        <a href="#" className="block text-white py-2">Contact</a>
        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-200 mt-2 w-full">
            Login
          </button>
      </div>
    )}
  </nav>
  )
}

export default Navbar