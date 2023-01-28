import Image from "next/image"
import Span from "../Span/Span"
import Title from "../Title/Title"

const Missions = () => {
  const images = [
    {
      src: 'mission1.png',
      width: 403,
      height: 454
    },
    {
      src: 'mission2.png',
      width: 272,
      height: 275
    },
  ]

  return (
    <section 
      className="h-screen bg-soft-black flex items-center 
      px-[131px] 
      sm:px-[40px] sm:flex-col
      md:px-20
      lg:flex-row lg:gap-[30px]
      xl:px-[10%]"
    >
      {/* Image */}
      <div className="flex-1 flex items-center">
          {
            images.map((image,idx) => (
              <figure key={idx} className={`${idx === 1 ? '-ml-16': ''}`}>
                <Image 
                  src={`/img/${image.src}`}
                  width={image.width}
                  height={image.height}
                />
              </figure>
            ))
          }
      </div>

      {/* Text */}
      <div className='flex-1 flex flex-col justify-center'>
        <Span className='mb-[20px]' text='missions' />

        <Title text='Why we do' />

        <div 
          className="text-soft-gray 
          text-base mb-[70px]
          sm:text-sm sm:mb-5
          md:text-base md:mb-[70px]"
        >
          <p 
            className='last:mb-0
            mb-[30px]
            sm:mb-3
            md:mb-[30px]'
          >
            Between working processes, we allow the wood to rest in humidity- controlled spaces, thereby creating especially long-lasting surfaces.
          </p>
          <p 
            className='last:mb-0
            mb-[30px]
            sm:mb-3
            md:mb-[30px]'
          >
            Instead of dominating a room, our furniture creates freedom for individual configuration.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Missions