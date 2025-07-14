
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 sm:p-20 bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-[#18181b] dark:via-[#23272f] dark:to-[#18181b] font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center w-full max-w-3xl gap-10 mt-10">
        <div className="flex flex-col items-center gap-2">
          <img src="/profile.jpeg" alt="Avatar" className="w-20 h-20 rounded-full border-4 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#23272f]" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4">Hi, I'm Kernbyte</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-xl mt-2">
            I'm a passionate programmer.
          </p>
        </div>

        <section className="w-full">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Skills</h2>
          <ul className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="px-3 py-1 rounded flex items-center gap-2" style={{ backgroundColor: '#eab308', color: '#222' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5" /> JavaScript
            </li>
            <li className="px-3 py-1 rounded flex items-center gap-2" style={{ backgroundColor: '#3178c6', color: 'white' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-5 h-5" /> TypeScript
            </li>
            <li className="px-3 py-1 rounded flex items-center gap-2" style={{ backgroundColor: '#61dafb', color: '#222' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-5 h-5" /> React
            </li>
            <li className="px-3 py-1 rounded flex items-center gap-2" style={{ backgroundColor: '#000', color: 'white' }}>
              <img src="/next.svg" alt="Next.js" className="w-5 h-5 dark:invert" /> Next.js
            </li>
            <li className="px-3 py-1 rounded flex items-center gap-2" style={{ backgroundColor: '#3c873a', color: 'white' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-5 h-5" /> Node.js
            </li>
            <li className="px-3 py-1 rounded flex items-center gap-2" style={{ backgroundColor: '#264de4', color: 'white' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-5 h-5" /> CSS/SCSS
            </li>
            <li className="px-3 py-1 rounded flex items-center gap-2" style={{ backgroundColor: '#38bdf8', color: '#222' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-5 h-5" /> Tailwind CSS
            </li>
            <li className="px-3 py-1 rounded flex items-center gap-2" style={{ backgroundColor: '#00599c', color: 'white' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-5 h-5" /> C
            </li>
          </ul>
        </section>

        <section className="w-full">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Projects</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-white dark:bg-[#23272f] rounded-lg shadow p-4 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">Project One</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">A brief description of your project goes here. Highlight what makes it interesting or unique.</p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm mt-2 inline-block">View on GitHub</a>
            </div>
            <div className="bg-white dark:bg-[#23272f] rounded-lg shadow p-4 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">Project Two</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">Another project description. Mention technologies used and your role.</p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm mt-2 inline-block">View on GitHub</a>
            </div>
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Contact</h2>
          <div className="flex gap-4">
            <a href="https://github.com/kernbyte" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 underline">GitHub</a>
          </div>
        </section>
      </main>
     
    </div>
  );
}
