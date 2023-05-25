import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { WhiteBox } from '@/components/WhiteBox';

export default function Dashboard() {
  return (
    <main>
      <div className='flex flex-row bg-neutral-100 h-screen w-screen'>
        <Sidebar />
        <div className=' bg-aqua w-full h-fit'>
          <Header />
          <div className='justify-evenly flex flex-row pb-16 pt-10 flex-wrap p-5'>
            <WhiteBox txt='Teachers' />
            <WhiteBox txt='Groups' />
            <WhiteBox txt='Students' />
          </div>
          <div className='bg-white p-5 h-fit flex flex-row justify-evenly'>
            <div className='bg-white w-2/5 h-32 rounded-xl shadow-xl p-2'>
              <h3 className='text-dark_gray font-bold text-xl'>English Level by Carrer</h3>
              <div>Grafica</div>
            </div>
            <div className='bg-white w-2/6 h-32 rounded-xl shadow-xl p-2'>
              <h3 className='text-dark_gray font-bold text-xl'>English Level</h3>
              <div>Grafica</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
