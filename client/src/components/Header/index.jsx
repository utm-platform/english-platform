import Image from 'next/image'

export const Header = () => {
  return (
    <div className='flex flex-row justify-between p-2'>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <Image
            src='/images/icon-search.png'
            alt='Search icon'
            width={32}
            height={32}
            className='w-5 h-5 text-gray-500 dark:text-gray-400'
          />
        </div>
        <input
          type='search'
          id='search'
          className='block w-full p-4 pl-10 text-lg text-white rounded-lg bg-transparent border-transparent placeholder:text-white focus:text-white placeholder:text-lg placeholder:font-normal focus:ring-transparent focus:text-lg focus:font-normal font-normal ring-transparent focus:ring-offset-0'
          placeholder='Search'
        />
      </div>

      <div>
        <Image
          src='/images/icon-avatar.png'
          alt='Avatar icon'
          width={64}
          height={64}
          className='w-14 h-14 rounded-full mr-14'
        />
      </div>
    </div>
  )
}
