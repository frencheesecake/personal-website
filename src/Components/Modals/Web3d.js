import React from 'react'

const Web3d = ({ visible, onClose}) => {
  if (!visible) return null
  
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
      <div className='bg-white w-4/5 h-5/6 text-black rounded-lg p-8'>
        <h1>Web3d</h1>
        <button onClick={onClose}>x</button>
      </div>
    </div>
  )
}

export default Web3d