import Link from "next/link";

export default function Proyect() {
  return (
    <div>
      <h1 className="flex h-[48px] grow items-cenetr justify-center gap-2 rounded-md bg-gray-50 p-3 text-sn font-medium hover:bg-sky-100 hover:text-violet-600 md:flex-none md:justify-start md:p-2 md:px-3">
        Proyectos
      </h1>
      <div className="card w-120 bg-base-100 shadow-xl image-full">
        <figure>
          <video src="/video.mp4" />
        </figure>

        <div className="card-body">
          <h2 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
            Formulario!{" "}
            <div className="flex-auto text-lg font-medium text-slate-500">
              Formulario de contacto con conexión a base de datos + vercel ship.
              en este formulario utiliza Sonner una biblioteca de React para
              mostrar la notificacion del mensaje junto a un confetti
            </div>
          </h2>
          <div className="flex justify-end flex-1 px-2 flex items-stretch bg-violet-300 ">
            <a
              className="menu dropdown-content z-[1] p-2 shadow bg-base-300 rounded-box w-52 mt-4 "
              href="https://formulario-wheat-one.vercel.app/"
            >
              Haz click!
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="card card-compact w-120 bg-base-100 shadow-xl">
        <figure>
          <img src="/juego.png" alt="juego" />
        </figure>
        <div className="card-body">
          <h2 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
            Juego Tic-Tac
          </h2>
          <p className="flex-auto text-lg font-medium text-slate-500">
            {" "}
            Card de juego, realizado con React + Css; quien no lo ha jugado :)
          </p>
          <div className="card-actions justify-end">
            <div className="flex justify-end flex-1 px-2 flex items-stretch bg-violet-300">
              <a
                className="menu dropdown-content z-[1] p-2 shadow bg-base-300 rounded-box w-52 mt-4 "
                href="https://precious-cendol-88d048.netlify.app/"
              >
                Haz click!
              </a>
            </div>
            {/* <textarea
              className="textarea textarea-success"
              placeholder="Bio"
            ></textarea> */}
          </div>
        </div>
      </div>
      <br />
      <div className="card card-compact w-120 bg-base-100 shadow-xl">
        <figure>
          <img src="/SM.jpg" alt="Moza" />
        </figure>
        <div className="card-body">
          <h2 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
            Pagina de Servicio de Moza
          </h2>
          <p className="flex-auto text-lg font-medium text-slate-500">
            {" "}
            Pagina de servicio realizada con Next.js, que es un framework de
            React + css
          </p>
          <div className="card-actions justify-end">
            <div className="flex justify-end flex-1 px-2 flex items-stretch bg-violet-300">
              <a
                className="menu dropdown-content z-[1] p-2 shadow bg-base-300 rounded-box w-52 mt-4 "
                href="https://moza-servicio.vercel.app/"
              >
                Haz click!
              </a>
            </div>
            {/* <textarea
              className="textarea textarea-success"
              placeholder="Bio"
            ></textarea> */}
          </div>
        </div>
      </div>
      <br />
      <div className="card card-compact w-120 bg-base-100 shadow-xl">
        <figure>
          <img src="/pg.jpeg" alt="Servicio" />
        </figure>
        <div className="card-body">
          <h2 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
            Proyecto Grupal
          </h2>
          <p className="flex-auto text-lg font-medium text-slate-500">
            {" "}
            Es una aplicación de viaje, donde cuenta con tres perfiles;
            Administrador, este tiene el control total de la aplicación a través
            de un panel. Anfitrión, pone a disposición el servicio;
            Huesped,dispone de la adquisición del servicio.
          </p>
          <div className="card-actions justify-end">
            <div className="flex justify-end flex-1 px-2 flex items-stretch bg-violet-300">
              <a
                className="menu dropdown-content z-[1] p-2 shadow bg-base-300 rounded-box w-52 mt-4 "
                href="https://wetravel-app.vercel.app/"
              >
                Haz click!
              </a>
            </div>
            {/* <textarea
              className="textarea textarea-success"
              placeholder="Bio"
            ></textarea> */}
          </div>
        </div>
      </div>
    </div>
  );
}
