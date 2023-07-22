import heroImage from "../assets/my-photo.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className='hero h-screen w-full bg-gradient-to-b from-black via-black to-cyan-950 '>
      <div className=' max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 md:gap-8'>
        <div className='flex flex-col justify-end pb-40  md:justify-center h-full md:pb-0'>
          <p className='text-gray-500'>(začínajicí)</p>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7x font-bold text-gray-100'>
            F<span className='text-cyan-300'>E</span> developer
          </h1>
          <p className='text-gray-500 py-4 max-w-md'>
            Bubeník co vyměnil školní třídu za počítač.
            <br /> Jak jsem se k tomu dostal a co jsem již stihnul?
            <br /> Mé jméno je Tomáš Novák a vítám Vás na mé osobní stránce.
          </p>
          <div>
            <Link
              to='about'
              spy={true}
              smooth={true}
            >
              <button className='hidden md:flex group text-gray-100 w-fit pl-5 pr-3 py-3 my-2  items-center rounded-md bg-gradient-to-l from-cyan-800 to-cyan-300 cursor-pointer '>
                O mně
                <span className='px-1 group-hover:rotate-90  duration-300'>
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt='my profile'
            className='rounded-2xl mx-auto mb-10 md:w-full md:mb-0'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
