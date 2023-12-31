import Link from "next/link";
import Image from "next/image";
import Style from "../../../../styles/proyect.module.css";

export default function Proyect() {
  return (
    <div>
      <h1 className="text-black text-4xl font-bold flex flex-row gap-x-4 pb-10">
        Proyectos...
      </h1>
      <h2 className="text-2xl font-semibold text-rose-300 mb-2">Formulario</h2>
      <p className="text-lg mb-4 text-pretty">
        Formulario de contacto con conexión a base de datos + vercel ship. en
        este formulario utiliza Sonner una biblioteca de React para mostrar la
        notificacion del mensaje junto a un confetti{" "}
      </p>
      <img className={Style.imagen} src="/formulario.png"></img>{" "}
      <a
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        href="https://formulario-wheat-one.vercel.app/"
      >
        Clic Aqui
      </a>
      <br />
      <h2 className="text-2xl font-semibold text-rose-300 mb-2">
        Juego Tic-Tac
      </h2>
      <p className="text-lg mb-4 text-pretty">
        {" "}
        Card de juego, realizado con React + Css; quien no lo ha jugado :)
      </p>
      <img className={Style.imagen} src="/juego.png"></img>
      <img className={Style.imagen} src="/juego1.png "></img>{" "}
      <a
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        href="https://precious-cendol-88d048.netlify.app/"
      >
        Clic Aqui
      </a>
      <br />
      <h2 className="text-2xl font-semibold text-rose-300 mb-2">
        {" "}
        Pagina de Servicio de Moza
      </h2>
      <p className="text-lg mb-4 text-pretty">
        {" "}
        Pagina de servicio realizada con Next.js, que es un framework de React +
        css
      </p>
      <img className={Style.imagen} src="/SM.jpg"></img>{" "}
      <a
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        href="https://moza-servicio.vercel.app/"
      >
        Clic Aqui
      </a>
      <br />
      <h2 className="text-2xl font-semibold text-rose-300 mb-2">
        Proyecto Grupal
      </h2>
      <p className="text-lg mb-4 text-pretty">
        Es una aplicación de viaje, donde cuenta con tres perfiles;
        Administrador, este tiene el control total de la aplicación a través de
        un panel. Anfitrión, pone a disposición el servicio; Huesped,dispone de
        la adquisición del servicio.
      </p>
      <img className={Style.imagen} src="/pg.jpeg"></img>
      <a
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        href="https://wetravel-app.vercel.app/"
      >
        Clic Aqui
      </a>
      <br />
    </div>
  );
}
