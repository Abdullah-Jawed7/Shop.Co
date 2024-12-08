
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    
    return(
        <>
       <div className='bg-[#f2f0f1] w-full  md:h-[100vh]'>
        <div className='md:flex  h-full w-full sm:px-[5%] pt-[5%]'>
            <div className="text md:w-[45%] flex flex-col justify-center">
                <h1 className="text-5xl sm:text-6xl text-black font-black [text-shadow:2px_1px_2px_black]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className='text-[#8a8d8f]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <div className="btn">
                    <Link href="/products">
                    <button className='w-2/5 h-12 rounded-3xl text-white bg-black mx-auto my-3'>

                    Shop Now
                    </button></Link></div>
                <div className="details h-20 flex gap-2">
                    <div>
                        <h3 className='text-black text-2xl  sm:text-3xl font-semibold'>200+</h3>
                        <p className='text-sm text-[#8a8d8f]'>International Brands</p>
                    </div>
                    <div className="w-[1px] bg-[#8a8d8f] h-full"></div>
                    <div>
                        <h3 className='text-black text-2xl sm:text-3xl font-semibold'>2000+</h3>
                        <p className='text-sm text-[#8a8d8f]'>Hign Quality Products</p>
                    </div>
                    <div className="w-[1px] bg-[#8a8d8f] h-full"></div>
                    <div>
                        <h3 className='text-black text-2xl sm:text-3xl font-semibold'>30000+</h3>
                        <p className='text-sm text-[#8a8d8f]'>Happy Customers</p>
                    </div>
                    {/* <div className="w-[2px] bg-[#8a8d8f] h-full"></div> */}
                </div>
            </div>
            <div className="relative pic  md:w-[55%] h-[500px] md:h-full bg-cover bg-no-repeat bg-[url('/heroPic.png')] [background-position:top_center]">
            <Image className='absolute top-[40%] left-[10%]' src='/heroStar.png' alt='star' width={45} height={40}/>
            <Image className='absolute top-[5%] right-[10%]' src='/heroStar.png' alt='star' width={80} height={40}/>
            </div>

        </div>
        
       </div>
       <div className="box w-full bg-black flex flex-wrap gap-y-3 justify-evenly py-4 sm:py-10 ">
        <Image src='/versace.png' alt='versace' width={100} height={25} />
        <Image src='/zara.png' alt='versace' height={25} width={100}/>
        <Image src='/gucci.png' alt='versace' width={100} height={25} />
        <Image src='/prada.png' alt='versace' width={100} height={25} />
        <Image src='/calvinKlein.png' alt='versace' width={100} height={25} />
       </div>
       </>
    )
}