import Link from "next/link";
import Image from "next/image";
import Style from "../../../../styles/proyect.module.css";

export default function Proyect() {
  return (
    <div className={Style.inicio}>
      <h1 className={Style.titulo}>Proyectos</h1>

      <h2 className={Style.titulo2}>Formulario</h2>
      <p className={Style.informacion}>
        Formulario de contacto con conexión a base de datos + vercel ship. en
        este formulario utiliza Sonner una biblioteca de React para mostrar la
        notificacion del mensaje junto a un confetti{" "}
      </p>
      <img className={Style.imagen} src="/formulario.png"></img>
      <h2 className={Style.titulo2}>Juego Tic-Tac</h2>
      <p className={Style.informacion}>
        {" "}
        Card de juego, realizado con React + Css; quien no lo ha jugado :)
      </p>
      <img className={Style.imagen} src="/juego.png"></img>
      <img className={Style.imagen} src="/juego1.png "></img>
      <h2 className={Style.titulo2}> Pagina de Servicio de Moza</h2>
      <p className={Style.informacion}>
        {" "}
        Pagina de servicio realizada con Next.js, que es un framework de React +
        css
      </p>
      <img className={Style.imagen} src="/SM.jpg"></img>
      <h2 className={Style.titulo2}>Proyecto Grupal</h2>
      <p className={Style.informacion}>
        Es una aplicación de viaje, donde cuenta con tres perfiles;
        Administrador, este tiene el control total de la aplicación a través de
        un panel. Anfitrión, pone a disposición el servicio; Huesped,dispone de
        la adquisición del servicio.
      </p>
      <img className={Style.imagen} src="/pg.jpeg"></img>
    </div>
  );
}
