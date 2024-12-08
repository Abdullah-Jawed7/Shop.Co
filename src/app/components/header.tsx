
import { Search ,ShoppingCart ,CircleUserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


export default function Header() {
    
    return(
        <>
        <div>
            <div className="max-w-full sm:w-[90%] mx-auto py-5 h-20 flex justify-between gap-4">
                <div className='flex gap-2 sm:gap-4'>
                <div className="flex hamBurger md:hidden items-center"><Image src='/hamBurger.png' alt='hamburger' width={24} height={24}/></div>
                <div className="logo  text-3xl font-extrabold"><Link href={'/'}> SHOP.CO</Link></div>
                </div>
                <div className="nav hidden md:block pt-2"><ul className='font-sans text-lg font-semibold flex justify-evenly gap-4'>
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrival</li>
                    <li>Brands</li>
                    </ul></div>
                <div className="hidden searchBar h-full bg-[#f0f0f0] lg:flex lg:w-[45%] rounded-3xl p-2">
                <Search color="#8a8d8f" className='ml-2 inline' />
                <p className='inline text-[#8a8d8f] ml-2'>Search for products...</p>
                   
                </div>
                <div className="icons flex gap-3 py-1">
                <Search className='lg:hidden ml-2 w-7 sm:w-10 h-full' />
<ShoppingCart className='w-7 sm:w-10 h-full' />
<CircleUserRound className='w-7 sm:w-10 h-full' />
                </div>

            </div>
        </div>
        </>
    )
}