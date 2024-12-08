'use client'

import Image from "next/image"
import {SecData} from "../../../utils/arrivalData";
export default function Card (cardData:SecData , ){
    // let discounted =discount >0 ? true:false
    return (
        <div className="h-[420px] w-[300px] ">
            <div className="h-[300px] w-[280px] box-content rounded-xl flex justify-center items-center object-cover">
                <Image src={cardData.image} alt="card" width={500} height={500}></Image>
            </div>
            <p className="text-sm font-semibold">{cardData.title}</p>
            <Image src="/rating.png" alt="rating" width={100} height={15} />
            <div className="flex gap-3">
            <h2 className="text-xl font-semibold">$ {cardData.price}</h2>
            <h2 className={` ${cardData.discount > 0?'inline':'hidden'}  text-xl text-[#8a8d8f] font-semibold `}><s className="text-gray-500">$ {cardData.discount}</s> </h2>
            <p className={` ${cardData.discount > 0?'inline':'hidden'} rounded-xl text-[#ff3333] align-bottom`}>-{cardData.percen}%</p>
            </div>
        </div>
    )
}