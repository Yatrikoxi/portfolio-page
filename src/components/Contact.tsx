import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/tom%C3%A1%C5%A1-nov%C3%A1k-282a76279/",
      target: "_blank",
    },
    {
      id: 2,
      name: "Github",
      icon: <FaGithub size={30} />,
      href: "https://github.com/Yatrikoxi",
      target: "_blank",
    },
    {
      id: 3,
      name: "tomas_novak@centrum.cz",
      icon: <FiMail size={30} />,
      href: "mailto:tomas_novak@centrum.cz",
    },
  ];
  return (
    <>
      <div
        id='contact'
        className='contact w-full bg-gradient-to-b from-cyan-950 via-black to-black'
      >
        <div className='max-w-screen-lg p-4  mx-auto h-full flex justify-center lg:justify-start items-center'>
          <div>
            <p className='text-gray-100 text-3xl md:text-5xl font-bold inline border-b-2 border-cyan-300'>
              Kontakt
            </p>
            <div className='mt-10 flex flex-col max-w-5xl '>
              <p className='pb-10 text-gray-400'>
                V případě spolupráce či dotazu mně můžete kontaktovat
              </p>
              {links.map(({ id, href, name, icon, target }) => (
                <a
                  key={id}
                  href={href}
                  target={target}
                >
                  <div
                    key={id}
                    className='flex text-gray-400 justify-start m-0 items-center p-3'
                  >
                    {icon}
                    <p className='pl-4'>{name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='fixed bot-0 left-0 right-0 w-full h-20 bg-black'>
        <p className='text-gray-700'>T.N. 2023</p>
      </div>
    </>
  );
};

export default Contact;
