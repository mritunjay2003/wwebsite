import { Carousel } from "react-responsive-carousel";

//Constants
import { ImageList } from "../../utils/constants";

//Styles
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => (
  <Carousel
    autoPlay={true}
    centerMode
    height={"90vh"}
    centerSlidePercentage={90}
    infiniteLoop={true}
    showThumbs={false}
  >
    {ImageList.map((src) => (
      <img style={{ height: "80vh" }} key={src} src={src} />
    ))}
  </Carousel>
);

export default CarouselComponent;
