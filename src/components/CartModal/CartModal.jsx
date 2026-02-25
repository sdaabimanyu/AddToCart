import React from 'react'
/**
 * CartModal Component
 * ------------------
 * Displays all cart items
 * Allows removal of items
 * Shows order summary
 */
export default function CartModal(props) {
    const subTotal = props.cartItems.reduce(
        (total, item) => total + item.price,
        0
    );

    return (
        <div className="fixed inset-0 min-h-screen bg-opacity-50 flex justify-center items-center audiowide-regular ">
            <div
                className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[900px] h-[90%] sm:h-auto rounded-2xl bg-orange-50 shadow-2xl p-4 sm:p-0 md:p-10 relative overflow-y-auto">
                <button onClick={props.closeCart} className='absolute top-2 right-2 cursor-pointer hover:underline'><i className="fa-regular fa-circle-xmark text-[25px] font-bold "></i></button>
                <h1 className="text-[30px] font-semibold mt-[-20px] mb-[10px] ">Cart</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <div id="leftSdCart" className="w-full md:w-[65%] h-[350px] bg-white shadow-2xl p-4 sm:p-0 md:p-3 rounded-xl  flex flex-col  gap-y-3 overflow-y-auto">
                        {props.cartItemsLength === 0 ? (
                            <div className='w-full h-full flex items-center justify-center'>
                                <p className="text-xl">Cart Is Empty</p>
                            </div>
                        ) : (
                            props.cartItems.map((item, index) => (
                                <div key={item.id} className="flex w-full gap-x-5 relative p-3 rounded-lg poppins shadow-xl  ">
                                    <img className="w-[30%] bg-white rounded-lg h-[180px]" src={item.image} alt="" />
                                    <div className="flex flex-col gap-y-6 p-2 w-[70%]">
                                        <h4 className="leading-5 font-semibold">{item.title} </h4>
                                        <p className="text-[10px] font-normal leading-5 line-clamp-2">{item.description}</p>
                                        <div className="flex justify-between items-center w-full mt-2">
                                            <h3 className="text-xl font-bold">
                                                ${item.price}
                                            </h3>

                                            <button
                                                onClick={() => props.removeFromCart(item.id)}
                                                className="flex items-center gap-2 text-white text-sm font-medium bg-black h-[30px] p-2  rounded cursor-pointer">
                                                <i className="fa-solid fa-trash"></i>
                                                Remove From Cart
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            ))
                        )}


                    </div>
                    <div id="rightSdCart" className=" w-[full] md:w-[35%] h-[350px] bg-white shadow-2xl rounded-xl p-4 ">
                        <h1 className="mb-4 font-semibold">Order Summary</h1>
                        <div className="h-full flex flex-col   gap-y-4">
                            <div id="subtotal" className="flex justify-between h-[7%]">
                                <p>Sub Total</p>
                                <p>${subTotal.toFixed(2)}</p>
                            </div>
                            <div id="Total" className="flex justify-between h-[45%] mb-5">
                                <p>Total</p>
                                <p>${subTotal.toFixed(2)}</p>
                            </div>

                            <div className="flex justify-center items-center">
                                <button className="w-[200px] h-[50px] rounded-lg text-white text-sm bg-black items-center cursor-pointer">Proceed To Checkout</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
