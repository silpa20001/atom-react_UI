import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css'; // Custom CSS for styling

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      textDisplay: ''
    };
  }

  componentDidMount() {
    this.typewriterEffect();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentIndex !== this.state.currentIndex) {
      this.typewriterEffect();
    }
  }

  typewriterEffect = () => {
    const text = document.querySelector('.image-text');
    const fullText = text.innerText;
    let i = 0;
    this.setState({ textDisplay: '' });
    const typing = setInterval(() => {
      if (i < fullText.length) {
        this.setState(prevState => ({
          textDisplay: prevState.textDisplay + fullText.charAt(i)
        }));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100); // Adjust typing speed as needed
  };

  render() {
    const settings = {
      dots: true,
      dotsClass: 'slick-dots custom-dots', // Custom class for dots
      infinite: true,
      speed: 1000, // Adjust the speed as needed
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      autoplay: true, // Enable automatic scrolling
      autoplaySpeed: 2500, // Set the autoplay speed in milliseconds
      nextArrow: <NextArrow />, // Custom next arrow component
      prevArrow: <PrevArrow /> // Custom previous arrow component
    };

    return (
      <div className="image-carousel">
        <Slider {...settings} afterChange={index => this.setState({ currentIndex: index })}>
          <div className="image-slide">
            <img src="https://html.creativegigstf.com/charles/images/home/slide-1.jpg?1713262426722" alt="Image 1" />
            <div className="image-text">
              We improve your <br />
              service efficiency
            </div>
          </div>
          <div className="image-slide">
            <img src="https://html.creativegigstf.com/charles/images/home/slide-2.jpg?1713262427283" alt="Image 2" />
            <div className="image-text">
              Another text for slide 2
            </div>
          </div>
          <div className="image-slide">
            <img src="https://html.creativegigstf.com/charles/images/home/slide-3.jpg?1713262437421" alt="Image 3" />
            <div className="image-text">
              Text for slide 3
            </div>
          </div>
          {/* Add more slides with images and text as needed */}
        </Slider>
      </div>
    );
  }
}

// Custom next arrow component
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fas fa-chevron-right"></i> {/* Font Awesome icon for right arrow */}
    </div>
  );
};

// Custom previous arrow component
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fas fa-chevron-left"></i> {/* Font Awesome icon for left arrow */}
    </div>
  );
};

export default ImageCarousel;
