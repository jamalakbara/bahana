import Image from "next/image"
import Link from "next/link"

const Logo = ({className}) => {
  return (
    <Link className={`${className?className:''}`} href="/">
      <figure>
        <Image
          src="/img/logo.png"
          alt="Bahana Logo"
          width={180}
          height={39}
        />
      </figure>
    </Link>
  )
}

export default Logo