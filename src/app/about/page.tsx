import Image from "next/image";
export default function Page() {
  return (
    <div className=" lg:grid-cols-5">
      <p className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        Hola mi nombre es Carolina, soy Programadora Full Stack Web, ademas de
        Tècnica en Administaciòn Financiera y Pùblica. Soy muy imperactica y
        siempre sigo intentando, desde que lei por primera vez algo de
        programaciòn instantaneamente me atrajo, ver que siempre algo màs se
        aprende que cambia constantemente màs me intriga.Me encantaria poder
        tener mi primer empleo en èsta industria y demostrar lo aprendido y
        seguir aprendiendo.
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
          href="/Carolina Barragan-cv-.pdf"
          download
          className="h-10 px-6 font-semibold rounded-md bg-black text-white"
          type="submit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curriculum
        </a>
      </div>
    </div>
  );
}
