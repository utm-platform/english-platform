import Image from 'next/image'
import { FaSearch as Icon_Search } from 'react-icons/fa'

export const Header = () => {
  return (
    <div className='flex flex-row justify-between p-2 mx-10 mt-2'>
      <div className='relative w-2/3'>
        <div className='relative mb-6'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <Icon_Search className='text-white'></Icon_Search>
          </div>
          <input
            type='text'
            id='input-group-1'
            className='bg-transparent border-none text-white text-sm rounded-lg block w-full pl-10 p-2.5 placeholder-white focus:outline-white '
            placeholder='Search'
          />
        </div>
      </div>

      <div className='flex items-center'>
        <Image
          src='/images/icon-avatar.png'
          alt='Avatar icon'
          width={64}
          height={64}
          className='w-14 h-14 rounded-full'
        />
      </div>
    </div>
  )
}
