import Image from "next/image";

export default function Home() {
  return (
    // HERO SECTION
    <section
      aria-label="Hero Section"
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Let's Explore</h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">Would you like to discover East Africa?</p>
        <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded shadow-lg hover:bg-yellow-500 transition text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}
