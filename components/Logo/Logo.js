import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
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