import Image from 'next/image';
import { ItemList } from '../ItemList';

export const Sidebar = () => {
  return (
      <div className="bg-white flex flex-col w-52 shadow-2xl shadow-black">
          <div className="flex flex-col">
              <Image src='/images/utm-logo-color.png' alt='UTM Logo' width={120} height={60} className='w-fit p-2.5' />
              <hr className="bg-gray h-0.5 mx-2 mb-2" />
              <ItemList txt='Dashboard' link='/dashboard'/>
              <ItemList txt='Teachers' link='/dashboard/teachers'/>
              <ItemList txt='Groups' link='#'/>
              <ItemList txt='Students' link='#'/>
          </div>
      </div>
  )
}