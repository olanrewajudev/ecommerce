import { Link } from "react-router-dom"
import Layouts from "../Components/Layouts"
import { BsChevronRight, BsChevronDown, BsHandbag, BsFillHeartFill, BsTwitter } from 'react-icons/bs'
import outdoor from '../assets/images/outdoor.jpg'
import { FaStar, FaShuttleVan, FaFacebookF, FaPinterestP, FaGooglePlusG } from 'react-icons/fa'
import { VscArrowSwap } from 'react-icons/vsc'
import amex from '../assets/images/amex.png'


const Products = () => {
    return (
        <Layouts>
            <div className="flex m-5 mt-8">
                <Link to='' className="flex items-center justify-start text-gray-500">Home <BsChevronRight /> </Link>
                <Link to='' className="flex items-center justify-start text-gray-500">Home <BsChevronRight /> </Link>
                <Link to='' className="flex items-center justify-start text-gray-500">Home <BsChevronRight /> </Link>
                <Link to='' className="flex items-center justify-start text-gray-500">Home <BsChevronRight /> </Link>
                <div className="text-gray-500 hidden lg:flex">Lorem ipsum dolor sit amet consectetur.</div>
            </div>
            <div className="m-5 lg:m-0">
                <div className="lg:grid grid-cols-3 gap-10 m-5 border rounded-md">
                    <Link to='' className=""><img src={outdoor} alt="" /></Link>
                    <div className="m-2">
                        <div className="text-3xl py-2">Baby Boys Cotton Dungaree Set</div>
                        <div className="flex items-center mb-4">
                            <Link to='' className="flex text-[#fcb800] text-[0.7rem] pr-4"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Link>
                            <Link to='' className="text-blue-900 hover:text-[#fcb800] text-[0.9rem] pr-4 border-r">1 review</Link>
                            <Link to='' className="text-[#fcb800]  hover:text-blue-900 pl-2 text-[0.8rem] underline underline-offset-1 ">Add Your Review</Link>
                        </div>
                        <div className=" text-[0.8rem] pb-2 text-green-600">In Stock</div>
                        <div className=" text-gray-500 text-[0.8rem]"><b className="pr-2 text-[0.8rem]">SKU</b>Kids_015</div>
                        <div className="border py-2 w-full px-2 flex items-center my-3 justify-between">
                            <div className="flex items-center my-1">
                                <FaShuttleVan className="text-[1.1rem] mr-3" />
                                <div className="text-yellow-500 text-[0.7rem] font-semibold">SHIP TO</div>
                            </div>
                            <Link to='' className="text-[#fcb800] text-[0.7rem] flex items-center ">Calculating Shipping Cost  <BsChevronDown /></Link>
                        </div>
                        <div className="">
                            <div className="text">Quick  Overview</div>
                            <div className="text-[0.9rem] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi omnis recusandae repudiandae fugiat tempore ut provident quaerat a dolores, magnam, nostrum, voluptates obcaecati voluptatem deserunt.</div>
                        </div>
                    </div>
                    <div className="lg:bg-[#f4f4f4] p-4">
                        <div className="text-4xl text-[#fcb800] pb-6">$55.00</div>
                        <div className="text-gray-500 pb-4">QTY</div>
                        <div className="flex items-center gap-10 border-b mb-4 w-fit">
                            <div className="hover:text-[#fcb800] cursor-pointer text-3xl text-gray-500">-</div>
                            <div className="text-1xl">1</div>
                            <div className="hover:text-[#fcb800] cursor-pointer text-3xl text-gray-500">+</div>
                        </div>
                        <div className="bg-[#fcb800] capitalize w-full cursor-pointer gap-10 flex items-center rounded-lg text-[1.1rem] mb-2 py-2 px-12 "> <BsHandbag /> Add To Cart</div>
                        <div className="py-3">
                            <div className="border border-gray-600 cursor-pointer hover:border-[#fcb800] mb-3 flex text-[0.9rem] items-center py-2 justify-center text-gray-500"> <BsFillHeartFill className="mr-2" /> ADD TO WISH LIST</div>
                            <div className="border border-gray-600 cursor-pointer hover:border-[#fcb800] py-2 flex text-[0.9rem] items-center mb-4 justify-center text-gray-500"> <VscArrowSwap className="mr-2" /> ADD TO COMPARE</div>
                            <div className="flex items-center justify-center mb-4">
                                <Link to='' className="text-gray-500 ml-3 text-[1rem]"> <FaFacebookF /> </Link>
                                <Link to='' className="text-gray-500 ml-3 text-[1rem]"> <BsTwitter /> </Link>
                                <Link to='' className="text-gray-500 ml-3 text-[1rem]"> <FaPinterestP /> </Link>
                                <Link to='' className="text-gray-500 ml-3 text-[1rem]"> <FaGooglePlusG /> </Link>
                            </div>
                            <div className="text-center text-[0.8rem] text-gray-500">Secured and trusted checkout with </div>
                            <div className="flex items-center justify-center">
                                <img src={amex} className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border m-5 rounded-md">
                <div className="flex my-6 mx-6 py-2 border-b-2">
                    <div className="mr-4 hover:border-b-4 cursor-pointer">DETAILS</div>
                    <div className="cursor-pointer hover:border-b-4 ">REVIEWS (1)</div>
                </div>
                <div className="text-gray-500 m-4">
                    <div className="text-sm">Available While Supplies Last.</div>
                    <div className="text-[0.9rem] my-2">D105 17.5-HP Single-Cylinder Automatic 42-in Lawn Tractor</div>
                    <div className="ml-8 mb-5 text-[0.8rem]">
                        <ul className="list-disc">
                            <li className="pb-1">Easy one-pedal speed operation with forward and reverse lever</li>
                            <li className="pb-1">Easy one-pedal speed operation with forward and reverse lever</li>
                            <li className="pb-1">Easy one-pedal speed operation with forward and reverse lever</li>
                            <li className="pb-1">Easy one-pedal speed operation with forward and reverse lever</li>
                            <li className="pb-1">Easy one-pedal speed operation with forward and reverse lever</li>
                            <li className="pb-1">Easy one-pedal speed operation with forward and reverse lever</li>
                            <li className="pb-1">Easy one-pedal speed operation with forward and reverse lever</li>
                            <li className="pb-1">Easy one-pedal speed operation with forward and reverse lever</li>
                            <li className="pb-1">Easy one-pedal speed operation with forward and reverse lever</li>
                            <li className="pb-1">Easy one-pedal speed operation with forward and reverse lever</li>
                            <li className="pb-1">Easy one-pedal speed operation with forward and reverse lever</li>
                        </ul>
                    </div>
                    <div className="text-[0.8rem] my-2">Specifications</div>
                    <div className="ml-8 mb-5 text-[0.8rem]">
                        <ul className="list-disc">
                            <li className="pb-1">Rear Wheel Size: 20-in</li>
                            <li className="pb-1">Rear Wheel Size: 20-in</li>
                            <li className="pb-1">Rear Wheel Size: 20-in</li>
                            <li className="pb-1">Rear Wheel Size: 20-in</li>
                            <li className="pb-1">Rear Wheel Size: 20-in</li>
                            <li className="pb-1">Rear Wheel Size: 20-in</li>
                            <li className="pb-1">Rear Wheel Size: 20-in</li>
                            <li className="pb-1">Rear Wheel Size: 20-in</li>
                            <li className="pb-1">Rear Wheel Size: 20-in</li>
                            <li className="pb-1">Rear Wheel Size: 20-in</li>
                            <li className="pb-1">Rear Wheel Size: 20-in</li>
                        </ul>
                    </div>
                    <div className="text-[0.8rem] my-2">Engines Specifications</div>
                    <div className="ml-8 text-[0.8rem]">
                        <ul className="list-disc">
                            <li className="pb-1">RBrand: Briggs & Stratton</li>
                            <li className="pb-1">RBrand: Briggs & Stratton</li>
                            <li className="pb-1">RBrand: Briggs & Stratton</li>
                            <li className="pb-1">RBrand: Briggs & Stratton</li>
                            <li className="pb-1">RBrand: Briggs & Stratton</li>
                            <li className="pb-1">RBrand: Briggs & Stratton</li>
                            <li className="pb-1">RBrand: Briggs & Stratton</li>
                            <li className="pb-1">RBrand: Briggs & Stratton</li>
                            <li className="pb-1">RBrand: Briggs & Stratton</li>
                            <li className="pb-1">RBrand: Briggs & Stratton</li>
                            <li className="pb-1">RBrand: Briggs & Stratton</li>
                        </ul>
                    </div>
                </div>
                <div className="w-11/12 mx-auto">
                <table className="">
                    <tr>
                        <td className="text-white">.....</td>
                        <td className="pl-4 text-1xl font-semibold text-gray-500">Materials</td>
                        <td className="pl-4 text-sm text-gray-500">Steel, Cast Iron Front Axle</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="pl-4 text-1xl font-semibold text-gray-500">Warranty</td>
                        <td className="pl-4 text-sm text-gray-500">2 Year Limited or 120 Hours</td>
                    </tr>
                </table>
                </div>
            </div>
        </Layouts>
    )
}

export default Products
