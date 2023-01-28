import Image from "next/image"
import TextLink from "../TextLink/TextLink"
import Span from "../Span/Span"
import Title from "../Title/Title"

const Concept = ({conceptRefs}) => {
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
    <section ref={conceptRefs} className='h-screen bg-soft-black px-[131px]'>
      <div className='relative h-full  flex flex-col justify-center'>
        <div className='text-center z-10'>
          <Span text='concept' />
          <Title text='We are convinced that substantial design must not make any compromises in the quality of materials. That is why we only use slow growing, solid materials' className='leading-[60px]' />
          <TextLink text='read more' />
        </div>

        <div className='absolute flex w-full h-3/4'>
          {
            conceptImages.map((image, idx) => (
              <div key={idx} className={`realtive w-full ${idx === 0 ? '' : (idx === 1 ? 'self-end' : 'self-center flex justify-end')}`}>
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
      </div>
    </section>
  )
}

export default Concept