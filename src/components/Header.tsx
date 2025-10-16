export function Header() {
  return (
    <div className="mb-16 space-y-6">
      <div className="inline-flex items-center justify-center animate-fade-in-down">
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <span className="px-4 text-xs font-semibold tracking-widest text-white/40 uppercase">Welcome</span>
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <h1 className="text-7xl md:text-8xl font-light text-white tracking-tighter animate-fade-in-up animation-delay-100">
        frasier<span className="font-light text-red-700/60">.dev</span>
      </h1>

      <div className="space-y-2 pt-4 animate-fade-in-up animation-delay-200">
        <p className="text-lg text-white/70 font-light tracking-wide">
          Full-stack developer & digital architect
        </p>
        <p className="text-sm text-red-600/60 tracking-widest uppercase font-light">
          Crafting elegant solutions
        </p>
      </div>
    </div>
  )
}
