import Image from 'next/image';

export const UserSelectItem = ({name, prof_pic}) => {
    return (
        <li class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
            <div class="flex items-center">
                <Image src={prof_pic} alt={"Foto de " + name}  width={6} height={6} class="flex-shrink-0 h-6 w-6 rounded-full" />

                <span class="font-normal ml-3 block truncate">{name}</span>
            </div>
        </li>
    )
}