import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import Header from "./components/Header/Header";
import CartModal from "./components/CartModal/CartModal";

/**
 * App Component
 * ----------------
 * - Fetches products from Fake Store API
 * - Manages cart state
 * - Handles add/remove cart logic
 * - Controls cart modal visibility
 */


function App() {

  const [product, setProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  /**
  * Fetch product data on initial render
  */
  useEffect(() => {
    fakeStore();
  }, [])

  // Fetch products from Fake Store API
  async function fakeStore() {
    const response = await fetch("https://fakestoreapi.com/products");
    const responseData = await response.json();
    setProduct(responseData);
  }

  /**
  * Add product to cart
  * Prevents duplicate products
  */
  function addToCart(product) {
    const alreadyInCart = cartItems.some(
      item => item.id === product.id
    );

    if (alreadyInCart) {
      alert("Item already added to the cart");
      return;
    }

    setCartItems(prev => [...prev, product]);
  }


  /**
   * Remove product from cart using product id
   */
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
          {/* Product List */}
          <div id="products" className="bg-orange-50 shadow-2xl min-h-screen gap-6 m-2 sm:m-3 rounded-md p-6 sm:p-6 md:10 flex justify-center md:justify-evenly gap-y-10  flex-wrap">
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

        {/* Cart Modal */}
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