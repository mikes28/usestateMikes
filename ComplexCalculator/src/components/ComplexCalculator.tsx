import { useState } from 'react'

type Muvelet = '+' | '-' | '*' | '/'

const GOMBSOROK: string[][] = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', '.', 'C', '+'],
]

const GOMB_CIMKEK: Record<string, string> = {
  '*': '×',
  '/': '÷',
  '-': '−',
  C: 'C',
  '.': ',',
}

const MAX_HOSSZ = 14

// A lebegőpontos kerekítési zajok (0.1 * 3) eltávolítása.
function simaEredmeny(ertek: number): number {
  return Number(ertek.toFixed(10))
}

function isMuvelet(ertek: string): ertek is Muvelet {
  return ertek === '+' || ertek === '-' || ertek === '*' || ertek === '/'
}

export default function ComplexCalculator() {
  const [kijelzo, setKijelzo] = useState<string>('0')
  const [elso, setElso] = useState<number | null>(null)
  const [muvelet, setMuvelet] = useState<Muvelet | null>(null)
  // Igaz, ha a következő számjegy egy új számot kezd (művelet után vagy '=' után).
  const [ujOperand, setUjOperand] = useState<boolean>(false)
  const [kifejezes, setKifejezes] = useState<string>('')
  const [hiba, setHiba] = useState<string | null>(null)

  function jel(op: Muvelet): string {
    return GOMB_CIMKEK[op] ?? op
  }

  function szamol(a: number, op: Muvelet, b: number): number | null {
    switch (op) {
      case '+':
        return a + b
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        return a / b
      default:
        return null
    }
  }

  function torles(): void {
    setKijelzo('0')
    setElso(null)
    setMuvelet(null)
    setUjOperand(false)
    setKifejezes('')
    setHiba(null)
  }

  function hibasAllapot(uzenet: string): void {
    setHiba(uzenet)
    setKijelzo('0')
    setElso(null)
    setMuvelet(null)
    setUjOperand(false)
    setKifejezes('')
  }

  function szamGomb(digit: string): void {
    if (elso === null) {
      // Új számítás indult, a korábbi kifejezés már nem érvényes.
      setKifejezes('')
    }

    if (ujOperand) {
      setKijelzo(digit)
      setUjOperand(false)
      return
    }

    setKijelzo((jelen) => {
      if (jelen === '0') return digit
      if (jelen.length >= MAX_HOSSZ) return jelen
      return jelen + digit
    })
  }

  function pontGomb(): void {
    if (elso === null) {
      setKifejezes('')
    }

    if (ujOperand) {
      setKijelzo('0.')
      setUjOperand(false)
      return
    }

    setKijelzo((jelen) => (jelen.includes('.') ? jelen : `${jelen}.`))
  }

  function muveletGomb(op: Muvelet): void {
    const jeleniErtek = Number(kijelzo)
    if (!Number.isFinite(jeleniErtek)) {
      hibasAllapot('Érvénytelen szám!')
      return
    }

    if (elso === null || muvelet === null) {
      // Az első operandus a kijelzőn lévő szám.
      setElso(jeleniErtek)
      setMuvelet(op)
      setKifejezes(`${jeleniErtek} ${jel(op)}`)
    } else if (ujOperand) {
      // Nincs új szám beírva, csak a függőben lévő műveletet cseréljük.
      setMuvelet(op)
      setKifejezes(`${elso} ${jel(op)}`)
    } else {
      // Láncolt számítás: lezárjuk a függőben lévő műveletet.
      if (muvelet === '/' && jeleniErtek === 0) {
        hibasAllapot('Nullával nem lehet osztani!')
        return
      }

      const koztes = szamol(elso, muvelet, jeleniErtek)
      if (koztes === null) {
        hibasAllapot('Ismeretlen művelet!')
        return
      }

      const sima = simaEredmeny(koztes)
      setElso(sima)
      setKijelzo(String(sima))
      setMuvelet(op)
      setKifejezes(`${sima} ${jel(op)}`)
    }

    setUjOperand(true)
  }

  function egyenloseg(): void {
    const jeleniErtek = Number(kijelzo)

    if (elso === null || muvelet === null) {
      setHiba('A számításhoz két szám és egy művelet szükséges!')
      return
    }
    if (!Number.isFinite(jeleniErtek)) {
      hibasAllapot('Érvénytelen szám!')
      return
    }
    if (muvelet === '/' && jeleniErtek === 0) {
      hibasAllapot('Nullával nem lehet osztani!')
      return
    }

    const eredmeny = szamol(elso, muvelet, jeleniErtek)
    if (eredmeny === null) {
      hibasAllapot('Ismeretlen művelet!')
      return
    }

    const sima = simaEredmeny(eredmeny)
    setKifejezes(`${elso} ${jel(muvelet)} ${jeleniErtek} =`)
    setKijelzo(String(sima))
    setElso(null)
    setMuvelet(null)
    setUjOperand(true)
  }

  function gombMegnyomva(ertek: string): void {
    if (ertek === 'C') {
      torles()
      return
    }

    if (hiba) {
      // Hibás állapotból minden számítás elölről indul.
      torles()
    }

    if (ertek === '=') {
      egyenloseg()
    } else if (ertek === '.') {
      pontGomb()
    } else if (isMuvelet(ertek)) {
      muveletGomb(ertek)
    } else {
      szamGomb(ertek)
    }
  }

  return (
    <section className="container py-5 d-flex justify-content-center">
      <div className="card shadow-sm w-100" style={{ maxWidth: '24rem' }}>
        <div className="card-body">
          <div
            className="bg-dark text-white rounded p-3 text-end font-monospace"
            style={{ minHeight: '7rem' }}
          >
            <div className="text-white-50 small" style={{ minHeight: '1.4rem' }}>
              {kifejezes}
            </div>
            <div className="fs-2 fw-bold text-break" aria-live="polite">
              {kijelzo}
            </div>
          </div>

          {hiba ? <div className="alert alert-danger py-2 mt-3 mb-0">{hiba}</div> : null}

          <div className="row g-2 mt-1">
            {GOMBSOROK.map((sor) =>
              sor.map((ertek) => (
                <div className="col-3" key={ertek}>
                  <button
                    type="button"
                    className={`btn w-100 py-3 fs-4 ${gombOsztaly(ertek)}`}
                    onClick={() => gombMegnyomva(ertek)}
                  >
                    {GOMB_CIMKEK[ertek] ?? ertek}
                  </button>
                </div>
              )),
            )}
            <div className="col-12">
              <button
                type="button"
                className="btn btn-primary w-100 py-3 fs-4"
                onClick={() => gombMegnyomva('=')}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function gombOsztaly(ertek: string): string {
  if (ertek === 'C') return 'btn-danger'
  if (ertek === '.') return 'btn-light'
  if (/[0-9]/.test(ertek)) return 'btn-light'
  return 'btn-outline-secondary'
}
