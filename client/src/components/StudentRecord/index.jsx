
export const StudentRecord = ({ FName, LName, Level, Email, Group }) => {
    return (
        <tr class="text-center">
            <td class="py-2">{FName}</td>
            <td class="py-2">{LName}</td>
            <td class="py-2">{Level}</td>
            <td class="py-2">{Email}</td>
            <td class="py-2">{Group}</td>
            <td class="py-2">
                <button class="bg-aqua px-8 rounded-3xl text-white">Modify</button>
            </td>
            <td class="py-2">
                <button class="bg-red px-8 rounded-3xl text-white">Delete</button>
            </td>
        </tr>
    )
}