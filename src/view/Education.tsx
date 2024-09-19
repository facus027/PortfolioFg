import { useState } from "react";


export default function Education() {

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    return (
        <>
            <div className="flex flex-row gap-10 w-5/6 mx-auto">
                <div className="flex flex-col h-72 w-72 rounded-full border border-gray-600 hover:shadow-2xl shadow-slate-600">
                    <div className="mt-16 ml-9 hover:scale-125 transition duration-300 animate-fadeIn"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="bg-certificate-egg bg-contain bg-no-repeat h-32"></div>
                        <h1 className="text-xl text-white font-poppins text-center -ml-8 mt-3 animate-slideIn2">
                            Developer Full Stack
                        </h1>
                        <div className='relative bottom-2 left-8'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            {isHovered && (
                                <>
                                    <div className="h-36 w-56 mt-5 text-center -ml-10 border-2 rounded-xl border-gray-400 ">
                                        <ul className=" p-2 text-white font-robotoSlab">
                                            <li> Pseudocodigo en PSeint. </li>
                                            <li> Algoritmos y Estructuras de control.</li>
                                            <li> Clases virtuales en vivo.</li>
                                            <li> Habilidades blandas.</li>
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-72 w-72 rounded-full border border-gray-600 hover:shadow-2xl shadow-slate-600">
                    <div className="mt-16 ml-9 hover:scale-125 transition duration-300 animate-fadeIn3"
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}>
                        <div className="bg-certificate-react bg-contain ml-6 bg-no-repeat h-32"></div>
                        <h1 className="text-xl text-white font-poppins text-center -ml-8 mt-3 animate-slideIn2">
                            React y TypeScript
                        </h1>
                    </div>
                    <div className='relative bottom-2 left-8'
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}>
                        {isHovered1 && (
                            <>
                                <div className="h-40 w-64 mt-10 text-center  border-2 rounded-xl border-gray-400 ">
                                    <ul className=" p-2 text-white font-robotoSlab">
                                        <li> Hooks y State, TypeScript. </li>
                                        <li> Zod, Zustand, React Query.</li>
                                        <li> Next.js, React Router,  MERN y PERN</li>
                                        <li> Aprender nuevas tecnologias.</li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex flex-col h-72 w-72 rounded-full border border-gray-600 hover:shadow-2xl shadow-slate-600">
                    <div className="mt-16 ml-9 hover:scale-125 transition duration-300 animate-fadeIn4"
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}>
                        <div className="bg-certificate-tailwind bg-contain ml-6 bg-no-repeat h-32"></div>
                        <h1 className="text-xl text-white font-poppins text-center -ml-8 mt-3 animate-slideIn2">
                            Talwind CSS
                        </h1>
                        <div className='relative bottom-2 left-8'
                            onMouseEnter={() => setIsHovered2(true)}
                            onMouseLeave={() => setIsHovered2(false)}>
                            {isHovered2 && (
                                <>
                                    <div className="h-32 w-40 mt-5 text-center  border-2 rounded-xl border-gray-400 ">
                                        <ul className=" p-2 text-white font-robotoSlab">
                                            <li> Animaciones </li>
                                            <li> Flexbox y Grid. </li>
                                            <li> Maquetación web.</li>
                                            <li> Responsive.</li>
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
