
function Voguea2() {
  const dresses = [
    { id: 1, name: "Shoes", price: "₹1,999", img: "/images/1.png" },
    { id: 2, name: "Hijabs", price: "₹2,499", img: "/images/2.png" },
    { id: 3, name: "Rain coats", price: "₹1,799", img: "/images/3.png" },
    { id: 4, name: "womens", price: "₹3,299", img: "/images/4.png" },
    { id: 5, name: "bages", price: "₹1,599", img: "/images/5.png" },
    { id: 6, name: "Watches", price: "₹2,199", img: "/images/6.png" },
    { id: 7, name: "mens", price: "₹2,099", img: "/images/7.png" },
    { id: 8, name: "Perfumes", price: "₹3,999", img: "/images/8.png" },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-12">
          Dress Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {dresses.map((dress) => (
            <div key={dress.id} className="border rounded-lg p-4 text-center hover:shadow-lg transition">
              <img
                src={dress.img}
                alt={dress.name}
                className="w-full h-64 object-contain rounded"
              />
              <p className="mt-4 font-semibold">{dress.name}</p>
              <p className="text-pink-600 font-bold">{dress.price}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Voguea2;
