import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "O mně",
    },
    {
      id: 3,
      name: "Portfolio",
    },
    {
      id: 4,
      name: "Zkušenosti",
    },
    {
      id: 5,
      name: "Kontakt",
    },
  ];
  return (
    <>
      <div className='flex justify-between px-4 items-center w-full h-20 bg-gray-900 text-slate-500 fixed z-20'>
        <div>
          <a href='/'>
            <h1 className='font-signature font-bold text-5xl text-white cursor-pointer ml-2'>
              T.N<span className='text-cyan-300'>.</span>
            </h1>
          </a>
        </div>
        <div>
          <ul className='hidden md:flex'>
            {links.map(({ id, name }) => (
              <li
                key={id}
                className='px-4 cursor-pointer hover:scale-105 hover:text-white duration-200 hover:underline decoration-cyan-300 underline-offset-4 '
              >
                {name}
              </li>
            ))}
          </ul>
          <div className='flex gap-2 items-center md:hidden'>
            <p>Menu</p>
            <div
              onClick={() => setNav(!nav)}
              className='cursor-pointer z-10 pr-4  relative'
            >
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
              <ul
                className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black
            to-gray-700 text-slate-500'
              >
                {links.map(({ id, name }) => (
                  <li
                    key={id}
                    className='px-4 cursor-pointer py-6 text-4xl'
                  >
                    {name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
