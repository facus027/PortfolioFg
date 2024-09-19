

export default function Home() {
    return (
        <>
            <div className=" flex flex-col gap-3">
                <h1 className="text-3xl text-white font-bold font-poppins animate-fadeIn">
                    Hola, mi nombre es Facundo. Soy desarrollador Full Stack,
                </h1>
                <p className='text-xl ml-2 text-white font-robotoSlab w-5/6 flex flex-col gap-2 transition-all duration-300'>
                    <span className="ml-10 animate-slideIn2">
                        * Con experiencia en el desarrollo de aplicaciones web utilizando tecnologías como React, Node.js, y TypeScript,
                        apasionado por la creación de soluciones digitales innovadoras y funcionales.
                    </span>
                    <span className="ml-16 animate-slideIn3">
                        * Mi enfoque se basa en escribir código limpio, escalable y eficiente, siempre con la mente puesta en la experiencia
                        del usuario y las mejores prácticas del desarrollo web.</span>
                    <span className="ml-24 animate-slideIn3">
                        * Estoy siempre en búsqueda de nuevas herramientas y técnicas para mejorar la eficiencia y calidad de mis proyectos.
                    </span>
                    <span className="ml-32 animate-slideIn4">
                        * Me esfuerzo por ofrecer soluciones que no solo resuelvan problemas técnicos, sino que también mejoren la experiencia de usuario.
                    </span>
                    <span className="ml-40 animate-slideIn4">
                        * Además, me gusta trabajar en equipo y estoy cómodo colaborando tanto con diseñadores como con otros desarrolladores
                        para crear productos que realmente impacten en los usuarios.
                    </span>
                </p>

            </div>
        </>
    )
}
