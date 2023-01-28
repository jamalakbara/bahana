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
    <section ref={productsRefs} className='h-screen bg-soft-black flex flex-col justify-center'>
      <div className="px-[131px]">
        <Span text='products' />
        <div className="flex items-end justify-between mb-[70px]">
          <Title text='Inspired by clear ideas, surprising functions, and the timeless design' className='leading-[44px] mt-[14px] mb-0 max-w-2xl' />
          <TextLink text='explore more' />
        </div>
      </div>

      <div className="pl-[131px]">
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
              <div key={idx} className={`max-w-[${image.width}px]`}>
                <div className="relative h-[273px]">
                  <Image 
                    src={`/img/${image.src}`}
                    alt={image.src}
                    width={image.width}
                    height={image.height}
                  />
                  {/* <Image 
                    src={`/img/${image.src}`}
                    alt={image.src}
                    fill
                    objectFit="cover"
                    quality={100}
                  /> */}
                </div>

                <div className="flex gap-[46px] mt-[20px]">
                  <p className="text-white text-base font-sans font-light">
                    {`0${idx + 1}`}
                  </p>

                  <div>
                    <h1 className="text-white text-2xl font-sans font-normal">
                      {image.title}
                    </h1>
                    <span className="text-soft-gray text-base font-sans font-light capitalize">
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