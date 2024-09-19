import { Link } from "react-router-dom";


export default function Navegacion() {

    return (
        <>
            <div>
                <nav className="p-3">
                    <ul className="text-white text-3xl mt-10 ml-10 font-playfair flex gap-7 uppercase">
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
