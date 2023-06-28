import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import images from '../data/Carousel';

function Landing() {
  return (
    <div className=" overflow-auto relative">
      <div className="flex">
        <video
          src={images[2].img}
          autoPlay
          loop
          muted
          type="video/mp4"
          className=" opacity-70"
        ></video>
        <div className="absolute inset-0 flex justify-center items-center p-10">
          <div className="grid row gap-5 md:flex bg-white rounded-lg p-5 md:mt-80">
            <div className="grid col-3 ">
              <label htmlFor="" className="">
                Select your destination
              </label>
              <input
                type="text"
                placeholder="Location"
                className="w-56 h-10 rounded-full p-3 bg-green-400 text-blue-500"
              />
            </div>
            <div className="grid col-3">
              <label htmlFor="" className="">
                Select your date
              </label>
              <input
                type="text"
                placeholder="date"
                className="w-56 h-10 rounded-full p-3 bg-green-400 text-blue-500"
              />
            </div>
            <div className="grid col-3">
              <label htmlFor="" className="">
                search
              </label>
              <input
                type="text"
                placeholder="location"
                className="w-56 h-10 rounded-full p-3 bg-green-400 text-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
