"use client";
import Image from "next/image";
import Confetti from "react-confetti";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-/5 md:px-20">
        <p className={`text-xl text-gray-000 md:text-3xl md:leading-normal`}>
          <div className="text-black text-5xl font-bold flex flex-row gap-x-4 pb-10">
            <Confetti />
            Hey, soy Carolina
          </div>
          <div className="text-grey-200/90">
            +2 años de experiencia.
            <span className="text-pink-200/90"> Desarrolladora web </span>.
            <span className="opacity-75"> De Argentina, Buenos.</span>
            Aires
          </div>
        </p>
        <Image
          src="/perfil.jpg"
          alt="perfil de la autora"
          width={250}
          height={320}
          className="hidden md:block"
        />
        <Image
          src="/avatar.png"
          alt="perfil de la autora"
          width={200}
          height={280}
          className="block md:hidden"
        />
        <a
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          href="/about"
        >
          Clic Aqui{" "}
        </a>
      </div>
    </main>
  );
}
