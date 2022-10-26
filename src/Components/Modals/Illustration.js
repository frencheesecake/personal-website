import React from 'react'
import ImportAllImages from './ImportAll'

import logo from '../../img/tablet.png'

import ibisPaint from '../../img/ibis-paint-x.png'
import krita from '../../img/Icon_Krita.png'
import photoshop from '../../img/photoshop.png'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'
import twitter from '../../img/twitter.png'

const Illustration = ({ visible, onClose}) => {
  if (!visible) return null
  
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
      <div className='bg-white w-4/5 h-5/6 text-black rounded-lg overflow-hidden'>
        <div className='flex justify-between items-center p-1 bg-slate-100 border-b-2 border-slate-200'>
          <div className='flex items-center pl-2'><img className='w-[25px] mr-1' src={logo} alt='window-logo' /><h1 className=''>Illustration</h1></div>
          <ul className='flex flex-row-reverse'>
            <li><button className=' px-1' onClick={onClose}><box-icon name='x'></box-icon></button></li>
            <li><button className='px-1' onClick={onClose}><box-icon size='xs'name='window'></box-icon></button></li>
            <li><button className='px-2' onClick={onClose}><box-icon name='minus'></box-icon></button></li>
          </ul>
        </div>
        <div className='Modal-scroll overflow-y-auto p-10'>
          <div className='grid grid-cols-4 gap-3 max-w-[1200px] mx-auto'>
            <div className='col-span-4 pb-4'>
              <h1 className='font-bold text-3xl text-center lg:text-left'>My Artworks</h1>
              <p className='mt-5'>For as long as I can remember, I have loved to draw. It’s always been very instinctual and a form of meditation in a way. I was fascinated when I tried digital art as a medium. Exposure to various media and interests greatly influence my style and visual vocabulary.</p>
              <p>Feel free to critisize me or my artworks <a className='text-purple tooltip' href='mailto:polidariochezka@gmail.com'>here<span className='tooltiptext' style={{left: "150%"}}>Link will redirect to Mail.</span></a>.😆😆😆</p>
            </div>
            <div className='col-start-1 col-span-3 md:columns-2 space-y-4'>
              <ImportAllImages />
            </div>
            <div className='col-start-4 col-span-1 ml-4'>
                <div className=''>
                  <h3 className='font-bold text-lg'>Tools Used</h3>
                  <ul className='flex items-center'>
                    <li><div className=''><img className=' w-[55px]' src={ibisPaint} alt='ibis paint x' /></div></li>
                    <li><img className=' w-[50px]' src={krita} alt='krita' /></li>
                    <li><img className=' w-[40px]' src={photoshop} alt='photoshop' /></li>
                  </ul>
                </div>
                <div>
                  <h3 className='font-bold text-lg mt-4'>Social Media</h3>
                  <ul className='flex'>
                    <li><div><a className='p-1 flex items-center' href="https://www.facebook.com/cheezeka.polidario/" target="_blank" rel="noopener noreferrer"><img className='w-[35px]' src={facebook} alt="facebook" /></a></div></li>
                    <li><div><a className='p-1 flex items-center' href="https://www.instagram.com/chezkapolidario/" target="_blank" rel="noopener noreferrer"><img className='w-[35px]' src={instagram} alt="instagram" /></a></div></li>
                    <li><div><a className='p-1 flex items-center' href="https://twitter.com/_chezkaaa" target="_blank" rel="noopener noreferrer"><img className='w-[35px]' src={twitter} alt="twitter" /></a></div></li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Illustration