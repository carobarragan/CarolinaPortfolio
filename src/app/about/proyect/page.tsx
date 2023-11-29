import Link from "next/link";
import Image from "next/image";
import Style from "../../../../styles/proyect.module.css";

export default function Proyect() {
  return (
    <div>
      <h1 className={Style.titulo}>Proyectos</h1>

      <h2>Formulario</h2>
      <p className={Style.informacion}>
        Formulario de contacto con conexión a base de datos + vercel ship. en
        este formulario utiliza Sonner una biblioteca de React para mostrar la
        notificacion del mensaje junto a un confetti{" "}
      </p>
      <img className={Style.imagen} src="/formulario.png"></img>
      <h2>Juego Tic-Tac</h2>
      <p className={Style.informacion}>
        {" "}
        Card de juego, realizado con React + Css; quien no lo ha jugado :)
      </p>
      <img className={Style.imagen} src="/juego.png"></img>
      <img className={Style.imagen} src="/juego1.png "></img>
    </div>
  );
}
