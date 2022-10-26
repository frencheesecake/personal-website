import React from 'react'
import artstation from '../img/artstation.png'
import github from '../img/github.png'

const Socials = () => {
  return (
    <div className="col-start-2 col-span-10 mt-auto lg:mt-0 lg:col-start-11 lg:col-span-1">
      <p className="text-center lg:text-end mb-4">Creep me at:</p>
      <div className="solcials flex lg:flex-col justify-between">
          <div className="circle flex justify-end"><a href="https://www.facebook.com/cheezeka.polidario/" target="_blank" rel="noopener noreferrer"><box-icon type='logo' color="white" name='facebook'></box-icon></a></div>
          <div className="circle flex justify-end"><a href="https://twitter.com/_chezkaaa" target="_blank" rel="noopener noreferrer"><box-icon type='logo' color="white" name='twitter'></box-icon></a></div>
          <div className="circle flex justify-end"><a href="https://www.instagram.com/chezkapolidario/" target="_blank" rel="noopener noreferrer"><box-icon type='logo' color="white" name='instagram'></box-icon></a></div>
          <div className="circle flex justify-end"><a href="https://www.artstation.com/chezkaaaa" target="_blank" rel="noopener noreferrer"><img alt="artstation" src={ artstation }/></a></div>
          <div className="circle flex justify-end"><a href="https://github.com/frencheesecake" target="_blank" rel="noopener noreferrer"><img alt="github" src={ github }/></a></div>
      </div>
    </div>
  )
}

export default Socials