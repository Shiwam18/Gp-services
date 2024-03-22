import SummaryCard from "./summaryCard"
export default function Section2(){
    return (
        <>
        <div className=" bg-teal-600 h-auto mt-20">
            <div className="flex justify-center items-center px-24 text-white font-bold text-4xl pt-20 py-12">
                
                Summary
                
            </div>
            <div className=" flex justify-center items-center h-1/3 pb-28 ">
            <SummaryCard />
            </div>
        </div>
        </>
    )
}