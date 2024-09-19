

export default function Skills() {
    return (
        <>
            <div className="ml-10">
                <div className=" flex flex-row gap-10">
                    <div className="w-80 h-56 border-2 border-gray-500 rounded-2xl animate-slideIn4">
                        <h1 className="bg-gray-400 w-2/3 p-1 font-poppins font-bold pl-3 rounded-3xl text-2xl">Lenjuages.</h1>
                        <ul className="text-xl text-white font-robotoSlab p-2">
                            <li>* JavaScript/TypeScript.</li>
                            <li>* HTML5.</li>
                            <li>* CSS3.</li>

                        </ul>
                    </div>
                    <div className="w-80 h-56 border-2 border-gray-500 rounded-2xl mt-10 animate-slideIn3">
                        <h1 className="bg-gray-400 w-2/3 p-1 font-poppins font-bold pl-3 rounded-3xl text-2xl">Backend.</h1>
                        <ul className="text-xl text-white font-robotoSlab p-2">
                            <li>* Node.js, Express.</li>
                            <li>* Bases de datos (MongoDB, PostgreSQL).</li>
                            <li>* Sequelize.</li>
                            <li>* API Cloudinary.</li>
                        </ul>
                    </div>
                    <div className="w-80 h-56 border-2 border-gray-500 rounded-2xl mt-20 animate-slideIn2">
                        <h1 className="bg-gray-400 w-2/3 p-1 font-poppins font-bold pl-3 rounded-3xl text-2xl">Frontend.</h1>
                        <ul className="text-xl text-white font-robotoSlab p-2">
                            <li>* HTML5, CSS3 (Flexbox, Grid) </li>
                            <li>* Tailwind CSS, Bootstrap, Material UI</li>
                            <li>* JavaScript, TypeScript</li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
