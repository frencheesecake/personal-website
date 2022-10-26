import React from 'react'
import logo from '../../img/coding.png'

const Webdev = ({ visible, onClose}) => {
  if (!visible) return null
  
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
      <div className='bg-white w-4/5 h-5/6 text-black rounded-lg overflow-hidden'>
        <div className='flex justify-between items-center p-1 bg-slate-100 border-b-2 border-slate-200'>
          <div className='flex items-center pl-2'><img className='w-[25px] mr-1' src={logo} alt='window-logo' /><h1 className=''>Web Development</h1></div>
          <ul className='flex flex-row-reverse'>
            <li><button className=' px-1' onClick={onClose}><box-icon name='x'></box-icon></button></li>
            <li><button className='px-1' onClick={onClose}><box-icon size='xs'name='window'></box-icon></button></li>
            <li><button className='px-2' onClick={onClose}><box-icon name='minus'></box-icon></button></li>
          </ul>
        </div>
        <div className='Modal-scroll overflow-y-auto p-10'>

        </div>
      </div>
    </div>
  )
}

export default Webdev