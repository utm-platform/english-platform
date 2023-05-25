import Image from 'next/image'

export const WhiteBox = ({ txt }) => {
  return (
    <div className='relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl sm:w-72'>
      <div className=' text-white flex items-center absolute rounded-full px2 shadow-xl bg-pink-500 left-4 -top-6'>
        <Image
          src='/images/icon-teacher.png'
          alt='Teacher icon'
          width={64}
          height={64}
          className='h-16 w-16'
        />
      </div>
      <div className='mt-8'>
        <p className='text-xl font-semibold my-2 text-dark_gray'>{txt}</p>
        <h2 className='text-7xl font-bold text-dark_gray'>40</h2>
      </div>
    </div>
  )
}
