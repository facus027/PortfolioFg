import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"
import { SlSocialLinkedin } from "react-icons/sl"
import { RiGithubLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6"

export default function Contact() {
    return (
        <>
            <div className=" h-72 lg:w-2/3 w-full lg:ml-48 ">
                <div className="flex flex-col ">
                    <ul className="text-white font-robotoSlab lg:space-y-4 space-y-1 lg:text-2xl text-base lg:p-4 p-1 mt-20 lg:mt-0">
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
                            <p className="animate-fadeIn3">+54 9 263 438-1630</p>
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
                <div className="flex flex-col">
                    <div className="flex-1 p-1 border-2 lg:w-60 w-52 rounded-3xl border-gray-400 mt-5 bg-slate-600 text-white font-playfair text-base lg:text-xl">
                        <a className="text-center flex gap-7 uppercase animate-fadeIn4 tracking-wider group px-0.5"
                            href="https://drive.google.com/file/d/1HSg50cS30juik53B0d5EF5Xm7ldFB1Lh/view?usp=sharing" target="_blank" download="Facundo_Guelis_CV.pdf">
                            Descargar cv <FaFilePdf className=" group-hover:text-black" size={30} />
                        </a>
                    </div>
                    <div className="flex-1">
                        <h1 className="lg:text-3xl text-xl font-playfair animate-fadeIn4 text-white font-bold tracking-wider uppercase text-end mt-5">Gracias por su visita...</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
