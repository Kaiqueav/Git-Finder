export const Search = () => {
    return (
        <div className="p-1 ml-7">
            <input placeholder="@userName" type="text" className="bg-slate-800 rounded-md p-1" />
            <button className="bg-slate-800 text-white font-bold ml-8 p-1 w-[98px] rounded-md  ">
                Buscar
            </button>
        </div>
    )
}