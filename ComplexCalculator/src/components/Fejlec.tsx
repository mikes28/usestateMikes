interface FejlecProps {
  cim: string
  alcim?: string
  className?: string
}

export default function Fejlec({ cim, alcim, className = '' }: FejlecProps) {
  return (
    <header className={`bg-dark text-white py-4 ${className}`}>
      <div className="container">
        <h1 className="h2 mb-0">{cim}</h1>
        {alcim ? <p className="text-white-50 mb-0 mt-1">{alcim}</p> : null}
      </div>
    </header>
  )
}
