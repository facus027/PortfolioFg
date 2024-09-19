import { Link } from "react-router-dom";


export default function Welcome() {
    return (
        <>
            <div className="flex items-center justify-center flex-col -mt-5">
                <div className="h-64 w-64 mb-5 rounded-full p-2 bg-white animate-fadeIn">
                    <img src="" alt="" />
                </div>
                <div className="flex flex-col text-3xl text-center uppercase text-white">
                    <h1 className="font-poppins font-extralight animate-fadeIn3">
                        Bienvenido al Portfolio de
                    </h1>
                    <h2 className="font-poppins font-extrabold animate-fadeIn3">
                        Facundo Guelis
                    </h2>
                    <h3 className="font-robotoSlab font-bold animate-fadeIn4">
                        Developer Full Stack
                    </h3>
                </div>
                <div className="mt-7 animate-slideIn4">
                    <Link className="w-28 py-2 px-1.5 bg-gray-500 font-extrabold rounded-3xl uppercase text-3xl font-playfair tracking-wider"
                        to={'/inicio'} >
                        Ingresar...
                    </Link>
                </div>
            </div>
        </>
    )
}

