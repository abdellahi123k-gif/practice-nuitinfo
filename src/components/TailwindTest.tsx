import { useState } from 'react'

// Temporary component to verify that Tailwind CSS is working.
// Safe to delete once the real project starts.
function TailwindTest() {
  const [clicks, setClicks] = useState(0)

  return (
    <div className="mx-auto my-8 w-full max-w-xl rounded-xl bg-indigo-600 p-6 text-white shadow-lg">
      <p className="text-2xl font-bold">✅ Tailwind CSS fonctionne !</p>
      <p dir="rtl" className="mt-2 text-lg text-indigo-100">
        Tailwind يعمل بنجاح — Nuit de l'Info 2026
      </p>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-white/20 p-3 text-sm">grid</div>
        <div className="rounded-lg bg-white/20 p-3 text-sm">gap</div>
        <div className="rounded-lg bg-white/20 p-3 text-sm">rounded</div>
      </div>

      <button
        type="button"
        onClick={() => setClicks((c) => c + 1)}
        className="mt-4 rounded-lg bg-white px-4 py-2 font-semibold text-indigo-700 transition hover:bg-indigo-100"
      >
        Clics : {clicks}
      </button>
    </div>
  )
}

export default TailwindTest
