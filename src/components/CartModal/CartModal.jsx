import React from 'react'

export default function CartModal(props) {
    const subTotal = props.cartItems.reduce(
        (total, item) => total + item.price,
        0
    );

    return (
        <div className="fixed inset-0 min-h-screen bg-opacity-50 flex justify-center items-center audiowide-regular ">
            <div
                className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[900px] h-[90%] sm:h-auto rounded-2xl bg-orange-50 p-4 sm:p-0 md:p-10 relative overflow-y-auto">
                <button onClick={props.closeCart} className='absolute top-2 right-2'><i className="fa-regular fa-circle-xmark text-[25px] font-bold"></i></button>
                <h1 className="text-[30px] font-semibold mt-[-20px] mb-[10px] ">Cart</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <div id="leftSdCart" className="w-[full] md:w-[65%] h-[350px] bg-black p-4 rounded-xl text-white border flex flex-col  gap-y-3 overflow-y-auto">
                        {props.cartItemsLength === 0 ? (
                            <p className="text-center text-gray-400">Cart Is Empty</p>
                        ) : (
                            props.cartItems.map((item, index) => (
                                <div key={item.id} className="flex w-full gap-x-5 relative p-3 rounded-lg border-3  ">
                                    <img className="w-[30%] bg-white rounded-lg h-[180px]" src={item.image} alt="" />
                                    <div className="flex flex-col gap-y-6 p-2 w-[70%]">
                                        <h3 className="leading-5">{item.title} </h3>
                                        <h3 className="text-[12px] leading-5 line-clamp-2">{item.description}</h3>
                                        <h3 className="text-xl font-bold">${item.price} </h3>
                                        <i
                                            className="fa-solid fa-trash absolute bottom-[15px] right-[10px]"
                                            onClick={() => props.removeFromCart(item.id)}
                                        ></i>
                                    </div>
                                </div>
                            ))
                        )}


                    </div>
                    <div id="rightSdCart" className=" w-[full] md:w-[35%] h-[350px] bg-black rounded-xl p-4 text-white">
                        <h1 className="mb-4 text-white font-semibold">Order Summary</h1>
                        <div className="flex flex-col gap-y-4">
                            <div id="subtotal" className="flex justify-between">
                                <p>Sub Total</p>
                                <p>${subTotal.toFixed(2)}</p>
                            </div>
                            <div id="discount" className="flex justify-between">
                                <p>Discount</p>
                                <p>$0.00</p>
                            </div>
                            <div id="tax" className="flex justify-between">
                                <p>Tax</p>
                                <p>$0.00</p>
                            </div>
                            <div id="Shipping" className="flex justify-between">
                                <p>Shipping</p>
                                <p>Free</p>
                            </div>
                            <div id="Total" className="flex justify-between">
                                <p>Total</p>
                                <p>${subTotal.toFixed(2)}</p>
                            </div>

                            <div className="flex justify-center items-center">
                                <button className="w-[200px] h-[50px] rounded-lg text-black font-semibold bg-white items-center ">Proceed To Checkout</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
