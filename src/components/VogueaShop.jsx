import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Stylish Jacket",
    price: 2499,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Modern Shoes",
    price: 1999,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Classic Watch",
    price: 3499,
    image: "https://via.placeholder.com/300",
  },
];

function Products() {
  const [cart, setCart] = useState([]);

  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      
      
      <div className="md:col-span-2">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Voguea Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-contain rounded-lg mb-4"
              />

              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-600 mb-3">₹{item.price}</p>

              <button
                onClick={() => addToCart(item)}
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      
      <div className="bg-white rounded-xl shadow-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">
          Cart ({cart.length})
        </h2>

        {cart.length === 0 && (
          <p className="text-gray-500">Your cart is empty</p>
        )}

        {cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-3 border-b pb-2"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">₹{item.price}</p>
            </div>

            <button
              onClick={() => removeFromCart(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}

        <hr className="my-4" />

        <p className="text-lg font-bold">
          Total: ₹{totalPrice}
        </p>

        <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Products;
