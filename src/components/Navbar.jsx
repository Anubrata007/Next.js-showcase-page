import Link from 'next/link';
import Image from 'next/image';

//Images
import Logo from '../public/Triangle-loader.gif';
import Triangle from '../public/triangle.svg';

const Navbar = () => {
    return (
        <nav className="shadow sticky top-0 backdrop-blur-sm z-50">
            <div className="flex justify-between item-center py-3 container mx-auto">
                <div className="flex items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <Image src={Logo} alt='logo' className='h-9 w-9' />
                        </Link>
                        <Link href="/">
                            <p className='text-3xl font-bold'>NEXT<spn className='text-xs font-'> .JS</spn></p>
                        </Link>
                    </div>
                    <div className="hidden md:flex gap-6 ml-10 text-sm">
                        <Link href="/about" className="text-gray-500 hover:text-gray-950">
                            Showcase
                        </Link>
                        <Link href="/blog" className="text-gray-500 hover:text-gray-950">
                            Docs
                        </Link>
                        <Link href="/contact" className="text-gray-500 hover:text-gray-950">
                            Blog
                        </Link>
                        <Link href="/contact" className="text-gray-500 hover:text-gray-950">
                            Templates
                        </Link>
                        <Link href="/contact" className="text-gray-500 hover:text-gray-950">
                            Enterprise
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        className="w-full px-4 py-1 h-9 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none text-sm text-gray-800"
                        placeholder="Search documentation..."
                    />

                    <div className='flex'>
                        <button
                            type="submit"
                            className="flex items-center w-28 h-9 p-1 border border-gray-300 rounded-md hover:bg-gray-100 text-sm text-center me-2 py-2 px-3 font-semibold"
                        >
                            <Image src={Triangle} alt='logo3' className='h-8 w-8 mr-1' />
                            Deploy
                        </button>
                        <button
                            type="submit"
                            className="bg-black text-white h-9 p-1 rounded-md hover:bg-gray-800 text-sm text-center me-2 py-2 px-3"
                        >
                            Learn
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

{/* <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
<path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
</svg>
Sign in with Facebook
</button> */}