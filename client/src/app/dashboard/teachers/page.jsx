import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';

export default function Teachers() {
  return (
    <main>
      <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-scroll'>
        <Sidebar />
        <div className='bg-aqua w-full h-fit'>
          <Header />
        </div>
      </div>
    </main>
  )
}
