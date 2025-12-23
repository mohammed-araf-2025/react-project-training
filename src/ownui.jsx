
import { useState } from "react";


function Ui() {
  const products = [
  { id: 1, name: "HEADPHONES", price: 1999, image: "/images/Headphones.png" },
  { id: 2, name: "SMART PHONES", price: 29999, image: "/images/Smartphones.png" },
  { id: 3, name: "BLUETOOTH", price: 1499, image: "/images/Bluetooth.png" },
  { id: 4, name: "TV", price: 13499, image: "/images/tv.png" },
  { id: 5, name: "WASHING MACHINE", price: 20499, image: "/images/washing machine.png" },
  { id: 6, name: "OVEN", price: 15499, image: "/images/oven.png" },
];


  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    
    <div className="min-h-screen bg-indigo-500 p-6">
        

      <div className="flex justify-between items-center bg-black p-4 rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold text-pink-500">MY OWN UI</h1>
        <p className="font-semibold text-pink-500">🛒 {cart.length}</p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 bg-red-500 ">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-purple-100 p-4 rounded-xl shadow text-center "
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-contain transition-transform duration-300 hover:scale-110"
            />

            <h2 className="text-lg font-bold mb-2">{item.name}</h2>
            <p className="text-yellow-500 mb-3">
              ₹{item.price.toLocaleString()}
            </p>
          
            <button
              onClick={() => addToCart(item)}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-red-900"
            >
              Add to Cart
            </button>
            
          </div>
        ))}
      </div>

      
      <div className="mt-8 bg-orange-400 p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-3 text-green-900">CART ITEMS</h2>

        {cart.length === 0 ? (
          <p className="text-black">Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <p key={index}>
              {item.name} - ₹{item.price.toLocaleString()}
            </p>
          ))
        )}
      </div>

    </div>
  );
}

export default Ui;


