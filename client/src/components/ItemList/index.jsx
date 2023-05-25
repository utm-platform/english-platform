import Link from 'next/link'

export const ItemList = ({ link, txt }) => {
  return (
    <Link href={link} className='text-gray text-lg font-medium px-2.5 py-1 hover:text-yellow-500 w-fit'>{txt}</Link>
  )
}