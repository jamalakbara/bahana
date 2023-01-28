import { useEffect, useState } from 'react'
import Span from '../Span/Span'

const Carousel = ({carouselRefs}) => {
  const carousels = [
    {
      background: "bg-hero.png",
      heading: 'Timeless Design and Sustainable Quality',
      description: 'Furniture can be beautiful, well-made, or practical. But only once we have given them meaning are they truly valuable to us'
    },
    {
      background: "bg-hero.png",
      heading: 'Timeless Design and Sustainable Quality',
      description: 'Furniture can be beautiful, well-made, or practical. But only once we have given them meaning are they truly valuable to us'
    },
    {
      background: "bg-hero.png",
      heading: 'Timeless Design and Sustainable Quality',
      description: 'Furniture can be beautiful, well-made, or practical. But only once we have given them meaning are they truly valuable to us'
    },
    {
      background: "bg-hero.png",
      heading: 'Timeless Design and Sustainable Quality',
      description: 'Furniture can be beautiful, well-made, or practical. But only once we have given them meaning are they truly valuable to us'
    },
  ]

  const handleClick = (idx) => {
    setIndex(idx)
  }

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index < carousels.length - 1 ? index + 1 : 0);
    }, 3000);
    return () => clearInterval(timer);
  }, [index, carousels.length]);
  
  return (
    <section 
      ref={carouselRefs} 
      className='carousel
        relative bg-no-repeat bg-cover bg-center bg-fixed 
        h-screen flex items-center
        sm:px-[40px]
        md:px-20
        xl:px-[10%]' 
      style={{backgroundImage: `url(/img/${carousels[index].background})`}}
    >
      <div 
        className='relative z-10 flex flex-col
        gap-[117px] mt-20
        sm:gap-16 sm:mt-0
        md:gap-24'
      >
        <div 
          className='flex
          gap-x-64
          sm:flex-col-reverse sm:h-auto sm:gap-y-6
          md:flex-row md:gap-x-20 md:h-72'
        >
          {/* Carousel Description */}
          <div className='self-end'>
            <p 
              className='text-white font-sans font-light
              sm:text-sm
              md:text-base'
            >
              {carousels[index].description}
            </p>
          </div>

          {/* Carousel Number and Title */}
          <div 
            className='flex flex-col self-start
            gap-[30px]
            sm:text-left sm:gap-1
            md:text-right md:gap-4'
          >
            {/* Number */}
            <span 
              className='text-white opacity-70 flex
              sm:text-xs sm:justify-start
              md:text-sm md:justify-end'
            >
              {`0${index + 1}`}
            </span>

            {/* Title */}
            <h1 
              className='text-white font-serif font-normal
              sm:text-3xl sm:leading-10
              md:text-[56px] md:leading-[72px]'
            >
              {carousels[index].heading}
            </h1>
          </div>
        </div>

        {/* Carousel Button */}
        <div className='flex justify-between'>
          {/* Information to scroll */}
          <Span text='scroll' />

          {/* Button */}
          <div 
            className='flex items-center cursor-pointer
            gap-[25px]'
          >
            {
              carousels.map((carousel, idx) => (
                <button 
                  key={idx} 
                  className={`${idx === index ? 'border-[1px] border-white' : 'bg-white opacity-30'} rounded-full
                  sm:w-2 sm:h-2
                  md:w-3 md:h-3`} 
                  onClick={() => handleClick(idx)}
                />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel