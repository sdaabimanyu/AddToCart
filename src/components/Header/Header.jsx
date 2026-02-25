import React from 'react'

/**
 * Header Component
 * ----------------
 * Displays app title and cart icon
 * Shows current cart item count
 */

export default function Header(props) {
    return (
        <header className='flex justify-between items-center px-4 sm:px-10 sm:p-10 bg-neutral-300 h-[70px]  m-[10px] rounded-lg audiowide-regular'>
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
            <div id="cart" className="relative w-[30px] h-[50px] flex items-center mr-2 p-3 cursor-pointer hover:underline">
                <button onClick={props.openCart}>
                    <i className="fa-solid fa-cart-shopping text-2xl cursor-pointer hover:underline"></i>
                </button>
                <div className="w-[14px]  h-[14px] bg-white rounded-full absolute  top-[5px] right-[-15px] flex justify-center items-center ">
                    <p className="text-[9px] text-center font-bold ">{props.cartCount}</p>
                </div>
            </div>
        </header>
    )
}
