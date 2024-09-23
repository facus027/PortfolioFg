import { Link } from "react-router-dom";


export default function Navegacion() {

    return (
        <>
            <div>
                <nav className="p-3">
                    <ul className="text-white lg:text-3xl text-xl lg:mt-10 mt:3 lg:ml-10 ml-3 font-playfair flex lg:flex-row flex-col lg:gap-7 gap-1 uppercase">
                        <li className="hover:scale-110 transition duration-300 p-1 ">
                            <Link to="/inicio">Inicio</Link>
                        </li>
                        <li className="hover:scale-110 transition duration-300 p-1 ">
                            <Link to="/habilidades">Habilidades</Link>
                        </li>
                        <li className="hover:scale-110 transition duration-300 p-1 ">
                            <Link to="/educacion">Educacion</Link>
                        </li>
                        <li className="hover:scale-110 transition duration-300 p-1 ">
                            <Link to="/proyectos">Proyectos</Link>
                        </li>
                        <li className="hover:scale-110 transition duration-300 p-1 ">
                            <Link to="contacto">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
