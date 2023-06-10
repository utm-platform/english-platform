import Link from 'next/link';

export default async function Home(props) {  
  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href='/exam/fr'>Francés</Link>
        </li>
        <li>
          <Link href='/exam/en'>Inglés</Link>
        </li>
      </ul>
    </main>
  )
}
