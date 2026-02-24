import React from 'react'

export default function ProductCard(props) {
    return (
        <div id="card" className=" w-[250px] sm:w-[90%] md:w-[45%] lg:w-[250px] flex flex-col justify-between gap-y-10 bg-white rounded-md p-5 poppins text-[12px] ">
            <img className="w-[200px] h-[200px] rounded bg-contain " src={props.image} alt="" />
            <h3 className="font-semibold text-[16px]" >{props.title}</h3>
            <h3 className="font-semibold text-[16px]">${props.price}</h3>
            <h4>{props.description}</h4>
            <h4 className="font-semibold">{props.category}</h4>
            <button className="w-full h-[50px] rounded bg-black text-white text-[14px] font-semibold" 
            onClick={() => props.addToCart(props.product)}>Add To Cart</button>
        </div>
    )
}
