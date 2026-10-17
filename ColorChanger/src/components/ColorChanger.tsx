import { useEffect, useState } from 'react'

function randomSzin(): string {
  const hue = Math.floor(Math.random() * 360)
  const saturation = 55 + Math.floor(Math.random() * 25)
  const lightness = 45 + Math.floor(Math.random() * 20)
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

export default function ColorChanger() {
  const [szin, setSzin] = useState<string>(randomSzin)

  // Side effect: a kiválasztott szín az oldal hátterére kerül.
  useEffect(() => {
    document.body.style.backgroundColor = szin
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [szin])

  return (
    <section className="container py-5">
      <div className="card shadow-sm mx-auto text-center" style={{ maxWidth: '32rem' }}>
        <div className="card-body p-4">
          <h2 className="h6 text-secondary text-uppercase">Aktuális háttérszín</h2>
          <p className="display-6 fw-bold mb-4">{szin}</p>
          <button
            type="button"
            className="btn btn-dark btn-lg"
            onClick={() => setSzin(randomSzin())}
          >
            Új szín generálása
          </button>
        </div>
      </div>
    </section>
  )
}
