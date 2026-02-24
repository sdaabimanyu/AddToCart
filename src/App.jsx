import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import Header from "./components/Header/Header";
import CartModal from "./components/CartModal/CartModal";


function App() {

  const [product, setProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    fakeStore();
  }, [])

  async function fakeStore() {
    // Fetch products from Fake Store API
    const response = await fetch("https://fakestoreapi.com/products");
    const responseData = await response.json();
    setProduct(responseData);
  }

  function addToCart(product) {
    const alreadyInCart = cartItems.some(
      item => item.id === product.id
    );

    if (alreadyInCart) {
      alert("Item alredy added to the cart");
      return;
    }

    setCartItems(prev => [...prev, product]);
  }


  function removeFromCart(id) {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }
  return (
    <>
      <section className='bg-white min-h-screen audiowide-regular'>
        <div className={`${showModal ? "blur-sm" : ""} transition-all duration-100`}>
          <Header
            cartCount={cartItems.length}
            openCart={() => setShowModal(true)}
          />

          <div id="products" className="bg-gray-300 min-h-screen m-2 sm:m-3 rounded-md p-6 sm flex justify-evenly gap-y-10  flex-wrap">
            {product.map((el) =>
              <ProductCard
                key={el.id}
                image={el.image}
                title={el.title}
                price={el.price}
                description={el.description}
                category={el.category}
                id={el.id}
                addToCart={addToCart}
                product={el} />
            )}

          </div>
        </div>

        {showModal && 
        <CartModal
        closeCart={() => setShowModal(false)}
        cartItemsLength={cartItems.length}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        />}
      </section>

    </>
  )
}

export default App