import React from "react";

/**
 * ProductCard Component
 * ---------------------
 * Displays individual product details
 * Allows user to add product to cart
 */
export default function ProductCard(props) {
    return (
        <div
            id="card"
            className="w-full sm:w-[90%] md:w-[45%] lg:w-[250px] flex flex-col justify-between gap-y-4 sm:gap-y-6 bg-white rounded-md p-4 sm:p-5 poppins text-[12px] shadow-2xl">
            <img className="w-full h-[180px] sm:h-[200px] p-2 object-contain bg-neutral-300 rounded mx-auto"
                src={props.image}
                alt={props.title}
            />
            <h3 className="font-semibold text-[14px] sm:text-[16px] line-clamp-2">
                {props.title}
            </h3>
            <p className="text-[11px] sm:text-[12px] line-clamp-2">
                {props.description}
            </p>
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[14px] sm:text-[16px]">
                    ${props.price}
                </h3>
                <button className=" w-[65%] h-[30px] sm:h-[40px] rounded bg-black text-white text-[13px] sm:text-[14px] font-semibold hover:bg-gray-800 transition audiowide-regular cursor-pointer"
                    onClick={() => props.addToCart(props.product)}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
}