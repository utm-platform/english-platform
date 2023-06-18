import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { AiFillCaretDown as DownArrow } from "react-icons/ai";
import { UserSelectItem } from "@/components/UserSelectItem";
import Image from 'next/image';

export default function Teachers() {
  return (
    <main>
      <div className='flex flex-row bg-neutral-100 w-screen h-full'>
        <Sidebar />
        <div className='bg-aqua w-full h-fit pl-[15em]'>
          <Header />
          <div className='justify-evenly flex flex-row pb-8 pt-5 flex-wrap p-5'>
            <div class="w-full px-10 flex">
              <h1 class="text-4xl font-bold text-white mr-10">Teacher's info</h1>

              {/* Teacher list */}
              <div class="w-2/4 relative">
                <button type="button" class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                  <span class="flex items-center">
                    <Image src='/images/icon-avatar.png' alt='' width={6} height={6} class="flex-shrink-0 h-6 w-6 rounded-full" />
                    <span class="ml-3 block truncate">Select a teacher...</span>
                  </span>
                  <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <DownArrow class="mr-2"></DownArrow>
                  </span>
                </button>

                <ul class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm hidden"> {/*hidden para ocultar lista*/}
                  {/* <UserSelectItem name='De Leon' prof_pic='/images/icon-avatar.png'></UserSelectItem> */}
                </ul>
              </div>


            </div>
          </div>
          <div class="bg-white mx-[4em] mb-6 relative rounded-3xl p-7 drop-shadow-lg flex items-center">
            <Image src='/images/icon-avatar.png' alt='Avatar icon' width={20} height={20} className='w-20 h-20 rounded-full' />
            <div class="pl-8 flex-1">
              <p class="font-bold">First name:</p><p></p> <br />
              <p class="font-bold">Email:</p><p></p>
            </div>
            <div class="pl-8 flex-1">
              <p class="font-bold">Last name:</p><p></p> <br />
              <p class="font-bold">Password:</p><p></p>
            </div>
          </div>
          <div className='bg-white p-5 h-fit flex justify-evenly'>
            <div class="w-max bg-white mx-[2em] relative rounded-3xl p-7 drop-shadow-lg flex-1">
              <h2 class="font-bold">Group assigned</h2> <br />

              <table class="w-full">
                <tr class="text-gris_oscuro">
                  <th>Groups</th>
                  <th>Average</th>
                  <th>Details</th>
                </tr>
                <tr class="text-center">
                  <td class="py-2">4T1M</td>
                  <td class="py-2">B2</td>
                  <td class="py-2">
                    <button class="bg-aqua px-8 rounded-3xl text-white">See</button>
                  </td>
                </tr>
                <tr class="text-center">
                  <td class="py-2">4T2M</td>
                  <td class="py-2">B1</td>
                  <td class="py-2">
                    <button class="bg-aqua px-8 rounded-3xl text-white">See</button>
                  </td>
                </tr>
              </table>
            </div>
            <div class="w-max bg-white mx-[2em] relative rounded-3xl p-7 drop-shadow-lg flex-1">
              <h2 class="font-bold">English Level</h2> <br />

            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
