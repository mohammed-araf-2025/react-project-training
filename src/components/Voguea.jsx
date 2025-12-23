import { Link } from "react-router-dom";
function Vogue({ cartCount = 0 }) {
  return (
    <header className="bg-black text-white max-w-full max-h-full rounded-3xl
  ">
      <div className="max-w-full mx-auto px-4 py-6 flex items-center  gap-72">
        
        <h1 className="text-9xl font-serif font-bold ">
          VOGUEA
        </h1>

        <nav className="hidden md:flex gap-8 font-extrabold text-white">
  <Link to="/" className="transition hover:scale-110">
    Home
  </Link>
  <Link to="/shop" className="transition hover:scale-110">
    Shop
  </Link>
  <Link to="/collections" className="transition hover:scale-110">
    Collections
  </Link>
  <Link to="/about" className="transition hover:scale-110">
    About
  </Link>
  <Link to="/contact" className="transition hover:scale-110">
    Contact
  </Link>
</nav>

        <div className="flex  gap-0 px-0 max-w-full">
          <span className="text-lg">🛒</span>
          <span className="bg-pink-700 text-white text-sm font-bold px-2 py-1 rounded-full">
            {cartCount}
          </span>
        </div>

      </div>
      <div className="bg-[#e7c49a] py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        <img
          src="/images/bright.jpg"
          className="w-full md:w-1/3 rounded-4xl hover:scale-105 transition-transform duration-300
"
        />

        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-emerald-800">
            New Fashion Collection
          </h1>
          <p className="text-yellow-950 mb-6">
            Discover the latest trends in fashion with premium quality and modern styles.
          </p>
          <Link to="/button" className=" bg-black hover: text-white px-6 py-3 rounded  transition">
            Shop Now
           </Link>
        </div>

      </div>
    </div>
    <br></br>
    <div className="bg-yellow-50 text-black p-8 flex flex-col md:flex-row items-center justify-between rounded-lg max-w-6xl mx-auto">
  <div>
    <h1 className="text-3xl font-bold">New Arrival</h1>
    <p className="text-lg">Exclusive Offer</p>
    <p className="font-semibold">Best of the Week</p>
  </div>

  <div className="text-9xl font-extrabold text-red-900 mt-4 md:mt-0">
    70% OFF
  </div>
</div>
<br></br>
<div className="bg-black py-16">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-12">
      <h1 className="text-2xl font-extralight">Explore by Category</h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">

      <div className="text-center hover:scale-105 transition-transform duration-300
 ">
        <img
          src="/images/pngwing.com (70).png"
          alt="Shirts"
          className="w-full h-64 object-cover rounded-lg bg-white"
        />
        <p className="text-xl font-semibold mt-4">Shirts</p>
      </div>

      <div className="text-center hover:scale-105 transition-transform duration-300
">
        <img
          src="/images/pngwing.com (71).png"
          alt="Hoodie"
          className="w-full h-64 object-cover rounded-lg bg-white"
        />
        <p className="text-xl font-semibold mt-4">Hoodie</p>
      </div>

      <div className="text-center hover:scale-105 transition-transform duration-300
 ">
        <img
          src="/images/pngwing.com (72).png"
          alt="Shoes"
          className="w-full h-64 object-cover rounded-lg bg-white"
        />
        <p className="text-xl font-semibold mt-4">Shoes</p>
      </div>

      <div className="text-center hover:scale-105 transition-transform duration-300
">
        <img
          src="/images/pngwing.com (73).png"
          alt="Jackets"
          className="w-full h-64 object-cover rounded-lg bg-white "
        />
        <p className="text-xl font-semibold mt-4">Jackets</p>
      </div>

    </div>
  </div>
  
</div>
 
    <div className="bg-black py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

      
        <div className="lg:w-1/4">
          <h2 className="text-4xl font-serif font-bold mb-10">
            Most Loved <br /> Styles
          </h2>

          <div className="space-y-6 text-lg ">
            <div className="flex justify-between items-center border-b pb-2 cursor-pointer">
              <span>Men</span>
              <span>→</span>
            </div>

            <div className="flex justify-between items-center border-b pb-2 cursor-pointer">
              <span>Women</span>
              <span>→</span>
            </div>
          </div>

        
          <div className="flex gap-4 mt-10">
            <button className="w-10 h-10 border text-black rounded-full flex items-center justify-center">
              ←
            </button>
            <button className="w-10 h-10  text-black rounded-full flex items-center justify-center">
              →
            </button>
          </div>
        </div>

      
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">

        
          <div className="text-center">
            <div className="bg-[#e7c49a] p-6">
              <div className="bg-white p-6">
                <img
                  src="/images/t-shirt formal.png"
                  alt="Tshirt"
                  className="mx-auto h-64 object-contain"
                />
              </div>
            </div>
            <h3 className="mt-4 text-lg">T-Shirt For Men</h3>
            <p className="font-bold">500</p>
          </div>

        
          <div className="text-center">
            <div className="bg-[#e7c49a] p-6">
              <div className="bg-white p-6">
                <img
                  src="/images/hoodie former.png"
                  alt="Hoodie"
                  className="mx-auto h-64 object-contain"
                />
              </div>
            </div>
            <h3 className="mt-4 text-lg">Hoodie For Women</h3>
            <p className="font-bold">1000</p>
          </div>

        
          <div className="text-center">
            <div className="bg-[#e7c49a] p-6">
              <div className="bg-white p-6">
                <img
                  src="/images/black shirt.png"
                  alt="Shirt"
                  className="mx-auto h-64 object-contain"
                />
              </div>
            </div>
            <h3 className="mt-4 text-lg">Black Shirt</h3>
            <p className="font-bold">5500</p>
          </div>

        </div>
      </div>
    </div>
<div className="bg-[#e7c49a] py-10">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

    
    <div className="md:w-1/2 ">
      <h1 className="text-4xl font-bold mb-4 text-emerald-800">
        Crafted with Purpose
        Designed for you
      </h1>
      <p className="text-yellow-950 mb-6">
        We beileve fashion is more than clothes its expression
        Every piece is thoughtfully Designed,responsibly mode,
        and beautifully tailored to fit your lifestyle.
      </p>
      <h2 className="hover:text-black px-3 py-1 rounded underline">
        READ OUR STORY
      </h2>
    </div>
     
    <div className="md:w-auto">
      <img
        src="/images/couples.png"
        alt="fashion"
        className="w-fit rounded-lg"
      />
    </div>

  </div>
  
</div>

<div className="bg-yellow-50 py-16">
  <div className="max-w-7xl mx-auto px-6">

    <h1 className="text-4xl font-medium text-center mb-12 text-black">
      Recommended For You
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">

      <div className="border-4 border-black rounded-lg p-4 text-center">
        <img src="/images/floral.png" alt="Dress 1" className="w-full h-64 object-contain rounded bg-white" />
        <p className="mt-4 font-semibold text-black">Floral Dress</p>
        <p className="text-pink-600 font-bold">₹1,999</p>
      </div>
 
      <div className="border-4 border-black rounded-lg p-4 text-center">
        <img src="/images/party.png" alt="Dress 2" className="w-full h-64 object-contain rounded bg-white" />
        <p className="mt-4 font-semibold text-black">Party Wear</p>
        <p className="text-pink-600 font-bold">₹2,499</p>
      </div>

      <div className="border-4 border-black rounded-lg p-4 text-center">
        <img src="/images/casual1.png" alt="Dress 3" className="w-full h-64 object-contain rounded bg-white" />
        <p className="mt-4 font-semibold text-black">Casual Dress</p>
        <p className="text-pink-600 font-bold">₹1,799</p>
      </div>

      <div className="border-4 border-black rounded-lg p-4 text-center">
        <img src="/images/evening.png" alt="Dress 4" className="w-full h-64 object-contain rounded bg-white" />
        <p className="mt-4 font-semibold text-black">Evening Gown</p>
        <p className="text-pink-600 font-bold">₹3,299</p>
      </div>

      <div className="border-4 border-black rounded-lg p-4 text-center">
        <img src="/images/summer.png" alt="Dress 5" className="w-full h-64 object-contain rounded bg-white" />
        <p className="mt-4 font-semibold text-black">Summer Dress</p>
        <p className="text-pink-600 font-bold">₹1,599</p>
      </div>

      <div className="border-4 border-black rounded-lg p-4 text-center">
        <img src="/images/maxi.png" alt="Dress 6" className="w-full h-64 object-contain rounded bg-white" />
        <p className="mt-4 font-semibold text-black">Maxi Dress</p>
        <p className="text-pink-600 font-bold">₹2,199</p>
      </div>

      <div className="border-4 border-black rounded-lg p-4 text-center">
        <img src="/images/office.png" alt="Dress 7" className="w-full h-64 object-contain rounded bg-white" />
        <p className="mt-4 font-semibold text-black">Office Wear</p>
        <p className="text-pink-600 font-bold">₹2,099</p>
      </div>

      <div className="border-4 border-black rounded-lg p-4 text-center">
        <img src="/images/designer.png" alt="Dress 8" className="w-full h-64 object-contain rounded bg-white" />
        <p className="mt-4 font-semibold text-black">Designer Dress</p>
        <p className="text-pink-600 font-bold">₹3,999</p>
      </div>

    </div>
  </div>
</div>

<div className="bg-black py-16">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-3">
        What Our Customers Love
      </h1>
      <p className="text-cyan-500">
        Trusted by thousands of happy customers
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-indigo-500 mb-4">
          “Amazing quality and fast delivery. I absolutely love the designs!”
        </p>
        <h3 className="font-semibold text-black">– Araf</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-indigo-500 mb-4">
          “Stylish, comfortable, and affordable. Highly recommended!”
        </p>
        <h3 className="font-semibold text-black">– Asha</h3>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-indigo-500 mb-4">
          “Great customer support and premium fashion collections.”
        </p>
        <h3 className="font-semibold text-black">– Hinata</h3>
      </div>

    </div>
  </div>
</div>
<div className="bg-black py-16">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-left mb-12">
      <h1 className="text-4xl font-serif mb-3">
        Find Your Perfect Look
      </h1>
      <p className="text-cyan-500">
        Styles that match your personality
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">

      <div>
        <img
          src="/images/casual.png"
          alt="Casual Look"
          className="w-full h-80 object-contain rounded-lg bg-white hover:scale-105 transition-transform duration-300"
        />
        <p className="text-center mt-4 font-semibold">Casual Wear</p>
      </div>

      <div>
        <img
          src="/images/formal.png"
          alt="Formal Look"
          className="w-full h-80 object-contain rounded-lg bg-white hover:scale-105 transition-transform duration-300"
        /> 
        <p className="text-center mt-4 font-semibold">Formal Style</p>
      </div>

      <div>
        <img
          src="/images/street.png"
          alt="Street Style"
          className="w-full h-80 object-contain rounded-lg bg-white hover:scale-105 transition-transform duration-300"
        />
        <p className="text-center mt-4 font-semibold">Street Fashion</p>
      </div>

    </div>
  </div>
</div>
<div className="bg-yellow-50 text-black py-16">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h1 className="text-4xl font-bold mb-4">
      Our Newsletter
    </h1>

    <p className="text-black mb-8">
      Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-black text-white">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full sm:w-2/3 px-4 py-3 rounded text-white focus:outline-none"
      />

      <button className=" text-black px-6 py-3 rounded hover:bg-gray-900 transition">
        Subscribe
      </button>
    </div>

  </div>
</div>
<div className="bg-black text-gray-400 py-14">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">VOGUEA</h2>
        <p className="text-sm">
          Premium fashion for modern lifestyle.  
          Style that defines you.
        </p>

        <div className="flex gap-4 mt-4 justify-center">
          <div className="cursor-pointer hover:text-white transition">📸</div>
          <div className="cursor-pointer hover:text-white transition">📘</div>
          <div className="cursor-pointer hover:text-white transition">🐦</div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
        <p className="mb-2 hover:text-white cursor-pointer transition">Men</p>
        <p className="mb-2 hover:text-white cursor-pointer transition">Women</p>
        <p className="mb-2 hover:text-white cursor-pointer transition">New Arrivals</p>
        <p className="hover:text-white cursor-pointer transition">Sale</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
        <p className="mb-2 hover:text-white cursor-pointer transition">Contact Us</p>
        <p className="mb-2 hover:text-white cursor-pointer transition">FAQs</p>
        <p className="mb-2 hover:text-white cursor-pointer transition">Shipping</p>
        <p className="hover:text-white cursor-pointer transition">Returns</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4 justify-center">
          Newsletter
        </h3>
        <p className="text-sm mb-3">
          Get updates & exclusive offers
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-3 py-2 rounded text-black focus:outline-none"
          />
          <div className="bg-pink-600 w-24 px-4 py-2 rounded text-white cursor-pointer hover:bg-pink-700 transition flex items-center">
            Join
          </div>
        </div>


        <div className="mt-4 justify-center ">
          <p className="text-white text-sm mb-2">Get Our App</p>
          <div className="flex gap-3">
            <div className="bg-gray-800 px-4 py-2 rounded text-sm cursor-pointer">
              App Store
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded text-sm cursor-pointer">
              Play Store
            </div>
          </div>
        </div>
      </div>

    </div>

    <div className="flex justify-center gap-6 mt-10 text-sm">
      <span>VISA</span>
      <span>MASTER</span>
      <span>UPI</span>
      <span>PAYTM</span>
    </div>

    <div className="flex justify-center gap-4 mt-4 text-xs">
      <span className="hover:text-white cursor-pointer transition">
        Privacy Policy
      </span>
      <span className="hover:text-white cursor-pointer transition">
        Terms
      </span>
      <span className="hover:text-white cursor-pointer transition">
        Cookies
      </span>
    </div>

    <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs">
      © 2025 VOGUEA. All rights reserved.
    </div>

  </div>
</div>







    </header>
    
  );
}

export default Vogue;
