import { useState } from "react";
import Logo from "../Logo/Logo";
import ModalLinks from "../ModalLinks/ModalLinks";

const Navlink = ({link, activeLink, onClick}) => {
  return (
    <div
      className={`${link.label === activeLink ? 'opacity-100' : 'opacity-70'} cursor-pointer text-secondary-white capitalize text-sm font-normal font-sans hover:opacity-100`} 
      onClick={() => onClick(link)}
    >
      {link.label}
    </div>
  )
}

const Hamburger = ({visibleModal, setVisibleModal}) => {
  const handleClick = () => {
    setVisibleModal(!visibleModal)
  }

  return (
    <div onClick={handleClick} className="w-9 h-9 rounded-full border-solid border-2 border-white opacity-30 cursor-pointer flex flex-col justify-evenly p-2">
      <div className="h-[2px] bg-white"></div>
      <div className="h-[2px] bg-white"></div>
      <div className="h-[2px] bg-white"></div>
    </div>
  )
}

const Navigation = ({navigation_links, activeLink, setActiveLink}) => {
  const [visibleModal, setVisibleModal] = useState(false)

  const handleClick = ({label, refs}) => {
    refs.current.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(label)
  }

  return (
    <nav 
      className="fixed left-0 top-0 z-50 w-full flex items-center justify-between h-[100px] 
      sm:px-[40px]
      md:px-20
      xl:px-[10%]"
    >
      <Logo />

      <div className="flex items-center gap-16">
        <div 
          className="
          gap-11
          sm:hidden
          md:flex"
        >
          {
            navigation_links.map((link,idx) => (
              <Navlink key={idx} link={link} activeLink={activeLink} onClick={handleClick} />
            ))
          }
        </div>

        <Hamburger visibleModal={visibleModal} setVisibleModal={setVisibleModal} />
      </div>

      {/* modal links */}
      <ModalLinks visibleModal={visibleModal} setVisibleModal={setVisibleModal} navigation_links={navigation_links} activeLink={activeLink} setActiveLink={setActiveLink} />
    </nav>
  )
}

export default Navigation