
import { Link } from 'react-router-dom'
import { MyButton } from '../MyButton'
import { ShoppingBasket } from 'lucide-react'
import logo from '../../assets/Logo.png'


import Navbar from './Navbar'

const Header = () => {
    return (
        <>
            {/* top notification */}
            <section aria-label="Limited Offer" className="text-sm text-gray-100 tracking-tight p-2 center-center gap-4 md:gap-7 bg-gradient-to-r from-[#F3626C] to-[#6392eb]">
                <span className=' py-1 px-2 text-[10px] font-semibold rounded-lg bg-white text-zinc-900 '>Limited Offer</span>
                <span>👋</span>
                <span>On sale for a very limited time! Redox</span>
            </section>

            <header className='bg-zinc-950 text-gray-100'>
                <section className='wrapper flex justify-between items-center py-4 border-b-[0.5px] border-b-gray-700'>
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className='object-cover' />
                    </Link>

                    {/* Nav Links */}
                    <Navbar className="flex-1 flex justify-center" />

                    {/* Nav Action Buttons */}
                    <div>
                        <MyButton initialColor="bg-white text-gray-900" flipColor="bg-orange-500" className='px-2 py-1 md:px-6 md:py-3 hover:text-white'>
                            <Link to={'/'} className='flex gap-0 text-sm md:text-lg md:gap-2 '> <ShoppingBasket /><span className='hidden md:block'>Buy Now</span></Link>
                        </MyButton>
                    </div>
                </section>
            </header>

        </>
    )
}

export default Header