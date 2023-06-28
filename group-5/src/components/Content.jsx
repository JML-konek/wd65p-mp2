import images from '../data/Carousel';

function Content() {
  return (
    <div className="max-w-full">
      <div className="carousel-in">
        <img src={images[0].img} alt="" />
      </div>
    </div>
  );
}

export default Content;
