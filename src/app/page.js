'use client'
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 sm:p-20 bg-[#18181b] font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center w-full max-w-3xl gap-10 mt-10">
        <div className="flex flex-col items-center gap-2">
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 via-blue-500 to-purple-600 mb-2 animate-spin-slow hover:animate-none transition-all duration-500">
            <Image
              src="/profile.jpeg"
              alt="Avatar"
              width={80}
              height={80}
              priority
              className="w-20 h-20 rounded-full border-4 border-[#23272f] bg-[#23272f] object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4">Hi, I'm Kernbyte</h1>
          <p className="text-lg text-gray-300 text-center max-w-xl mt-2">
            \\I'm a passionate programmer.
          </p>
        </div>

        <section className="w-full">
          <h1 className="text-3xl text-center font-bold mb-5 text-gray-200 relative inline-block mx-auto after:content-[''] after:block after:w-16 after:h-1 after:mx-auto after:mt-2 after:rounded-full after:bg-gradient-to-r after:from-yellow-400 after:via-blue-500 after:to-purple-600 after:animate-pulse">
            Skills
          </h1>
          <ul className="flex flex-wrap gap-4 text-lg text-gray-300 justify-center bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <li className="px-5 py-2 rounded flex items-center gap-3 bg-yellow-400 text-neutral-900 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" /> JavaScript
            </li>
            <li className="px-5 py-2 rounded flex items-center gap-3 bg-blue-600 text-white transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8" /> TypeScript
            </li>
            <li className="px-5 py-2 rounded flex items-center gap-3 bg-cyan-400 text-neutral-900 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" /> React
            </li>
            <li className="px-5 py-2 rounded flex items-center gap-3 bg-black text-white transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <img src="/next.svg" alt="Next.js" className="w-8 h-8 invert" /> Next.js
            </li>
            <li className="px-5 py-2 rounded flex items-center gap-3 bg-green-700 text-white transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" /> Node.js
            </li>
            <li className="px-5 py-2 rounded flex items-center gap-3 bg-blue-700 text-white transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-8 h-8" /> CSS
            </li>
            <li className="px-5 py-2 rounded flex items-center gap-3 bg-sky-400 text-neutral-900 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-8 h-8" /> Tailwind CSS
            </li>
            <li className="px-5 py-2 rounded flex items-center gap-3 bg-blue-900 text-white transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-8 h-8" /> C
            </li>
          </ul>
        </section>

        <section className="w-full">
          <h2 className="text-xl font-semibold mb-3 text-gray-200">Projects</h2>
          <div className="flex flex-col gap-6">
            <div className="bg-[#23272f] rounded-lg shadow p-6 border border-gray-700 transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <h3 className="font-bold text-lg text-white">Project One</h3>
              <p className="text-gray-300 text-base mt-2">A brief description of your project goes here. Highlight what makes it interesting or unique.</p>
              <a href="#" className="text-blue-400 hover:underline text-base mt-3 inline-block">View on GitHub</a>
            </div>
            <div className="bg-[#23272f] rounded-lg shadow p-6 border border-gray-700 transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <h3 className="font-bold text-lg text-white">Project Two</h3>
              <p className="text-gray-300 text-base mt-2">Another project description. Mention technologies used and your role.</p>
              <a href="#" className="text-blue-400 hover:underline text-base mt-3 inline-block">View on GitHub</a>
            </div>
          </div>
        </section>
          
        

        <section className="w-full">
          <h2 className="text-xl font-semibold mb-3 text-gray-200">Contact</h2>
          <div className="flex gap-4">
            <a href="https://github.com/kernbyte" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 underline">GitHub</a>
          </div>
        </section>
      </main>
    </div>
  );
}
