export const ListRepo = ({ title, description }) => {
    return(
        <div className=" text-white flex items-center justify-center ">
          <div className="px-4 py-4">
            <h2 className="font-bold"> {title} </h2>
            <p className="text-[#9999] "> {description} </p>
          </div>
        </div>
    )
}