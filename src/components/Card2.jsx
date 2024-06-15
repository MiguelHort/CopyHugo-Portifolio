function Card2({ icone , palavra , texto }) {
    return (
        <div className="flex flex-col w-full rounded-lg p-6 gap-3 text-white bg-transparent border-2 border-purple-700 border-solid hover:scale-105 hover:z-[1]">
            {icone}
            <h3 className="text-xl">{palavra}</h3>
            <p className="text-sm text-stone-400">{texto}</p>
        </div>
    )
}

export default Card2;