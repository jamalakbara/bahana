const Title = ({text, className}) => {
  return (
    <h1 
      className={`text-white font-serif 
      sm:text-2xl sm:my-3
      md:text-4xl md:mb-[30px] md:mt-[20px]
      ${className?className:''}`}
    >
      {text}
    </h1>
  )
}

export default Title