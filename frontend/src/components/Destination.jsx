import Carousel from './Carousel';

function Destination() {
  return (
    <div className="max-w-[1440px] mx-auto grid pt-4 lg:grid-cols-3 lg:pt-12">
      {/* LEFT */}
      <div className="flex flex-col lg:col-span-2 justify-evenly md:pr-2">
        <Carousel />
      </div>
      {/* RIGHT */}
      <div className="pt-4 lg:pt-0 lg:pl-2">
        <div className="py-10 text-center rounded-none bg-emerald-600 md:rounded-t-3xl">
          <h2>Plan your Vacation</h2>
        </div>
        <form action="" className="bg-gray-300">
          <div className="flex flex-col p-10 pt-0">
            <label className="py-2" htmlFor="full-name">
              Full Name:
            </label>
            <input
              className="px-2 py-2 rounded-3xl"
              type="text"
              id="full-name"
              placeholder=""
            />
            <label className="py-2" htmlFor="email">
              Email Address:
            </label>
            <input
              className="px-2 py-2 rounded-3xl"
              type="email"
              id="email"
              placeholder=""
            />
            <label className="py-2 rounded-xl" htmlFor="tour">
              Select your Tour:
            </label>
            <select name="tour" id="tour" className="px-2 py-2 rounded-3xl">
              <option value="">Select Destination</option>
              <option value="" className="py-10">
                Boracay
              </option>
              <option value="">Ilocos</option>
              <option value="">Palawan</option>
            </select>
            <label htmlFor="travel-date" className="py-2">
              Date of Travel:{' '}
            </label>
            <input
              type="date"
              id="travel-date"
              className="px-2 py-2 rounded-3xl"
            />
          </div>
          <div className="w-full py-5 text-center bg-orange-500 border mt-28">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Destination;
