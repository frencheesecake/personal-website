import React from 'react'

const Header = () => {
  return (
    <div className="col-start-2 flex flex-col col-span-10 lg:col-span-7 lg:col-start-2">
      <h1 className="font-bold text-6xl text-center lg:text-left">"Hello, World"</h1>
      <p className=" text-center text-xl mt-8 mb-16 lg:w-2/5 lg:text-left">Greetings fellow earthling. I'm <strong>Chezka Polidario</strong>, a former walking moai. Welcome to my tiny space on the internet.</p>
      <a className="main-btn font-bold place-self-center lg:place-self-start" href="mailto:fran.chez.polidario@gmail.com">say hi</a>
      <div className="list-none mt-auto hidden lg:block">
        <li><a className="hover:text-green font-bold" href="#">{'>'} <span className="text-green">Illustration</span></a></li>
        <li><a className="hover:text-blue font-bold" href="#">{'>'} <span className="text-blue">Web</span> Development</a></li>
        <li><a className="hover:text-purple font-bold" href="#">{'>'} <span className="text-purple">Web 3D</span> Art</a></li>
        <li><a className="hover:text-red font-bold" href="#">{'>'} <span className="text-red">Graphic</span> Design</a></li>
      </div>
    </div>
  )
}

export default Header