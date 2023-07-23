const About = () => {
  const links = [
    {
      id: 1,
      name: "C.P. - Bye",
      link: (
        <>
          <iframe
            width='300'
            height='180'
            src='https://www.youtube.com/embed/W0kZhsg0THY'
          ></iframe>
        </>
      ),
    },
    {
      id: 2,
      name: "Bardolino - Bre Sarika",
      link: (
        <>
          <iframe
            width='300'
            height='180'
            src='https://www.youtube.com/embed/jOgUD5Ijw1Q'
          ></iframe>
        </>
      ),
    },
    {
      id: 3,
      name: "Gnomus - Australská",
      link: (
        <>
          <iframe
            width='300'
            height='180'
            src='https://www.youtube.com/embed/NEzXMxuCmaA'
          ></iframe>
        </>
      ),
    },
  ];

  return (
    <>
      <div className='about h-screen w-full bg-gradient-to-t from-black via-black to-cyan-950'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center'>
          <div className='pb-8 text-gray-300'>
            <h2 className='text-gray-100 text-3xl md:text-5xl font-bold inline border-b-2 border-cyan-400'>
              O mně
            </h2>
            <p className='text-sm md:text-xl  mt-5 md:mt-20 tracking-wider'>
              Mé jméno je Tomáš Novák a do roku 2023 jsem se živil jako učitel
              hry na bicí nástroje v <br />
              ZUŠ Vysoké Mýto a aktivní muzikant. Díky projektům{" "}
              <a
                href='https://www.zusmyto.cz/projekty/'
                className='text-cyan-400 hover:underline cursor-pointer'
                target='_blank'
              >
                Erasmus+
              </a>{" "}
              jsem procestoval skoro celou evropu a aktivně se zapojoval do
              organizace zájezdů. Dvakrát jsem doprovodil divadelní soubor do
              indického Delhi.
              <br /> Mimo výuku jsem zvládal také spolupráci s orchestry a
              vlastní hudební projekty:
              <br />
              <a
                className='text-cyan-400 cursor-pointer hover:underline'
                href='https://www.bardolinoband.com/'
                target='_blank'
              >
                Bardolino
              </a>
              ,{" "}
              <a
                className='text-cyan-400 cursor-pointer hover:underline'
                href='https://www.corpulentprovocateur.cz/'
                target='_blank'
              >
                Corpulent Provocateur
              </a>{" "}
              a v poslední radě historický projekt jehož již nejsem součástí{" "}
              <a
                className='text-cyan-400 cursor-pointer hover:underline'
                href='https://www.gnomus.eu/ '
                target='_blank'
              >
                Gnomus
              </a>
              .
            </p>
            <br />
            <p className='text-sm md:text-md mt-10 md:text-lg tracking-wider'>
              V březnu 2023 jsem ale vykročil jiným směrem. Začal jsem se
              aktivně vzdělávat v odvětví Web developmentu se snem pracovat jako
              FE developer s technoligií React. <br />
              Můj první kurz byl Foundations (HTML, CSS, vanilla JS) v rámci{" "}
              <a
                href='https://www.theodinproject.com/'
                target='_blank'
                className='text-cyan-400  hover:underline '
              >
                the Odin Project
              </a>
              , Full stack JS the Odin Project, Ultimate Typescript a React 18
              od{" "}
              <a
                href='https://codewithmosh.com/'
                target='_blank'
                className='text-cyan-400 hover:underline'
              >
                Code with Mosh
              </a>
              . Poslední tři zmíněné stále studuji.
            </p>
          </div>
          <div className='hidden lg:flex flex-row justify-between'>
            {links.map(({ id, name, link }) => (
              <div
                key={id}
                className='flex flex-col'
              >
                <p className='text-gray-100 text-md text-center'>{name}</p>
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
