export const StudentRecord = ({ FName, LName, Level, Email, Group }) => {
  return (
    <tr className='text-center'>
      <td className='py-2'>{FName}</td>
      <td className='py-2'>{LName}</td>
      <td className='py-2'>{Level}</td>
      <td className='py-2'>{Email}</td>
      <td className='py-2'>{Group}</td>
      <td className='py-2'>
        <button className='bg-aqua px-8 rounded-3xl text-white'>Modify</button>
      </td>
      <td className='py-2'>
        <button className='bg-red px-8 rounded-3xl text-white'>Delete</button>
      </td>
    </tr>
  )
}
