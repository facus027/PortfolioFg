import { Link } from "react-router-dom";


export default function Welcome() {
    return (
        <>
            <div className="flex items-center justify-center flex-col -mt-5">
                <div className="h-64 w-64 mb-5 rounded-full animate-fadeIn">
                    <img className="rounded-full text-center p-2" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1727130403/Portfolio%20FacuG/ehlz4vkcrryzphpdmnt5.jpg" alt="" />
                </div>
                <div className="flex flex-col lg:text-3xl text-xl text-center uppercase text-white">
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
                    <Link className="w-28 py-2 px-1.5 hover:text-white bg-gray-500 font-extrabold rounded-3xl uppercase text-xl lg:text-3xl font-playfair tracking-wider"
                        to={'/inicio'} >
                        Ingresar...
                    </Link>
                </div>
            </div>
        </>
    )
}

