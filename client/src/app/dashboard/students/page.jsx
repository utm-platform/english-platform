import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { StudentRecord } from '@/components/StudentRecord';
import { AiFillCaretDown as DownArrow } from "react-icons/ai";
import { UserSelectItem } from "@/components/UserSelectItem";
import Image from 'next/image';

export default function Students() {
  return (
    <main>
      <div className='flex flex-row bg-neutral-100 w-screen h-full'>
        <Sidebar />
        <div className='bg-aqua w-full h-fit pl-[15em]'>
          <div class="bg-aqua w-full h-1/2"></div>
          <div></div>
          <Header />
          <div className='justify-evenly flex flex-row pb-8 pt-5 flex-wrap p-5'>
            <div class="w-full px-10 flex">
              <h1 class="text-4xl font-bold text-white mr-10">Student info</h1>

              {/* Teacher list */}
              <div class="w-2/4 relative">
                <button type="button" class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                  <span class="flex items-center">
                    <span class="ml-3 block truncate">Filter...</span>
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

          <div className='bg-white p-5 h-fit flex justify-evenly'>
            <div class="bg-[#FFF] w-11/12 mb-6 relative rounded-3xl p-7 drop-shadow-lg flex items-center">
              <table class="w-full border-aqua border-2">
                <tr class="text-[#FFF] bg-aqua">
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>English Level</th>
                  <th>Email</th>
                  <th>Group</th>
                  <th>Modify</th>
                  <th>Delete</th>
                </tr>
                {/* <StudentRecord FName="Jose Alejandro" LName="Avalos Puga" Level="B2" Email="2010542@utmatamoros.edu.mx" Group="2IRI1V"/> */}
              </table>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
