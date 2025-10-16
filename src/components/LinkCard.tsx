import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

interface LinkCardProps {
  href: string
  title: string
  description: string
  icon: LucideIcon
  delay: number
}

export function LinkCard({ href, title, description, icon: Icon, delay }: LinkCardProps) {
  const delayClass = `animation-delay-${delay}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative h-64 overflow-hidden animate-scale-in ${delayClass}`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-600/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg backdrop-blur-xl transition-all duration-700" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-transparent to-red-500/0 group-hover:from-red-500/5 group-hover:to-red-500/5 transition-all duration-700 rounded-lg" />
      
      <div className="relative h-full p-8 flex flex-col justify-between group-hover:translate-y-0 transition-all duration-500">
        <div className="flex justify-between items-start">
          <Icon className="w-12 h-12 text-red-600/60 group-hover:text-red-500 transition-all duration-500 group-hover:scale-110" />
          <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-red-500/70 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
        </div>
        
        <div className="text-left space-y-2">
          <h2 className="text-xl font-light text-white tracking-wide">{title}</h2>
          <p className="text-sm text-white/50 font-light">{description}</p>
        </div>
      </div>

      <div className="absolute inset-0 rounded-lg border border-white/0 group-hover:border-red-600/20 transition-all duration-700" />
    </a>
  )
}
