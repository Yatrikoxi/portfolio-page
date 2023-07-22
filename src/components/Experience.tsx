import Landing from "../assets/projects/landing-page.png";
import etch from "../assets/projects/etch-a-sketch.png";
import calc from "../assets/projects/calculator.png";
import library from "../assets/projects/library.png";
import html from "../assets/html-1.svg";
import css from "../assets/css-3.svg";
import js from "../assets/javascript-1.svg";
import ts from "../assets/typescript.svg";
import tw from "../assets/tailwind-css-2.svg";
import react from "../assets/react-1.svg";

const Experience = () => {
  const projectCards = [
    {
      id: 1,
      link_code: "https://github.com/Yatrikoxi/Etch-sketch",
      link_live: "https://yatrikoxi.github.io/Etch-sketch/",
      image: etch,
    },
    {
      id: 2,
      link_code: "https://github.com/Yatrikoxi/Odin_library",
      link_live: "https://yatrikoxi.github.io/Odin_library/",
      image: library,
    },
    {
      id: 3,
      link_code: "https://github.com/Yatrikoxi/Calculator",
      link_live: "https://yatrikoxi.github.io/Calculator/",
      image: calc,
    },
    {
      id: 4,
      link_code: "https://github.com/Yatrikoxi/Landing-page",
      link_live: "https://yatrikoxi.github.io/Landing-page/",
      image: Landing,
    },
  ];
  const tech = [
    {
      id: 1,
      name: "HTML",
      image: html,
    },
    {
      id: 2,
      name: "CSS",
      image: css,
    },
    {
      id: 3,
      name: "Javascript",
      image: js,
    },
    {
      id: 4,
      name: "React",
      image: react,
    },
    {
      id: 5,
      name: "Typescript",
      image: ts,
    },
    {
      id: 6,
      name: "Tailwind",
      image: tw,
    },
  ];
  return (
    <div className='experience w-full bg-gradient-to-b from-black via-black to-cyan-950 '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-start w-full h-full text-gray-100'>
        <div>
          <div className='pb-8'>
            <p className='text-5xl font-bold inline border-b-2 border-cyan-300'>
              Portfolio
            </p>
            <p className='py-4 text-gray-400'>Menší projekty</p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8 px-12 sm:px-0'>
            {projectCards.map(({ id, image, link_live, link_code }) => (
              <div
                key={id}
                className='shadow shadow-gray-600 rounded-lg'
              >
                <img
                  src={image}
                  alt='etch-a-sketch'
                  className='rounded-b-md hover:overflow-hidden duration-200 hover:scale-105'
                  loading='lazy'
                />
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 duration-200 hover:scale-105 px-2 py-2 sm:px-4 sm:py-3'>
                    <a
                      href={link_code}
                      target='_blank'
                      className='text-xs  sm:text-sm'
                    >
                      Code
                    </a>
                  </button>
                  <button className='w-1/2 duration-200 hover:scale-105  px-2 py-2 sm:px-4 sm:py-3'>
                    <a
                      href={link_live}
                      target='_blank'
                      className='text-xs sm:text-sm'
                    >
                      Live
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='max-w-screen-lg flex flex-col pt-4 justify-center w-full text-gray-100'>
          <div className='py-6'>
            <p className='text-5xl font-bold inline border-b-2 border-cyan-300'>
              Technologie
            </p>
            <p className='py-6 text-gray-400'>S čím jsem se zatím setkal.</p>
          </div>
          <div className='flex flex-wrap justify-between'>
            {tech.map(({ id, name, image }) => (
              <div
                key={id}
                className='flex flex-col'
              >
                <img
                  src={image}
                  alt='html-logo'
                  className='w-[80px] h-[80px]'
                />
                <p className='text-gray-400 text-center pt-2'>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
