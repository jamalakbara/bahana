import Link from "next/link"

const TextLink = ({text, href}) => {
  return (
    <Link 
      className='text-white font-bold capitalize
      sm:text-xs
      md:text-base' 
      href={href ? href : '#'}
    >
      {text}
    </Link>
  )
}

export default TextLink