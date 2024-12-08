import Image from 'next/image'


export default function SubHeader() {
    
    return(
        <>
        <div className='bg-black w-full h-6 md:h-9 text-end flex justify-end  md:pr-24 py-1 md:py-2'>
            <div className='flex justify-between w-full md:w-[70%]'>
                <div className='text-slate-200 text-xs md:text-base text-center'>Sign up and get 20% off for your first order <span className='text-white underline font-medium'>Sign Up Now</span></div>
                <div className='hidden sm:block'><Image src='/SubHeader.png' alt='cross' width={15} height={16} /></div>
            </div>
        </div>
        </>
    )
}