export default function Header(){
    return (
        <>
            <div className="w-full bg-cyan-600 h-1 md:w-auto">
            </div>
            <div className="h-16 w-full flex justify-evenly my-4">
                <div className="font-medium text-3xl">
                    <span className=" text-cyan-600 font-medium text-6xl">Md.</span>co.uk
                </div>
                <div className="flex justify-evenly my-4">  
                    <div className="text-lg font-normal px-5 hover:text-cyan-600">Home</div>

                    <div className="w-[1px] h-[20px] bg-gray-400 my-1"></div>

                    <div className="text-lg font-normal px-5 hover:text-cyan-600">Book Your GP</div>

                    <div className="w-[1px] h-[20px] bg-gray-400 my-1"></div>

                    <div className="text-lg font-normal px-5 hover:text-cyan-600">FAQ'S</div>
                </div>
                <div>
                    <button className=" rounded-md ring-1 mr-2 w-40 h-12 my-4 text-white bg-blue-900 hover:bg-white hover:text-black font-medium">JOIN NOW </button>
                    <button className=" rounded-md ring-1 mr-2 w-40 h-12 my-4 hover:bg-blue-900 hover:text-white font-medium">LOG IN</button>
                </div>
            </div>
        </>
    )
}