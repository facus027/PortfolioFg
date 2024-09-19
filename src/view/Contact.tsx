import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"
import { SlSocialLinkedin } from "react-icons/sl"
import { RiGithubLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <>
            <div className=" h-72 w-2/3 ml-48 ">
                <div className="flex flex-col ">
                    <ul className="text-white font-robotoSlab space-y-4 text-2xl p-4 ">
                        <li className="flex gap-5">
                            <span className="animate-slideIn3"
                            ><FaRegUser size={30} /></span>
                            <p className="animate-fadeIn3">Facundo Miguel Guelis</p>
                        </li>
                        <li className="flex gap-5">
                            <span className="animate-slideIn3"
                            ><IoLocationOutline size={30} /></span>
                            <Link className="hover:text-gray-300 animate-fadeIn3"
                                to={'https://maps.app.goo.gl/PeJ2HJfHNu9oPqnH9'} target="_blank">
                                San Martín,Mendoza-Argentina
                            </Link>
                        </li>
                        <li className="flex gap-5">
                            <span className="animate-slideIn3"
                            ><MdAlternateEmail size={30} /></span>
                            <p className="animate-fadeIn3">facundomguelis@gmail.com</p>
                        </li>
                        <li className="flex gap-5">
                            <span className="animate-slideIn3"
                            ><BsTelephone size={30} /></span>
                            <p className="animate-fadeIn3">+549 263438-1630</p>
                            <Link className="hover:text-green-400 -ml-3 rounded-full"
                                to={'https://wa.me/5492634381630'} target="_blank">
                                <FaWhatsapp size={20} />
                            </Link>
                        </li>
                        <li className="flex gap-5">
                            <span className="animate-slideIn3"
                            ><SlSocialLinkedin size={30} /></span>
                            <Link className="hover:text-gray-300 animate-fadeIn3"
                                to={'https://www.linkedin.com/in/facundo-guelis/'} target="_blank">
                                https://www.linkedin.com/in/facundo-guelis/
                            </Link>
                        </li>
                        <li className="flex gap-5">
                            <span className="animate-slideIn3"
                            ><RiGithubLine size={30} /></span>
                            <Link className="hover:text-gray-300 animate-fadeIn3"
                                to={'https://github.com/facus027'} target="_blank">
                                https://github.com/facus027
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-3xl font-playfair animate-fadeIn4 text-white font-bold tracking-wider uppercase text-end mt-10">Gracias por su visita...</h1>
                </div>
            </div>
        </>
    )
}
