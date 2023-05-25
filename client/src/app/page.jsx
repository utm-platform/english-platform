import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href='/exam/fr'>Francés</Link>
      <Link href='/exam/en'>Inglés</Link>
    </main>
  )
}
