type Props = {
    name: string,
}

export const Card = ({ name }: Props) => {
    const url = `https://namecheap.com/domains/registration/results/?domain=${name}`
    return (
        <a href={url} rel="noopener noreferrer" target="_blank">
            <li className="rounded-lg p-5 bg-gray-400 text-gray-800 text-lg transition duration-100 hover:bg-gray-300 hover:text-gray-900">
                {name}
            </li>
        </a>
    )
}
