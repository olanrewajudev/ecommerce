import { Link } from "react-router-dom"
import { FaMoneyBillAlt, FaFacebookF, FaPinterestP, FaGooglePlusG } from 'react-icons/fa'
import {FaLongArrowAltRight} from 'react-icons/fa'
import {TfiEmail} from 'react-icons/tfi'
import {BsFillBusFrontFill, BsFillTelephoneFill, BsTwitter, BsWifi, BsChevronRight } from 'react-icons/bs'
import amex from '../assets/images/amex.png'
import {GrSecure} from 'react-icons/gr'

const Footer = () => {
  return (
    <div>
            <div className="bg-[#f4f4f4] p-7 pt-10 pb-10">
                <div className="lg:grid grid-cols-2  pb-10">
                    <div className="flex border-r border-gray-700 mb-3 p-5">
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
                    <div className="text-gray-400 pb-3">© 2021 Olanrewaju Developer. Trademarks and brands</div>
                    <img src={amex} alt="" />
                </div>
            </div>
    </div>
  )
}

export default Footer
