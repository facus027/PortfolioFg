import { ImEnlarge2 } from "react-icons/im"
import { RiGithubLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <>
            <div className="w-2/3 h-96 border border-gray-200 rounded-xl z-40 mx-auto overflow-y-scroll shadow-2xl bg-transparent ">
                <div className="flex flex-col gap-3 mt-2">
                    <div className="flex flex-col w-4/5 border-2 gap-5 border-gray-300 rounded-lg mx-auto py-4">
                        <div className="w-96 flex">
                            <img className="text-center flex-1" src="/public/SerranoAndes.jpg" alt="ImgWebSerrano" />
                            <div className="flex-1 flex justify-center items-center ml-20 gap-5">
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={'https://serranoandes.com/'} target="_blank">
                                    <ImEnlarge2 size={40} />
                                </Link>
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={"/"} target="_blank">
                                    <RiGithubLine size={40} />
                                </Link>
                            </div>
                        </div>
                        <div className=" font-poppins text-2xl text-white text-center">
                            <h1>
                                LandingPage Serramo Andes
                            </h1>
                        </div>
                        <div className="w-11/12 text-base text-white text-center font-robotoSlab">
                            <p>
                                En esta web trabaje en cooperacion con un diseñador grafico que fue el encardo de brindarme,
                                colore,fuentes,contenido e imagenes necesarias para la elaboracion del proyecto.
                                Los llamado a la accion de la web hace que el cliente tenga un lugar para brindar informacion sobre
                                su emprendimiento.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col w-4/5 border-2 gap-5 border-gray-300 rounded-lg mx-auto py-4">
                        <div className="w-96 flex">
                            <img className="text-center flex-1" src="/public/cotillon.jpg" alt="ImgWebSerrano" />
                            <div className="flex-1 flex justify-center items-center ml-20 gap-5">
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={'https://coti-frontend.vercel.app/'} target="_blank">
                                    <ImEnlarge2 size={40} />
                                </Link>
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={"/"} target="_blank">
                                    <RiGithubLine size={40} />
                                </Link>
                            </div>
                        </div>
                        <div className=" font-poppins text-2xl text-white text-center">
                            <h1>
                                MultiPage Cotillon San Martín
                            </h1>
                        </div>
                        <div className="w-11/12 text-base text-white text-center font-robotoSlab">
                            <p>
                                Esta web con carrito de compra y administracion de invertarion con herramientas como
                                creacion,edicion y administrar la disponibilidad, tiene como inovacion poder aumentar los
                                precios de todos los productos de una categoria.
                                Tambien responcive,buena experiencia para el usuaria y cliente.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col w-4/5 border-2 gap-5 border-gray-300 rounded-lg mx-auto py-4">
                        <div className="w-96 flex">
                            <img className="text-center flex-1" src="/public/cocktail.jpg" alt="ImgWebSerrano" />
                            <div className="flex-1 flex justify-center items-center ml-20 gap-5">
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={'https://kaleidoscopic-bubblegum-a9b786.netlify.app/'} target="_blank">
                                    <ImEnlarge2 size={40} />
                                </Link>
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={"/"} target="_blank">
                                    <RiGithubLine size={40} />
                                </Link>
                            </div>
                        </div>
                        <div className=" font-poppins text-2xl text-white text-center">
                            <h1>
                                Buscador de receta 'Cocktail'
                            </h1>
                        </div>
                        <div className="w-11/12 text-base text-white text-center font-robotoSlab">
                            <p>
                                Este demo creado con React consume una API externa donde se le envia consultas.

                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col w-4/5 border-2 gap-5 border-gray-300 rounded-lg mx-auto py-4">
                        <div className="w-96 flex">
                            <img className="text-center flex-1" src="/public/guitarLa.jpg" alt="ImgWebSerrano" />
                            <div className="flex-1 flex justify-center items-center ml-20 gap-5">
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={'https://friendly-nasturtium-41d1cd.netlify.app/'} target="_blank">
                                    <ImEnlarge2 size={40} />
                                </Link>
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={"/"} target="_blank">
                                    <RiGithubLine size={40} />
                                </Link>
                            </div>
                        </div>
                        <div className=" font-poppins text-2xl text-white text-center">
                            <h1>
                                GuitarLa
                            </h1>
                        </div>
                        <div className="w-11/12 text-base text-white text-center font-robotoSlab">
                            <p>
                                En este demo de carrito de compra se utilaza para el backend Node.js con express y una base de dato en PosgrestDB
                                El frontend es consumido con sequelize, zustand para el manejo del carrito y zop para los Types.
                            </p>
                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}
