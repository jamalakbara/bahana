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
    <section ref={storyRefs} className="h-screen bg-soft-black flex gap-[30px] items-center px-[131px]">
      <div className='flex-1 flex flex-col justify-center'>
        <Span className='mb-[20px]' text='story' />
        <Title text='The Furniture which is actualfor years and even decades' />
        <div className="text-base text-soft-gray mb-[70px]">
          <p className='mb-[30px] last:mb-0'>
          The objects by more have been designed and crafted to stay with their owners for years and even decades. They are inspired by clear ideas, surprising functions, and the timeless design of modern classics. Instead of dominating a room, our furniture creates freedom for individual configuration.
          </p>
        </div>
        <TextLink text='read more' />
      </div>
      
      <div className="flex-1 flex flex-row-reverse items-center">
          {
            images.map((image,idx) => (
              <figure key={idx} className={`relative ${idx === 1 ? '-m-16 z-10': ''}`}>
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