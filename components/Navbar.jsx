"use client"
import React, { useState } from "react";
import Link from 'next/link'
import profile from "@/public/profile.png"
import {usePathname} from 'next/navigation'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname()
  const [login,setLogin] = useState(true)
  const [profiledropdownOpen, setProfiledropdownOpen] = useState(false)

  return (
    <nav className="bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        {/* <!-- Logo --> */}
        <div className="flex items-center" >

                {/* <!-- Mobile Menu Button --> */}

      <div className="mr-2 flex md:hidden ">
        <button type="button" className="bg-blue-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
        onClick={()=>setOpen(!open)}>
   
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          {/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      

     <Link href="/" className="text-white text-lg font-semibold">Property Rental</Link>
        </div>
        {/* <!-- Navigation Links --> */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4"> 
            <Link href="/" className={`${pathname == "/" && "bg-white text-black"} text-gray-300  px-3 py-2 rounded-md text-sm font-medium`} >Home</Link>
            <Link href="/properties" className={`${pathname == "/properties" && "bg-white text-black"} text-gray-300 px-3 py-2 rounded-md text-sm font-medium`}>properties</Link>
            <Link href="/properties/add" className={` ${pathname == "/properties/add" && "bg-white text-black"} text-gray-300 px-3 py-2 rounded-md text-sm font-medium`}>add property</Link>
            <Link href="/properties/1" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"></Link>
          </div>
        </div>
      </div>

      
      <div class="flex space-x-2 ">

        {!login ? <button className="bg-slate-100 text-black px-2 py-1 rounded">sign or register</button>: <>
        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-w py-hite" src={profile.src} alt=""/>
  <img class=" relative inline-block h-8 w-8 rounded-full ring-2 ring-white" src={profile.src} alt="" onClick={()=>setProfiledropdownOpen(!profiledropdownOpen)}/>


  {/* <!-- Profile dropdown --> */}
   {profiledropdownOpen &&    <div
                id="user-menu"
                class=" absolute right-0 z-10 mt-9 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <Link
                  href="/profile.html"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                  >Your Profile</Link >
                <Link
                  href="saved-properties.html"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                  >Saved Properties</Link >
                <Link
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                  >Sign Out</Link>
  </div>} 
 


        </>}

</div>
    </div>
  </div>
  {/* <!-- Mobile Menu, show/hide based on menu state. --> */}

  {open &&   <div className="md:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>  
    <Link href="/properties" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Properties</Link>
      {login ?    <>   
      <Link href="/properties/add" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">add properties</Link></>
: 
<>

<Link href="/properties/1" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sigin or Reg</Link> 
</>
}
    </div>
  </div>}







</nav>
)


};

export default Navbar;

