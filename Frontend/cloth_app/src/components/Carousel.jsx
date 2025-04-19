import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const productImages = [
  {
    id: 1,
    src: '/images/hero.jpg',
    alt: 'Model wearing beige t-shirt and shorts'
  },
  {
    id: 2,
    src: '/images/kidshero.jpg',
    alt: 'Model wearing white t-shirt and shorts'
  },
  {
    id: 3,
    src: '/images/hero.jpg',
    alt: 'Model wearing black t-shirt and shorts'
  },
  {
    id: 4,
    src: '/images/kidshero.jpg',
    alt: 'Young model wearing white t-shirt and shorts'
  },
  {
    id: 5,
    src: '/images/hero.jpg',
    alt: 'Young model wearing beige t-shirt and shorts'
  },
  {
    id: 6,
    src: '/images/kidshero.jpg',
    alt: 'Young model wearing white t-shirt and shorts'
  },
  {
    id: 7,
    src: '/images/hero.jpg',
    alt: 'Model wearing black t-shirt and shorts'
  },
  {
    id: 8,
    src: '/images/kidshero.jpg',
    alt: 'Model wearing white t-shirt and shorts'
  }
];


const CustomPrevIcon = () => (
  <span className="carousel-control-prev-icon custom-carousel-icon" aria-hidden="true">
    <span className="visually-hidden">Previous</span>
  </span>
);

const CustomNextIcon = () => (
  <span className="carousel-control-next-icon custom-carousel-icon" aria-hidden="true">
    <span className="visually-hidden">Next</span>
  </span>
);

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine items per slide based on window width
  useEffect(() => {
    if (windowWidth < 576) {
      setItemsPerSlide(1);
    } else if (windowWidth < 992) {
      setItemsPerSlide(2);
    } else if (windowWidth < 1200) {
      setItemsPerSlide(3);
    } else {
      setItemsPerSlide(4);
    }
  }, [windowWidth]);

  // Create grouped slides
  const groupedProducts = [];
  for (let i = 0; i < productImages.length; i += itemsPerSlide) {
    groupedProducts.push(productImages.slice(i, i + itemsPerSlide));
  }

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className="px-0 my-4">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        interval={5000}
        prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true"></span>}
        nextIcon={<span className="carousel-control-next-icon" aria-hidden="true"></span>}
        className="hero-carousel"
      >
        {groupedProducts.map((group, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <Row className="justify-content-center align-items-center g-0">
              {group.map(product => (
                <div 
                  key={product.id} 
                  className="col text-center product-item"
                >
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="img-fluid carousel-product-image"
                  />
                </div>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      <style>
        {`
          .hero-carousel {
            background-color: #f8f8f8;
          }
          
          .carousel-product-image {
            max-height: 500px;
            object-fit: contain;
          }
          
          .product-item {
            padding: 1rem;
            transition: transform 0.3s ease;
          }
          
          .product-item:hover {
            transform: scale(1.02);
          }
          
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            padding: 15px;
            background-size: 50%;
          }
          
          .carousel-control-prev,
          .carousel-control-next {
            width: 5%;
          }
        `}
      </style>
    </Container>
  );
}

export default HeroCarousel;