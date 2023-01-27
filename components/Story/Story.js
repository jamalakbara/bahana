import Image from 'next/image'
import Link from 'next/link'
import ReadMore from '../ReadMore/ReadMore'
import Span from '../Span/Span'
import Title from '../Title/Title'

const Story = ({storyRefs}) => {
  return (
    <section ref={storyRefs} className='h-screen bg-soft-black flex gap-[30px] px-[131px]'>
      <div className='flex-1 flex flex-col justify-center'>
        <Span className='mb-[20px]' text='story' />
        <Title text='The Furniture which is actual for years and even decades' />
        {/* <h1 className='text-4xl text-white font-serif mb-[30px] mt-[20px]'>The Furniture which is actual for years and even decades</h1> */}
        <p className='text-base text-soft-gray mb-[70px]'>
          The objects by more have been designed and crafted to stay with their owners for years and even decades. They are inspired by clear ideas, surprising functions, and the timeless design of modern classics. Instead of dominating a room, our furniture creates freedom for individual configuration.
        </p>
        <ReadMore />
      </div>
      <div className='relative flex-1'>
        <figure>
          <Image 
            src='/img/story1.png'
            alt='story 1'
            width={473}
            height={454}
            className='absolute top-1/2 right-0 translate-y-[-50%]'
          />
          <Image 
            src='/img/story2.png'
            alt='story 1'
            width={201}
            height={274}
            className='absolute top-1/2 right-96 translate-y-[-50%]'
          />
        </figure>
      </div>
    </section>
  )
}

export default Story