type Props = {
    keyword: string,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const KeywordInput = ({ keyword, handleInputChange }: Props) => {
    return (
        <>
            <label htmlFor="keywords" className="text-lg">Enter Keywords here!</label>
            <input
                id="keywords"
                type='text'
                value={keyword}
                onChange={handleInputChange}
                className='p-2 text-lg rounded-xl text-gray-800 bg-gray-400 outline-none w-1/3'
            />
        </>
    )
}
