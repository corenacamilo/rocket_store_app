import { Link } from "react-router-dom";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import avatar from "../assets/avatar.jpg";
import { useState } from "react";


const navigation = [
    {name: "Dashboard" , href: "/dashboard"},
    {name: "Ordenes", href: "/orders"},
    {name: "Carro de compras", href: "/cart"},
    {name: "Comprar", href: "/checkout"},
]

const Navbar = () => {


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const usuarioActual = true;

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Lado izquierdo de navbar */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiOutlineBars3CenterLeft className="size-6" />
          </Link>

          {/* barra del buscador */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <CiSearch className="absolute inline-block left-2 inset-y-1"/>
            <input
              type="text"
              placeholder="Buscar"
              className="bg-[#EAEAEA] w-full md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Lado derecho del navbar  */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
            <div className="">
                {
                    usuarioActual ? <>
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <img src={avatar}
                            alt=""
                            className={`size-7 rounded-full ${usuarioActual ? 'ring-3 ring-green-500' : ''}`}/>
                        </button>

                        {/* Mostrar dropdown en el perfil */}
                        {
                            isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                    <ul className="py-2">
                                        {
                                            navigation.map((item) => (
                                                <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                    <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }


                    </> :   <Link to="/login">
                            <CiUser className="size-6" />
                        </Link>
                }
            </div>
          
          <button className="hidden sm:block">
            <CiHeart className="size-6"/>
          </button>
          
          <Link to="/cart"
          className="bg-amber-200 p-1 sm:px-6 px-2 flex items-center rounded-sm">
            <CiShoppingCart className="size-6"/>
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
