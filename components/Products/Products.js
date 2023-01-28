import Span from "../Span/Span"
import TextLink from "../TextLink/TextLink"
import Title from "../Title/Title"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const Products = ({productsRefs}) => {
  const images = [
    {
      src: 'product1.png',
      width: 373,
      height: 278,
      title: 'Aergonomic TV Table',
      vendor: 'Bahanna'
    },
    {
      src: 'product2.png',
      width: 373,
      height: 278,
      title: 'Bilibinatash Armchair',
      vendor: 'Bahanna'
    },
    {
      src: 'product3.png',
      width: 373,
      height: 278,
      title: 'Aylishia Armchair',
      vendor: 'Bahanna'
    },
    {
      src: 'product1.png',
      width: 373,
      height: 278,
      title: 'Aergonomic TV Table',
      vendor: 'Bahanna'
    },
    {
      src: 'product1.png',
      width: 373,
      height: 278,
      title: 'Aergonomic TV Table',
      vendor: 'Bahanna'
    },
  ]

  return (
    <section 
      ref={productsRefs} 
      className='h-screen bg-soft-black flex flex-col justify-center'
    >
      <div 
        className="
        sm:px-[40px]
        md:px-20
        xl:px-[10%]"
      >
        <Span text='products' />
        
        <div 
          className="flex
          justify-between mb-[70px]
          sm:flex-col sm:items-start
          lg:flex-row lg:items-end"
        >
          <Title 
            text='Inspired by clear ideas, surprising functions, and the timeless design' 
            className='leading-[44px] max-w-2xl
            sm:mt-[14px] 
            lg:mb-0' 
          />
          <TextLink text='explore more' />
        </div>
      </div>

      {/* Carousel */}
      <div 
        className="
        sm:pl-[40px]
        md:pl-20
        xl:pl-[10%]"
      >
        <Carousel
          arrows
          className=""
          containerClass=""
          dotListClass=""
          itemClass=""
          partialVisible
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 4,
              partialVisibilityGutter: 20
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
        >
          {
            images.map((image,idx) => (
              <div 
                key={idx} 
                className={`max-w-[${image.width}px]`}
              >
                {/* Image */}
                <div 
                  className={`relative h-[${image.height}px]`}
                >
                  <Image 
                    src={`/img/${image.src}`}
                    alt={image.src}
                    width={image.width}
                    height={image.height}
                  />
                </div>

                {/* Information */}
                <div 
                  className="flex 
                  mt-[20px]
                  sm:gap-3
                  md:gap-[46px]"
                >
                  {/* Number */}
                  <p className="text-white font-sans font-light
                  mt-1
                  sm:text-sm 
                  md:text-base">
                    {`0${idx + 1}`}
                  </p>

                  {/* Title and vendor */}
                  <div>
                    {/* Title */}
                    <h1 
                      className="text-white font-sans font-normal
                      sm:text-xl
                      md:text-2xl"
                    >
                      {image.title}
                    </h1>

                    {/* Vendor */}
                    <span 
                      className="text-soft-gray font-sans font-light capitalize
                      sm:text-sm
                      md:text-base"
                    >
                      {`by ${image.vendor}`}
                    </span>
                  </div>
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </section>
  )
}

export default Products