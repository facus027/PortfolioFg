import { ImEnlarge2 } from "react-icons/im"
import { RiGithubLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <>
            <div className="lg:w-2/3 w-full h-96 border border-gray-200 mt-20 lg:mt-0 rounded-xl z-40 mx-auto overflow-y-scroll shadow-2xl bg-transparent mb-36 overflow-x-hidden">
                <div className="flex flex-col gap-3 mt-2">
                    <div className="flex flex-col w-4/5 border-2 gap-5 border-gray-300 rounded-lg mx-auto py-4">
                        <div className="w-96 flex flex-col lg:flex-row gap-2">
                            <img className="text-center flex-1 w-2/3 lg:w-full" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1727093703/Portfolio%20FacuG/qahpry7j3alww3frtm0p.jpg" alt="ImgWebSerrano" />
                            <div className="flex-1 flex justify-center items-center ml-20 gap-5">
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={'https://serranoandes.com/'} target="_blank">
                                    <ImEnlarge2 size={40} />
                                </Link>
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={"https://github.com/facus027/SerranoAndes"} target="_blank">
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
                                En esta web trabajé en cooperación con un diseñador gráfico, quien fue el encargado de brindarme, colores,
                                fuentes, contenidos e imágenes necesarias para la elaboración del proyecto. Los llamados a la acción de la web,
                                hacen que el cliente tenga un lugar para brindar información sobre su emprendimiento
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col w-4/5 border-2 gap-5 border-gray-300 rounded-lg mx-auto py-4">
                        <div className="w-96 flex flex-col lg:flex-row gap-2">
                            <img className="text-center flex-1 w-2/3 lg:w-full" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1727093694/Portfolio%20FacuG/lupwicf9ezaqtwzsb21q.jpg" alt="ImgWebSerrano" />
                            <div className="flex-1 flex justify-center items-center ml-20 gap-5">
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={'https://coti-frontend.vercel.app/'} target="_blank">
                                    <ImEnlarge2 size={40} />
                                </Link>
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={"https://github.com/facus027/CotiFrontend"} target="_blank">
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
                                Esta web posee carrito de compra y administración de inventarion con herramientas como creación,
                                edición y administrar la disponibilidad, tiene como innovación poder aumentar los precios de todos
                                los productos de una categoría. También es responcive, buena experiencia para el usuario y cliente.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col w-4/5 border-2 gap-5 border-gray-300 rounded-lg mx-auto py-4">
                        <div className="w-96 flex flex-col lg:flex-row gap-2">
                            <img className="text-center flex-1 w-2/3 lg:w-full" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1727093691/Portfolio%20FacuG/p0noignowi8fa9uklhdd.jpg" alt="ImgWebSerrano" />
                            <div className="flex-1 flex justify-center items-center ml-20 gap-5">
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={'https://kaleidoscopic-bubblegum-a9b786.netlify.app/'} target="_blank">
                                    <ImEnlarge2 size={40} />
                                </Link>
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={"https://github.com/facus027/Cocktail-Api-Drink"} target="_blank">
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
                                Este demo creado con React, consume una API externa donde se le envia consultas.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col w-4/5 border-2 gap-5 border-gray-300 rounded-lg mx-auto py-4">
                        <div className="w-96 flex flex-col lg:flex-row gap-2">
                            <img className="text-center flex-1 w-2/3 lg:w-full" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1727093703/Portfolio%20FacuG/bjahfhgvkywa2nwtmblf.jpg" alt="ImgWebSerrano" />
                            <div className="flex-1 flex justify-center items-center ml-20 gap-5">
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={'https://friendly-nasturtium-41d1cd.netlify.app/'} target="_blank">
                                    <ImEnlarge2 size={40} />
                                </Link>
                                <Link className="p-2 bg-gray-500 rounded-full hover:border-black hover:border-2"
                                    to={"https://github.com/facus027/Cartshop-guitar"} target="_blank">
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
                                En este demo de carrito de compra se utilaza, zustand para el manejo del carrito y zod para
                                los Types.
                            </p>
                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}
