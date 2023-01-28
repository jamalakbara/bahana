const Span = ({text}) => {
  return (
    <span 
      className={`text-white opacity-30 uppercase font-sans
      sm:text-xs
      md:text-sm`}
    >
      {text}
    </span>
  )
}

export default Span