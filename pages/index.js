import { Inter } from '@next/font/google'
import Navigation from '@/components/Navigation/Navigation'
import Head from 'next/head'
import Carousel from '@/components/Carousel/Carousel'
import { useEffect, useRef, useState } from 'react'
import Story from '@/components/Story/Story'
import Span from '@/components/Span/Span'
import Title from '@/components/Title/Title'
import Image from 'next/image'
import ReadMore from '@/components/ReadMore/ReadMore'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [activeLink, setActiveLink] = useState('home');

  const carouselRefs = useRef(null)
  const storyRefs = useRef(null)
  const conceptRefs = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const carouselPosition = carouselRefs.current.getBoundingClientRect().top;
      const storyPosition = storyRefs.current.getBoundingClientRect().top;
      const conceptPosition = conceptRefs.current.getBoundingClientRect().top;
      
      if (carouselPosition <= 0) {
        setActiveLink('home');
      } 
      if (storyPosition <= 0) {
        setActiveLink('story');
      }
      if (conceptPosition <= 0) {
        setActiveLink('concept');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [carouselRefs, storyRefs, conceptRefs]);

  const navigation_links = [
    {
      key: 1,
      label: "home",
      refs: carouselRefs
    },
    {
      key: 2,
      label: "story",
      refs: storyRefs
    },
    {
      key: 3,
      label: "concept",
      refs: conceptRefs
    },
    {
      key: 4,
      label: "product",
      refs: carouselRefs
    },
  ]

  const conceptImages = [
    {
      src: "concept1.png",
      width: 272,
      height: 219
    },
    {
      src: "concept2.png",
      width: 171,
      height: 195
    },
    {
      src: "concept3.png",
      width: 217,
      height: 221
    },
  ]

  return (
    <>
      <Head>
        <title>Bahanna</title>
      </Head>

      <Navigation navigation_links={navigation_links} activeLink={activeLink} setActiveLink={setActiveLink} />

      <Carousel carouselRefs={carouselRefs} />

      <Story storyRefs={storyRefs} />

      <section ref={conceptRefs} className='relative h-screen bg-soft-black px-[131px] flex flex-col justify-center'>
        <div className='relative text-center z-10'>
          <Span text='concept' />
          <Title text='We are convinced that substantial design must not make any compromises in the quality of materials. That is why we only use slow growing, solid materials' className='leading-[60px]' />
          <ReadMore />
        </div>

        <div className='absolute flex w-full h-1/2'>
          {
            conceptImages.map((image, idx) => (
              <div key={idx} className={`realtive w-full ${idx === 0 ? '' : (idx === 1 ? 'self-end' : 'self-center')}`}>
                <Image 
                  src={`/img/${image.src}`}
                  alt={image.src}
                  width={image.width}
                  height={image.height}
                />
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}
