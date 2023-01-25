import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Navigation = () => {
  const router = useRouter()
  const {pathname} = router

  const navigation_links = [
    {
      key: 1,
      label: "home",
      to: "/"
    },
    {
      key: 2,
      label: "story",
      to: "/story"
    },
    {
      key: 3,
      label: "concept",
      to: "/concept"
    },
    {
      key: 4,
      label: "product",
      to: "/product"
    },
  ]

  return (
    <nav className="fixed left-0 top-0 z-50 w-full flex items-center justify-between h-[100px] px-[131px]">
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

      <div className="flex items-center gap-16">
        <div className="flex gap-11">
          {
            navigation_links.map(link => (
              <Link className={`${pathname === link.to ? 'opacity-100' : 'opacity-70'} text-secondary-white capitalize text-sm font-normal font-sans hover:opacity-100`} key={link.key} href={link.to}>{link.label}</Link>
            ))
          }
        </div>

        <div className="w-9 h-9 rounded-full border-solid border-2 border-white opacity-30 cursor-pointer flex flex-col justify-evenly p-2">
          <div className="h-[2px] bg-white"></div>
          <div className="h-[2px] bg-white"></div>
          <div className="h-[2px] bg-white"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation