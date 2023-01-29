import Image from "next/image"
import TextLink from "../TextLink/TextLink"
import Span from "../Span/Span"
import Title from "../Title/Title"

const Concept = ({conceptRefs}) => {
  const conceptImages = [
    {
      src: "concept1.png",
      width: 272,
      height: 219,
      dataAos: {
        animation: 'fade-down',
        delay: "0",
        duration: "1000"
      }
    },
    {
      src: "concept2.png",
      width: 171,
      height: 195,
      dataAos: {
        animation: 'fade-up',
        delay: "750",
        duration: "1000"
      }
    },
    {
      src: "concept3.png",
      width: 217,
      height: 221,
      dataAos: {
        animation: 'fade-up',
        delay: "500",
        duration: "1000"
      }
    },
  ]
  
  return (
    <section 
      ref={conceptRefs} 
      className='h-screen bg-soft-black overflow-hidden
      sm:px-[40px]
      md:px-20
      xl:px-[10%]'
    >
      <div className='relative h-full  flex flex-col justify-center'>
        {/* Text */}
        <div 
          className='text-center z-10'
        >
          <div 
            data-aos='zoom-in-up'
            data-aos-duration='2000'
            data-aos-easing='ease-out-cubic'
          >
            <Span text='concept' />

            <Title text='We are convinced that substantial design must not make any compromises in the quality of materials. That is why we only use slow growing, solid materials' className='leading-[60px]' />

            <TextLink text='Read More' />
          </div>
        </div>

        {/* Background Images */}
        <div className='absolute flex w-full h-3/4'>
          {
            conceptImages.map((image, idx) => (
              <div 
                key={idx} 
                className={`realtive w-full ${idx === 0 ? '' : (idx === 1 ? 'self-end' : 'self-center flex justify-end')}`}
                >
                <Image 
                  data-aos={image.dataAos.animation}
                  data-aos-delay={image.dataAos.delay}
                  data-aos-duration={image.dataAos.duration}
                  src={`/img/${image.src}`}
                  alt={image.src}
                  width={image.width}
                  height={image.height}
                />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Concept