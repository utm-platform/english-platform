import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { WhiteBox } from '@/components/WhiteBox';

// Iconos de WhiteBox
import {FaChalkboardTeacher as Icon_Teacher} from "react-icons/fa"
import {FaUsers as Icon_Group} from "react-icons/fa"
import {FaUser as Icon_Student} from "react-icons/fa"

export default function Dashboard() {
  return (
    <main>
            <div className='flex flex-row bg-neutral-100 w-screen h-full'>
                <Sidebar />
                <div className='bg-aqua w-full h-fit pl-[15em]'>
                    <Header />
                    <div className='justify-evenly flex flex-row pb-16 pt-10 flex-wrap p-5'>
                        <WhiteBox txt='Teachers' icon={<Icon_Teacher class="px-1.5" size={"4em"} />} />
                        <WhiteBox txt='Groups' icon={<Icon_Group class="px-1.5" size={"4em"} />} />
                        <WhiteBox txt='Students' icon={<Icon_Student class="px-3" size={"4em"} />} />
                    </div>
                    <div className='bg-white p-5 h-fit flex flex-row justify-evenly'>
                        <div className='bg-[#FFF] w-2/5 h-full rounded-xl shadow-xl p-2'>
                            <h3 className='text-dark_gray font-bold text-xl'>English Level by Carrer</h3>
                            <div>
                                Grafica
                            </div>
                        </div>
                        <div className='bg-[#FFF] w-2/6 h-fit rounded-xl shadow-xl p-2'>
                            <h3 className='text-dark_gray font-bold text-xl'>English Level</h3>
                            <div>
                                Grafica
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
  )
}
