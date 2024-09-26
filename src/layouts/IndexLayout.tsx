import { Outlet } from 'react-router-dom'
import Navegacion from '../components/Navegacion'

export default function IndexLayout() {



    return (
        <div className='bg-body-pattern bg-center container bg-cover max-w-screen-2xl max-h-screen'>


            <div className="h-32 ">

                <Navegacion />

            </div>

            <div className='h-96 pt-2 pl-14'>
                <Outlet />
            </div>

            <div className='h-28'>
                <p className=" text-end  hidden lg:block font-playfair text-xl text-white mr-3 mt-12">Facundo Miguel Guelis &copy; {new Date().getFullYear()}</p>
            </div>

        </div>
    )
}
