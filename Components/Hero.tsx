import React from "react";

export default function Hero() {
  const List = [
    { name: "Chicken", price: 10, duration: 3600, hash: ["healthy", "good"]},
    { name: "Beef", price: 15, duration: 3600 ,hash: ["good"]},
    { name: "Pork", price: 20, duration: 3600 ,hash: ["healthy", "good"]},
    { name: "Salmon", price: 25, duration: 3600 ,hash: ["good"]},
    { name: "Chicken", price: 10, duration: 3600 ,hash: ["healthy", "good"]},
    { name: "Beef", price: 15, duration: 3600 ,hash: ["healthy", "good", "lool", "gooooo"]},
    { name: "Pork", price: 20, duration: 3600 ,hash: ["healthy"]},
    { name: "Salmon", price: 25, duration: 3600 ,hash: ["healthy", "good"]},
  ];

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-y-10 gap-x-5">
          {List.map((item, index) => (
            <div className="hover:scale-110 transition duration-300">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1627483297886-49710ae1fc22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.name}</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum {Math.floor(item.duration / 60)} sit amet,
                    consectetur adipisicing elit. Voluptatibus quia, nulla!
                    Maiores et perferendis {item.price}, exercitationem
                    praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2 grid grid-cols-4">
                    {
                        item.hash.map((items, index) => (
                            <div className="flex items-center">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                {items}
                                </span>
                           </div>
                        ))
                    }
                </div>
                <div className="flex justify-end p-3">
                <button className="bg-gray-300 hover:bg-gray-700 rounded-2xl p-2">
                    Buy Now
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
