import React, { useState } from 'react'
import Illustration from './Modals/Illustration'
import Graphic from './Modals/Graphic'
import Web3d from './Modals/Web3d'
import WebDev from './Modals/Webdev'

const Header = () => {
  const [modalIllustration, setModalIllustration] = useState(false)
  const [modalWebDev, setModalWebDev] = useState(false)
  const [modalWeb3d, setModalWeb3d] = useState(false)
  const [modalGraphic, setModalGraphic] = useState(false)

  const handleOnCloseIllustration = () => setModalIllustration(false)
  const handleOnCloseWebDev = () => setModalWebDev(false)
  const handleOnCloseWeb3d = () => setModalWeb3d(false)
  const handleOnCloseGraphic = () => setModalGraphic(false)
  return (
    <div className="col-start-2 flex flex-col col-span-10 lg:col-span-7 lg:col-start-2">
      <h1 className="font-bold text-6xl text-center lg:text-left">"Hello, World"</h1>
      <p className=" text-center text-xl mt-8 mb-16 lg:w-2/5 lg:text-left">Greetings fellow earthling. I'm <strong>Chezka Polidario</strong>, a former walking moai 🗿🗿. Welcome to my tiny space on the internet.</p>
      <a className="tooltip main-btn font-bold place-self-center lg:place-self-start" href="mailto:polidariochezka@gmail.com">say hi<span class="tooltiptext">I also accept death threats 💛</span></a>
      <div className="list-none mt-auto hidden lg:block">
        <li><a className="hover:text-green font-bold" onClick={() => setModalIllustration(true)} href="#">{'>'} <span className="text-green">Illustration</span></a></li>
        <li><a className="hover:text-blue font-bold" onClick={() => setModalWebDev(true)} href="#">{'>'} <span className="text-blue">Web</span> Development</a></li>
        <li><a className="hover:text-purple font-bold" onClick={() => setModalWeb3d(true)} href="#">{'>'} <span className="text-purple">Web 3D</span> Art</a></li>
        <li><a className="hover:text-red font-bold" onClick={() => setModalGraphic(true)} href="#">{'>'} <span className="text-red">Graphic</span> Design</a></li>
      </div>
      <Illustration onClose={handleOnCloseIllustration} visible={modalIllustration}/>
      <WebDev onClose={handleOnCloseWebDev} visible={modalWebDev}/>
      <Web3d onClose={handleOnCloseWeb3d} visible={modalWeb3d}/>
      <Graphic onClose={handleOnCloseGraphic} visible={modalGraphic}/>
    </div>
  )
}

export default Header