import { FaFacebookF } from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'

const SIgnup = () => {
    return (
        <div>
            <div className="bg-white">
                <div className="bg-blue-800 w-[13rem] p-1 rounded-md">
                    <div className="text-white flex items-center gap-5 font-semibold text-sm"> <FaFacebookF className='border-r text-2xl' /> Sign In With Facebook </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="bg-red-600 w-[13rem] p-1 rounded-md">
                    <div className="text-white flex items-center gap-5 font-semibold text-sm"> <FcGoogle className='border-r bg-white text-2xl' /> Sign In With Google </div>
                </div>
            </div>
        </div>
    )
}

export default SIgnup
