import React from 'react';

function Destination() {
  return (
    <div>
      <div className="absolute w-full ">
        <div className="grid lg:grid-cols-3 gap-4 py-16">
          {/* Left */}
          <div className="lg:col-span-2 flex flex-col py-10">
            <h1>Welcome, Lorem, ipsum dolor.</h1>
          </div>

          {/* Right */}

          <div className="px-4 ">
            <div className="py-10 text-center bg-emerald-600 rounded-t-3xl">
              <h2>Plan your Vacation</h2>
            </div>
            <form action="" className=" bg-gray-300">
              <div className="flex flex-col p-10 pt-0">
                <label className="py-2" htmlFor="">
                  Full Name:
                </label>
                <input
                  className="px-2 py-2 rounded-3xl"
                  type="text"
                  placeholder=""
                />
                <label className="py-2" htmlFor="">
                  Email Address:
                </label>
                <input
                  className="px-2 py-2 rounded-3xl"
                  type="email"
                  placeholder=""
                />
                <label className="py-2 rounded-xl" htmlFor="">
                  Select your Tour:
                </label>
                <select name="" className=" px-2 py-2 rounded-3xl">
                  <option value="">Select Destination</option>
                  <option value="" className="py-10">
                    Boracay
                  </option>
                  <option value="">Cebu</option>
                  <option value="">Ilocos</option>
                </select>
                <label htmlFor="">Date of Travel: </label>
                <form action=""></form>
                <input type="date" className="px-2 py-2 rounded-3xl" />
              </div>
            </form>
            <div className="w-full border text-center py-5 bg-orange-500">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
