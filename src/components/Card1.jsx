function Card1({ numero , palavra , texto }) {
    return (
        <div className="flex flex-col w-full rounded-lg p-6 gap-3 text-white bg-slate-800">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-purple-700">{numero}</div>
            <h3 className="text-xl">{palavra}</h3>
            <p className="text-sm text-stone-400">{texto}</p>
        </div>
    )
}

export default Card1;