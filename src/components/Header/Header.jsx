import React from 'react'

export default function Header(props) {
    return (
        <header className='flex justify-between items-center px-6 bg-gray-300 h-[70px]  m-[10px] rounded-lg audiowide-regular'>
            <div id="logo&name" className="text-[14px] flex items-center gap-x-10">
                <img className="h-[50px] hidden md:flex" src=".\src\assets\logo1.png" alt="" />
                <h3 className=' font-bold text-[18px]'>Modal Shop</h3>
            </div>
            <div id="links" className="flex gap-x-5 text-[14px] hidden md:flex">
                <a>Home</a>
                <a>products</a>
                <a>Blog</a>
                <a>About</a>
                <a>Contact</a>
            </div>
            <div id="cart" className="relative w-[30px] h-[50px] flex items-center ">
                <button onClick={props.openCart}>
                    <i className="fa-solid fa-cart-shopping text-2xl"></i>
                </button>
                <div className="w-[13px]  h-[13px] bg-white rounded-full absolute  top-[7px] right-[-1px] flex justify-center items-center ">
                    <p className="text-[9px] text-center font-bold ">{props.cartCount}</p>
                </div>
            </div>
        </header>
    )
}
