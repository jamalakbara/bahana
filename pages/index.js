import { Inter } from '@next/font/google'
import Navigation from '@/components/Navigation/Navigation'
import Head from 'next/head'
import Carousel from '@/components/Carousel/Carousel'
import { useEffect, useRef, useState } from 'react'
import Story from '@/components/Story/Story'
import Concept from '@/components/Concept/Concept'
import Products from '@/components/Products/Products'
import Missions from '@/components/Missions/Missions'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  const [activeLink, setActiveLink] = useState('home');

  const carouselRefs = useRef(null)
  const storyRefs = useRef(null)
  const conceptRefs = useRef(null)
  const productsRefs = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const carouselPosition = carouselRefs.current.getBoundingClientRect().top;
      const storyPosition = storyRefs.current.getBoundingClientRect().top;
      const conceptPosition = conceptRefs.current.getBoundingClientRect().top;
      const productPosition = productsRefs.current.getBoundingClientRect().top;
      
      if (carouselPosition <= 0) {
        setActiveLink('home');
      } 
      if (storyPosition <= 0) {
        setActiveLink('story');
      }
      if (conceptPosition <= 0) {
        setActiveLink('concept');
      }
      if (productPosition <= 0) {
        setActiveLink('products');
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
      label: "products",
      refs: productsRefs
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

      <Concept conceptRefs={conceptRefs} />

      <Products productsRefs={productsRefs} />

      <Missions />

      <Footer navigation_links={navigation_links} />
    </>
  )
}
