import Image from 'next/image';
import { ItemList } from '../ItemList';

export const Sidebar = () => {
  return (
      <div className="bg-[#FFF] fixed h-full flex flex-col drop-shadow-2xl shadow-black">
      <div className="flex flex-col px-6 pt-2">
          <Image src='/images/utm-logo-color.png' alt='UTM Logo' width={200} height={80} className='w-[200px] p-2.5' />
          <hr className="bg-gris_txt h-0.5 mx-2 mb-2" />
          <ItemList txt='Dashboard' link='/dashboard'/>
          <ItemList txt='Teachers' link='/dashboard/teachers'/>
          <ItemList txt='Groups' link='/dashboard/groups'/>
          <ItemList txt='Students' link='/dashboard/students'/>
      </div>
  </div>
  )
}