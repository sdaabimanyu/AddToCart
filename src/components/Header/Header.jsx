import React from 'react'

/**
 * Header Component
 * ----------------
 * Displays app title and cart icon
 * Shows current cart item count
 */

export default function Header(props) {
    return (
        <header className='flex justify-between items-center px-4 sm:px-10 sm:p-10 bg-orange-50 shadow-2xl h-[70px]  m-[10px] rounded-lg audiowide-regular'>
            <div id="logo&name" className="text-[14px] flex items-center gap-x-10">
                <img className="h-[50px] hidden md:block" src=".\src\assets\logo1.png" alt="" />
                <h3 className=' font-bold text-[18px]'>Modal Shop</h3>
            </div>
            <div id="links" className="flex gap-x-5 text-[14px] hidden md:flex">
                <a className="cursor-pointer hover:underline">Home</a>
                <a className="cursor-pointer hover:underline">Products</a>
                <a className="cursor-pointer hover:underline">Blog</a>
                <a className="cursor-pointer hover:underline">About</a>
                <a className="cursor-pointer hover:underline">Contact</a>
            </div>
            <div id="cart" onClick={props.openCart} className="w-[100px] h-[50px] shadow-xl bg-white rounded p-1 cursor-pointer relative">
                <button className='w-full h-full flex justify-center items-center gap-x-2 cursor-pointer '>
                    <h1 className='text-[20px]'>Cart</h1>
                    <i class="fa-solid fa-cart-shopping text-2xl cursor-pointer"></i>
                </button>
                <div className="w-[23px]  h-[23px] bg-black text-white rounded-full absolute  top-[-10px] right-[-10px] flex justify-center items-center ">
                    <p className="text-[11px] text-center font-[30px] poppins">{props.cartCount}</p>
                </div>
            </div>
        </header>
    )
}
