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
    <section className="h-screen bg-soft-black flex gap-[30px] items-center px-[131px]">
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

      <div className='flex-1 flex flex-col justify-center'>
        <Span className='mb-[20px]' text='missions' />
        <Title text='Why we do' />
        <div className="text-base text-soft-gray">
          <p className='mb-[30px] last:mb-0'>
          Between working processes, we allow the wood to rest in humidity- controlled spaces, thereby creating especially long-lasting surfaces.
          </p>
          <p className='mb-[30px] last:mb-0'>
          Instead of dominating a room, our furniture creates freedom for individual configuration.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Missions