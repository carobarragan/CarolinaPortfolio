import NavLinks from "./nav-links/navlinks";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <NavLinks />
      </div>

      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-violet-100">
        {" "}
        Mi camino...
        {children}
      </div>
    </div>
  );
}
