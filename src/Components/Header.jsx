
import { Link } from 'react-router-dom'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { FaBars} from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { BsHeart, BsCart4, BsSearch } from 'react-icons/bs'
import logo from '../assets/images/logo.svg'


const Header = () => {
    return (
        <div>
            <div className="bg-[#eff1f2] p-3 lg:flex hidden items-center justify-between">
                <div className="hidden lg:flex">
                    <Link to='' className='text-sm pl-2'> Contact Us</Link>
                    <Link to='' className='text-sm pl-2'> 09026843399</Link>
                    <Link to='' className='text-sm pl-2'>olanrewaju@gmail.com</Link>
                </div>
                <div className="hidden lg:flex">
                    <Link to='' className='text-[0.9rem] pl-2'>English</Link>
                    <Link to='' className='text-[0.9rem] pl-2'>USD - US Dollar</Link>
                    <Link to='' className='text-[0.9rem] pl-2'>MarketPlace Store</Link>
                </div>
            </div>
            <div className="bg-[#fcb800] flex items-center fixed top-0 w-full m-0 pl-6 pr-6 pt-1 z-10 justify-between lg:hidden">
                <HiBars3CenterLeft className='text-3xl' />
                <div className=""> <img src={logo} alt="" className='lg:hidden w-26 h-10' /> </div>
                <div className="flex ">
                    <BsSearch className='text-2xl text-white mr-3' />
                    <BsCart4 className='text-2xl text-white' />
                </div>
            </div>
            <div className=" ml-3 mr-5 mt-5 hidden lg:flex items-center justify-between">
                <div className="text-4xl bg-[#fcb800] px-2 py-2"> <FaBars /> </div>
                <div className=""> <img src={logo} alt="" /> </div>
                <div className="flex-cols items-center mt-2 justify-start">
                    <div className=""><input placeholder='search entire store here...' className='outline-none border rounded-lg w-[100%] bg-white mb-2 shadow-lg shadow-slate-500/40 px-2 py-3 text-sm' type="text" /><br />
                        <div className=" ">
                            <Link className='text-[0.9rem] pl-1' to=''>iphone X</Link>
                            <Link className='text-[0.9rem] pl-1' to=''>virtual</Link>
                            <Link className='text-[0.9rem] pl-1' to=''>apple</Link>
                            <Link className='text-[0.9rem] pl-1' to=''>wireless</Link>
                            <Link className='text-[0.9rem] pl-1' to=''>simple chair</Link>
                            <Link className='text-[0.9rem] pl-1' to=''>classic watch</Link><br />
                            <Link className='text-[0.9rem] pl-1' to=''>macbooks</Link>
                            <Link className='text-[0.9rem] pl-1' to=''>retina</Link>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <Link className='text-4xl pl-6'> <BsHeart /> <p className='text-[0.9rem] text-center'>Wish List</p> </Link>
                    <Link className='text-4xl pl-6'> <CgProfile /> <p className='text-[0.9rem] text-center'>your Account</p></Link>
                    <Link className='text-4xl pl-6'> <BsCart4 /> <p className='text-[0.9rem] text-center'>your cart</p> </Link>
                </div>
            </div>
            <div className=" mt-10 pl-6 pr-6 py-4 lg:flex hidden  items-center justify-between bg-[#fcb800]">
                <div className="font-semibold text-[1rem] transition-all hover:bg-black hover:text-[#fcb800] py-2 px-3 ">TECHNOLOGY</div>
                <div className="font-semibold text-[1rem] transition-all hover:bg-black hover:text-[#fcb800] py-2 px-3 ">BABY & KIDS</div>
                <div className="font-semibold text-[1rem] transition-all hover:bg-black hover:text-[#fcb800] py-2 px-3 ">CATEGORIES</div>
                <div className="font-semibold text-[1rem] transition-all hover:bg-black hover:text-[#fcb800] py-2 px-3 ">SUB PAGES</div>
                <div className="font-semibold text-[1rem] transition-all hover:bg-black hover:text-[#fcb800] py-2 px-3 ">PAGES</div>
                <div className="font-semibold text-[1rem] transition-all hover:bg-black hover:text-[#fcb800] py-2 px-3 ">CONTACT US</div>
                <div className="font-semibold text-[1rem] transition-all hover:bg-black hover:text-[#fcb800] py-2 px-3 ">BLOGS</div>
                <div className="font-semibold text-[1rem] transition-all hover:bg-black hover:text-[#fcb800] py-2 px-3 ">WATCHES</div>
            </div>
            <div className=" mt-12 pl-6 pr-6 py-1 ml-3  mr-3 lg:hidden flex items-center justify-start bg-[#fcb800]">
                <HiBars3CenterLeft className='text-3xl mr-3' />All Categories
            </div>

        </div>
    )
}

export default Header
