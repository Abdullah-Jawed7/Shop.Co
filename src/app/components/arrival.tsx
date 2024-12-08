import Card from "./card"
import {SecData ,secData} from "../../../utils/arrivalData";
import Link from "next/link";

export default function Arrival() {
    return(
        <>
        <div className="">
            <div className="text-3xl sm:text-4xl text-black font-black [text-shadow:2px_1px_2px_black] mx-auto text-center pb-4 pb-7 pt-6 sm:pt-10"><h2>NEW ARRIVALS</h2></div>
            <div className="content pt-4 sm:p-4">
       <div className="flex flex-wrap justify-evenly">
    {secData.map((data :SecData ,index)=>(
        <div key={index}>
       <Link href={`/product/${index +3}`}> <Card {...data}  key={index}/> </Link></div>
    ))}
</div>
            </div>
            <div className="mx-auto text-center mb-8">
                <button className="border-[#d7dde1]] border rounded-3xl w-52 h-12 mx-auto  text-center  py-3">View All</button>
            </div>
        </div>
        </>
    )
}