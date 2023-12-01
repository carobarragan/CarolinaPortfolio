import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-/5 md:px-20">
        <p className={`text-xl text-gray-000 md:text-3xl md:leading-normal`}>
          <div>
            Hola, soy programadora full stack, apasionada por lo que hago
          </div>
          <a
            className="absolute bottom-2  py-4 hover:py-8 opacity:0.05 tw-shadow-color:violet "
            href="/about"
          >
            Conoceme{" "}
          </a>
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
      </div>
    </main>
  );
}
