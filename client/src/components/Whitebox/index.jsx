import Image from 'next/image'

export const WhiteBox = ({ txt, icon }) => {
  return (
    <div className='relative bg-[#FFF] py-6 px-6 rounded-3xl w-64 my-4 shadow-xl sm:w-72'>
      <div className='text-[#FFF] flex items-center absolute rounded-full px2 shadow-xl bg-pink-500 left-4 -top-6'>
        <div className='bg-yellow-600 p-1.5 rounded-lg'>{icon}</div>
      </div>
      <div className='mt-8'>
        <p className='text-xl font-semibold my-2 text-dark_gray'>{txt}</p>
        <h2 className='text-7xl font-bold text-dark_gray'>40</h2>
      </div>
    </div>
  )
}
