import Image from "next/image";
export default function Page() {
  return (
    <div className=" lg:grid-cols-5">
      <p className="mt 6 grid grid cols 1 gap 6 md:grip cols 4 lg:grid cols 0">
        Hola mi nombre es carolina, soy programadora full stack web, ademas de
        tecnica en administacion financiera y publica. soy muy inperactica y
        siempre sigo intentando, desde que lei por primera vez algo de
        programacion instantaneamente me atrajo, ver que siempre algo mas se
        aprende que cambia constantemente mas me intriga.Me encantaria poder
        tener mi primer empleo en esta industria y demostrar lo aprendido y
        seguir aprendiendo
      </p>
      <Image
        src="/perfil.jpg"
        alt="perfil de la autora"
        width={250}
        height={320}
        className="hidden md:block"
      ></Image>
      <div className="bg-violet-400 hover:bg-violet-700 text-black-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <a
          href="https://docs.google.com/document/d/1Aan5a05YzYeUkeeRzSY2xVZL2gXKX1n2XbP8hIj-rRQ/edit"
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Curriculum
        </a>
      </div>
    </div>
  );
}
