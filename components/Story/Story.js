import Image from 'next/image'
import Link from 'next/link'
import TextLink from '../TextLink/TextLink'
import Span from '../Span/Span'
import Title from '../Title/Title'

const Story = ({storyRefs}) => {
  const images = [
    {
      src: 'story1.png',
      width: 473,
      height: 454
    },
    {
      src: 'story2.png',
      width: 201,
      height: 275
    },
  ]

  return (
    <section 
      ref={storyRefs} 
      className="h-screen bg-soft-black flex items-center overflow-hidden
      sm:px-[40px] sm:flex-col
      md:px-20
      lg:flex-row lg:gap-[30px]
      xl:px-[10%]"
    >
      {/* Story Text */}
      <div 
        className='flex-1 flex flex-col justify-center'
      >
        <div
          data-aos='fade-right'
        >
          <Span className='mb-[20px]' text='story' />
        </div>

        <div
          data-aos='fade-right'
          data-aos-delay='250'
        >
          <Title text='The Furniture which is actualfor years and even decades' />
        </div>

        <div 
          className="text-soft-gray 
          sm:text-sm sm:mb-5
          md:text-base md:mb-[70px]"
        >
          <div
            data-aos='fade-right'
            data-aos-delay='350'
          >
            <p 
              className='last:mb-0
              sm:mb-3
              md:mb-[30px]'
              >
              The objects by more have been designed and crafted to stay with their owners for years and even decades. They are inspired by clear ideas, surprising functions, and the timeless design of modern classics. Instead of dominating a room, our furniture creates freedom for individual configuration.
            </p>
          </div>
        </div>

        <div
          data-aos='fade-right'
          data-aos-delay='450'
        >
          <TextLink text='read more' />
        </div>
      </div>
      
      {/* Story Images */}
      <div className="flex-1 flex flex-row-reverse items-center">
          {
            images.map((image,idx) => (
              <figure 
                data-aos={idx === 1 ? 'fade-up': 'fade-down'}
                data-aos-duration="1000"
                key={idx} 
                className={`relative 
                ${idx === 1 ? '-mr-16 z-10': ''}`}
              >
                <Image 
                  src={`/img/${image.src}`}
                  width={image.width}
                  height={image.height}
                />
              </figure>
            ))
          }
      </div>
    </section>
  )
}

export default Story