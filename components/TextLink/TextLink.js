import Link from "next/link"

const TextLink = ({text, href}) => {
  return (
    <Link className='text-base text-white font-bold capitalize' href={href ? href : '#'}>
      {text}
    </Link>
  )
}

export default TextLink