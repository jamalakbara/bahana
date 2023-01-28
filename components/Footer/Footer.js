import Link from "next/link"
import Logo from "../Logo/Logo"

const Navlink = ({link, onClick}) => {
  return (
    <div
      className={`opacity-100 cursor-pointer text-secondary-white capitalize text-sm font-normal font-sans hover:opacity-100`} 
      onClick={() => onClick(link)}
    >
      {link.label}
    </div>
  )
}

const Footer = ({navigation_links}) => {
  const handleClick = ({label, refs}) => {
    refs.current.scrollIntoView({ behavior: 'smooth' });
  }

  const socmed = [
    {
      label: 'ig',
      href: 'https://instagram.com'
    },
    {
      label: 'tw',
      href: 'https://twitter.com'
    },
    {
      label: 'fb',
      href: 'https://facebook.com'
    },
  ]

  return (
    <footer 
      className="bg-soft-black flex flex-col 
      sm:px-[40px]
      md:px-20
      xl:px-[10%]"
    >
      <div className="h-[1px] w-full" style={{background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) -11.07%, rgba(255, 255, 255, 0.485754) 51.96%, rgba(0, 0, 0, 0) 111.49%)'}}></div>

      <div 
        className="h-[100px] my-[20px] flex items-center justify-between 
        gap-96
        sm:flex-col sm:gap-12
        sm:h-auto
        lg:flex-row lg:gap-32"
      >
        <div 
          className="flex-1 flex items-center justify-between
          gap-28
          sm:flex-col sm:gap-12
          lg:flex-row"
        >
          <Logo />

          <div 
            className="flex 
            sm:gap-6"
          >
            {
              navigation_links.filter(link => link.label !== 'home').map((link,idx) => (
                <Navlink key={idx} link={link} onClick={handleClick} />
              ))
            }
          </div>
        </div>
        
        <div 
          className="flex-1 flex items-center justify-between 
          gap-28
          sm:flex-col-reverse sm:gap-12
          lg:flex-row"
        >
          <span className="text-secondary-white text-sm">
            © Bahanna  2021
          </span>

          <div className="flex 
            gap-11
            sm:gap-6"
          >
            {
              socmed.map((scmd,idx) => (
                <Link 
                  key={idx} 
                  className="text-secondary-white text-sm opacity-30 uppercase" 
                  href={scmd.label} 
                  target='_blank'
                >
                  {scmd.label}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer