import { Link } from "react-router-dom"
import Layouts from "../Components/Layouts"
import { FaStar, FaMoneyBillAlt, FaFacebookF, FaPinterestP, FaGooglePlusG } from 'react-icons/fa'
import { BsFillBusFrontFill, BsFillTelephoneFill, BsTwitter, BsWifi, BsChevronRight } from 'react-icons/bs'
import banner from '../assets/images/slideshow01.jpg'
import banners from '../assets/images/img01.jpg'
import imge from '../assets/images/img02.jpg'
import { GrSecure } from 'react-icons/gr'
import outdoor from '../assets/images/outdoor.jpg'
import outdoors from '../assets/images/outdoor1.jpg'
import outdoorer from '../assets/images/outdoor2.jpg'
import { TfiEmail } from 'react-icons/tfi'
import { FaLongArrowAltRight } from 'react-icons/fa'
import amex from '../assets/images/amex.png'

const Home = () => {
    return (
        <Layouts>
            <div className="mt-6 mb-16 lg:flex flex-cols items-center justify-center">
                <div className=" ml-3 mr-3 ">
                    <img src={banner} alt="" className='w-[70rem] h-[25rem] ' />
                </div>
                <div className="ml-3 mr-3">
                    <div className="text-center absolute w-full pt-6">
                        <p className='text-[1.4rem] bold-semibold text-gray-500'># New Arrivals</p>
                        <p className='lg:text-3xl text-2xl font-bold'>Fashion Made Simple</p>
                        <Link to='' className='transition-all hover:text-[#fcb800]'>Shop Now</Link>
                    </div>
                    <img src={banners} alt="" className='lg:w-[26rem] w-[70rem] lg:h-[25rem] h-[30rem] -z-20 ' />
                </div>
            </div>
            <div className="flex items-center justify-between p-3 border-b mb-10">
                <div className="text-4xl">New Trending</div>
                <Link to='' className="hover:text-[#fcb800] transition-all">see all</Link>
            </div>
            <div className="overflow-x-auto w-[95%] mx-auto scrollsdown mb-15">
                <div className="flex items-center gap-5 w-fit">
                    {new Array(8).fill().map((item, index) => (
                        <div className="w-[20rem] h-[19rem]" key={index}>
                            <Link to='/product' onClick={() => window.scrollTo(0, 0)}><img src={outdoors} alt="" className="w-full h-[13rem] hover:border " /></Link>
                            <div className="text-2xl text-black">$34.00</div>
                            <div className="text-[0.9rem] text-black">Lorem ipsum dolor sit amet consectetur.</div>
                            <div className="text-[#fcb800] flex"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between p-3 border-b mb-10">
                <div className="lg:text-4xl text-2xl">Top Cartegory Of The Month</div>
            </div>
            <div className="lg:grid grid-cols-3 grid-row gap-3 mb-16 ml-3 mr-3">
                {new Array(6).fill().map((item, index) => (
                    <div className="flex border p-5 mb-1 " key={index}>
                        <Link to='/Product' onClick={() => window.scrollTo(0, 0)}><img src={outdoor} className="w-[10rem] h-auto mr-6" /></Link>
                        <div className="">
                            <div className="lg:text-[1.3rem] font-semibold">Loremipsumdol</div>
                            <div className="lg:text-[1.1rem] text-[0.8rem]">Lorem, ipsum dol</div>
                            <div className="lg:text-[1.1rem] text-[0.8rem]">Lorem, ipsum dol</div>
                            <div className="lg:text-[1.1rem] text-[0.8rem]">Lorem, ipsum dol</div>
                            <div className="lg:text-[1.1rem] text-[0.8rem]">Lorem, ipsum dol</div>
                            <div className="lg:text-[1.1rem] text-[0.8rem]">Lorem, ipsum dol</div>
                        </div>
                    </div>
                ))}
            </div>
            <img src={imge} alt="" className="pl-3 pr-3 mb-16" />
            {new Array(6).fill().map((item, index) => (
                <div className="" key={index}>
                    <div className="bg-[#eff1f2] p-3 lg:p-5 flex items-center justify-between m-5">
                        <div className="lg:text-3xl text-1xl">Technology</div>
                        <Link to='/' className="hover:text-[#fcb800] text-[0.9rem] lg:hidden pr-3">Lore ipsum</Link>
                        <div className=" hidden">
                            <Link to='' className="hover:text-[#fcb800] text-[1rem] pr-3">Lore ipsum</Link>
                            <Link to='' className="hover:text-[#fcb800] text-[1rem] pr-3">Lore, ipsum</Link>
                            <Link to='' className="hover:text-[#fcb800] text-[1rem] pr-3">Lorem ipsum</Link>
                            <Link to='' className="hover:text-[#fcb800] text-[1rem] pr-3">Lorem,ipsum</Link>
                            <Link to='' className="hover:text-[#fcb800] text-[1rem] pr-3">Lorem ipsum</Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto lg:w-[95%] w-[80%] mx-auto scrollsdown mb-15">
                        <div className="flex items-center gap-5 w-fit">
                            {new Array(8).fill().map((item, index) => (
                                <div className="w-[20rem] h-[19rem]" key={index}>
                                    <Link to='/product' onClick={() => window.scrollTo(0, 0)}><img src={outdoor} alt="" className="w-full h-[13rem] hover:border " /></Link>
                                    <div className="text-2xl text-black">$34.00</div>
                                    <div className="text-[0.9rem] text-black">Lorem ipsum dolor sit amet consectetur.</div>
                                    <div className="text-[#fcb800] flex"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex items-center justify-between p-3 border-b mb-10">
                <div className="lg:text-4xl text-3xl">Last Blog Posts</div>
            </div>
            <div className="overflow-x-auto lg:w-[95%] mx-auto scrollsdown mb-40 h-[20rem] overflow-y-hidden">
                <div className="flex items-center gap-5 w-fit">
                    {new Array(5).fill().map((item, index) => (
                        <div className="w-[20rem] h-[22rem]" key={index}>
                            <Link to='/product' onClick={() => window.scrollTo(0, 0)} className="relative bg-white text-[#fcb800] hover:text-white transition-all hover:bg-[#fcb800] top-0"><img src={outdoorer} alt="" className="w-full h-[14rem] hover:border " />New Technology</Link>
                            <div className="text-2xl text-black">$34.00</div>
                            <div className="text-[0.9rem] text-black">Lorem ipsum dolor sit amet consectetur.</div>
                            <div className="text-[#fcb800] flex"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#f7f7f7] lg:flex items-center m-10 p-10 justify-between">
                <div className="lg:flex items-center justify-between">
                    <div className="text pr-2 pl-2">
                        <div className="lg:text-3xl text-2xl mt-5 lg:mt-0 mb-4 font-semibold">Download Martfury App Now!</div>
                        <div className="text-1xl  mb-10 text-gray-400">Shopping fastly and easily more with our app. Get a link to download the app on your phone</div>
                        <input type="email" placeholder="Enter your email address" className="lg:w-[21rem] w-[18rem] mb-4 outline-none py-3 px-2 " />
                        <button className="py-3 px-7 lg:text-[1.1rem] mb-10 font-semibold bg-[#fcb800]">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="bg-[#f4f4f4] p-7 pt-10 pb-10">
                <div className="lg:grid grid-cols-2  pb-10">
                    <div className="flex lg:border-r border-gray-700 mb-3 p-5">
                        <Link className=""></Link> <BsFillBusFrontFill className="text-4xl text-[#fcb800] mr-4" />
                        <div className="text-[1.2rem] font-semibold">Free Shipping
                            <p className="text-[1.2rem] text-gray-600 font-normal">on every order every day</p>
                        </div>
                    </div>
                    <div className="flex p-5">
                        <Link className=""></Link> <GrSecure className="text-4xl text-[#fcb800] mr-4" />
                        <div className="text-[1.2rem] font-semibold">Free Shipping
                            <p className="text-[1.2rem] text-gray-600 font-normal">on every order every day</p>
                        </div>

                    </div>
                    <div className="border-r border-gray-700 flex  p-5">
                        <Link className=""></Link> <FaMoneyBillAlt className="text-4xl text-[#fcb800] mr-4" />
                        <div className="text-[1.2rem] font-semibold">Free Shipping
                            <p className="text-[1.2rem] text-gray-600 font-normal">on every order every day</p>
                        </div>
                    </div>
                    <div className="flex p-5">
                        <Link className=""></Link> <BsFillTelephoneFill className="text-4xl text-[#fcb800] mr-4" />
                        <div className="text-[1.2rem] font-semibold">Free Shipping
                            <p className="text-[1.2rem] text-gray-600 font-normal">on every order every day</p>
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-400"></div>
                <div className="t lg:hidden py-10">
                    <div className="text-[0.9rem] flex items-center justify-between pb-6 italic">CONTACT US <BsChevronRight /></div>  
                    <div className="text-[0.9rem] flex items-center justify-between pb-6 italic">INFORMATION <BsChevronRight /></div>  
                    <div className="text-[0.9rem] flex items-center justify-between pb-6 italic">COSTOMER SUPPORT <BsChevronRight /></div>  
                    <div className="text-[0.9rem] flex items-center justify-between italic">SUBSCRIBE US <BsChevronRight /></div>  
                </div>
                <div className="lg:grid grid-cols-4 m-4 pb-10 mt-10 hidden">
                    <div className="">
                        <div className="text-1xl font-semibold">CONTACT US</div>
                        <div className="text-1xl text-gray-500 pb-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, esse.</div>
                        <div className="text-1xl text-gray-500 pb-1">Ajah 19 1140</div>
                        <div className="text-1xl text-gray-500 pb-1">Lagos, Nigeria</div>
                        <div className="text-1xl text-gray-500 pb-1">Mon - Fri / 9:00 AM - 6:00 PM</div>
                        <div className="text-1xl text-gray-500 pb-1">info@Olanrewaju.com</div>
                        <div className="text-1xl text-gray-500 pb-1">+234 912 684 3399</div>
                    </div>
                    <div className="grid">
                        <div to='' className="text-1xl font-semibold">INFORMATION</div>
                        <Link to='' className="text-1xl text-gray-500 pb-1 hover:text-[#fcb800]">Privacy and Cookie Policy</Link>
                        <Link to='' className="text-1xl text-gray-500 pb-1 hover:text-[#fcb800]">About Us</Link>
                        <Link to='' className="text-1xl text-gray-500 pb-1 hover:text-[#fcb800]">Search Terms</Link>
                        <Link to='' className="text-1xl text-gray-500 pb-1 hover:text-[#fcb800]">Advanced Search</Link>
                        <Link to='' className="text-1xl text-gray-500 pb-1 hover:text-[#fcb800]">Orders and Returns</Link>
                        <Link to='' className="text-1xl text-gray-500 pb-1 hover:text-[#fcb800]">Contact Us</Link>
                    </div>
                    <div className="grid">
                        <div to='' className="text-1xl font-semibold">CUSTOMER SURPPORT</div>
                        <Link to='' className="text-1xl text-gray-500 pb-1 hover:text-[#fcb800]">Help & FAQs</Link>
                        <Link to='' className="text-1xl text-gray-500 pb-1 hover:text-[#fcb800]">AContact Us</Link>
                        <Link to='' className="text-1xl text-gray-500 pb-1 hover:text-[#fcb800]">Returns</Link>
                        <Link to='' className="text-1xl text-gray-500 pb-1 hover:text-[#fcb800]">Order History</Link>
                        <Link to='' className="text-1xl text-gray-500 pb-1 hover:text-[#fcb800]">Sample Links</Link>
                        <Link to='' className="text-1xl text-gray-500 pb-1 hover:text-[#fcb800]">Contact Us</Link>
                    </div>
                    <div className="">
                        <div className="text-1xl font-semibold pb-3">SUBSCRIBE US</div>
                        <div className="flex items-center border-b border-gray-400 mb-14"><TfiEmail className="text-2xl" /> <input type="email" placeholder="Enter your email 
                         address" className="w-[20rem] py-3 px-2 text-[1.2rem] outline-none bg-[#f4f4f4]" /> <FaLongArrowAltRight />
                        </div>
                        <div className="flex">
                            <Link to='' className="bg-white rounded-full p-2 ml-3 text-[1.2rem]"> <FaFacebookF /> </Link>
                            <Link to='' className="bg-white rounded-full p-2 ml-3 text-[1.2rem]"> <BsTwitter /> </Link>
                            <Link to='' className="bg-white rounded-full p-2 ml-3 text-[1.2rem]"> <FaPinterestP /> </Link>
                            <Link to='' className="bg-white rounded-full p-2 ml-3 text-[1.2rem]"> <FaGooglePlusG /> </Link>
                            <Link to='' className="bg-white rounded-full p-2 ml-3 text-[1.2rem]"> <BsWifi /> </Link>
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-400"></div>
                {new Array(5).fill().map((item, index) => (
                    <div className="grid lg:pt-10 w-full pt-5" key={index}>
                        <div className="">
                            <div className="lg:flex pb-">
                                <div className="text-1xl font-semibold">Electronics:</div>
                                <Link to='' className="text-1xl text-gray-500 lg:pb-1 border-r border-gray-700 px-2  hover:text-[#fcb800]">Help & FAQs</Link>
                                <Link to='' className="text-1xl text-gray-500 lg:pb-1 border-r border-gray-700 px-2  hover:text-[#fcb800]">Contact Us</Link>
                                <Link to='' className="text-1xl text-gray-500 lg:pb-1 border-r border-gray-700 px-2  hover:text-[#fcb800]">Sports Medicine</Link>
                                <Link to='' className="text-1xl text-gray-500 lg:pb-1 border-r border-gray-700 px-2  hover:text-[#fcb800]">Air Conditioners</Link>
                                <Link to='' className="text-1xl text-gray-500 lg:pb-1 border-r border-gray-700 px-2  hover:text-[#fcb800]">Washing Machines</Link>
                                <Link to='' className="text-1xl text-gray-500 lg:pb-1 border-r border-gray-700 px-2  hover:text-[#fcb800]">Audio </Link>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="border-b border-gray-400 mt-10"></div>
                <div className="lg:flex items-center justify-between pt-10">
                    <div className="text-gray-400 pb-3">© 2021 Codazon Ltd. Trademarks and brands</div>
                    <img src={amex} alt="" />
                </div>
            </div>
        </Layouts>
    )
}

export default Home
