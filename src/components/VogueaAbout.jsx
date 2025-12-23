export default function About() {
  return (
    <div className="bg-[#f9f5ef]">

    
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-serif font-bold mb-6">
          About Our Brand
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We create timeless fashion designed for comfort, confidence, and everyday elegance.
        </p>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        
        <div className="bg-[#e7c49a] p-6">
          <img
            src="/images/about-fashion.jpg"
            alt="About Fashion"
            className="w-full h-400px object-cover"
          />
        </div>

        
        <div>
          <h2 className="text-3xl font-serif font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 mb-4">
            Our brand is built on quality craftsmanship, modern design,
            and sustainable fashion. Every piece is thoughtfully created
            to fit your lifestyle.
          </p>
          <p className="text-gray-700 mb-6">
            From casual wear to statement pieces, we bring you collections
            that never go out of style.
          </p>

          <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition">
            Explore Collection
          </button>
        </div>
      </div>

      
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 text-center gap-10">
          <div>
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">50K+</h3>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="text-gray-600 mt-2">Unique Styles</p>
          </div>
        </div>
      </div>

    </div>
  );
}
