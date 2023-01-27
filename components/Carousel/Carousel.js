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
    <section ref={carouselRefs} className='carousel relative h-screen bg-no-repeat bg-cover bg-center px-[131px] flex items-center bg-fixed' style={{backgroundImage: `url(/img/${carousels[index].background})`}}>
      <div className='relative z-10 flex flex-col gap-[117px] mt-20'>
        <div className='flex gap-x-64 h-72'>
          <div className='self-end'>
            <p className='text-base text-white font-sans font-light'>{carousels[index].description}</p>
          </div>
          <div className='flex flex-col gap-[30px] text-right self-start'>
            <span className='text-sm text-white opacity-70 flex justify-end'>{`0${index + 1}`}</span>
            <h1 className='text-[56px] leading-[72px] text-white font-serif font-normal'>{carousels[index].heading}</h1>
          </div>
        </div>

        <div className='flex justify-between'>
          <Span text='scroll' />

          <div className='flex items-center gap-[25px] cursor-pointer'>
            {
              carousels.map((carousel, idx) => (
                <button key={idx} className={`${idx === index ? 'border-[1px] border-white' : 'bg-white opacity-30'} w-3 h-3 rounded-full`} onClick={() => handleClick(idx)}></button>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel