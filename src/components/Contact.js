import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className='font-bold text-3xl p-4 m-4'>Contact Us page</h1>
        <form>
          <input type='text' className='border border-black m-2 p-2' placeholder='Name'/>
          <input type='text' className='border border-black m-2 p-2' placeholder='message'/>
          <button className='border border-black m-2 p-2 rounded-lg bg-gray-50'>Submit</button>
        </form>
    </div>
  )
}

export default Contact