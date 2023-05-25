import { redirect } from 'next/navigation'

export default function Exam({ params }) {
  const { lang } = params
  
  if (!['fr', 'en'].includes(lang)) {
    redirect('/404')
  }

  return (
    <main>
      <h1>Exam Page</h1>
      <p>Language: {lang}</p>
    </main>
  )
}