interface LablecProps {
  alkalmazas: string
  feladat: string
  className?: string
}

export default function Lablec({ alkalmazas, feladat, className = '' }: LablecProps) {
  return (
    <footer className={`bg-dark text-white-50 mt-auto ${className}`}>
      <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-1">
        <span className="text-white">
          <strong>{alkalmazas}</strong> – {feladat}
        </span>
        <span className="small">Mikes Krisztián</span>
      </div>
    </footer>
  )
}
