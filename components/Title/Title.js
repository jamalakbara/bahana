const Title = ({text, className}) => {
  return (
    <h1 className={`text-4xl text-white font-serif mb-[30px] mt-[20px] ${className?className:''}`}>
      {text}
    </h1>
  )
}

export default Title